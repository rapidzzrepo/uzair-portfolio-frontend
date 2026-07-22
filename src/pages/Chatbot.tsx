import { useState, useRef, useEffect } from 'react'
import ChatHeader from '../components/chatbot/ChatHeader'
import ChatMessage from '../components/chatbot/ChatMessage'
import ChatInput from '../components/chatbot/ChatInput'
import TypingIndicator from '../components/chatbot/TypingIndicator'
import QuickPrompts from '../components/chatbot/QuickPrompts'

type Message = {
  id: string
  role: 'user' | 'ai'
  text: string
}

type ResponseRule = {
  keywords: string[]
  responses: string[]
}

const responseRules: ResponseRule[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'good morning', 'good evening', 'howdy', 'greetings'],
    responses: [
      "Hey there! I'm Uzair's AI assistant. How can I help you today?",
      "Hello! Welcome. Ask me anything about Uzair's skills, experience, or services.",
      "Hi! Great to have you here. What would you like to know?",
    ],
  },
  {
    keywords: ['skill', 'tech', 'stack', 'language', 'framework', 'tool', 'know', 'use'],
    responses: [
      "Uzair works with a powerful tech stack: React, TypeScript, Node.js, Python, Go, AWS, Docker, Kubernetes, PostgreSQL, MongoDB, and many more. He's passionate about choosing the right tool for the job.",
      "His technical arsenal spans frontend (React, Next.js, TypeScript), backend (Node.js, Python, Go), cloud infrastructure (AWS, GCP), and DevOps (Docker, Kubernetes, CI/CD). He's always learning and adapting.",
      "Uzair's core technologies include React, TypeScript, Python, AWS, and Docker — but he's comfortable picking up whatever a project needs. He believes in pragmatic technology choices over hype.",
    ],
  },
  {
    keywords: ['experience', 'year', 'background', 'career', 'work history', 'long'],
    responses: [
      "Uzair brings over 8 years of software engineering experience, having worked across startups and enterprise companies. He's shipped 200+ projects and helped 50+ startups raise funding through technical excellence.",
      "With a decade of experience in the industry, Uzair has evolved from a full-stack developer to a systems architect. He's led teams, built scalable platforms, and mentored junior developers along the way.",
    ],
  },
  {
    keywords: ['service', 'hire', 'work', 'offer', 'do', 'help', 'build', 'project'],
    responses: [
      "Uzair specializes in full-stack development, AI integration, cloud architecture, and technical consulting. Whether you need a MVP, a scalable platform, or a complete system overhaul — he's got you covered.",
      "His services include: Full-Stack Development, AI/ML Integration, Cloud Infrastructure Design, Technical Architecture Consulting, and MVP Development. He's particularly skilled at turning complex ideas into clean, working systems.",
      "Uzair can help with everything from concept to deployment — web apps, mobile apps, AI integration, cloud infrastructure, and system design. He focuses on building things that are scalable, secure, and maintainable.",
    ],
  },
  {
    keywords: ['contact', 'email', 'reach', 'touch', 'hire', 'freelance', 'available'],
    responses: [
      "You can reach Uzair through LinkedIn, GitHub, or by booking a call directly from the homepage. He's always open to discussing new projects and opportunities.",
      "The best way to connect is through the 'Book A Call' button on the homepage, or find him on LinkedIn and GitHub. He typically responds within 24 hours.",
    ],
  },
  {
    keywords: ['portfolio', 'project', 'showcase', 'work', 'built', 'create', 'made'],
    responses: [
      "Check out the Featured Projects section on the homepage! Two highlights are the Helix Trading Engine (a high-performance trading system) and Sentinel AI Core (an AI-powered security platform).",
      "Uzair's portfolio includes 200+ completed projects. His notable works include the Helix Trading Engine and Sentinel AI Core. Visit the homepage to see detailed case studies.",
    ],
  },
  {
    keywords: ['thank', 'thanks', 'awesome', 'great', 'perfect', 'cool', 'nice'],
    responses: [
      "Happy to help! Is there anything else you'd like to know?",
      "Glad I could help! Feel free to ask anything else.",
      "You're welcome! Don't hesitate to ask if you have more questions.",
    ],
  },
  {
    keywords: ['price', 'cost', 'rate', 'budget', 'charge'],
    responses: [
      "Pricing depends on the project scope and complexity. Uzair offers flexible engagement models — fixed-price for well-defined projects, and hourly/daily rates for ongoing work. Book a call to discuss your specific needs.",
    ],
  },
  {
    keywords: ['ai', 'artificial intelligence', 'machine learning', 'ml', 'llm', 'gpt'],
    responses: [
      "Uzair has deep experience with AI integration — from building custom LLM pipelines to implementing computer vision systems. He's worked with OpenAI, Anthropic, and open-source models. He believes in practical AI that solves real problems.",
      "AI is one of Uzair's core specializations. He's integrated AI into trading systems, security platforms, and enterprise workflows. He focuses on responsible, production-ready AI implementations.",
    ],
  },
]

const fallbackResponses = [
  "That's an interesting question! For detailed inquiries, I'd recommend reaching out to Uzair directly through the contact options on the homepage.",
  "I'm not sure I have the best answer for that, but Uzair would love to discuss it. You can book a call from the homepage!",
  "Great question! While I can't cover everything, Uzair's portfolio and case studies on the homepage might have what you're looking for.",
  "I appreciate the question! For more specific details, feel free to connect with Uzair on LinkedIn or book a call.",
]

function getAIResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase()

  for (const rule of responseRules) {
    if (rule.keywords.some((kw) => lower.includes(kw))) {
      return rule.responses[Math.floor(Math.random() * rule.responses.length)]
    }
  }

  return fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)]
}

const welcomeMessage: Message = {
  id: 'welcome',
  role: 'ai',
  text: "Hi! I'm Uzair's AI assistant. Ask me anything about his skills, experience, or services.",
}

export default function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([welcomeMessage])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showPrompts, setShowPrompts] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  const handleSend = (text?: string) => {
    const messageText = (text || input).trim()
    if (!messageText || isTyping) return

    setShowPrompts(false)

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: 'user',
      text: messageText,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    const delay = 1200 + Math.random() * 800
    setTimeout(() => {
      const aiMessage: Message = {
        id: crypto.randomUUID(),
        role: 'ai',
        text: getAIResponse(messageText),
      }
      setMessages((prev) => [...prev, aiMessage])
      setIsTyping(false)
    }, delay)
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col">
      <ChatHeader />

      <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto flex flex-col gap-4 py-6">
          {messages.map((msg) => (
            <ChatMessage key={msg.id} role={msg.role} text={msg.text} />
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
