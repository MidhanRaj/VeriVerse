"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface GlitchTextProps {
  text: string
  className?: string
  as?: "h1" | "h2" | "h3" | "span"
}

export function GlitchText({ text, className, as: Component = "h1" }: GlitchTextProps) {
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Component
      className={cn("relative inline-block", isGlitching && "animate-[glitch_0.3s_ease-in-out]", className)}
      style={{
        textShadow: `
          0 0 10px var(--neon-cyan),
          0 0 20px var(--neon-cyan),
          0 0 40px var(--neon-cyan),
          0 0 80px var(--neon-purple)
        `,
      }}
    >
      <span className="relative z-10">{text}</span>
      <span
        className="absolute top-0 left-0 opacity-70"
        style={{
          color: "var(--neon-pink)",
          clipPath: isGlitching ? "inset(30% 0 40% 0)" : "none",
          transform: isGlitching ? "translate(-2px, 0)" : "none",
        }}
        aria-hidden="true"
      >
        {text}
      </span>
      <span
        className="absolute top-0 left-0 opacity-70"
        style={{
          color: "var(--neon-cyan)",
          clipPath: isGlitching ? "inset(60% 0 10% 0)" : "none",
          transform: isGlitching ? "translate(2px, 0)" : "none",
        }}
        aria-hidden="true"
      >
        {text}
      </span>
    </Component>
  )
}
