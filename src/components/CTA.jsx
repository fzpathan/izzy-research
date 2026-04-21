import { MessageCircle } from 'lucide-react'
import { EMAIL_URL, WHATSAPP_URL } from '../constants'

export default function CTA() {
  return (
    <section className="py-20 px-5 bg-brand-purple">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">
          Ready to finish your thesis with confidence?
        </h2>
        <p className="text-white/70 text-lg mb-9 max-w-2xl mx-auto">
          Book a free consultation today. Have a
          conversation about what your project needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-white text-brand-purple font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors text-base shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp Now
          </a>
          <a
            href={EMAIL_URL}
            className="inline-flex items-center justify-center gap-2.5 bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 hover:bg-white/25 transition-colors text-base"
          >
            Email Us Instead
          </a>
        </div>
      </div>
    </section>
  )
}
