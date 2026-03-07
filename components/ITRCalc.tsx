'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, TrendingUp, TrendingDown } from 'lucide-react'

const fmt = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

// ── Tax engine ───────────────────────────────────────────────────────────────

function computeNewTax(taxable: number): number {
  let tax = 0
  if (taxable > 3_00_000)  tax += Math.min(taxable - 3_00_000,  4_00_000) * 0.05
  if (taxable > 7_00_000)  tax += Math.min(taxable - 7_00_000,  3_00_000) * 0.10
  if (taxable > 10_00_000) tax += Math.min(taxable - 10_00_000, 2_00_000) * 0.15
  if (taxable > 12_00_000) tax += Math.min(taxable - 12_00_000, 3_00_000) * 0.20
  if (taxable > 15_00_000) tax += (taxable - 15_00_000) * 0.30
  if (taxable <= 7_00_000) tax = 0   // Rebate 87A
  return Math.round(tax * 1.04)      // + 4% cess
}

function computeOldTax(taxable: number): number {
  let tax = 0
  if (taxable > 2_50_000)  tax += Math.min(taxable - 2_50_000, 2_50_000) * 0.05
  if (taxable > 5_00_000)  tax += Math.min(taxable - 5_00_000, 5_00_000) * 0.20
  if (taxable > 10_00_000) tax += (taxable - 10_00_000) * 0.30
  if (taxable <= 5_00_000) tax = Math.max(0, tax - 12_500)  // Rebate 87A
  return Math.round(tax * 1.04)
}

function computeBoth(salary: number, other: number, c80C: number, c80D: number, hra: number) {
  const gross = salary + other

  // New regime
  const newTaxable = Math.max(0, gross - 75_000)
  const newTax     = computeNewTax(newTaxable)

  // Old regime
  const oldTaxable = Math.max(0, gross - 50_000 - Math.min(c80C, 1_50_000) - Math.min(c80D, 25_000) - Math.min(hra, 1_00_000))
  const oldTax     = computeOldTax(oldTaxable)

  return { newTaxable, newTax, oldTaxable, oldTax }
}

// ── Refund card ──────────────────────────────────────────────────────────────

function RefundCard({
  regime, refund, tax, taxable, tdsAmt,
}: {
  regime: string; refund: number; tax: number; taxable: number; tdsAmt: number
}) {
  const isRefund = refund >= 0
  const barPct   = tdsAmt > 0 && tax > 0
    ? Math.min(100, (Math.min(tdsAmt, tax) / Math.max(tdsAmt, tax)) * 100)
    : tdsAmt > 0 ? 100 : 0

  return (
    <div className={`p-5 rounded-2xl border ${isRefund ? 'bg-emerald-50 border-emerald-100' : 'bg-red-50 border-red-100'}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="font-poppins font-bold text-gray-700 text-sm">{regime}</span>
        {isRefund
          ? <TrendingUp  size={18} className="text-emerald-500" />
          : <TrendingDown size={18} className="text-red-500" />}
      </div>

      <p className={`font-poppins font-bold text-2xl ${isRefund ? 'text-emerald-600' : 'text-red-500'}`}>
        {isRefund ? '+' : '–'}{fmt(Math.abs(refund))}
      </p>
      <p className={`font-inter text-xs mt-0.5 mb-4 ${isRefund ? 'text-emerald-500' : 'text-red-400'}`}>
        {isRefund ? 'Expected refund' : 'Additional tax payable'}
      </p>

      {/* Progress bar: TDS paid vs tax liability */}
      <div className="mb-3">
        <div className="flex justify-between text-xs font-inter text-gray-400 mb-1">
          <span>TDS Paid: {fmt(tdsAmt)}</span>
          <span>Tax Due: {fmt(tax)}</span>
        </div>
        <div className="h-2.5 bg-white/70 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${barPct}%` }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`h-full rounded-full ${isRefund ? 'bg-emerald-500' : 'bg-red-400'}`}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs font-inter">
        <div className="bg-white/60 rounded-lg p-2">
          <p className="text-gray-400">Taxable Income</p>
          <p className="font-semibold text-gray-700">{fmt(taxable)}</p>
        </div>
        <div className="bg-white/60 rounded-lg p-2">
          <p className="text-gray-400">Tax Liability</p>
          <p className="font-semibold text-gray-700">{fmt(tax)}</p>
        </div>
      </div>
    </div>
  )
}

// ── Component ────────────────────────────────────────────────────────────────

interface Result {
  newTaxable: number; newTax: number
  oldTaxable: number; oldTax: number
  tdsAmt:     number
  refundNew:  number; refundOld: number
}

export default function ITRCalc() {
  const [salary, setSalary] = useState('')
  const [tds,    setTds]    = useState('')
  const [c80C,   setC80C]   = useState('')
  const [c80D,   setC80D]   = useState('')
  const [hra,    setHra]    = useState('')
  const [other,  setOther]  = useState('')
  const [result, setResult] = useState<Result | null>(null)

  const calculate = () => {
    const sal   = parseFloat(salary) || 0
    const tdsAmt = parseFloat(tds)   || 0
    const { newTaxable, newTax, oldTaxable, oldTax } = computeBoth(
      sal, parseFloat(other) || 0,
      parseFloat(c80C) || 0, parseFloat(c80D) || 0, parseFloat(hra) || 0,
    )
    setResult({
      newTaxable, newTax, oldTaxable, oldTax,
      tdsAmt, refundNew: tdsAmt - newTax, refundOld: tdsAmt - oldTax,
    })
  }

  const bestRegime = result
    ? (result.refundNew >= result.refundOld ? 'New Regime' : 'Old Regime')
    : null

  const cls = 'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/10 outline-none font-inter text-sm text-gray-800 bg-white transition-all'

  return (
    <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">

      {/* ── Inputs ── */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7">
        <h3 className="font-poppins font-bold text-[#1E3A8A] text-xl mb-6">Income &amp; TDS Details</h3>
        <div className="space-y-4">

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">Annual Salary (₹) *</label>
            <input type="number" value={salary} onChange={e => setSalary(e.target.value)}
              placeholder="e.g. 1200000" className={cls} />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">TDS Deducted (₹) * <span className="text-gray-400 font-normal">— from Form 16</span></label>
            <input type="number" value={tds} onChange={e => setTds(e.target.value)}
              placeholder="e.g. 95000" className={cls} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">80C Deductions (₹)</label>
              <input type="number" value={c80C} onChange={e => setC80C(e.target.value)}
                placeholder="max 1,50,000" className={cls} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">80D – Health Ins. (₹)</label>
              <input type="number" value={c80D} onChange={e => setC80D(e.target.value)}
                placeholder="max 25,000" className={cls} />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">HRA Exemption (₹)</label>
              <input type="number" value={hra} onChange={e => setHra(e.target.value)}
                placeholder="e.g. 120000" className={cls} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">Other Income (₹)</label>
              <input type="number" value={other} onChange={e => setOther(e.target.value)}
                placeholder="interest, rent…" className={cls} />
            </div>
          </div>

          <button onClick={calculate} disabled={!salary || !tds}
            className="w-full bg-[#1E3A8A] hover:bg-[#163070] disabled:opacity-50 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-semibold font-poppins text-sm transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
          >
            <FileText size={18} /> Estimate Refund
          </button>
          <p className="text-center text-xs text-gray-400 font-inter">FY 2024-25 · Estimated based on declared figures</p>
        </div>
      </div>

      {/* ── Results ── */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7">
        {!result ? (
          <div className="h-full flex flex-col items-center justify-center text-center py-16">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <FileText size={32} className="text-[#1E3A8A]" />
            </div>
            <p className="font-poppins font-semibold text-gray-400 text-lg">Enter income &amp; TDS details</p>
            <p className="font-inter text-gray-300 text-sm mt-1">See your refund estimate instantly</p>
          </div>
        ) : (
          <motion.div key="result" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h3 className="font-poppins font-bold text-[#1E3A8A] text-xl mb-1">Refund Estimate</h3>
            <p className="font-inter text-gray-400 text-sm mb-5">
              TDS paid: <strong className="text-gray-700">{fmt(result.tdsAmt)}</strong>
            </p>

            <div className="space-y-4">
              <RefundCard
                regime="New Tax Regime"
                refund={result.refundNew} tax={result.newTax}
                taxable={result.newTaxable} tdsAmt={result.tdsAmt}
              />
              <RefundCard
                regime="Old Tax Regime"
                refund={result.refundOld} tax={result.oldTax}
                taxable={result.oldTaxable} tdsAmt={result.tdsAmt}
              />
            </div>

            {bestRegime && (
              <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                <p className="font-inter text-[#1E3A8A] text-xs leading-relaxed">
                  <strong>Recommendation:</strong> {bestRegime} gives you a better outcome.
                  Consult CA Tanishq Aggarwal for a verified assessment.
                </p>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  )
}
