"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { HologramCard } from "@/components/hologram-card"
import { Plus, Play, Trash2, GripVertical } from "lucide-react"
import { cn } from "@/lib/utils"

interface WorkflowNode {
  id: string
  type: "input" | "agent" | "condition" | "output"
  label: string
  x: number
  y: number
}

interface Connection {
  from: string
  to: string
}

const nodeTypes = [
  { type: "input", label: "Data Input", color: "cyan" },
  { type: "agent", label: "AI Agent", color: "purple" },
  { type: "condition", label: "Condition", color: "pink" },
  { type: "output", label: "Output", color: "green" },
]

export default function WorkflowBuilderPage() {
  const [nodes, setNodes] = useState<WorkflowNode[]>([
    { id: "1", type: "input", label: "Data Input", x: 100, y: 150 },
    { id: "2", type: "agent", label: "GPT-Verify", x: 350, y: 150 },
    { id: "3", type: "output", label: "Verified Output", x: 600, y: 150 },
  ])
  const [connections, setConnections] = useState<Connection[]>([
    { from: "1", to: "2" },
    { from: "2", to: "3" },
  ])
  const [draggingNode, setDraggingNode] = useState<string | null>(null)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)
  const [isRunning, setIsRunning] = useState(false)
  const canvasRef = useRef<HTMLDivElement>(null)
  const [sparkPositions, setSparkPositions] = useState<{ [key: string]: number }>({})

  // Animate sparks along connections
  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setSparkPositions((prev) => {
        const next: { [key: string]: number } = {}
        connections.forEach((conn) => {
          const key = `${conn.from}-${conn.to}`
          next[key] = ((prev[key] || 0) + 2) % 100
        })
        return next
      })
    }, 30)

    return () => clearInterval(interval)
  }, [isRunning, connections])

  const handleDragStart = (nodeId: string) => {
    setDraggingNode(nodeId)
  }

  const handleDrag = (e: React.MouseEvent) => {
    if (!draggingNode || !canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - 75
    const y = e.clientY - rect.top - 40

    setNodes((prev) =>
      prev.map((node) =>
        node.id === draggingNode
          ? { ...node, x: Math.max(0, Math.min(x, rect.width - 150)), y: Math.max(0, Math.min(y, rect.height - 80)) }
          : node,
      ),
    )
  }

  const handleDragEnd = () => {
    setDraggingNode(null)
  }

  const addNode = (type: string) => {
    const newNode: WorkflowNode = {
      id: Date.now().toString(),
      type: type as WorkflowNode["type"],
      label: nodeTypes.find((n) => n.type === type)?.label || type,
      x: 200 + Math.random() * 200,
      y: 100 + Math.random() * 200,
    }
    setNodes((prev) => [...prev, newNode])
  }

  const deleteNode = (nodeId: string) => {
    setNodes((prev) => prev.filter((n) => n.id !== nodeId))
    setConnections((prev) => prev.filter((c) => c.from !== nodeId && c.to !== nodeId))
    setSelectedNode(null)
  }

  const handleRunWorkflow = () => {
    setIsRunning(true)
    setTimeout(() => setIsRunning(false), 5000)
  }

  const getNodeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      input: "border-neon-cyan shadow-[0_0_20px_var(--neon-cyan)]",
      agent: "border-neon-purple shadow-[0_0_20px_var(--neon-purple)]",
      condition: "border-neon-pink shadow-[0_0_20px_var(--neon-pink)]",
      output: "border-neon-green shadow-[0_0_20px_var(--neon-green)]",
    }
    return colors[type] || colors.input
  }

  return (
    <div className="p-6 lg:p-8 h-screen flex flex-col">
      {/* Header */}
      <div className="mb-4">
        <h1 className="text-3xl font-bold mb-2">
          <span className="neon-text-cyan">Workflow</span> Builder
        </h1>
        <p className="text-muted-foreground">Design AI verification pipelines with drag-and-drop nodes</p>
      </div>

      {/* Toolbar */}
      <HologramCard className="p-4 mb-4 flex flex-wrap items-center gap-4" glowColor="cyan">
        <span className="text-sm text-muted-foreground">Add Node:</span>
        {nodeTypes.map((node) => (
          <button
            key={node.type}
            onClick={() => addNode(node.type)}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2",
              "bg-white/5 border border-white/10",
              "hover:border-neon-cyan/50 hover:bg-neon-cyan/10",
              "transition-all duration-300",
            )}
          >
            <Plus className="w-4 h-4" />
            {node.label}
          </button>
        ))}

        <div className="flex-1" />

        <button
          onClick={handleRunWorkflow}
          disabled={isRunning}
          className={cn(
            "px-6 py-2 rounded-lg font-bold flex items-center gap-2",
            "bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20",
            "border-2 border-neon-cyan",
            "shadow-[0_0_20px_var(--neon-cyan)]",
            "hover:shadow-[0_0_40px_var(--neon-cyan)]",
            "transition-all duration-300",
            isRunning && "animate-pulse",
          )}
        >
          <Play className={cn("w-5 h-5", isRunning && "animate-spin")} />
          {isRunning ? "Running..." : "Run Workflow"}
        </button>
      </HologramCard>

      {/* Canvas */}
      <div
        ref={canvasRef}
        className={cn(
          "flex-1 relative rounded-xl overflow-hidden",
          "bg-black/30 border border-neon-cyan/20",
          "cursor-crosshair",
        )}
        onMouseMove={handleDrag}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(var(--neon-cyan) 1px, transparent 1px),
              linear-gradient(90deg, var(--neon-cyan) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />

        {/* Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--neon-cyan)" />
              <stop offset="100%" stopColor="var(--neon-purple)" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {connections.map((conn) => {
            const fromNode = nodes.find((n) => n.id === conn.from)
            const toNode = nodes.find((n) => n.id === conn.to)
            if (!fromNode || !toNode) return null

            const startX = fromNode.x + 150
            const startY = fromNode.y + 40
            const endX = toNode.x
            const endY = toNode.y + 40
            const midX = (startX + endX) / 2

            const key = `${conn.from}-${conn.to}`
            const sparkPos = sparkPositions[key] || 0

            // Calculate spark position along the path
            const t = sparkPos / 100
            const sparkX = startX + (endX - startX) * t
            const sparkY = startY + (endY - startY) * t

            return (
              <g key={key}>
                <path
                  d={`M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`}
                  fill="none"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  filter="url(#glow)"
                  opacity="0.6"
                />
                {isRunning && (
                  <circle cx={sparkX} cy={sparkY} r="6" fill="var(--neon-cyan)" filter="url(#glow)">
                    <animate attributeName="r" values="4;8;4" dur="0.5s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>
            )
          })}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <div
            key={node.id}
            className={cn(
              "absolute w-[150px] p-4 rounded-lg cursor-move",
              "bg-black/80 backdrop-blur-sm border-2",
              "transition-all duration-200",
              getNodeColor(node.type),
              selectedNode === node.id && "ring-2 ring-white/50",
              draggingNode === node.id && "scale-105 z-50",
              isRunning && "animate-pulse",
            )}
            style={{ left: node.x, top: node.y }}
            onMouseDown={() => handleDragStart(node.id)}
            onClick={() => setSelectedNode(node.id)}
          >
            <div className="flex items-center justify-between mb-2">
              <GripVertical className="w-4 h-4 text-muted-foreground" />
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  deleteNode(node.id)
                }}
                className="p-1 hover:bg-red-500/20 rounded transition-colors"
              >
                <Trash2 className="w-3 h-3 text-red-400" />
              </button>
            </div>
            <div className="text-sm font-medium text-center">{node.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
