interface ChatMessageProps {
  role: 'user' | 'ai'
  text: string
}

export default function ChatMessage({ role, text }: ChatMessageProps) {
  const isUser = role === 'user'

  return (
    <div className={`chat-message flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] sm:max-w-[75%] px-4 py-2.5 text-sm font-body leading-relaxed ${
          isUser
            ? 'bg-brand-dark text-on-primary rounded-2xl rounded-br-sm'
            : 'bg-surface-high text-brand-dark rounded-2xl rounded-bl-sm'
        }`}
      >
        {text}
      </div>
    </div>
  )
}
