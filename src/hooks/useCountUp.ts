import { useEffect, useRef, useState } from 'react'

interface UseCountUpOptions {
  target: number
  duration?: number
}

export function useCountUp({ target, duration = 1800 }: UseCountUpOptions) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let animationFrame: number

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(element)
          const start = performance.now()

          const animate = (now: number) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * target))

            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate)
            }
          }

          animationFrame = requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [target, duration])

  return { ref, count }
}
