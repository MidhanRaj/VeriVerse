"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Play, Shield, GitBranch, AlertTriangle, Store, Workflow, User } from "lucide-react"

const menuItems = [
  { icon: Play, label: "Run Agent", href: "/app/run" },
  { icon: Shield, label: "Proof Viewer", href: "/app/proof" },
  { icon: GitBranch, label: "Cross-Checks", href: "/app/cross-checks" },
  { icon: AlertTriangle, label: "Disputes", href: "/app/disputes" },
  { icon: Store, label: "Marketplace", href: "/app/marketplace" },
  { icon: Workflow, label: "Workflows", href: "/app/workflows" },
  { icon: User, label: "Agent Profile", href: "/app/profile" },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 h-full w-20 lg:w-64 glass-panel border-r border-neon-cyan/20 z-50">
      <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 to-neon-cyan/5" />

      <div className="relative z-10 p-4">
        <Link href="/" className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center shadow-[0_0_20px_var(--neon-cyan)]">
            <span className="text-xl font-bold text-white">V</span>
          </div>
          <span className="hidden lg:block text-xl font-bold neon-text-cyan">VeriVerse</span>
        </Link>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300",
                  "hover:bg-neon-cyan/10 group relative overflow-hidden",
                  isActive && "bg-neon-cyan/20",
                )}
              >
                <item.icon
                  className={cn(
                    "w-6 h-6 transition-all duration-300",
                    isActive
                      ? "text-neon-cyan drop-shadow-[0_0_10px_var(--neon-cyan)]"
                      : "text-muted-foreground group-hover:text-neon-cyan group-hover:drop-shadow-[0_0_10px_var(--neon-cyan)]",
                  )}
                />
                <span
                  className={cn(
                    "hidden lg:block transition-colors duration-300",
                    isActive ? "text-neon-cyan" : "text-muted-foreground group-hover:text-neon-cyan",
                  )}
                >
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-neon-cyan to-neon-purple shadow-[0_0_10px_var(--neon-cyan)]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/5 to-neon-cyan/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </Link>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
