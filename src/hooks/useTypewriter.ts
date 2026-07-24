import { useState, useEffect } from 'react'

export function useTypewriter(text: string, speed = 120, delay = 500) {
  const [displayed, setDisplayed] = useState('')
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    let index = 0

    const type = () => {
      if (index < text.length) {
        setDisplayed(text.slice(0, index + 1))
        index++
        timeout = setTimeout(type, speed)
      } else {
        setIsDone(true)
      }
    }

    timeout = setTimeout(type, delay)
    return () => clearTimeout(timeout)
  }, [text, speed, delay])

  return { displayed, isDone }
}
