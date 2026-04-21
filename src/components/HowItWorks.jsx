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

export default function HowItWorks() {
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
