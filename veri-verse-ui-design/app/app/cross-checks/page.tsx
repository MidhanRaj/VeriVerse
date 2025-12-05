"use client"

import { useState } from "react"
import { HologramCard } from "@/components/hologram-card"
import { GitBranch, CheckCircle, XCircle, Clock, RefreshCw } from "lucide-react"
import { cn } from "@/lib/utils"

const crossChecks = [
  {
    id: "CC-001",
    input: "Financial report Q4 2024 summary",
    mainAgent: "GPT-Verify",
    validators: [
      { name: "Validator-A", status: "verified", confidence: 97 },
      { name: "Validator-B", status: "verified", confidence: 94 },
      { name: "Validator-C", status: "verified", confidence: 96 },
    ],
    consensus: "verified",
    timestamp: "5 minutes ago",
  },
  {
    id: "CC-002",
    input: "Smart contract audit request",
    mainAgent: "Code-Audit",
    validators: [
      { name: "Validator-A", status: "verified", confidence: 89 },
      { name: "Validator-B", status: "pending", confidence: null },
      { name: "Validator-C", status: "failed", confidence: 45 },
    ],
    consensus: "pending",
    timestamp: "12 minutes ago",
  },
  {
    id: "CC-003",
    input: "Medical data verification",
    mainAgent: "Medical-Check",
    validators: [
      { name: "Validator-A", status: "verified", confidence: 99 },
      { name: "Validator-B", status: "verified", confidence: 98 },
      { name: "Validator-C", status: "verified", confidence: 97 },
    ],
    consensus: "verified",
    timestamp: "1 hour ago",
  },
]

export default function CrossChecksPage() {
  const [selectedCheck, setSelectedCheck] = useState<string | null>(null)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "verified":
        return <CheckCircle className="w-4 h-4 text-neon-green" />
      case "failed":
        return <XCircle className="w-4 h-4 text-neon-pink" />
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500 animate-pulse" />
      default:
        return null
    }
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="neon-text-cyan">Cross</span>-Checks
          </h1>
          <p className="text-muted-foreground">Multi-agent verification consensus tracking</p>
        </div>

        {/* Cross-Check Cards */}
        <div className="space-y-6">
          {crossChecks.map((check) => (
            <HologramCard
              key={check.id}
              className="p-6"
              glowColor={check.consensus === "verified" ? "green" : check.consensus === "pending" ? "cyan" : "pink"}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <GitBranch className="w-5 h-5 text-neon-purple" />
                    <span className="font-mono text-sm text-muted-foreground">{check.id}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{check.input}</h3>
                  <p className="text-sm text-muted-foreground">Main Agent: {check.mainAgent}</p>
                </div>
                <div className="text-right">
                  <div
                    className={cn(
                      "px-3 py-1 rounded-full text-sm font-medium",
                      check.consensus === "verified" && "bg-neon-green/20 text-neon-green border border-neon-green/50",
                      check.consensus === "pending" && "bg-yellow-500/20 text-yellow-500 border border-yellow-500/50",
                      check.consensus === "failed" && "bg-neon-pink/20 text-neon-pink border border-neon-pink/50",
                    )}
                  >
                    {check.consensus.toUpperCase()}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{check.timestamp}</p>
                </div>
              </div>

              {/* Validators */}
              <div className="grid md:grid-cols-3 gap-4">
                {check.validators.map((validator, i) => (
                  <div
                    key={validator.name}
                    className={cn(
                      "p-4 rounded-lg border transition-all duration-300",
                      validator.status === "verified" && "border-neon-green/30 bg-neon-green/5",
                      validator.status === "pending" && "border-yellow-500/30 bg-yellow-500/5",
                      validator.status === "failed" && "border-neon-pink/30 bg-neon-pink/5",
                    )}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{validator.name}</span>
                      {getStatusIcon(validator.status)}
                    </div>
                    {validator.confidence !== null ? (
                      <div className="relative h-2 bg-black/30 rounded-full overflow-hidden">
                        <div
                          className={cn(
                            "absolute inset-y-0 left-0 rounded-full transition-all duration-1000",
                            validator.status === "verified" && "bg-neon-green",
                            validator.status === "failed" && "bg-neon-pink",
                          )}
                          style={{ width: `${validator.confidence}%` }}
                        />
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <RefreshCw className="w-3 h-3 animate-spin" />
                        Processing...
                      </div>
                    )}
                    {validator.confidence !== null && (
                      <p className="text-xs text-muted-foreground mt-1">Confidence: {validator.confidence}%</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Connection visualization */}
              <div className="mt-6 flex items-center justify-center gap-2">
                <div className="w-3 h-3 rounded-full bg-neon-purple shadow-[0_0_10px_var(--neon-purple)]" />
                <div className="flex-1 h-0.5 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-green max-w-xs" />
                <div className="w-3 h-3 rounded-full bg-neon-cyan shadow-[0_0_10px_var(--neon-cyan)]" />
                <div className="flex-1 h-0.5 bg-gradient-to-r from-neon-cyan via-neon-green to-neon-green max-w-xs" />
                <div
                  className={cn(
                    "w-3 h-3 rounded-full",
                    check.consensus === "verified" && "bg-neon-green shadow-[0_0_10px_var(--neon-green)]",
                    check.consensus === "pending" && "bg-yellow-500 shadow-[0_0_10px_#eab308] animate-pulse",
                    check.consensus === "failed" && "bg-neon-pink shadow-[0_0_10px_var(--neon-pink)]",
                  )}
                />
              </div>
            </HologramCard>
          ))}
        </div>
      </div>
    </div>
  )
}
