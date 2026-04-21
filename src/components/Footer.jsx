import { FileText } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-navy-950 py-10 px-5 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded bg-brand-purple flex items-center justify-center">
            <FileText className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-semibold text-white text-base">
            Izzy <span className="text-brand-purple">Research</span>
          </span>
        </div>
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} Izzy Research. All rights reserved. Confidential &
          original work guaranteed.
        </p>
        {/* <div className="flex gap-6 text-white/40 text-sm">
          <a href="#" className="hover:text-white/70 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-white/70 transition-colors">
            Terms
          </a>
        </div> */}
      </div>
    </footer>
  )
}
