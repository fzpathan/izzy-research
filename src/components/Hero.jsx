import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Edit3,
  GraduationCap,
  MessageCircle,
  Users,
  Award,
  Zap,
} from 'lucide-react'
import { TRUST_POINTS, WHATSAPP_URL } from '../constants'

const trustPointIcons = {
  Users,
  GraduationCap,
  Award,
  Clock,
}

const showcaseItems = [
  { icon: BookOpen, label: 'Literature Review' },
  { icon: Zap, label: 'Methodology' },
  { icon: Edit3, label: 'Editing' },
]

const progressSteps = [
  { step: 'Proposal', done: true },
  { step: 'Literature Review', done: true },
  { step: 'Methodology', done: true },
  { step: 'Data Analysis', done: false },
  { step: 'Final Draft', done: false },
]

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-5 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
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

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up delay-300">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-brand-purple hover:bg-brand-purple-hover text-white font-semibold px-7 py-3.5 rounded-lg transition-all shadow-cta text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 text-navy-950 font-semibold px-7 py-3.5 rounded-lg border border-slate-200 hover:border-brand-purple-light hover:text-brand-purple transition-all text-base"
              >
                Explore Services
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 animate-fade-up delay-400">
              {TRUST_POINTS.map(({ icon, stat, label }) => {
                const Icon = trustPointIcons[icon]

                return (
                  <div key={label} className="text-center sm:text-left">
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-navy-950 font-bold text-xl mb-0.5">
                      <Icon className="w-5 h-5" />
                      {stat}
                    </div>
                    <div className="text-xs text-slate-400 font-medium">{label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="hidden lg:block animate-fade-up delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-purple/10 rounded-3xl blur-3xl" />
              <div className="relative bg-white rounded-2xl border border-slate-100 shadow-card-hover p-8">
                <div className="flex items-center justify-between mb-8">
                  {showcaseItems.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex flex-col items-center gap-2">
                      <div className="w-12 h-12 rounded-xl bg-brand-purple-soft flex items-center justify-center">
                        <Icon className="w-6 h-6 text-brand-purple" />
                      </div>
                      <span className="text-xs font-medium text-slate-400">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  {progressSteps.map(({ step, done }) => (
                    <div key={step} className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0
                        ${done ? 'bg-success text-white' : 'bg-slate-100 text-slate-300'}`}
                      >
                        {done && <CheckCircle2 className="w-4 h-4" />}
                      </div>
                      <span
                        className={`text-sm font-medium ${done ? 'text-navy-950' : 'text-slate-400'}`}
                      >
                        {step}
                      </span>
                      {done && (
                        <span className="ml-auto text-xs text-success font-semibold">
                          Complete
                        </span>
                      )}
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
