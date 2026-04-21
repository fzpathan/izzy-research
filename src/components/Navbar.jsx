import { FileText, MessageCircle } from 'lucide-react'
import { WHATSAPP_URL } from '../constants'

const navItems = ['Services','How it works', 'Testimonials', 'FAQ']

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-brand-purple flex items-center justify-center">
            <FileText className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-navy-950 text-lg tracking-tight">
            Izzy <span className="text-brand-purple">Research</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="hover:text-navy-950 transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-semibold px-4 py-2 rounded-md transition-all shadow-cta"
        >
          <MessageCircle className="w-4 h-4" />
          Chat Now
        </a>
      </div>
    </nav>
  )
}
