import { Shield } from 'lucide-react'
import { UPI_URL } from '../constants'

export default function Payment() {
  return (
    <section id="payment" className="py-20 px-5 bg-navy-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/70 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <Shield className="w-3.5 h-3.5" />
              Secure & Simple Payments
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">
              Pay quickly and securely via UPI
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              We accept payments via UPI (India), bank transfer, and PayPal.
              A 50% deposit confirms your slot; the balance is due on delivery.
            </p>

            <a
              href={UPI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-navy-950 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-lg mb-6"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                <rect width="24" height="24" rx="6" fill="#E0F4FF" />
                <path d="M7 12h10M12 7v10" stroke="#0075de" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Pay via UPI — ₹500 Deposit
            </a>

            <p className="text-white/40 text-sm">
              UPI ID: <span className="text-white/60 font-mono">izzyresearch@upi</span>
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl p-8 text-center shadow-2xl max-w-xs w-full">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Scan to Pay
              </div>

              <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl w-48 h-48 mx-auto mb-5 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-slate-100 rounded-lg mx-auto mb-2" />
                  <span className="text-xs text-slate-400">QR Code</span>
                </div>
              </div>

              <div className="text-xs text-slate-400 mb-1">Or pay to:</div>
              <div className="font-mono text-sm text-navy-950 font-semibold break-all">
                izzyresearch@upi
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100">
                <div className="text-xs text-slate-400 mb-1">Amount</div>
                <div className="text-xl font-bold text-navy-950">₹500</div>
                <div className="text-xs text-slate-400">deposit to confirm booking</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
