import { Link } from 'react-router-dom'

const stats = [
  { value: '15+', label: 'Apps Shipped' },
  { value: '6+', label: 'Years Experience' },
]

export default function Hero() {
  return (
    <main className="relative pt-20 md:pt-24">
      {/* Sidebar meta - desktop only */}
      <div className="hidden lg:flex flex-col justify-between absolute left-8 top-32 bottom-12 py-10">
        <span className="vertical-text text-xs uppercase tracking-widest text-brand-gray opacity-50">
          Sr. Software Engineer
        </span>
        <span className="vertical-text text-xs tracking-widest text-brand-gray opacity-50">
          2016
        </span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center md:items-end min-h-[calc(100vh-80px)] lg:min-h-[724px]">
        {/* Text content */}
        <div className="w-full md:w-2/5 flex flex-col justify-center pb-6 md:pb-24 z-10 relative pt-4 md:-mt-12">
          <div className="flex gap-6 sm:gap-8 md:gap-12 mb-10 md:mb-16 lg:mb-24">
            {stats.map((stat) => (
              <div key={stat.label} className="relative pt-4">
                <div className="absolute top-0 left-0 w-8 h-px bg-brand-dark" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-light">
                  {stat.value}
                </div>
                <div className="text-[9px] sm:text-[10px] uppercase tracking-widest text-brand-gray mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-6 md:mb-8">
            <h1 className="hero-title font-bold text-brand-dark">Hello!</h1>
            <p className="text-base sm:text-lg md:text-xl text-brand-dark font-medium mt-3 md:mt-4">
              <span className="opacity-30 mr-2">&mdash;</span> I'm Uzair Rahim{' '}
              <span className="block sm:inline">Sr. Software Engineer</span>
            </p>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-brand-gray leading-relaxed max-w-sm sm:max-w-md mb-6 md:mb-8">
            Full-stack engineer with 6+ years of production experience, now 3+ years deep in AI automation — designing multi-agent systems, LLM-integrated workflows, and autonomous pipelines that replace manual processes entirely.
          </p>

          <div className="mt-auto hidden lg:flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gray">
            <span>Scroll down</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>
        </div>

        {/* Hero image */}
        <div className="w-full md:w-3/5 relative flex items-end justify-center md:justify-end md:ml-8">
          <img
            src="/Pictures/Photo_1784721434246.png"
            alt="Uzair Rahim Portrait"
            className="w-full max-w-[700px] md:h-full h-auto object-cover object-bottom z-0"
          />
        </div>
      </div>

      {/* Ai Box — positioned on hero section, hidden on very small screens */}
      <Link to="/chatbot" className="thought-cloud ai-box-mid absolute right-3 sm:right-4 md:right-8 lg:right-10 bottom-[7%] lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 z-20 block cursor-pointer">
            {/* Desktop: mini chat interface */}
            <div className="thought-cloud-inner relative hidden lg:block bg-brand-dark rounded-[30px_20px_25px_15px] shadow-lg p-6 pb-4 w-[260px]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <svg viewBox="0 0 20 20" className="w-4 h-4">
                    <rect x="3" y="5" width="14" height="10" rx="3" fill="white" />
                    <circle cx="8" cy="10" r="1.5" fill="#C5A059" />
                    <circle cx="12" cy="10" r="1.5" fill="#C5A059" />
                  </svg>
                </div>
                <span className="text-white text-xs font-semibold">Uzair AI</span>
              </div>
              <div className="flex flex-col gap-2 mb-3">
                <div className="bg-white/10 rounded-2xl rounded-tl-sm px-3 py-2 text-white text-[11px] leading-relaxed self-start max-w-[85%]">
                  Hey! How can I help you today?
                </div>
              </div>
              <div className="flex items-center bg-white/10 border border-white/10 rounded-full px-3 py-1.5">
                <span className="text-white/40 text-[11px] flex-1">Type a message...</span>
                <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                </svg>
              </div>
            </div>

            {/* Mobile: icon + text only */}
            <div className="thought-cloud-inner relative lg:hidden bg-brand-dark rounded-[16px_12px_14px_10px] shadow-lg px-3 py-2.5 w-[120px] sm:w-[140px] md:w-[170px]">
              <div className="flex items-center gap-1.5 mb-1.5">
                <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg viewBox="0 0 20 20" className="w-2.5 h-2.5 sm:w-3 sm:h-3">
                    <rect x="3" y="5" width="14" height="10" rx="3" fill="white" />
                    <circle cx="8" cy="10" r="1.5" fill="#C5A059" />
                    <circle cx="12" cy="10" r="1.5" fill="#C5A059" />
                  </svg>
                </div>
                <span className="text-white text-[9px] sm:text-[10px] md:text-[11px] font-semibold">Uzair AI</span>
              </div>
              <span className="text-white text-[10px] sm:text-[11px] md:text-xs font-semibold leading-tight">
                Chat with me
              </span>
            </div>
          </Link>
    </main>
  )
}
