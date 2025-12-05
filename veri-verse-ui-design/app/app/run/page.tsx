"use client"

import { useState, useRef } from "react"
import { HologramCard } from "@/components/hologram-card"
import { ChevronDown, Zap, Copy, Check, ShieldCheck, AlertTriangle, Network, FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import { runAgent, createProof, verifyProof, crossCheck, createDispute } from "@/lib/api"

const agents = [
  { id: "moderation-agent", name: "Moderation Agent", description: "Content safety verification" },
  { id: "contract-agent", name: "Contract Agent", description: "Smart contract analysis" },
  { id: "risk-agent", name: "Risk Agent", description: "Transaction risk assessment" },
  { id: "misinfo-agent", name: "Misinfo Agent", description: "Misinformation checker" },
]

export default function RunAgentPage() {
  const [selectedAgent, setSelectedAgent] = useState(agents[0])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [input, setInput] = useState("")
  const [output, setOutput] = useState<any>(null)
  const [outputText, setOutputText] = useState("")
  const [isRunning, setIsRunning] = useState(false)
  const [showProofButton, setShowProofButton] = useState(false)
  const [proofCreated, setProofCreated] = useState<any>(null)
  const [isCreatingProof, setIsCreatingProof] = useState(false)
  const [copied, setCopied] = useState(false)

  // New States
  const [crossCheckResult, setCrossCheckResult] = useState<any>(null)
  const [isCrossChecking, setIsCrossChecking] = useState(false)
  const [verificationResult, setVerificationResult] = useState<any>(null)
  const [isVerifying, setIsVerifying] = useState(false)
  const [disputeResult, setDisputeResult] = useState<any>(null)
  const [isDisputing, setIsDisputing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const outputRef = useRef<HTMLDivElement>(null)

  const handleRun = async () => {
    if (!input.trim()) return

    setIsRunning(true)
    setOutput(null)
    setOutputText("")
    setShowProofButton(false)
    setProofCreated(null)
    setCrossCheckResult(null)
    setVerificationResult(null)
    setDisputeResult(null)
    setError(null)

    try {
      const result = await runAgent(input, selectedAgent.id)
      console.log("Agent result:", result) // Debug log
      setOutput(result)

      // Get the explanation text
      const explanation = result.data?.explanation || JSON.stringify(result.data?.output || result.data, null, 2)

      // Set the full text immediately to ensure it displays
      setOutputText(explanation)

      // Optional: Add typewriter effect using requestAnimationFrame for smoother animation
      // Commenting out the problematic loop that was causing display issues
      /*
      let currentText = ""
      for (let i = 0; i < explanation.length; i++) {
        currentText += explanation[i]
        setOutputText(currentText)
        await new Promise(resolve => setTimeout(resolve, 10))
      }
      */

      setShowProofButton(true)
    } catch (err: any) {
      console.error("Agent error:", err) // Debug log
      setError(err.message || "Failed to run agent")
    } finally {
      setIsRunning(false)
    }
  }

  const handleCreateProof = async () => {
    if (!output) return
    setIsCreatingProof(true)
    setError(null)
    try {
      const proofId = `proof-${Date.now()}`
      const result = await createProof(proofId, selectedAgent.id, output.ipfsCid)
      setProofCreated(result.proof)
    } catch (err: any) {
      setError(err.message || "Failed to create proof")
    } finally {
      setIsCreatingProof(false)
    }
  }

  const handleCrossCheck = async () => {
    if (!output) return
    setIsCrossChecking(true)
    setError(null)
    try {
      const result = await crossCheck(selectedAgent.id, input, output.data.output)
      setCrossCheckResult(result)
    } catch (err: any) {
      setError(err.message || "Failed to cross-check")
    } finally {
      setIsCrossChecking(false)
    }
  }

  const handleVerifyProof = async () => {
    if (!proofCreated) return
    setIsVerifying(true)
    setError(null)
    try {
      const result = await verifyProof(proofCreated.proofId)
      setVerificationResult(result)
    } catch (err: any) {
      setError(err.message || "Failed to verify proof")
    } finally {
      setIsVerifying(false)
    }
  }

  const handleCreateDispute = async () => {
    if (!proofCreated) return
    setIsDisputing(true)
    setError(null)
    try {
      const result = await createDispute(proofCreated.proofId, "User disputed this result")
      setDisputeResult(result.dispute)
    } catch (err: any) {
      setError(err.message || "Failed to create dispute")
    } finally {
      setIsDisputing(false)
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(outputText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="neon-text-cyan">Run</span> Agent
          </h1>
          <p className="text-muted-foreground">Execute AI verification tasks and generate blockchain proofs</p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 border border-red-500/50 bg-red-500/10 rounded-lg text-red-400 flex items-center gap-2 animate-pulse">
            <AlertTriangle className="w-5 h-5" />
            {error}
          </div>
        )}

        {/* Agent Selection */}
        <HologramCard className="p-6 mb-6" glowColor="cyan">
          <label className="block text-sm text-muted-foreground mb-2">Select Agent</label>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={cn(
                "w-full p-4 rounded-lg text-left transition-all duration-300",
                "bg-background/50 border border-neon-cyan/30",
                "hover:border-neon-cyan hover:shadow-[0_0_15px_var(--neon-cyan)]",
                "flex items-center justify-between",
                isDropdownOpen && "border-neon-cyan shadow-[0_0_15px_var(--neon-cyan)]",
              )}
            >
              <div>
                <div className="font-semibold text-neon-cyan">{selectedAgent.name}</div>
                <div className="text-sm text-muted-foreground">{selectedAgent.description}</div>
              </div>
              <ChevronDown
                className={cn(
                  "w-5 h-5 text-neon-cyan transition-transform duration-300",
                  isDropdownOpen && "rotate-180",
                )}
              />
            </button>

            {isDropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 rounded-lg border border-neon-cyan/30 bg-background/95 backdrop-blur-xl overflow-hidden z-50 shadow-[0_0_30px_var(--neon-cyan)]">
                {agents.map((agent) => (
                  <button
                    key={agent.id}
                    onClick={() => {
                      setSelectedAgent(agent)
                      setIsDropdownOpen(false)
                    }}
                    className={cn(
                      "w-full p-4 text-left transition-all duration-200",
                      "hover:bg-neon-cyan/10",
                      selectedAgent.id === agent.id && "bg-neon-cyan/20",
                    )}
                  >
                    <div className="font-semibold">{agent.name}</div>
                    <div className="text-sm text-muted-foreground">{agent.description}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </HologramCard>

        {/* Input */}
        <HologramCard className="p-6 mb-6" glowColor="purple">
          <label className="block text-sm text-muted-foreground mb-2">Input Data</label>
          <div className="relative">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter data to verify..."
              className={cn(
                "w-full h-40 p-4 rounded-lg resize-none",
                "bg-background/50 border border-neon-purple/30",
                "focus:border-neon-purple focus:shadow-[0_0_15px_var(--neon-purple)]",
                "focus:outline-none transition-all duration-300",
                "placeholder:text-muted-foreground/50",
              )}
            />
            <div className="absolute bottom-2 right-2 text-xs text-muted-foreground">{input.length} characters</div>
          </div>
        </HologramCard>

        {/* Run Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={handleRun}
            disabled={isRunning || !input.trim()}
            className={cn(
              "relative px-12 py-4 rounded-xl font-bold uppercase tracking-wider",
              "bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20",
              "border-2 border-neon-cyan",
              "shadow-[0_0_30px_var(--neon-cyan)]",
              "hover:shadow-[0_0_50px_var(--neon-cyan),0_0_80px_var(--neon-purple)]",
              "transition-all duration-300",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "group overflow-hidden",
            )}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Zap className={cn("w-5 h-5", isRunning && "animate-pulse")} />
              {isRunning ? "Processing..." : "Run Agent"}
            </span>
            {/* Ripple effect */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={cn("w-4 h-4 rounded-full bg-neon-cyan", isRunning && "animate-ping")} />
            </div>
          </button>
        </div>

        {/* Output Terminal */}
        {(outputText || isRunning) && (
          <HologramCard className="p-6 mb-6" glowColor="green">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-sm text-muted-foreground">Terminal Output</span>
              </div>
              {outputText && (
                <button onClick={handleCopy} className="p-2 hover:bg-neon-cyan/10 rounded transition-colors">
                  {copied ? (
                    <Check className="w-4 h-4 text-neon-green" />
                  ) : (
                    <Copy className="w-4 h-4 text-muted-foreground" />
                  )}
                </button>
              )}
            </div>
            <div
              ref={outputRef}
              className={cn(
                "font-mono text-sm p-4 rounded-lg min-h-[200px]",
                "bg-black/50 border border-neon-green/30",
                "overflow-auto",
              )}
            >
              <pre className="text-neon-green whitespace-pre-wrap">
                {outputText}
                {isRunning && <span className="animate-pulse">▌</span>}
              </pre>
              {output && (
                <div className="mt-4 pt-4 border-t border-neon-green/20 text-xs text-muted-foreground">
                  <div>Agent ID: {output.data.agentId}</div>
                  <div>Timestamp: {output.data.timestamp}</div>
                  <div className="mt-2 text-neon-cyan">IPFS CID: {output.ipfsCid}</div>
                </div>
              )}
            </div>
          </HologramCard>
        )}

        {/* Actions Grid */}
        {showProofButton && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* Create Proof */}
            <button
              onClick={handleCreateProof}
              disabled={isCreatingProof || !!proofCreated}
              className={cn(
                "p-4 rounded-xl border transition-all duration-300 flex items-center justify-center gap-2",
                proofCreated
                  ? "bg-neon-green/20 border-neon-green text-neon-green"
                  : "bg-background/50 border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10"
              )}
            >
              {isCreatingProof ? (
                <span className="animate-pulse">Creating Proof...</span>
              ) : proofCreated ? (
                <>
                  <Check className="w-5 h-5" /> Proof Created
                </>
              ) : (
                <>
                  <FileText className="w-5 h-5" /> Save to Blockchain
                </>
              )}
            </button>

            {/* Cross Check */}
            <button
              onClick={handleCrossCheck}
              disabled={isCrossChecking || !!crossCheckResult}
              className={cn(
                "p-4 rounded-xl border transition-all duration-300 flex items-center justify-center gap-2",
                crossCheckResult
                  ? "bg-neon-purple/20 border-neon-purple text-neon-purple"
                  : "bg-background/50 border-neon-purple/30 hover:border-neon-purple hover:bg-neon-purple/10"
              )}
            >
              {isCrossChecking ? (
                <span className="animate-pulse">Checking...</span>
              ) : crossCheckResult ? (
                <>
                  <Network className="w-5 h-5" /> Cross-Check Complete
                </>
              ) : (
                <>
                  <Network className="w-5 h-5" /> Cross-Check Output
                </>
              )}
            </button>

            {/* Verify Proof */}
            {proofCreated && (
              <button
                onClick={handleVerifyProof}
                disabled={isVerifying || !!verificationResult}
                className={cn(
                  "p-4 rounded-xl border transition-all duration-300 flex items-center justify-center gap-2",
                  verificationResult
                    ? "bg-neon-cyan/20 border-neon-cyan text-neon-cyan"
                    : "bg-background/50 border-neon-cyan/30 hover:border-neon-cyan hover:bg-neon-cyan/10"
                )}
              >
                {isVerifying ? (
                  <span className="animate-pulse">Verifying...</span>
                ) : verificationResult ? (
                  <>
                    <ShieldCheck className="w-5 h-5" /> Verified On-Chain
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-5 h-5" /> Verify Proof
                  </>
                )}
              </button>
            )}

            {/* Raise Dispute */}
            {proofCreated && (
              <button
                onClick={handleCreateDispute}
                disabled={isDisputing || !!disputeResult}
                className={cn(
                  "p-4 rounded-xl border transition-all duration-300 flex items-center justify-center gap-2",
                  disputeResult
                    ? "bg-red-500/20 border-red-500 text-red-500"
                    : "bg-background/50 border-red-500/30 hover:border-red-500 hover:bg-red-500/10"
                )}
              >
                {isDisputing ? (
                  <span className="animate-pulse">Raising Dispute...</span>
                ) : disputeResult ? (
                  <>
                    <AlertTriangle className="w-5 h-5" /> Dispute Raised
                  </>
                ) : (
                  <>
                    <AlertTriangle className="w-5 h-5" /> Raise Dispute
                  </>
                )}
              </button>
            )}
          </div>
        )}

        {/* Results Display */}
        <div className="space-y-4">
          {proofCreated && (
            <HologramCard className="p-6" glowColor="green">
              <h3 className="text-lg font-bold text-neon-green mb-2 flex items-center gap-2">
                <Check className="w-5 h-5" /> Blockchain Proof
              </h3>
              <div className="font-mono text-sm bg-black/30 p-3 rounded break-all">
                Proof ID: {proofCreated.proofId}<br />
                TX Hash: {proofCreated.txHash}
              </div>
            </HologramCard>
          )}

          {crossCheckResult && (
            <HologramCard className="p-6" glowColor="purple">
              <h3 className="text-lg font-bold text-neon-purple mb-2 flex items-center gap-2">
                <Network className="w-5 h-5" /> Cross-Check Results
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Consensus:</span>
                  <span className={crossCheckResult.consensus === "VALIDATED" ? "text-green-400" : "text-red-400"}>
                    {crossCheckResult.consensus}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Agreement:</span>
                  <span>{crossCheckResult.agreeCount}/{crossCheckResult.totalCheckers} Agents</span>
                </div>
              </div>
            </HologramCard>
          )}

          {disputeResult && (
            <HologramCard className="p-6" glowColor="red">
              <h3 className="text-lg font-bold text-red-500 mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Dispute Status
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Status:</span>
                  <span>{disputeResult.status}</span>
                </div>
                <div className="flex justify-between">
                  <span>Outcome:</span>
                  <span className="font-bold">{disputeResult.outcome}</span>
                </div>
              </div>
            </HologramCard>
          )}
        </div>
      </div>
    </div>
  )
}
