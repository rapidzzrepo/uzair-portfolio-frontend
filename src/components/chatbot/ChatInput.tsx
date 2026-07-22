import { useRef } from 'react'

interface ChatInputProps {
  value: string
  onChange: (value: string) => void
  onSend: () => void
  disabled: boolean
}

export default function ChatInput({ value, onChange, onSend, disabled }: ChatInputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && value.trim()) {
      e.preventDefault()
      onSend()
    }
  }

  return (
    <div className="border-t border-outline-var/10 bg-surface/80 backdrop-blur-md px-4 sm:px-6 md:px-12 lg:px-20 py-3 shrink-0">
      <div className="max-w-3xl mx-auto flex items-center gap-3 bg-surface-high border border-outline-var/10 rounded-full px-4 py-2">
        <div className="w-6 h-6 rounded-full bg-cta-gold/10 flex items-center justify-center shrink-0">
          <svg viewBox="0 0 20 20" className="w-3.5 h-3.5">
            <rect x="3" y="5" width="14" height="10" rx="3" fill="#C5A059" />
            <circle cx="8" cy="10" r="1.5" fill="white" />
            <circle cx="12" cy="10" r="1.5" fill="white" />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          disabled={disabled}
          className="chat-input flex-1 bg-transparent text-sm font-body text-brand-dark placeholder:text-brand-gray/60"
        />
        <button
          onClick={onSend}
          disabled={disabled || !value.trim()}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-dark text-on-primary shrink-0 disabled:opacity-30 transition-opacity cursor-pointer"
          aria-label="Send message"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"
            />
          </svg>
        </button>
      </div>
      <p className="text-center text-[10px] text-brand-gray/40 mt-2">
        Powered by Uzair AI
      </p>
    </div>
  )
}
