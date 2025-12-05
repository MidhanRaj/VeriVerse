"use client"

import { useState } from "react"
import { HologramCard } from "@/components/hologram-card"
import { AlertTriangle, CheckCircle, XCircle, Clock, ChevronDown, MessageSquare, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

const disputes = [
  {
    id: "DSP-001",
    title: "Output Accuracy Challenge",
    status: "pending",
    challenger: "User-0x8a3f",
    agent: "GPT-Verify",
    timestamp: "2 hours ago",
    originalOutput: "The verification passed with 98% confidence.",
    challengeReason: "Output doesn't match expected format for financial data.",
    crossCheckResult: null,
  },
  {
    id: "DSP-002",
    title: "Data Integrity Dispute",
    status: "resolved",
    challenger: "User-0x2b1c",
    agent: "Data-Check",
    timestamp: "1 day ago",
    originalOutput: "Data validation complete. No anomalies detected.",
    challengeReason: "Missing validation for edge cases in dataset.",
    crossCheckResult: "resolved_for_challenger",
    verdict: "Challenge upheld. Agent updated.",
  },
  {
    id: "DSP-003",
    title: "Verification Timeout",
    status: "rejected",
    challenger: "User-0x9d4e",
    agent: "Fact-Scanner",
    timestamp: "3 days ago",
    originalOutput: "Processing timeout. Please retry.",
    challengeReason: "System error should not affect reputation score.",
    crossCheckResult: "resolved_for_agent",
    verdict: "Challenge rejected. Timeout was user-side.",
  },
]

export default function DisputeCenterPage() {
  const [expandedDispute, setExpandedDispute] = useState<string | null>(null)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-500" />
      case "resolved":
        return <CheckCircle className="w-5 h-5 text-neon-green" />
      case "rejected":
        return <XCircle className="w-5 h-5 text-neon-pink" />
      default:
        return <AlertTriangle className="w-5 h-5" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "border-yellow-500/50 bg-yellow-500/10 text-yellow-500"
      case "resolved":
        return "border-neon-green/50 bg-neon-green/10 text-neon-green"
      case "rejected":
        return "border-neon-pink/50 bg-neon-pink/10 text-neon-pink"
      default:
        return "border-muted"
    }
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="neon-text-cyan">Dispute</span> Center
          </h1>
          <p className="text-muted-foreground">Challenge AI outputs and resolve verification disputes</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            { label: "Pending", count: 1, color: "yellow" },
            { label: "Resolved", count: 12, color: "green" },
            { label: "Rejected", count: 3, color: "pink" },
          ].map((stat) => (
            <HologramCard
              key={stat.label}
              className="p-4 text-center"
              glowColor={stat.color === "yellow" ? "cyan" : (stat.color as "green" | "pink")}
            >
              <div
                className={cn(
                  "text-3xl font-bold",
                  `text-${stat.color === "yellow" ? "yellow" : `neon-${stat.color}`}-500`,
                )}
              >
                {stat.count}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </HologramCard>
          ))}
        </div>

        {/* Disputes List */}
        <div className="space-y-4">
          {disputes.map((dispute) => (
            <HologramCard
              key={dispute.id}
              className={cn(
                "overflow-hidden transition-all duration-300",
                dispute.status === "pending" && "glitch-effect",
              )}
              glowColor={dispute.status === "resolved" ? "green" : dispute.status === "rejected" ? "pink" : "cyan"}
            >
              {/* Header */}
              <button
                onClick={() => setExpandedDispute(expandedDispute === dispute.id ? null : dispute.id)}
                className="w-full p-4 flex items-center gap-4 text-left hover:bg-white/5 transition-colors"
              >
                {getStatusIcon(dispute.status)}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-sm text-muted-foreground">{dispute.id}</span>
                    <span className={cn("px-2 py-0.5 rounded-full text-xs border", getStatusColor(dispute.status))}>
                      {dispute.status}
                    </span>
                  </div>
                  <div className="font-semibold mt-1">{dispute.title}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">{dispute.agent}</div>
                  <div className="text-xs text-muted-foreground">{dispute.timestamp}</div>
                </div>
                <ChevronDown
                  className={cn(
                    "w-5 h-5 transition-transform duration-300",
                    expandedDispute === dispute.id && "rotate-180",
                  )}
                />
              </button>

              {/* Expanded Content */}
              {expandedDispute === dispute.id && (
                <div className="p-4 pt-0 space-y-4 animate-in slide-in-from-top-2 duration-300">
                  {/* Original Output */}
                  <div className="p-4 rounded-lg bg-black/30 border border-neon-cyan/20">
                    <div className="flex items-center gap-2 text-sm text-neon-cyan mb-2">
                      <Shield className="w-4 h-4" />
                      Original Output
                    </div>
                    <p className="text-sm font-mono">{dispute.originalOutput}</p>
                  </div>

                  {/* Challenge Reason */}
                  <div className="p-4 rounded-lg bg-black/30 border border-neon-pink/20">
                    <div className="flex items-center gap-2 text-sm text-neon-pink mb-2">
                      <MessageSquare className="w-4 h-4" />
                      Challenge by {dispute.challenger}
                    </div>
                    <p className="text-sm font-mono">{dispute.challengeReason}</p>
                  </div>

                  {/* Verdict (if resolved) */}
                  {dispute.verdict && (
                    <div
                      className={cn(
                        "p-4 rounded-lg border",
                        dispute.status === "resolved"
                          ? "bg-neon-green/10 border-neon-green/30"
                          : "bg-neon-pink/10 border-neon-pink/30",
                      )}
                    >
                      <div className="flex items-center gap-2 text-sm mb-2">
                        <CheckCircle
                          className={cn(
                            "w-4 h-4",
                            dispute.status === "resolved" ? "text-neon-green" : "text-neon-pink",
                          )}
                        />
                        <span className={dispute.status === "resolved" ? "text-neon-green" : "text-neon-pink"}>
                          Final Verdict
                        </span>
                      </div>
                      <p className="text-sm font-mono">{dispute.verdict}</p>
                    </div>
                  )}

                  {/* Actions for pending */}
                  {dispute.status === "pending" && (
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 rounded-lg bg-neon-green/20 border border-neon-green/50 text-neon-green hover:bg-neon-green/30 transition-colors">
                        Uphold Challenge
                      </button>
                      <button className="flex-1 py-2 rounded-lg bg-neon-pink/20 border border-neon-pink/50 text-neon-pink hover:bg-neon-pink/30 transition-colors">
                        Reject Challenge
                      </button>
                    </div>
                  )}
                </div>
              )}
            </HologramCard>
          ))}
        </div>
      </div>
    </div>
  )
}
