"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { AnimatedBackground } from "@/components/animated-background"
import { HolographicGlobe } from "@/components/holographic-globe"
import { GlitchText } from "@/components/glitch-text"
import { NeonButton } from "@/components/neon-button"
import { NeonDivider } from "@/components/neon-divider"
import { FeatureCard } from "@/components/feature-card"
import { Cpu, GitBranch, Lock, ChevronDown } from "lucide-react"

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4">
        {/* Light rays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-1 h-[150vh] origin-top opacity-20"
              style={{
                background: `linear-gradient(to bottom, var(--neon-cyan), transparent)`,
                transform: `rotate(${i * 45}deg)`,
                animation: `beam-pulse ${2 + i * 0.3}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        {/* Globe */}
        <div
          className="absolute w-[500px] h-[500px]"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
            opacity: Math.max(0, 1 - scrollY * 0.002),
          }}
        >
          <HolographicGlobe />
        </div>

        {/* Content */}
        <div
          className={`relative z-10 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-4 inline-block px-4 py-1 rounded-full border border-neon-cyan/50 bg-neon-cyan/10 text-neon-cyan text-sm">
            The Future of AI Trust
          </div>

          <GlitchText
            text="VERIVERSE"
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-wider text-white mb-6"
          />

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8">
            The Global Trust Layer for <span className="neon-text-purple">AI Agents</span>
          </p>

          <p className="text-base text-muted-foreground max-w-xl mx-auto mb-12">
            Verifiable decisions. Cross-checked intelligence. Blockchain-backed proof. Welcome to the new standard of AI
            accountability.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/app/run">
              <NeonButton variant="cyan" size="lg">
                Launch App
              </NeonButton>
            </Link>
            <NeonButton variant="purple" size="lg">
              Watch Demo
            </NeonButton>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-neon-cyan drop-shadow-[0_0_10px_var(--neon-cyan)]" />
        </div>
      </section>

      <NeonDivider />

      {/* Features Section */}
      <section
        className="relative py-24 px-4"
        style={{
          transform: `translateY(${Math.max(0, 100 - scrollY * 0.2)}px)`,
          opacity: Math.min(1, scrollY * 0.003),
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-text-cyan">Powered</span> by Trust
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every AI decision verified. Every output cross-checked. Every proof immutable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Verifiable AI"
              description="AI outputs are cryptographically signed and timestamped, creating an immutable audit trail."
              icon={<Cpu className="w-5 h-5" />}
              animation="ai-core"
              delay={0}
            />
            <FeatureCard
              title="Cross-Checked Decisions"
              description="Multiple AI agents verify each decision, ensuring consensus and eliminating single points of failure."
              icon={<GitBranch className="w-5 h-5" />}
              animation="nodes"
              delay={200}
            />
            <FeatureCard
              title="Proof on Blockchain"
              description="Every verification is permanently recorded on-chain, providing transparent and tamper-proof evidence."
              icon={<Lock className="w-5 h-5" />}
              animation="cube"
              delay={400}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: "10M+", label: "Verifications" },
              { value: "99.9%", label: "Accuracy" },
              { value: "500+", label: "AI Agents" },
              { value: "<100ms", label: "Latency" },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 glass-panel rounded-xl neon-border-animated"
                style={{ animationDelay: `${i * 0.5}s` }}
              >
                <div className="text-4xl md:text-5xl font-bold neon-text-cyan mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="neon-text-purple">Trust</span> AI?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the revolution in AI accountability. Start verifying today.
          </p>
          <Link href="/app/run">
            <NeonButton variant="cyan" size="lg">
              Get Started Free
            </NeonButton>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 border-t border-neon-cyan/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center">
              <span className="text-sm font-bold text-white">V</span>
            </div>
            <span className="font-bold">VeriVerse</span>
          </div>
          <div className="text-sm text-muted-foreground">© 2025 VeriVerse. The Global Trust Layer for AI.</div>
        </div>
      </footer>
    </main>
  )
}
