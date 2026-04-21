import { Quote, Star } from 'lucide-react'
import { TESTIMONIALS } from '../constants'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-purple-soft border border-brand-purple-light text-brand-purple text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            Student Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 tracking-tight mb-4">
            Results that speak for themselves
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-slate-400 text-sm">4.9 / 5 average from 380+ verified reviews</p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {TESTIMONIALS.map(({ quote, name, programme, avatar }) => (
            <div
              key={name}
              className="bg-slate-50 border border-slate-100 rounded-xl p-7 hover:shadow-card transition-shadow"
            >
              <Quote className="w-8 h-8 text-brand-purple-light mb-4" />
              <p className="text-slate-500 text-sm leading-relaxed mb-6 italic">"{quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-purple text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  {avatar}
                </div>
                <div>
                  <div className="font-semibold text-navy-950 text-sm">{name}</div>
                  <div className="text-slate-400 text-xs">{programme}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
