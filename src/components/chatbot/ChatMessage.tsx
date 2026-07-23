import { useState } from 'react'

interface ChatMessageProps {
  role: 'user' | 'ai'
  text: string
  timestamp?: number
}

export default function ChatMessage({ role, text, timestamp }: ChatMessageProps) {
  const isUser = role === 'user'
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const formatTime = (ts: number) => {
    const now = Date.now()
    const diff = now - ts
    if (diff < 60000) return 'Just now'
    if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`
    return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  if (isUser) {
    return (
      <div className="chat-message flex flex-row-reverse gap-3 sm:gap-5 group">
        <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-xl shadow-primary/10">
          <svg className="w-4.5 h-4.5 sm:w-6 sm:h-6 text-on-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <div className="flex flex-col items-end gap-2 sm:gap-3 max-w-[85%]">
          <div className="bg-white/40 backdrop-blur-md border border-white/60 p-4 sm:p-6 rounded-2xl rounded-tr-none shadow-lg">
            <p className="font-body text-primary leading-relaxed text-sm sm:text-[17px]">{text}</p>
          </div>
          <div className="flex items-center gap-2 px-1">
            {timestamp && (
              <span className="text-[9px] sm:text-[10px] font-mono text-text-muted uppercase tracking-wider">{formatTime(timestamp)}</span>
            )}
            <button
              onClick={handleCopy}
              className="opacity-0 group-hover:opacity-100 text-text-muted hover:text-primary transition-all cursor-pointer"
              title="Copy"
            >
              {copied ? (
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="chat-message flex gap-3 sm:gap-5 group">
      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-xl transition-transform duration-300 group-hover:scale-105">
        <img src="/Pictures/Photo_1784721434246.png" alt="Uzair Raheem" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2 sm:gap-3 max-w-[85%]">
        <div className="glass-panel p-4 sm:p-6 rounded-2xl rounded-tl-none shadow-xl shadow-black/[0.02] border border-white/50">
          <p className="font-body text-primary leading-relaxed text-sm sm:text-[17px]">{text}</p>
        </div>
        <div className="flex items-center gap-2 px-1">
          <span className="text-[9px] sm:text-[10px] font-mono text-text-muted uppercase tracking-wider">
            Uzair's AI
          </span>
          {timestamp && (
            <>
              <span className="w-1 h-1 rounded-full bg-text-muted/30" />
              <span className="text-[9px] sm:text-[10px] font-mono text-text-muted uppercase tracking-wider">{formatTime(timestamp)}</span>
            </>
          )}
          <button
            onClick={handleCopy}
            className="opacity-0 group-hover:opacity-100 text-text-muted hover:text-primary transition-all cursor-pointer ml-1"
            title="Copy"
          >
            {copied ? (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
