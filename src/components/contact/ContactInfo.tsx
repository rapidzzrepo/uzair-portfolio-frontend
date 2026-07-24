export default function ContactInfo() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Headshot */}
      <div className="relative group aspect-[1.3] w-full overflow-hidden rounded-lg bg-surface-high shadow-lg border border-outline-variant/20">
        <img
          src="/Pictures/Photo_1784721434246.png"
          alt="Professional headshot of Uzair Rahim"
          className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 scale-95 group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <p className="text-xs font-mono uppercase tracking-widest">
            Uzair Rahim
          </p>
          <p className="text-sm sm:text-base font-medium">
            Senior Architect
          </p>
        </div>
      </div>

      {/* Contact Info Bento */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Email */}
        <div className="bg-white p-6 sm:p-8 border border-outline-variant/30 rounded-lg flex flex-col justify-between group hover:border-cta-gold/40 transition-all cursor-pointer shadow-sm">
          <div>
            <div className="w-10 h-10 bg-surface-high rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-brand-dark group-hover:text-white transition-colors">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </div>
            <h3 className="text-[11px] sm:text-xs text-brand-gray uppercase font-bold tracking-widest mb-1">
              Direct Line
            </h3>
          </div>
          <p className="text-sm sm:text-base text-brand-dark font-bold mt-3 sm:mt-4 break-all">
            uzair@rahim.dev
          </p>
        </div>

        {/* Location */}
        <div className="bg-white p-6 sm:p-8 border border-outline-variant/30 rounded-lg flex flex-col justify-between shadow-sm">
          <div>
            <div className="w-10 h-10 bg-surface-high rounded-full flex items-center justify-center mb-4 sm:mb-6">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-[11px] sm:text-xs text-brand-gray uppercase font-bold tracking-widest mb-1">
              HQ
            </h3>
          </div>
          <p className="text-sm sm:text-base text-brand-dark font-bold mt-3 sm:mt-4">
            New York City
          </p>
        </div>

        {/* Book Strategy Session */}
        <a
          href="#"
          className="sm:col-span-2 bg-primary-container p-6 sm:p-8 rounded-lg flex items-center justify-between group overflow-hidden relative shadow-lg hover:-translate-y-1 transition-transform duration-300"
        >
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-cta-gold rounded-full" />
              <h3 className="text-[11px] sm:text-xs text-on-primary-container uppercase tracking-widest font-bold">
                Priority Channel
              </h3>
            </div>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              Book Strategy Session
            </p>
          </div>
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 text-white relative z-10 transform group-hover:rotate-45 transition-transform duration-500 shrink-0 ml-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 17L17 7M17 7H7M17 7v10"
            />
          </svg>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-cta-gold/10 rounded-full blur-3xl group-hover:bg-cta-gold/20 transition-colors" />
          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        </a>
      </div>

      {/* Status Panel */}
      <div className="border-l-4 border-brand-dark bg-white p-6 sm:p-8 rounded-r-lg shadow-sm border-y border-r border-outline-variant/20">
        <div className="flex items-center gap-3 mb-4">
          <svg
            className="w-5 h-5 text-brand-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="text-xs font-mono text-brand-dark font-bold uppercase tracking-widest">
            Operational Status
          </span>
        </div>
        <p className="text-brand-gray text-xs sm:text-sm leading-relaxed font-medium">
          Processing architectural audits for{' '}
          <span className="text-brand-dark">Q2 cycle</span>. New full-cycle
          development slots opening mid-September. Response latency:{' '}
          <span className="text-brand-dark font-bold">12-24 hours</span>.
        </p>
      </div>
    </div>
  )
}
