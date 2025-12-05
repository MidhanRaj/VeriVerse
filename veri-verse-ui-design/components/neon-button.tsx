"use client"

import { useState, type ReactNode, type MouseEvent } from "react"
import { cn } from "@/lib/utils"

interface NeonButtonProps {
  children: ReactNode
  variant?: "cyan" | "purple" | "pink" | "green"
  size?: "sm" | "md" | "lg"
  className?: string
  onClick?: () => void
}

export function NeonButton({ children, variant = "cyan", size = "md", className, onClick }: NeonButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])

  const variantStyles = {
    cyan: "bg-neon-cyan/10 border-neon-cyan text-neon-cyan hover:bg-neon-cyan/20 hover:shadow-[0_0_30px_var(--neon-cyan)]",
    purple:
      "bg-neon-purple/10 border-neon-purple text-neon-purple hover:bg-neon-purple/20 hover:shadow-[0_0_30px_var(--neon-purple)]",
    pink: "bg-neon-pink/10 border-neon-pink text-neon-pink hover:bg-neon-pink/20 hover:shadow-[0_0_30px_var(--neon-pink)]",
    green:
      "bg-neon-green/10 border-neon-green text-neon-green hover:bg-neon-green/20 hover:shadow-[0_0_30px_var(--neon-green)]",
  }

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const id = Date.now()

    setRipples((prev) => [...prev, { x, y, id }])
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id))
    }, 600)

    onClick?.()
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden rounded-lg border-2 font-semibold uppercase tracking-wider",
        "transition-all duration-300 ease-out",
        "shadow-[0_0_15px_var(--neon-cyan)]",
        "hover:scale-105 active:scale-95",
        "before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        "before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-[ripple_0.6s_ease-out]"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </button>
  )
}
