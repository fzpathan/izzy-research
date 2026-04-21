import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { FAQS } from '../constants'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <section id="faq" className="py-20 px-5 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-500 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 tracking-tight">
            Common questions, straight answers
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map(({ q, a }, i) => (
            <div key={i} className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-card">
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4 hover:bg-slate-50 transition-colors"
              >
                <span className="font-semibold text-navy-950 text-sm">{q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-5 h-5 text-brand-purple flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-300 flex-shrink-0" />
                )}
              </button>
              <div className={`accordion-content ${openIndex === i ? 'open' : ''}`}>
                <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed border-t border-slate-50 pt-4">
                  {a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
