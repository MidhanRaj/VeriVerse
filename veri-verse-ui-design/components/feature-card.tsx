"use client"

import type { ReactNode } from "react"
import { HologramCard } from "./hologram-card"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
  animation: "ai-core" | "nodes" | "cube"
  delay?: number
}

function AICoreSVG() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="var(--neon-cyan)" />
          <stop offset="100%" stopColor="var(--neon-purple)" />
        </linearGradient>
      </defs>
      <circle
        cx="50"
        cy="50"
        r="30"
        fill="none"
        stroke="url(#aiGrad)"
        strokeWidth="2"
        className="animate-[pulse-glow_2s_ease-in-out_infinite]"
      />
      <circle
        cx="50"
        cy="50"
        r="20"
        fill="none"
        stroke="var(--neon-cyan)"
        strokeWidth="1"
        strokeDasharray="5 5"
        className="origin-center animate-spin"
        style={{ animationDuration: "10s" }}
      />
      <circle cx="50" cy="50" r="8" fill="var(--neon-cyan)" className="animate-pulse" />
      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
        <line
          key={i}
          x1={(50 + Math.cos((angle * Math.PI) / 180) * 35).toFixed(4)}
          y1={(50 + Math.sin((angle * Math.PI) / 180) * 35).toFixed(4)}
          x2={(50 + Math.cos((angle * Math.PI) / 180) * 45).toFixed(4)}
          y2={(50 + Math.sin((angle * Math.PI) / 180) * 45).toFixed(4)}
          stroke="var(--neon-pink)"
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </svg>
  )
}

function NodesSVG() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Connection lines */}
      <line x1="30" y1="30" x2="70" y2="30" stroke="var(--neon-cyan)" strokeWidth="1" opacity="0.5" />
      <line x1="30" y1="30" x2="50" y2="70" stroke="var(--neon-cyan)" strokeWidth="1" opacity="0.5" />
      <line x1="70" y1="30" x2="50" y2="70" stroke="var(--neon-cyan)" strokeWidth="1" opacity="0.5" />
      <line x1="30" y1="30" x2="50" y2="50" stroke="var(--neon-purple)" strokeWidth="1" opacity="0.5" />
      <line x1="70" y1="30" x2="50" y2="50" stroke="var(--neon-purple)" strokeWidth="1" opacity="0.5" />
      <line x1="50" y1="70" x2="50" y2="50" stroke="var(--neon-purple)" strokeWidth="1" opacity="0.5" />

      {/* Nodes */}
      <circle cx="30" cy="30" r="8" fill="var(--neon-cyan)" filter="url(#glow)" className="animate-pulse" />
      <circle
        cx="70"
        cy="30"
        r="8"
        fill="var(--neon-cyan)"
        filter="url(#glow)"
        className="animate-pulse"
        style={{ animationDelay: "0.3s" }}
      />
      <circle
        cx="50"
        cy="70"
        r="8"
        fill="var(--neon-cyan)"
        filter="url(#glow)"
        className="animate-pulse"
        style={{ animationDelay: "0.6s" }}
      />
      <circle
        cx="50"
        cy="50"
        r="10"
        fill="var(--neon-purple)"
        filter="url(#glow)"
        className="animate-pulse"
        style={{ animationDelay: "0.9s" }}
      />

      {/* Check marks */}
      <path d="M26 30 L29 33 L34 27" stroke="white" strokeWidth="2" fill="none" />
      <path d="M66 30 L69 33 L74 27" stroke="white" strokeWidth="2" fill="none" />
      <path d="M46 70 L49 73 L54 67" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  )
}

function CubeSVG() {
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <g className="origin-center animate-spin" style={{ animationDuration: "8s" }}>
        {/* Cube faces */}
        <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="none" stroke="var(--neon-cyan)" strokeWidth="2" />
        <line x1="50" y1="20" x2="50" y2="50" stroke="var(--neon-cyan)" strokeWidth="1" opacity="0.5" />
        <line x1="80" y1="35" x2="50" y2="50" stroke="var(--neon-cyan)" strokeWidth="1" opacity="0.5" />
        <line x1="20" y1="35" x2="50" y2="50" stroke="var(--neon-cyan)" strokeWidth="1" opacity="0.5" />
        <polygon points="50,50 80,35 80,65 50,80" fill="var(--neon-purple)" opacity="0.2" />
        <polygon points="50,50 20,35 20,65 50,80" fill="var(--neon-cyan)" opacity="0.1" />
      </g>
      {/* Lock icon */}
      <rect x="42" y="45" width="16" height="14" rx="2" fill="var(--neon-green)" className="animate-pulse" />
      <path d="M45 45 V40 A5 5 0 0 1 55 40 V45" fill="none" stroke="var(--neon-green)" strokeWidth="2" />
      <circle cx="50" cy="52" r="2" fill="white" />
    </svg>
  )
}

export function FeatureCard({ title, description, icon, animation, delay = 0 }: FeatureCardProps) {
  const AnimationComponent = {
    "ai-core": AICoreSVG,
    nodes: NodesSVG,
    cube: CubeSVG,
  }[animation]

  return (
    <HologramCard
      className="p-6 float-slow-animation"
      glowColor={animation === "ai-core" ? "cyan" : animation === "nodes" ? "purple" : "green"}
    >
      <div className="relative z-10">
        <div className="w-24 h-24 mx-auto mb-4">
          <AnimationComponent />
        </div>
        <div className="flex items-center justify-center gap-2 mb-3 text-neon-cyan">
          {icon}
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="text-center text-muted-foreground">{description}</p>
      </div>
    </HologramCard>
  )
}
