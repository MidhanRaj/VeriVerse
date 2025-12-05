"use client"

import { useState, useRef, useEffect } from "react"
import { useWallet } from "@/hooks/useWallet"
import { cn } from "@/lib/utils"
import { Wallet, Copy, Check, LogOut, AlertCircle, Loader2 } from "lucide-react"

export function ConnectWalletButton() {
    const { address, balance, chainId, isConnected, isConnecting, connect, disconnect, switchToBlockDAG } = useWallet()
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [copied, setCopied] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false)
            }
        }

        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isDropdownOpen])

    const handleCopyAddress = () => {
        if (address) {
            navigator.clipboard.writeText(address)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        }
    }

    const formatAddress = (addr: string) => {
        return `${addr.slice(0, 6)}...${addr.slice(-4)}`
    }

    const isCorrectNetwork = chainId === 1043

    if (!isConnected) {
        return (
            <button
                onClick={connect}
                disabled={isConnecting}
                className={cn(
                    "relative px-6 py-2.5 rounded-lg font-semibold",
                    "bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20",
                    "border border-neon-cyan/50",
                    "hover:border-neon-cyan hover:shadow-[0_0_20px_var(--neon-cyan)]",
                    "transition-all duration-300",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "flex items-center gap-2",
                    "group overflow-hidden"
                )}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/10 to-neon-cyan/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                    {isConnecting ? (
                        <>
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span className="hidden sm:inline">Connecting...</span>
                        </>
                    ) : (
                        <>
                            <Wallet className="w-4 h-4" />
                            <span className="hidden sm:inline">Connect Wallet</span>
                        </>
                    )}
                </span>
            </button>
        )
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className={cn(
                    "relative px-6 py-2.5 rounded-lg font-semibold",
                    "bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20",
                    "border transition-all duration-300",
                    "flex items-center gap-2",
                    "group overflow-hidden",
                    isCorrectNetwork
                        ? "border-neon-green/50 hover:border-neon-green hover:shadow-[0_0_20px_var(--neon-green)]"
                        : "border-yellow-500/50 hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.5)]"
                )}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/0 via-neon-cyan/10 to-neon-cyan/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                    <div
                        className={cn(
                            "w-2 h-2 rounded-full",
                            isCorrectNetwork ? "bg-neon-green animate-pulse" : "bg-yellow-500 animate-pulse"
                        )}
                    />
                    <Wallet className="w-4 h-4" />
                    <span className="hidden sm:inline font-mono">{address && formatAddress(address)}</span>
                </span>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-80 rounded-xl border border-neon-cyan/30 bg-background/95 backdrop-blur-xl overflow-hidden z-50 shadow-[0_0_30px_var(--neon-cyan)]">
                    <div className="p-4 space-y-4">
                        {/* Network Status */}
                        {!isCorrectNetwork && (
                            <div className="p-3 rounded-lg bg-yellow-500/10 border border-yellow-500/30 flex items-start gap-2">
                                <AlertCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                    <div className="text-sm font-semibold text-yellow-500 mb-1">Wrong Network</div>
                                    <button
                                        onClick={() => {
                                            switchToBlockDAG()
                                            setIsDropdownOpen(false)
                                        }}
                                        className="text-xs text-yellow-400 hover:text-yellow-300 underline"
                                    >
                                        Switch to BlockDAG Testnet
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Wallet Address */}
                        <div>
                            <div className="text-xs text-muted-foreground mb-1">Wallet Address</div>
                            <div className="flex items-center gap-2 p-2 rounded-lg bg-black/30 border border-neon-cyan/20">
                                <span className="flex-1 font-mono text-sm truncate">{address}</span>
                                <button
                                    onClick={handleCopyAddress}
                                    className="p-1.5 hover:bg-neon-cyan/10 rounded transition-colors"
                                    title="Copy address"
                                >
                                    {copied ? (
                                        <Check className="w-4 h-4 text-neon-green" />
                                    ) : (
                                        <Copy className="w-4 h-4 text-muted-foreground" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Balance */}
                        <div>
                            <div className="text-xs text-muted-foreground mb-1">Balance</div>
                            <div className="p-2 rounded-lg bg-black/30 border border-neon-purple/20">
                                <div className="font-mono text-lg font-semibold text-neon-purple">
                                    {balance ? parseFloat(balance).toFixed(4) : "0.0000"} BDAG
                                </div>
                            </div>
                        </div>

                        {/* Network Info */}
                        <div>
                            <div className="text-xs text-muted-foreground mb-1">Network</div>
                            <div className="p-2 rounded-lg bg-black/30 border border-neon-cyan/20">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">
                                        {isCorrectNetwork ? "BlockDAG Awakening Testnet" : `Chain ID: ${chainId}`}
                                    </span>
                                    <div
                                        className={cn(
                                            "w-2 h-2 rounded-full",
                                            isCorrectNetwork ? "bg-neon-green" : "bg-yellow-500"
                                        )}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Disconnect Button */}
                        <button
                            onClick={() => {
                                disconnect()
                                setIsDropdownOpen(false)
                            }}
                            className={cn(
                                "w-full p-3 rounded-lg transition-all duration-300",
                                "bg-red-500/10 border border-red-500/30",
                                "hover:bg-red-500/20 hover:border-red-500",
                                "flex items-center justify-center gap-2",
                                "text-red-400 hover:text-red-300"
                            )}
                        >
                            <LogOut className="w-4 h-4" />
                            Disconnect Wallet
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
