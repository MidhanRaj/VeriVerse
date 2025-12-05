"use client"

import { useState, useEffect } from "react"
import { HologramCard } from "@/components/hologram-card"
import { Search, Shield, ShieldAlert, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export default function ProofViewerPage() {
  const [proofId, setProofId] = useState("")
  const [isVerifying, setIsVerifying] = useState(false)
  const [result, setResult] = useState<null | "verified" | "failed">(null)
  const [proofData, setProofData] = useState<null | {
    cid: string
    timestamp: string
    agentId: string
    hash: string
  }>(null)
  const [scanPosition, setScanPosition] = useState(0)

  useEffect(() => {
    if (isVerifying) {
      const interval = setInterval(() => {
        setScanPosition((prev) => (prev + 2) % 100)
      }, 20)
      return () => clearInterval(interval)
    }
  }, [isVerifying])

  const handleVerify = async () => {
    if (!proofId.trim()) return

    setIsVerifying(true)
    setResult(null)
    setProofData(null)

    // Simulate verification
    await new Promise((resolve) => setTimeout(resolve, 3000))

    const isValid = Math.random() > 0.2 // 80% success rate for demo

    if (isValid) {
      setResult("verified")
      setProofData({
        cid: `Qm${Math.random().toString(36).slice(2, 20)}${Math.random().toString(36).slice(2, 20)}`,
        timestamp: new Date().toISOString(),
        agentId: `agent-${Math.random().toString(36).slice(2, 8)}`,
        hash: `0x${Math.random().toString(16).slice(2, 66)}`,
      })
    } else {
      setResult("failed")
    }

    setIsVerifying(false)
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="neon-text-cyan">Proof</span> Viewer
          </h1>
          <p className="text-muted-foreground">Verify blockchain proofs and authenticate AI outputs</p>
        </div>

        {/* Search Input */}
        <HologramCard className="p-6 mb-8" glowColor="cyan">
          <div className="relative">
            {/* Scan line animation */}
            {isVerifying && (
              <div
                className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neon-cyan to-transparent pointer-events-none z-10"
                style={{ top: `${scanPosition}%` }}
              />
            )}

            <label className="block text-sm text-muted-foreground mb-2">Proof ID or IPFS CID</label>
            <div className="relative">
              <input
                type="text"
                value={proofId}
                onChange={(e) => setProofId(e.target.value)}
                placeholder="Enter proof identifier..."
                className={cn(
                  "w-full p-4 pl-12 rounded-lg",
                  "bg-background/50 border border-neon-cyan/30",
                  "focus:border-neon-cyan focus:shadow-[0_0_15px_var(--neon-cyan)]",
                  "focus:outline-none transition-all duration-300",
                  "placeholder:text-muted-foreground/50 font-mono",
                )}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neon-cyan" />
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <button
              onClick={handleVerify}
              disabled={isVerifying || !proofId.trim()}
              className={cn(
                "px-8 py-3 rounded-lg font-bold uppercase tracking-wider",
                "bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20",
                "border-2 border-neon-cyan",
                "shadow-[0_0_20px_var(--neon-cyan)]",
                "hover:shadow-[0_0_40px_var(--neon-cyan)]",
                "transition-all duration-300",
                "disabled:opacity-50 disabled:cursor-not-allowed",
                "flex items-center gap-2",
                isVerifying && "animate-pulse",
              )}
            >
              {isVerifying ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Authenticating...
                </>
              ) : (
                <>
                  <Shield className="w-5 h-5" />
                  Verify Proof
                </>
              )}
            </button>
          </div>
        </HologramCard>

        {/* Result */}
        {result && (
          <HologramCard className="p-8" glowColor={result === "verified" ? "green" : "pink"}>
            <div className="text-center mb-8">
              {result === "verified" ? (
                <>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-neon-green/20 animate-ping" />
                    <div className="relative w-full h-full rounded-full bg-neon-green/30 flex items-center justify-center border-2 border-neon-green shadow-[0_0_30px_var(--neon-green)]">
                      <Shield className="w-12 h-12 text-neon-green" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold neon-text-green mb-2">VERIFIED</h2>
                  <p className="text-muted-foreground">Proof authenticated successfully</p>
                </>
              ) : (
                <>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-neon-pink/20 animate-pulse" />
                    <div className="relative w-full h-full rounded-full bg-neon-pink/30 flex items-center justify-center border-2 border-neon-pink shadow-[0_0_30px_var(--neon-pink)] glitch-effect">
                      <ShieldAlert className="w-12 h-12 text-neon-pink" />
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold neon-text-pink mb-2">MISMATCH</h2>
                  <p className="text-muted-foreground">Verification failed - proof not found or invalid</p>
                </>
              )}
            </div>

            {proofData && (
              <div className="space-y-4">
                {[
                  { label: "IPFS CID", value: proofData.cid },
                  { label: "Timestamp", value: proofData.timestamp },
                  { label: "Agent ID", value: proofData.agentId },
                  { label: "Content Hash", value: proofData.hash },
                ].map((item, i) => (
                  <div
                    key={item.label}
                    className={cn(
                      "p-4 rounded-lg bg-black/30 border border-neon-green/20",
                      "animate-in slide-in-from-left duration-500",
                    )}
                    style={{ animationDelay: `${i * 150}ms` }}
                  >
                    <div className="text-xs text-neon-green mb-1">{item.label}</div>
                    <div className="font-mono text-sm break-all text-foreground/80 glitch-effect">{item.value}</div>
                  </div>
                ))}
              </div>
            )}
          </HologramCard>
        )}
      </div>
    </div>
  )
}
