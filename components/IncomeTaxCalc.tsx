'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator } from 'lucide-react'

const fmt = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

// ── Tax computation ──────────────────────────────────────────────────────────

function computeOld(income: number, age: string, c80C: number, c80D: number, hl: number) {
  const stdDed  = 50_000
  const max80C  = Math.min(c80C, 1_50_000)
  const max80D  = (age === 'senior' || age === 'supersenior') ? Math.min(c80D, 50_000) : Math.min(c80D, 25_000)
  const maxHL   = Math.min(hl, 2_00_000)
  const taxable = Math.max(0, income - stdDed - max80C - max80D - maxHL)

  let tax = 0
  if (age === 'supersenior') {
    if (taxable > 5_00_000) tax += Math.min(taxable - 5_00_000, 5_00_000) * 0.20
    if (taxable > 10_00_000) tax += (taxable - 10_00_000) * 0.30
  } else {
    const basic = age === 'senior' ? 3_00_000 : 2_50_000
    if (taxable > basic)          tax += Math.min(taxable - basic, 5_00_000 - basic) * 0.05
    if (taxable > 5_00_000)       tax += Math.min(taxable - 5_00_000, 5_00_000) * 0.20
    if (taxable > 10_00_000)      tax += (taxable - 10_00_000) * 0.30
  }

  // Rebate 87A (old regime: taxable ≤ 5L)
  if (taxable <= 5_00_000) tax = Math.max(0, tax - 12_500)

  // Surcharge
  let sc = 0
  if      (income > 5_00_00_000)  sc = tax * 0.37
  else if (income > 2_00_00_000)  sc = tax * 0.25
  else if (income > 1_00_00_000)  sc = tax * 0.15
  else if (income >   50_00_000)  sc = tax * 0.10

  const cess  = (tax + sc) * 0.04
  return { taxable, total: Math.round(tax + sc + cess) }
}

function computeNew(income: number) {
  const stdDed  = 75_000
  const taxable = Math.max(0, income - stdDed)

  let tax = 0
  if (taxable > 3_00_000)  tax += Math.min(taxable - 3_00_000,  4_00_000) * 0.05
  if (taxable > 7_00_000)  tax += Math.min(taxable - 7_00_000,  3_00_000) * 0.10
  if (taxable > 10_00_000) tax += Math.min(taxable - 10_00_000, 2_00_000) * 0.15
  if (taxable > 12_00_000) tax += Math.min(taxable - 12_00_000, 3_00_000) * 0.20
  if (taxable > 15_00_000) tax += (taxable - 15_00_000) * 0.30

  // Rebate 87A (new regime: taxable ≤ 7L)
  if (taxable <= 7_00_000) tax = 0

  // Surcharge (max 25% in new regime)
  let sc = 0
  if      (income > 2_00_00_000)  sc = tax * 0.25
  else if (income > 1_00_00_000)  sc = tax * 0.15
  else if (income >   50_00_000)  sc = tax * 0.10

  const cess = (tax + sc) * 0.04
  return { taxable, total: Math.round(tax + sc + cess) }
}

// ── Donut chart ──────────────────────────────────────────────────────────────

function DonutChart({ taxPct, color, label }: { taxPct: number; color: string; label: string }) {
  const r  = 54
  const c  = 2 * Math.PI * r
  const f  = Math.min((taxPct / 100) * c, c)
  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="144" height="144" viewBox="0 0 144 144">
        <circle cx="72" cy="72" r={r} fill="none" stroke="#e5e7eb" strokeWidth="18" />
        {f > 0 && (
          <circle
            cx="72" cy="72" r={r}
            fill="none" stroke={color} strokeWidth="18"
            strokeDasharray={`${f} ${c}`}
            transform="rotate(-90 72 72)"
          />
        )}
        <text x="72" y="67" textAnchor="middle" fontSize="19" fontWeight="700" fill="#1E3A8A" fontFamily="Poppins,sans-serif">
          {taxPct.toFixed(1)}%
        </text>
        <text x="72" y="84" textAnchor="middle" fontSize="10" fill="#9ca3af" fontFamily="Inter,sans-serif">
          eff. rate
        </text>
      </svg>
      <span className="font-inter text-xs text-gray-500">{label}</span>
    </div>
  )
}

// ── Component ────────────────────────────────────────────────────────────────

interface Result {
  old:  { taxable: number; total: number }
  newR: { taxable: number; total: number }
}

export default function IncomeTaxCalc() {
  const [income,   setIncome]   = useState('')
  const [age,      setAge]      = useState('below60')
  const [ded80C,   setDed80C]   = useState('')
  const [ded80D,   setDed80D]   = useState('')
  const [homeLoan, setHomeLoan] = useState('')
  const [result,   setResult]   = useState<Result | null>(null)

  const calculate = () => {
    const inc = parseFloat(income)  || 0
    const c80 = parseFloat(ded80C)  || 0
    const c80D = parseFloat(ded80D) || 0
    const hl   = parseFloat(homeLoan) || 0
    setResult({ old: computeOld(inc, age, c80, c80D, hl), newR: computeNew(inc) })
  }

  const inc     = parseFloat(income) || 0
  const oldRate = result && inc > 0 ? (result.old.total  / inc) * 100 : 0
  const newRate = result && inc > 0 ? (result.newR.total / inc) * 100 : 0
  const saving  = result ? Math.abs(result.old.total - result.newR.total) : 0
  const better  = result ? (result.newR.total <= result.old.total ? 'New Regime' : 'Old Regime') : null

  const cls = 'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/10 outline-none font-inter text-sm text-gray-800 bg-white transition-all'

  return (
    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

      {/* ── Inputs ── */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7">
        <h3 className="font-poppins font-bold text-[#1E3A8A] text-xl mb-6">Your Income Details</h3>
        <div className="space-y-4">

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">Annual Income (₹) *</label>
            <input type="number" value={income} onChange={e => setIncome(e.target.value)}
              placeholder="e.g. 1200000" className={cls} />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">Age Group</label>
            <select value={age} onChange={e => setAge(e.target.value)} className={cls}>
              <option value="below60">Below 60 years</option>
              <option value="senior">Senior Citizen (60–80)</option>
              <option value="supersenior">Super Senior Citizen (80+)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">
              80C Deductions (₹) <span className="text-gray-400 font-normal">— Max ₹1,50,000</span>
            </label>
            <input type="number" value={ded80C} onChange={e => setDed80C(e.target.value)}
              placeholder="PPF, ELSS, LIC, etc." className={cls} />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">
              Health Insurance – 80D (₹) <span className="text-gray-400 font-normal">— Max ₹25,000</span>
            </label>
            <input type="number" value={ded80D} onChange={e => setDed80D(e.target.value)}
              placeholder="Medical insurance premium" className={cls} />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">
              Home Loan Interest (₹) <span className="text-gray-400 font-normal">— Max ₹2,00,000</span>
            </label>
            <input type="number" value={homeLoan} onChange={e => setHomeLoan(e.target.value)}
              placeholder="Section 24(b) deduction" className={cls} />
          </div>

          <button onClick={calculate} disabled={!income}
            className="w-full bg-[#1E3A8A] hover:bg-[#163070] disabled:opacity-50 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-semibold font-poppins text-sm transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
          >
            <Calculator size={18} /> Calculate Tax
          </button>
          <p className="text-center text-xs text-gray-400 font-inter">FY 2024-25 · Includes 4% cess &amp; surcharge</p>
        </div>
      </div>

      {/* ── Results ── */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7">
        {!result ? (
          <div className="h-full flex flex-col items-center justify-center text-center py-16">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <Calculator size={32} className="text-[#1E3A8A]" />
            </div>
            <p className="font-poppins font-semibold text-gray-400 text-lg">Enter your details</p>
            <p className="font-inter text-gray-300 text-sm mt-1">Results will appear here</p>
          </div>
        ) : (
          <motion.div key="result" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h3 className="font-poppins font-bold text-[#1E3A8A] text-xl mb-4">Tax Comparison</h3>

            {/* Best regime badge */}
            {better && saving > 0 && (
              <div className="mb-5 px-4 py-2.5 rounded-xl text-sm font-semibold font-inter flex items-center gap-2 bg-emerald-50 text-emerald-700 border border-emerald-100">
                ✓ {better} saves you {fmt(saving)}
              </div>
            )}
            {better && saving === 0 && (
              <div className="mb-5 px-4 py-2.5 rounded-xl text-sm font-semibold font-inter bg-blue-50 text-[#1E3A8A] border border-blue-100">
                Both regimes result in the same tax
              </div>
            )}

            {/* Donut charts */}
            <div className="flex justify-around mb-6">
              <DonutChart taxPct={Math.min(oldRate, 100)} color="#1E3A8A" label="Old Regime" />
              <DonutChart taxPct={Math.min(newRate, 100)} color="#D4AF37" label="New Regime" />
            </div>

            {/* Comparison table */}
            <div className="rounded-2xl overflow-hidden border border-gray-100">
              <table className="w-full text-sm font-inter">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left px-4 py-3 text-gray-400 font-semibold text-xs"></th>
                    <th className="text-right px-4 py-3 text-[#1E3A8A] font-bold text-xs">Old Regime</th>
                    <th className="text-right px-4 py-3 text-[#D4AF37] font-bold text-xs">New Regime</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {[
                    { label: 'Taxable Income',   old: fmt(result.old.taxable),  newR: fmt(result.newR.taxable),  bold: false },
                    { label: 'Total Tax Payable', old: fmt(result.old.total),    newR: fmt(result.newR.total),    bold: true  },
                    { label: 'Effective Rate',    old: `${oldRate.toFixed(2)}%`, newR: `${newRate.toFixed(2)}%`,  bold: false },
                    { label: 'In-Hand Income',    old: fmt(inc - result.old.total), newR: fmt(inc - result.newR.total), bold: false },
                  ].map((row, i) => (
                    <tr key={row.label} className={i % 2 === 1 ? 'bg-gray-50/60' : ''}>
                      <td className="px-4 py-3 text-gray-500">{row.label}</td>
                      <td className={`text-right px-4 py-3 ${row.bold ? 'font-bold text-[#1E3A8A]' : 'text-gray-700'}`}>{row.old}</td>
                      <td className={`text-right px-4 py-3 ${row.bold ? 'font-bold text-[#D4AF37]' : 'text-gray-700'}`}>{row.newR}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
