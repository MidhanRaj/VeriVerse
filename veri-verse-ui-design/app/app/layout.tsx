"use client"

import type React from "react"
import { AppSidebar } from "@/components/app-sidebar"
import { AnimatedBackground } from "@/components/animated-background"
import { WalletProvider } from "@/hooks/useWallet"
import { ConnectWalletButton } from "@/components/connect-wallet-button"

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WalletProvider>
      <div className="min-h-screen">
        <AnimatedBackground />
        <AppSidebar />

        {/* Header with Wallet Button */}
        <header className="fixed top-0 right-0 left-20 lg:left-64 z-40 h-16 glass-panel border-b border-neon-cyan/20">
          <div className="h-full px-6 flex items-center justify-end">
            <ConnectWalletButton />
          </div>
        </header>

        {/* Main Content with top padding for fixed header */}
        <main className="ml-20 lg:ml-64 pt-16 relative z-10 min-h-screen">{children}</main>
      </div>
    </WalletProvider>
  )
}
