export const PHONE_NUMBERS = {
  whatsapp: '919356900832',
}

export const PHONE = PHONE_NUMBERS.whatsapp

export const message = encodeURIComponent(
  `Hi Izzy Research! I'd like to enquire about your research services.`,
)

export const URLS = {
  whatsapp: `https://wa.me/${PHONE}?text=${message}`,
  upi: 'upi://pay?pa=izzyresearch@upi&pn=IzzyResearch&cu=INR',
  email: 'mailto:pathanrahil2244@gmail.com',
}

export const WHATSAPP_URL = URLS.whatsapp
export const UPI_URL = URLS.upi
export const EMAIL_URL = URLS.email

export const SERVICES = [
  {
    icon: 'Zap',
    title: 'Research Methodology',
    description:
      'Stuck on research design? We help you choose the right methodology, craft robust data collection instruments, and analyse your results with statistical rigour.',
    tags: ['Qualitative', 'Quantitative', 'Mixed Methods'],
  },
  {
    icon: 'BookOpen',
    title: 'Literature Review',
    description:
      'A comprehensive, structured literature review that critically synthesises sources, identifies gaps, and builds a watertight theoretical framework for your study.',
    tags: ['Systematic Review', 'Thematic Analysis', 'Gap Identification'],
  },
  {
    icon: 'Edit3',
    title: 'Thesis Editing & Proofreading',
    description:
      'Language, structure, referencing, and formatting — our senior editors refine every section so your thesis meets the highest academic standards.',
    tags: ['Language Polishing', 'APA / MLA / Chicago', 'Plagiarism Check'],
  },
]

export const TESTIMONIALS = [
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

export const FAQS = [
  {
    q: 'What levels of study do you support?',
    a: "We work with undergraduate, Master's (MSc, MA, MBA, MFA), and PhD students across all disciplines — humanities, sciences, engineering, business, and social sciences.",
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

export const TRUST_POINTS = [
  { icon: 'Users', stat: '2,400+', label: 'Students Supported' },
  { icon: 'GraduationCap', stat: '94%', label: 'First-Time Defence Rate' },
  { icon: 'Award', stat: '8+', label: 'Years in Academic Consulting' },
  { icon: 'Clock', stat: '48h', label: 'Average Response Time' },
]
