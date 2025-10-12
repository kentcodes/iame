"use client"

import { useEffect, useState } from "react"

interface AnimatedNameProps {
  name: string
  className?: string
}

export function AnimatedName({ name, className = "" }: AnimatedNameProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isInitialAnimationDone, setIsInitialAnimationDone] = useState(false)

  useEffect(() => {
    // Trigger initial animation after component mounts
    const timer = setTimeout(() => {
      setIsHovered(true)

      // Reset after animation completes
      const resetTimer = setTimeout(() => {
        setIsHovered(false)
        setIsInitialAnimationDone(true)
      }, 2000)

      return () => clearTimeout(resetTimer)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <span
      className={`inline-block ${className}`}
      onMouseEnter={() => isInitialAnimationDone && setIsHovered(true)}
      onMouseLeave={() => isInitialAnimationDone && setIsHovered(false)}
    >
      {name.split("").map((letter, index) => (
        <span
          key={index}
          className={`inline-block transition-all duration-300 ${isHovered ? "animate-letter-bounce" : ""}`}
          style={{
            animationDelay: `${index * 0.05}s`,
            animationFillMode: "both",
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  )
}
