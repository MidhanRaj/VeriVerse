"use client"

import type React from "react"

import { useState } from "react"
import { HologramCard } from "@/components/hologram-card"
import { Search, Star, Zap, Eye, Filter } from "lucide-react"
import { cn } from "@/lib/utils"

const agents = [
  {
    id: 1,
    name: "GPT-Verify Pro",
    description: "Enterprise-grade verification for complex tasks",
    rating: 4.9,
    runs: "50K+",
    tags: ["Enterprise", "High Accuracy"],
    color: "cyan" as const,
  },
  {
    id: 2,
    name: "Code-Audit Max",
    description: "Smart contract and code security analysis",
    rating: 4.8,
    runs: "32K+",
    tags: ["Security", "Code Review"],
    color: "purple" as const,
  },
  {
    id: 3,
    name: "Data-Integrity",
    description: "Data validation and consistency checking",
    rating: 4.7,
    runs: "28K+",
    tags: ["Data", "Validation"],
    color: "green" as const,
  },
  {
    id: 4,
    name: "Fact-Scanner",
    description: "Real-time factual accuracy verification",
    rating: 4.9,
    runs: "45K+",
    tags: ["Facts", "Real-time"],
    color: "pink" as const,
  },
  {
    id: 5,
    name: "Legal-Verify",
    description: "Legal document and compliance checking",
    rating: 4.6,
    runs: "18K+",
    tags: ["Legal", "Compliance"],
    color: "cyan" as const,
  },
  {
    id: 6,
    name: "Medical-Check",
    description: "Medical information verification system",
    rating: 4.8,
    runs: "22K+",
    tags: ["Medical", "Healthcare"],
    color: "purple" as const,
  },
]

const filterTags = ["All", "Enterprise", "Security", "Data", "Facts", "Legal", "Medical"]

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredAgents = agents.filter((agent) => {
    const matchesSearch =
      agent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      agent.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter =
      activeFilter === "All" || agent.tags.some((tag) => tag.toLowerCase().includes(activeFilter.toLowerCase()))
    return matchesSearch && matchesFilter
  })

  return (
    <div className="p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            <span className="neon-text-cyan">Agent</span> Marketplace
          </h1>
          <p className="text-muted-foreground">Discover and deploy verified AI agents</p>
        </div>

        {/* Search & Filter Bar */}
        <HologramCard className="p-4 mb-8" glowColor="cyan">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search agents..."
                className={cn(
                  "w-full p-3 pl-10 rounded-lg",
                  "bg-background/50 border border-neon-cyan/30",
                  "focus:border-neon-cyan focus:shadow-[0_0_15px_var(--neon-cyan)]",
                  "focus:outline-none transition-all duration-300",
                )}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neon-cyan" />
            </div>

            {/* Filter chips */}
            <div className="flex flex-wrap gap-2 items-center">
              <Filter className="w-4 h-4 text-muted-foreground" />
              {filterTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={cn(
                    "px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
                    activeFilter === tag
                      ? "bg-neon-cyan text-background shadow-[0_0_15px_var(--neon-cyan)]"
                      : "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 hover:bg-neon-cyan/20",
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </HologramCard>

        {/* Agent Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent, i) => (
            <HologramCard
              key={agent.id}
              className={cn("p-6 float-slow-animation", "animate-in fade-in slide-in-from-bottom-4 duration-500")}
              style={{ animationDelay: `${i * 100}ms` } as React.CSSProperties}
              glowColor={agent.color}
            >
              {/* Icon */}
              <div
                className={cn(
                  "w-16 h-16 rounded-xl mb-4 flex items-center justify-center",
                  "bg-gradient-to-br",
                  agent.color === "cyan" && "from-neon-cyan/20 to-neon-blue/20",
                  agent.color === "purple" && "from-neon-purple/20 to-neon-pink/20",
                  agent.color === "green" && "from-neon-green/20 to-neon-cyan/20",
                  agent.color === "pink" && "from-neon-pink/20 to-neon-purple/20",
                  "border border-current/30",
                )}
              >
                <span className={`text-2xl font-bold neon-text-${agent.color}`}>{agent.name.charAt(0)}</span>
              </div>

              {/* Content */}
              <h3 className={`text-xl font-bold mb-2 neon-text-${agent.color}`}>{agent.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{agent.description}</p>

              {/* Stats */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="text-sm font-medium">{agent.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-4 h-4 text-neon-cyan" />
                  <span className="text-sm text-muted-foreground">{agent.runs} runs</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {agent.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 rounded text-xs bg-white/5 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  className={cn(
                    "flex-1 py-2 rounded-lg font-medium text-sm",
                    "bg-neon-cyan/20 border border-neon-cyan/50 text-neon-cyan",
                    "hover:bg-neon-cyan/30 hover:shadow-[0_0_15px_var(--neon-cyan)]",
                    "transition-all duration-300 flex items-center justify-center gap-2",
                  )}
                >
                  <Zap className="w-4 h-4" />
                  Run Agent
                </button>
                <button
                  className={cn(
                    "py-2 px-4 rounded-lg",
                    "bg-white/5 border border-white/10",
                    "hover:bg-white/10 hover:border-neon-purple/50",
                    "transition-all duration-300",
                  )}
                >
                  <Eye className="w-4 h-4" />
                </button>
              </div>
            </HologramCard>
          ))}
        </div>
      </div>
    </div>
  )
}
