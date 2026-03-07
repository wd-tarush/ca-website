'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Receipt, CheckCircle2, AlertTriangle } from 'lucide-react'

const fmt = (n: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

function calcDelayedDays(due: string, filed: string) {
  const d1 = new Date(due)
  const d2 = new Date(filed)
  return Math.max(0, Math.floor((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24)))
}

interface Result {
  days:  number
  cgst:  number
  sgst:  number
  total: number
  capped: boolean
}

export default function GSTCalc() {
  const [returnType,  setReturnType]  = useState('GSTR3B')
  const [dueDate,     setDueDate]     = useState('')
  const [filingDate,  setFilingDate]  = useState('')
  const [result,      setResult]      = useState<Result | null>(null)

  const calculate = () => {
    const days = calcDelayedDays(dueDate, filingDate)
    const MAX  = 2_500  // per component
    const cgst = Math.min(days * 25, MAX)
    const sgst = Math.min(days * 25, MAX)
    setResult({ days, cgst, sgst, total: cgst + sgst, capped: days * 25 > MAX })
  }

  const cls = 'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#1E3A8A] focus:ring-2 focus:ring-[#1E3A8A]/10 outline-none font-inter text-sm text-gray-800 bg-white transition-all'
  const canCalc = dueDate && filingDate

  return (
    <div className="max-w-2xl mx-auto space-y-5">

      {/* ── Input card ── */}
      <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7">
        <h3 className="font-poppins font-bold text-[#1E3A8A] text-xl mb-6">GST Return Details</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">Return Type</label>
            <select value={returnType} onChange={e => setReturnType(e.target.value)} className={cls}>
              <option value="GSTR1">GSTR-1 (Outward Supplies)</option>
              <option value="GSTR3B">GSTR-3B (Monthly Summary)</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">Due Date</label>
              <input type="date" value={dueDate} onChange={e => setDueDate(e.target.value)} className={cls} />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1.5 font-inter">Actual Filing Date</label>
              <input type="date" value={filingDate} onChange={e => setFilingDate(e.target.value)} className={cls} />
            </div>
          </div>

          <button onClick={calculate} disabled={!canCalc}
            className="w-full bg-[#1E3A8A] hover:bg-[#163070] disabled:opacity-50 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-semibold font-poppins text-sm transition-colors duration-200 flex items-center justify-center gap-2 shadow-md"
          >
            <Receipt size={18} /> Calculate Late Fee
          </button>
        </div>
      </div>

      {/* ── Result card ── */}
      {result && (
        <motion.div
          key={`${result.days}-${result.total}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl border border-gray-200 shadow-sm p-7"
        >
          {/* Status header */}
          <div className="flex items-center gap-3 mb-6">
            {result.days === 0 ? (
              <>
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 size={24} className="text-emerald-500" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-gray-800 text-lg">Filed on Time!</h4>
                  <p className="font-inter text-gray-400 text-sm">No late fee applicable for {returnType}.</p>
                </div>
              </>
            ) : (
              <>
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle size={24} className="text-amber-500" />
                </div>
                <div>
                  <h4 className="font-poppins font-bold text-gray-800 text-lg">Late Filing Detected</h4>
                  <p className="font-inter text-gray-400 text-sm">{returnType} filed {result.days} day{result.days > 1 ? 's' : ''} after due date</p>
                </div>
              </>
            )}
          </div>

          {result.days > 0 && (
            <div className="space-y-3">
              {[
                {
                  label: 'Delayed Days',
                  value: `${result.days} days`,
                  sub:   'beyond due date',
                  bg:    'bg-amber-50 border-amber-100',
                  vc:    'text-amber-600',
                },
                {
                  label: 'CGST Late Fee',
                  value: fmt(result.cgst),
                  sub:   '₹25 per day',
                  bg:    'bg-blue-50 border-blue-100',
                  vc:    'text-[#1E3A8A]',
                },
                {
                  label: 'SGST Late Fee',
                  value: fmt(result.sgst),
                  sub:   '₹25 per day',
                  bg:    'bg-blue-50 border-blue-100',
                  vc:    'text-[#1E3A8A]',
                },
              ].map(item => (
                <div key={item.label}
                  className={`flex items-center justify-between px-5 py-4 rounded-xl border ${item.bg}`}>
                  <div>
                    <p className="font-poppins font-semibold text-gray-700 text-sm">{item.label}</p>
                    <p className="font-inter text-gray-400 text-xs mt-0.5">{item.sub}</p>
                  </div>
                  <span className={`font-poppins font-bold text-xl ${item.vc}`}>{item.value}</span>
                </div>
              ))}

              {/* Total */}
              <div className="flex items-center justify-between px-5 py-4 rounded-xl bg-[#1E3A8A]">
                <p className="font-poppins font-bold text-white text-base">Total Late Fee Payable</p>
                <span className="font-poppins font-bold text-[#D4AF37] text-2xl">{fmt(result.total)}</span>
              </div>

              {result.capped && (
                <p className="text-center text-xs text-gray-400 font-inter pt-1">
                  * Maximum cap of ₹5,000 (₹2,500 CGST + ₹2,500 SGST) has been applied.
                </p>
              )}
            </div>
          )}
        </motion.div>
      )}

      {/* Info note */}
      <div className="bg-amber-50 border border-amber-200 rounded-2xl px-5 py-4">
        <p className="font-inter text-amber-700 text-xs leading-relaxed">
          <strong>Note:</strong> Late fee is ₹50/day (₹25 CGST + ₹25 SGST), capped at ₹5,000 per return.
          For NIL returns, late fee is ₹20/day (₹10 CGST + ₹10 SGST), capped at ₹500.
          Figures are as per GST Act, subject to government notifications.
        </p>
      </div>
    </div>
  )
}
