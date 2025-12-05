"use client"

import type React from "react"

import { useState, type ReactNode, useRef } from "react"
import { cn } from "@/lib/utils"

interface HologramCardProps {
  children: ReactNode
  className?: string
  glowColor?: "cyan" | "purple" | "pink" | "green" | "red"
}

export function HologramCard({ children, className, glowColor = "cyan" }: HologramCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)

  const glowColors = {
    cyan: "shadow-[0_0_30px_var(--neon-cyan)] border-neon-cyan/50",
    purple: "shadow-[0_0_30px_var(--neon-purple)] border-neon-purple/50",
    pink: "shadow-[0_0_30px_var(--neon-pink)] border-neon-pink/50",
    green: "shadow-[0_0_30px_var(--neon-green)] border-neon-green/50",
    red: "shadow-[0_0_30px_rgba(239,68,68,0.8)] border-red-500/50",
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    setRotateX((y - centerY) / 10)
    setRotateY((centerX - x) / 10)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative rounded-xl border backdrop-blur-xl",
        "bg-gradient-to-br from-white/10 via-white/5 to-transparent",
        "transition-all duration-200 ease-out",
        "hover:scale-[1.02]",
        glowColors[glowColor],
        className,
      )}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(
              105deg,
              transparent 40%,
              rgba(255, 255, 255, 0.1) 45%,
              rgba(255, 255, 255, 0.2) 50%,
              rgba(255, 255, 255, 0.1) 55%,
              transparent 60%
            )`,
            backgroundSize: "200% 200%",
            animation: "hologram-shimmer 3s linear infinite",
          }}
        />
      </div>
      {children}
    </div>
  )
}
