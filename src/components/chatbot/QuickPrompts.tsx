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
    <div className="flex flex-wrap gap-2 justify-center py-2">
      {prompts.map((prompt) => (
        <button
          key={prompt}
          onClick={() => onSelect(prompt)}
          className="border border-outline-var/20 rounded-full px-4 py-2 text-xs text-brand-gray hover:border-cta-gold hover:text-cta-gold transition-all cursor-pointer"
        >
          {prompt}
        </button>
      ))}
    </div>
  )
}
