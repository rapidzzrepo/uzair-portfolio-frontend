import { type ReactNode } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  threshold?: number
  rootMargin?: string
}

export default function ScrollReveal({
  children,
  className = '',
  threshold,
  rootMargin,
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold, rootMargin })

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
