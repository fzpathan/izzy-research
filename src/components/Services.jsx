import { BookOpen, Edit3, Zap } from 'lucide-react'
import { SERVICES } from '../constants'

const serviceIcons = {
  Zap,
  BookOpen,
  Edit3,
}

export default function Services() {
  return (
    <section id="services" className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-purple-soft border border-brand-purple-light text-brand-purple text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 tracking-tight mb-4">
            Everything you need to finish strong
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Three core service areas, each delivered by subject-matter experts with
            published academic track records.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7">
          {SERVICES.map(({ icon, title, description, tags }) => {
            const Icon = serviceIcons[icon]

            return (
              <div
                key={title}
                className="group bg-white border border-slate-100 rounded-xl p-7 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-brand-purple-soft flex items-center justify-center mb-6 group-hover:bg-brand-purple group-hover:text-white transition-colors">
                  <Icon className="w-7 h-7 text-brand-purple" />
                </div>
                <h3 className="text-xl font-bold text-navy-950 mb-3">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{description}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-slate-50 text-slate-500 border border-slate-100 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
