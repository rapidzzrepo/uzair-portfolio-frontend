import { useState, useRef, useEffect, useCallback } from 'react'
import ChatHeader from '../components/chatbot/ChatHeader'
import ChatMessage from '../components/chatbot/ChatMessage'
import ChatInput from '../components/chatbot/ChatInput'
import TypingIndicator from '../components/chatbot/TypingIndicator'
import QuickPrompts from '../components/chatbot/QuickPrompts'

type Message = {
  id: string
  role: 'user' | 'ai'
  text: string
  timestamp: number
}

const STORAGE_KEY = 'uzair-ai-chat'

const ERROR_MESSAGES: Record<number, string> = {
  429: "I'm getting a lot of questions right now. Give me a sec and try again.",
  503: "Hmm, my machinery behind the scenes just hit a snag. Give it another go in a moment?",
}

const NETWORK_ERROR = "Couldn't reach the AI. Check your connection and try again."

const welcomeMessage: Message = {
  id: 'welcome',
  role: 'ai',
  text: "Hello, I am Uzair Rahim's AI assistant. I have been trained on his professional history — 6+ years in software engineering, 3+ years in AI automation, multi-agent systems, and full-stack architecture. How can I assist you today?",
  timestamp: Date.now(),
}

function loadMessages(): Message[] | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      const parsed = JSON.parse(stored) as Message[]
      if (parsed.length > 0) return parsed
    }
  } catch { /* ignore */ }
  return null
}

function saveMessages(messages: Message[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages))
  } catch { /* ignore */ }
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>(() => {
    return loadMessages() || [welcomeMessage]
  })
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showPrompts, setShowPrompts] = useState(() => {
    return !(loadMessages() && loadMessages()!.length > 1)
  })
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  useEffect(() => {
    saveMessages(messages)
  }, [messages])

  const handleClear = useCallback(() => {
    setMessages([welcomeMessage])
    setShowPrompts(true)
    localStorage.removeItem(STORAGE_KEY)
  }, [])

  const handleSend = async (text?: string) => {
    const messageText = (text || input).trim()
    if (!messageText || isTyping) return

    setShowPrompts(false)

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      text: messageText,
      timestamp: Date.now(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    try {
      const res = await fetch('/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: messageText }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        const text = ERROR_MESSAGES[res.status]
          || body.message
          || body.detail
          || `Something went wrong (${res.status}). Try again.`
        setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: 'ai', text, timestamp: Date.now() }])
      } else {
        const data = await res.json()
        setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: 'ai', text: data.answer, timestamp: Date.now() }])
      }
    } catch {
      setMessages((prev) => [...prev, { id: crypto.randomUUID(), role: 'ai', text: NETWORK_ERROR, timestamp: Date.now() }])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="chat-container h-screen flex flex-col overflow-hidden">
      <ChatHeader onClear={handleClear} messageCount={messages.length} />

      <div className="flex-1 overflow-y-auto chat-scroll px-4 sm:px-6 md:px-8 relative">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-10 pb-40 pt-2">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} role={msg.role} text={msg.text} timestamp={msg.timestamp} />
          ))}
          {showPrompts && !isTyping && (
            <QuickPrompts onSelect={handleSend} />
          )}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <ChatInput
        value={input}
        onChange={setInput}
        onSend={() => handleSend()}
        disabled={isTyping}
      />
    </div>
  )
}
