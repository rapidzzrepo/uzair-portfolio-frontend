export default function TypingIndicator() {
  return (
    <div className="chat-message flex justify-start">
      <div className="bg-surface-high rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
        <span className="typing-dot w-2 h-2 rounded-full bg-brand-gray" />
        <span className="typing-dot w-2 h-2 rounded-full bg-brand-gray" />
        <span className="typing-dot w-2 h-2 rounded-full bg-brand-gray" />
      </div>
    </div>
  )
}
