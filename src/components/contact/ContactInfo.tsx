import { useState, useEffect } from 'react'

export default function ContactInfo() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000)
      return () => clearTimeout(timer)
    }
  }, [copied])

  const handleCopy = () => {
    navigator.clipboard.writeText('uzair.raheem987@gmail.com')
    setCopied(true)
  }

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
        <div className="bg-white p-6 sm:p-8 border border-outline-variant/30 rounded-lg flex flex-col items-center text-center group hover:border-cta-gold/40 transition-all shadow-sm">
          <div className="w-8 h-8 bg-surface-high rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-dark group-hover:text-white transition-colors">
            <svg
              className="w-4 h-4"
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
          <p
            onClick={handleCopy}
            className="text-[11px] sm:text-xs md:text-sm text-brand-dark font-bold mt-3 whitespace-nowrap cursor-pointer hover:text-cta-gold transition-colors"
          >
            uzair.raheem987@gmail.com
          </p>
          <span
            className={`text-[10px] font-mono text-emerald-600 mt-2 px-3 py-1 border border-emerald-300 rounded-full bg-emerald-50 transition-opacity duration-300 ${
              copied ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Copied!
          </span>
        </div>

        {/* Availability */}
        <div className="bg-white p-6 sm:p-8 border border-outline-variant/30 rounded-lg flex flex-col items-center text-center group hover:border-cta-gold/40 transition-all shadow-sm">
          <div className="w-8 h-8 bg-surface-high rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-dark group-hover:text-white transition-colors">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-[11px] sm:text-xs text-brand-gray uppercase font-bold tracking-widest mb-1">
            Availability
          </h3>
          <p className="text-[11px] sm:text-xs md:text-sm text-brand-dark font-bold mt-3 whitespace-nowrap">
            Available to work remotely
          </p>
        </div>
      </div>
    </div>
  )
}
