import { Link } from 'react-router-dom'

export default function ChatHeader() {
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-4 border-b border-outline-var/10 bg-surface/80 backdrop-blur-md shrink-0">
      <Link
        to="/"
        className="text-sm uppercase tracking-widest text-brand-gray hover:text-brand-dark transition-colors"
      >
        &larr; Back
      </Link>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-cta-gold/10 flex items-center justify-center">
          <svg viewBox="0 0 20 20" className="w-3.5 h-3.5">
            <rect x="3" y="5" width="14" height="10" rx="3" fill="#C5A059" />
            <circle cx="8" cy="10" r="1.5" fill="white" />
            <circle cx="12" cy="10" r="1.5" fill="white" />
          </svg>
        </div>
        <h1 className="text-sm font-semibold text-brand-dark">AI Assistant</h1>
        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      </div>
      <div className="w-16" />
    </header>
  )
}
