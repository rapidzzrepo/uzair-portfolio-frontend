export default function TypingIndicator() {
  return (
    <div className="chat-message flex gap-3 sm:gap-5">
      <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-xl">
        <img src="/Pictures/Photo_1784721434246.png" alt="Uzair Raheem" className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-2 sm:gap-3">
        <div className="glass-panel p-4 sm:p-5 rounded-2xl rounded-tl-none shadow-xl border border-white/50 flex items-center gap-2.5">
          <span className="typing-dot w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/30" />
          <span className="typing-dot w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/30" />
          <span className="typing-dot w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary/30" />
        </div>
        <span className="text-[9px] sm:text-[10px] font-mono text-text-muted uppercase tracking-wider px-1">Uzair's AI is thinking...</span>
      </div>
    </div>
  )
}
