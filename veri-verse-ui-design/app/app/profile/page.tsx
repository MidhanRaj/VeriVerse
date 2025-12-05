"use client"

import { useState } from "react"
import { HologramCard } from "@/components/hologram-card"
import { Shield, Star, Clock, AlertTriangle, GitBranch, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const mockAgent = {
  name: "GPT-Verify Prime",
  id: "agent-gpt-001",
  avatar: "V",
  reputation: 94,
  totalRuns: 15847,
  successRate: 99.2,
  tags: ["General Purpose", "High Accuracy", "Fast Response", "Blockchain Verified"],
  timeline: [
    { type: "run", title: "Verification Run #15847", time: "2 minutes ago", status: "success" },
    { type: "proof", title: "Blockchain Proof Created", time: "5 minutes ago", status: "success" },
    { type: "crosscheck", title: "Cross-Check Completed", time: "12 minutes ago", status: "success" },
    { type: "dispute", title: "Dispute Resolved", time: "1 hour ago", status: "resolved" },
    { type: "run", title: "Verification Run #15846", time: "2 hours ago", status: "success" },
    { type: "proof", title: "Blockchain Proof Created", time: "3 hours ago", status: "success" },
  ],
}

export default function AgentProfilePage() {
  const [selectedTimelineItem, setSelectedTimelineItem] = useState<number | null>(null)

  return (
    <div className="p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="neon-text-cyan">Agent</span> Profile
          </h1>
          <p className="text-muted-foreground">Holographic identity card and activity timeline</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Identity Card */}
          <HologramCard className="p-8 float-animation" glowColor="cyan">
            <div className="relative">
              {/* Hologram shimmer overlay */}
              <div className="absolute inset-0 rounded-xl hologram-shimmer pointer-events-none" />

              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center text-5xl font-bold shadow-[0_0_40px_var(--neon-cyan)]">
                    {mockAgent.avatar}
                  </div>
                  {/* Animated ring */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="60"
                      fill="none"
                      stroke="var(--neon-cyan)"
                      strokeWidth="2"
                      strokeDasharray={`${mockAgent.reputation * 3.77} 377`}
                      className="drop-shadow-[0_0_10px_var(--neon-cyan)]"
                    />
                  </svg>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-neon-green/20 border border-neon-green text-neon-green text-xs font-bold">
                    {mockAgent.reputation}% REP
                  </div>
                </div>
              </div>

              {/* Name & ID */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold neon-text-cyan mb-1">{mockAgent.name}</h2>
                <p className="font-mono text-sm text-muted-foreground">{mockAgent.id}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-3 rounded-lg bg-black/30 border border-neon-purple/30">
                  <div className="text-2xl font-bold neon-text-purple">{mockAgent.totalRuns.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Total Runs</div>
                </div>
                <div className="text-center p-3 rounded-lg bg-black/30 border border-neon-green/30">
                  <div className="text-2xl font-bold neon-text-green">{mockAgent.successRate}%</div>
                  <div className="text-xs text-muted-foreground">Success Rate</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center">
                {mockAgent.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium",
                      "bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan",
                      "animate-in fade-in duration-500",
                    )}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </HologramCard>

          {/* Timeline */}
          <HologramCard className="p-6" glowColor="purple">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-neon-purple" />
              Activity Timeline
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink" />

              <div className="space-y-4">
                {mockAgent.timeline.map((item, i) => {
                  const icons = {
                    run: CheckCircle,
                    proof: Shield,
                    crosscheck: GitBranch,
                    dispute: AlertTriangle,
                  }
                  const Icon = icons[item.type as keyof typeof icons]
                  const colors = {
                    run: "text-neon-cyan border-neon-cyan/50",
                    proof: "text-neon-green border-neon-green/50",
                    crosscheck: "text-neon-purple border-neon-purple/50",
                    dispute: "text-neon-pink border-neon-pink/50",
                  }

                  return (
                    <div
                      key={i}
                      className={cn(
                        "relative flex gap-4 p-3 rounded-lg transition-all duration-300 cursor-pointer",
                        "hover:bg-white/5",
                        selectedTimelineItem === i && "bg-white/10",
                      )}
                      onClick={() => setSelectedTimelineItem(selectedTimelineItem === i ? null : i)}
                    >
                      <div
                        className={cn(
                          "w-10 h-10 rounded-full border-2 flex items-center justify-center",
                          "bg-background/80 z-10",
                          colors[item.type as keyof typeof colors],
                          "transition-all duration-300",
                          selectedTimelineItem === i && "scale-110 shadow-[0_0_15px_currentColor]",
                        )}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{item.title}</div>
                        <div className="text-xs text-muted-foreground">{item.time}</div>
                      </div>
                      <div
                        className={cn(
                          "px-2 py-1 rounded text-xs font-medium",
                          item.status === "success" && "bg-neon-green/20 text-neon-green",
                          item.status === "resolved" && "bg-neon-purple/20 text-neon-purple",
                        )}
                      >
                        {item.status}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </HologramCard>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {[
            { icon: Shield, label: "Proofs Created", value: "2,847", color: "cyan" },
            { icon: GitBranch, label: "Cross-Checks", value: "1,293", color: "purple" },
            { icon: AlertTriangle, label: "Disputes Won", value: "47/52", color: "pink" },
            { icon: Star, label: "User Rating", value: "4.9/5", color: "green" },
          ].map((stat, i) => (
            <HologramCard
              key={stat.label}
              className="p-4 text-center"
              glowColor={stat.color as "cyan" | "purple" | "pink" | "green"}
            >
              <stat.icon className={`w-6 h-6 mx-auto mb-2 neon-text-${stat.color}`} />
              <div className={`text-2xl font-bold neon-text-${stat.color}`}>{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </HologramCard>
          ))}
        </div>
      </div>
    </div>
  )
}
