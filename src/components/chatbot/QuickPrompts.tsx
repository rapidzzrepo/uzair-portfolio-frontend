interface QuickPromptsProps {
  onSelect: (text: string) => void
}

const prompts = [
  'What are your skills?',
  'How can I contact you?',
  'Tell me about your projects',
  'What services do you offer?',
]

export default function QuickPrompts({ onSelect }: QuickPromptsProps) {
  return (
    <div className="flex flex-col items-center gap-3 py-4 sm:py-8">
      <div className="flex flex-col items-center gap-1.5 mb-2 sm:mb-4">
        <span className="text-text-muted text-[10px] sm:text-xs uppercase tracking-widest font-semibold">Quick start</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 w-full max-w-lg px-2 sm:px-0">
        {prompts.map((prompt, i) => (
          <button
            key={prompt}
            onClick={() => onSelect(prompt)}
            className="quick-float-btn animate-float-slow flex items-center justify-center gap-2 sm:gap-2.5 px-4 sm:px-5 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold text-primary rounded-xl cursor-pointer text-center"
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 text-cta-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            {prompt}
          </button>
        ))}
      </div>
    </div>
  )
}
