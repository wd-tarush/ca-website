import type { Metadata } from 'next'
import Navbar          from '@/components/Navbar'
import Footer          from '@/components/Footer'
import CalculatorsPage from '@/components/CalculatorsPage'

export const metadata: Metadata = {
  title: 'Free Tax Calculators | Income Tax, GST, ITR Refund | Aggarwal & Associates',
  description:
    'Free online tax calculators for Indian taxpayers — Income Tax Calculator with Old & New Regime comparison, GST Late Fee Calculator, and ITR Refund Estimator.',
  keywords:
    'income tax calculator india, GST late fee calculator, ITR refund estimator, old regime new regime calculator, tax calculator 2024-25',
}

export default function Calculators() {
  return (
    <>
      <Navbar />
      <main>
        <CalculatorsPage />
      </main>
      <Footer />
    </>
  )
}
