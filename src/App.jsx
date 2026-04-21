import { useState } from 'react'
import {
  MessageCircle, BookOpen, FileText, Edit3, Star, ChevronDown,
  ChevronUp, CheckCircle2, Zap, Shield, GraduationCap, ArrowRight,
  Clock, Users, Award, Quote
} from 'lucide-react'

// ─── Constants ────────────────────────────────────────────────────────────────
const WHATSAPP_URL = 'https://wa.me/?text=Hi%20Izzy%20Research!%20I%27d%20like%20to%20enquire%20about%20your%20research%20services.'
const UPI_URL = 'upi://pay?pa=izzyresearch@upi&pn=IzzyResearch&cu=INR'

const SERVICES = [
  {
    icon: <Zap className="w-7 h-7 text-brand-purple" />,
    title: 'Research Methodology',
    description:
      'Stuck on research design? We help you choose the right methodology, craft robust data collection instruments, and analyse your results with statistical rigour.',
    tags: ['Qualitative', 'Quantitative', 'Mixed Methods'],
  },
  {
    icon: <BookOpen className="w-7 h-7 text-brand-purple" />,
    title: 'Literature Review',
    description:
      'A comprehensive, structured literature review that critically synthesises sources, identifies gaps, and builds a watertight theoretical framework for your study.',
    tags: ['Systematic Review', 'Thematic Analysis', 'Gap Identification'],
  },
  {
    icon: <Edit3 className="w-7 h-7 text-brand-purple" />,
    title: 'Thesis Editing & Proofreading',
    description:
      'Language, structure, referencing, and formatting — our senior editors refine every section so your thesis meets the highest academic standards.',
    tags: ['Language Polishing', 'APA / MLA / Chicago', 'Plagiarism Check'],
  },
]

const TESTIMONIALS = [
  {
    quote:
      'Izzy Research transformed my dissertation. The methodology chapter went from a confused mess to a structured, defensible piece of work. Defended first try!',
    name: 'Aisha M.',
    programme: 'MSc Psychology, University of Manchester',
    avatar: 'AM',
  },
  {
    quote:
      'I was three months behind on my literature review. The Izzy team delivered a thorough, well-referenced chapter in four weeks. Absolutely stellar service.',
    name: 'Carlos R.',
    programme: 'MBA, University of Cape Town',
    avatar: 'CR',
  },
  {
    quote:
      'My supervisor kept rejecting my drafts. After working with Izzy on structure and language, she actually praised my writing. Worth every penny.',
    name: 'Priya S.',
    programme: 'PhD Economics, LSE',
    avatar: 'PS',
  },
]

const FAQS = [
  {
    q: 'What levels of study do you support?',
    a: 'We work with undergraduate, Master\'s (MSc, MA, MBA, MFA), and PhD students across all disciplines — humanities, sciences, engineering, business, and social sciences.',
  },
  {
    q: 'Is my work kept confidential?',
    a: 'Absolutely. All documents are handled under strict confidentiality. We do not retain, share, or reuse any of your submitted work. Period.',
  },
  {
    q: 'How do I know the work is original?',
    a: 'Every deliverable is checked with Turnitin-equivalent plagiarism software before delivery. We guarantee 100% original content written from scratch for your brief.',
  },
  {
    q: 'What is your turnaround time?',
    a: 'Standard turnaround is 7–14 days depending on the scope. Urgent requests (3–5 days) are available at a premium. We never compromise quality for speed.',
  },
  {
    q: 'How does payment work?',
    a: 'We accept payment via UPI (India), bank transfer, or PayPal. A 50% deposit is required before work begins; the remaining 50% is due on delivery.',
  },
  {
    q: 'What if my supervisor asks for revisions?',
    a: 'We include one round of revisions free of charge. Additional revision rounds are charged at a nominal rate based on the scope of changes.',
  },
]

const TRUST_POINTS = [
  { icon: <Users className="w-5 h-5" />, stat: '2,400+', label: 'Students Supported' },
  { icon: <GraduationCap className="w-5 h-5" />, stat: '94%', label: 'First-Time Defence Rate' },
  { icon: <Award className="w-5 h-5" />, stat: '8+', label: 'Years in Academic Consulting' },
  { icon: <Clock className="w-5 h-5" />, stat: '48h', label: 'Average Response Time' },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-md bg-brand-purple flex items-center justify-center">
            <FileText className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-navy-950 text-lg tracking-tight">
            Izzy <span className="text-brand-purple">Research</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-400">
          {['Services', 'How It Works', 'Testimonials', 'FAQ'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`}
               className="hover:text-navy-950 transition-colors">
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
           className="hidden md:flex items-center gap-2 bg-brand-purple hover:bg-brand-purple-hover text-white text-sm font-semibold px-4 py-2 rounded-md transition-all shadow-cta">
          <MessageCircle className="w-4 h-4" />
          Chat Now
        </a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-5 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-purple-soft border border-brand-purple-light text-brand-purple text-xs font-semibold px-3 py-1.5 rounded-full mb-7 animate-fade-up">
              <GraduationCap className="w-3.5 h-3.5" />
              Trusted by 2,400+ Students Worldwide
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-950 leading-tight tracking-tight mb-6 animate-fade-up delay-100">
              Your thesis deserves an{' '}
              <span className="text-gradient">expert guide.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-9 animate-fade-up delay-200">
              From research methodology to final submission — Izzy Research provides
              personalised, confidential academic consulting that helps you write a
              thesis you can defend with confidence.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-300">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center justify-center gap-2.5 bg-brand-purple hover:bg-brand-purple-hover text-white font-semibold px-7 py-3.5 rounded-lg transition-all shadow-cta text-base">
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services"
                 className="inline-flex items-center justify-center gap-2 text-navy-950 font-semibold px-7 py-3.5 rounded-lg border border-slate-200 hover:border-brand-purple-light hover:text-brand-purple transition-all text-base">
                Explore Services
              </a>
            </div>

            {/* Trust row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 animate-fade-up delay-400">
              {TRUST_POINTS.map(({ icon, stat, label }) => (
                <div key={label} className="text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-1.5 text-navy-950 font-bold text-xl mb-0.5">
                    {icon}
                    {stat}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="hidden lg:block animate-fade-up delay-200">
            <div className="relative">
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-brand-purple/10 rounded-3xl blur-3xl" />
              <div className="relative bg-white rounded-2xl border border-slate-100 shadow-card-hover p-8">
                {/* Floating academic icon row */}
                <div className="flex items-center justify-between mb-8">
                  {[
                    { icon: BookOpen, label: 'Literature Review' },
                    { icon: Zap, label: 'Methodology' },
                    { icon: Edit3, label: 'Editing' },
                  ].map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-brand-purple-soft flex items-center justify-center">
                        <Icon className="w-6 h-6 text-brand-purple" />
                      </div>
                      <span className="text-xs font-medium text-slate-400">{label}</span>
                    </div>
                  ))}
                </div>

                {/* Fake progress tracker */}
                <div className="space-y-4">
                  {[
                    { step: 'Proposal', done: true },
                    { step: 'Literature Review', done: true },
                    { step: 'Methodology', done: true },
                    { step: 'Data Analysis', done: false },
                    { step: 'Final Draft', done: false },
                  ].map(({ step, done }) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0
                        ${done ? 'bg-success text-white' : 'bg-slate-100 text-slate-300'}`}>
                        {done && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <span className={`text-sm font-medium ${done ? 'text-navy-950' : 'text-slate-400'}`}>
                        {step}
                      </span>
                      {done && <span className="ml-auto text-xs text-success font-semibold">Complete</span>}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 mb-0.5">Overall Progress</div>
                    <div className="text-2xl font-bold text-navy-950">60%</div>
                  </div>
                  <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-purple rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-purple-soft border border-brand-purple-light text-brand-purple text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 tracking-tight mb-4">
            Everything you need to finish strong
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Three core service areas, each delivered by subject-matter experts with published
            academic track records.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-7">
          {SERVICES.map(({ icon, title, description, tags }) => (
            <div key={title}
                 className="group bg-white border border-slate-100 rounded-xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-brand-purple-soft flex items-center justify-center mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors">
                {icon}
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{description}</p>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag}
                        className="text-xs font-medium bg-slate-50 text-slate-500 border border-slate-100 px-2.5 py-1 rounded-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Send Us Your Brief',
      desc: 'Share your assignment details, deadline, and any supervisor feedback via WhatsApp. We respond within 24 hours with a plan and quote.',
    },
    {
      num: '02',
      title: 'We Match You with an Expert',
      desc: 'Your project is assigned to a specialist with proven expertise in your discipline and methodology. You work directly with them.',
    },
    {
      num: '03',
      title: 'Receive Polished, Original Work',
      desc: 'Your completed sections are delivered with a quality guarantee, plagiarism report, and one round of free revisions included.',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-5 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-500 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 tracking-tight mb-4">
            From brief to defence in three steps
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map(({ num, title, desc }) => (
            <div key={num} className="relative">
              {/* Connector line */}
              <div className="hidden md:block absolute top-10 left-1/2 w-full h-px bg-brand-purple-light z-0" />
              <div className="relative z-10 flex flex-col items-center text-center bg-white border border-slate-100 rounded-xl p-7 shadow-card">
                <div className="w-16 h-16 rounded-full bg-brand-purple text-white flex items-center justify-center text-xl font-bold mb-5 shadow-cta">
                  {num}
                </div>
                <h3 className="text-lg font-bold text-navy-950 mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
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
            <div key={name}
                 className="bg-slate-50 border border-slate-100 rounded-xl p-7 hover:shadow-card transition-shadow">
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

function Payment() {
  return (
    <section id="payment" className="py-20 px-5 bg-navy-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left: Copy */}
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

            {/* UPI CTA Button */}
            <a href={UPI_URL} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-3 bg-white text-navy-950 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-lg mb-6">
              <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                <rect width="24" height="24" rx="6" fill="#E0F4FF"/>
                <path d="M7 12h10M12 7v10" stroke="#0075de" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Pay via UPI — ₹500 Deposit
            </a>

            <p className="text-white/40 text-sm">
              UPI ID: <span className="text-white/60 font-mono">izzyresearch@upi</span>
            </p>
          </div>

          {/* Right: QR Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl p-8 text-center shadow-2xl max-w-xs w-full">
              <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Scan to Pay
              </div>

              {/* QR Placeholder — replace src with actual QR code image */}
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

function FAQ() {
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
                {openIndex === i
                  ? <ChevronUp className="w-5 h-5 text-brand-purple flex-shrink-0" />
                  : <ChevronDown className="w-5 h-5 text-slate-300 flex-shrink-0" />}
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

function CTA() {
  return (
    <section className="py-20 px-5 bg-brand-purple">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-5">
          Ready to finish your thesis with confidence?
        </h2>
        <p className="text-white/70 text-lg mb-9 max-w-2xl mx-auto">
          Book a free 15-minute consultation today. No commitment — just a honest
          conversation about what your project needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center justify-center gap-2.5 bg-white text-brand-purple font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors text-base shadow-lg">
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp Now
          </a>
          <a href="mailto:izzyresearch@email.com"
             className="inline-flex items-center justify-center gap-2.5 bg-white/15 text-white font-semibold px-8 py-4 rounded-xl border border-white/30 hover:bg-white/25 transition-colors text-base">
            Email Us Instead
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
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
          © {new Date().getFullYear()} Izzy Research. All rights reserved. Confidential & original work guaranteed.
        </p>
        <div className="flex gap-6 text-white/40 text-sm">
          <a href="#" className="hover:text-white/70 transition-colors">Privacy</a>
          <a href="#" className="hover:text-white/70 transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  )
}

// ─── App Root ─────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Testimonials />
      <Payment />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
