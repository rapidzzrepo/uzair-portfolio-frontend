import { type FormEvent } from 'react'

const RECIPIENT = 'uzair.raheem987@gmail.com'
const SUBJECT = 'Project Inquiry From uzair.nexteksol.com'

const engagementOptions = [
  { value: '', label: 'Select an engagement type' },
  { value: 'Architecture & Scalability Audit', label: 'Architecture & Scalability Audit' },
  { value: 'End-to-End Full-Stack Development', label: 'End-to-End Full-Stack Development' },
  { value: 'AI & Machine Learning Integration', label: 'AI & Machine Learning Integration' },
  { value: 'Strategic Technical Consulting', label: 'Strategic Technical Consulting' },
]

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const name = (data.get('name') as string).trim()
    const company = (data.get('company') as string).trim()
    const engagement = data.get('project-type') as string
    const message = (data.get('message') as string).trim()

    const body = [
      `Name: ${name}`,
      '',
      company && `Company: ${company}`,
      '',
      `Engagement: ${engagement}`,
      '',
      '---',
      '',
      message,
      '',
      '---',
      '',
      `Regards,`,
      name,
    ]
      .filter(Boolean)
      .join('\n')

    const mailtoUrl = `mailto:${RECIPIENT}?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  return (
    <div className="glass-panel p-6 sm:p-8 md:p-10 border border-outline-variant/30 rounded-lg shadow-sm">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-brand-dark mb-8 sm:mb-10 pb-4 border-b border-outline-variant/20">
        Project Inquiry
      </h2>

      <form className="space-y-8 sm:space-y-10" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-10">
          <div className="space-y-3">
            <label className="block text-[11px] sm:text-xs text-brand-gray uppercase tracking-[0.15em] font-bold">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="E.g. John Doe"
              className="w-full bg-transparent border-b border-outline-variant/60 focus:border-brand-dark transition-all py-3 px-0 text-sm sm:text-base text-brand-dark placeholder:text-outline-variant"
            />
          </div>

          <div className="space-y-3">
            <label className="block text-[11px] sm:text-xs text-brand-gray uppercase tracking-[0.15em] font-bold">
              Company
            </label>
            <input
              type="text"
              name="company"
              placeholder="E.g. Nexus Lab"
              className="w-full bg-transparent border-b border-outline-variant/60 focus:border-brand-dark transition-all py-3 px-0 text-sm sm:text-base text-brand-dark placeholder:text-outline-variant"
            />
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-[11px] sm:text-xs text-brand-gray uppercase tracking-[0.15em] font-bold">
            Nature of Engagement
          </label>
          <div className="relative">
            <select
              name="project-type"
              required
              className="w-full bg-transparent border-b border-outline-variant/60 focus:border-brand-dark transition-all py-3 px-0 pr-8 text-sm sm:text-base text-brand-dark appearance-none cursor-pointer"
            >
              {engagementOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <svg
              className="absolute right-0 bottom-3 w-5 h-5 text-brand-gray pointer-events-none"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-3">
          <label className="block text-[11px] sm:text-xs text-brand-gray uppercase tracking-[0.15em] font-bold">
            Detailed Scope
          </label>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Describe the technical challenges or project vision..."
            className="w-full bg-transparent border-b border-outline-variant/60 focus:border-brand-dark transition-all py-3 px-0 text-sm sm:text-base text-brand-dark resize-none placeholder:text-outline-variant"
          />
        </div>

        <div className="pt-4 sm:pt-6">
          <button
            type="submit"
            className="group relative inline-flex items-center justify-center gap-4 sm:gap-6 bg-brand-dark text-white px-8 sm:px-12 py-4 sm:py-6 text-[11px] sm:text-xs uppercase tracking-[0.2em] font-bold hover:bg-black transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-[0.98]"
          >
            Initialize Project
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  )
}
