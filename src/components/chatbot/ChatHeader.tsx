import { Link } from 'react-router-dom'

interface ChatHeaderProps {
  onClear: () => void
  messageCount: number
}

export default function ChatHeader({ onClear, messageCount }: ChatHeaderProps) {
  return (
    <header className="px-4 sm:px-6 md:px-8 pt-6 pb-4 md:pt-10 md:pb-6 z-10 shrink-0">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        <div className="flex items-center gap-3 sm:gap-5">
          <Link to="/" className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-xl hover:scale-105 transition-transform">
            <img src="/Pictures/Photo_1784721434246.png" alt="Uzair Raheem" className="w-full h-full object-cover" />
          </Link>
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-1">
              <h1 className="font-sans text-xl sm:text-[28px] text-primary tracking-tight font-semibold">Uzair's AI</h1>
              <span className="px-1.5 sm:px-2 py-0.5 rounded bg-surface-highest text-[9px] sm:text-[10px] font-mono text-primary border border-outline-var/30 uppercase">v2.0</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
              <p className="font-body text-text-muted text-xs sm:text-sm truncate">Status: Active &bull; Ask about Uzair's skills</p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {messageCount > 1 && (
            <button
              onClick={onClear}
              className="flex items-center gap-1.5 px-3 sm:px-4 py-2 sm:py-2.5 glass-panel border border-outline-var/30 text-[11px] sm:text-xs font-semibold text-primary rounded-lg hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all duration-300 shadow-sm"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              <span className="hidden xs:inline">Clear</span>
            </button>
          )}
          <Link
            to="/"
            className="px-3 sm:px-4 py-2 sm:py-2.5 bg-white/70 border border-outline-var/30 text-[11px] sm:text-xs font-semibold text-primary rounded-lg hover:bg-cta-gold hover:border-cta-gold transition-all duration-300 shadow-sm cursor-pointer"
          >
            Home
          </Link>
        </div>
      </div>
    </header>
  )
}
