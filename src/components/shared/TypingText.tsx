'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export function TypingText({
  text,
  speed = 20,
  farewell = false,
}: {
  text: string
  speed?: number
  farewell?: boolean
}) {
  const [displayedText, setDisplayedText] = useState('')
  const [isDone, setIsDone] = useState(false)
  const router = useRouter()

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i))
      i++
      if (i >= text.length) {
        clearInterval(timer)
        setIsDone(true)
      }
    }, speed)

    return () => clearInterval(timer)
  }, [text, speed])

  return (
    <div className='flex flex-col items-center justify-center text-center space-y-4'>
      <span className='text-lg text-purple-600 leading-relaxed text-justify'>
        {displayedText}
      </span>

      {isDone && farewell && (
        <button
          onClick={() => router.push('/')}
          className='mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-xl transition duration-300'
        >
          Back to Lobby
        </button>
      )}
    </div>
  )
}
