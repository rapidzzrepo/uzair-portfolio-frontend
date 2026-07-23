import { useRef, useEffect } from 'react'

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  disabled: boolean
}

export default function ChatInput({ value, onChange, onSend, disabled }: ChatInputProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px'
    }
  }, [value])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && value.trim()) {
      e.preventDefault()
      onSend()
    }
  }

  return (
    <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6 md:p-10 bg-gradient-to-t from-surface via-surface/80 to-transparent z-10">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-white focus-within:ring-2 sm:focus-within:ring-4 focus-within:ring-primary/5 focus-within:border-primary/50 transition-all duration-500 shadow-2xl">
          <button
            className="p-2 sm:p-2.5 text-text-muted hover:text-primary transition-colors hover:bg-surface-low rounded-lg sm:rounded-xl cursor-pointer shrink-0 flex items-center justify-center"
            title="Attach file"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
            </svg>
          </button>
          <textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            disabled={disabled}
            rows={1}
            className="flex-1 py-2.5 sm:py-3 px-1 sm:px-2 bg-transparent border-none focus:ring-0 font-body text-primary resize-none placeholder:text-text-muted/60 min-h-[36px] sm:min-h-[44px] text-sm sm:text-[16px] outline-none"
          />
          <button
            onClick={onSend}
            disabled={disabled || !value.trim()}
            className="bg-[#C5A059] text-on-primary p-2.5 sm:p-3 rounded-lg sm:rounded-xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse-glow flex items-center justify-center shrink-0 disabled:opacity-20 disabled:hover:scale-100 disabled:cursor-not-allowed cursor-pointer"
            aria-label="Send message"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
        <div className="mt-3 sm:mt-4 hidden sm:flex justify-center">
          <div className="flex items-center gap-3 px-4 py-1 rounded-full bg-white/30 backdrop-blur-sm border border-white/50">
            <span className="text-[9px] text-text-muted font-mono uppercase tracking-[0.2em]">Uzair's AI</span>
            <span className="w-1 h-1 rounded-full bg-text-muted/30" />
            <span className="text-[9px] text-primary font-bold font-mono uppercase tracking-[0.1em]">Build 2.0</span>
          </div>
        </div>
      </div>
    </div>
  )
}
