"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { BrowserProvider, formatEther } from "ethers"
import { toast } from "sonner"

// BlockDAG Primordial Testnet Configuration
const BLOCKDAG_NETWORK = {
    chainId: "0x413", // 1043 in hex
    chainName: "BlockDAG Awakening Testnet",
    nativeCurrency: {
        name: "BDAG",
        symbol: "BDAG",
        decimals: 18,
    },
    rpcUrls: ["https://rpc.awakening.bdagscan.com"],
    blockExplorerUrls: ["https://awakening.bdagscan.com/"],
}

interface WalletContextType {
    address: string | null
    balance: string | null
    chainId: number | null
    isConnected: boolean
    isConnecting: boolean
    connect: () => Promise<void>
    disconnect: () => void
    switchToBlockDAG: () => Promise<void>
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: ReactNode }) {
    const [address, setAddress] = useState<string | null>(null)
    const [balance, setBalance] = useState<string | null>(null)
    const [chainId, setChainId] = useState<number | null>(null)
    const [isConnecting, setIsConnecting] = useState(false)

    const isConnected = !!address

    // Check if wallet is already connected on mount
    useEffect(() => {
        const checkConnection = async () => {
            if (typeof window !== "undefined" && window.ethereum) {
                try {
                    const provider = new BrowserProvider(window.ethereum)
                    const accounts = await provider.listAccounts()

                    if (accounts.length > 0) {
                        const signer = await provider.getSigner()
                        const addr = await signer.getAddress()
                        setAddress(addr)

                        const network = await provider.getNetwork()
                        setChainId(Number(network.chainId))

                        await updateBalance(addr)
                    }
                } catch (error) {
                    console.error("Error checking connection:", error)
                }
            }
        }

        checkConnection()
    }, [])

    // Listen for account changes
    useEffect(() => {
        if (typeof window !== "undefined" && window.ethereum) {
            const handleAccountsChanged = (accounts: string[]) => {
                if (accounts.length === 0) {
                    disconnect()
                } else {
                    setAddress(accounts[0])
                    updateBalance(accounts[0])
                }
            }

            const handleChainChanged = (chainIdHex: string) => {
                const newChainId = parseInt(chainIdHex, 16)
                setChainId(newChainId)

                if (newChainId !== 1043) {
                    toast.warning("Please switch to BlockDAG Awakening Testnet", {
                        action: {
                            label: "Switch Network",
                            onClick: () => switchToBlockDAG(),
                        },
                    })
                }
            }

            window.ethereum.on("accountsChanged", handleAccountsChanged)
            window.ethereum.on("chainChanged", handleChainChanged)

            return () => {
                window.ethereum.removeListener("accountsChanged", handleAccountsChanged)
                window.ethereum.removeListener("chainChanged", handleChainChanged)
            }
        }
    }, [])

    const updateBalance = async (addr: string) => {
        try {
            if (typeof window !== "undefined" && window.ethereum) {
                const provider = new BrowserProvider(window.ethereum)
                const balance = await provider.getBalance(addr)
                setBalance(formatEther(balance))
            }
        } catch (error) {
            console.error("Error fetching balance:", error)
        }
    }

    const connect = async () => {
        if (typeof window === "undefined" || !window.ethereum) {
            toast.error("MetaMask not detected", {
                description: "Please install MetaMask to connect your wallet",
            })
            return
        }

        setIsConnecting(true)

        try {
            const provider = new BrowserProvider(window.ethereum)

            // Request account access
            await provider.send("eth_requestAccounts", [])

            const signer = await provider.getSigner()
            const addr = await signer.getAddress()
            setAddress(addr)

            const network = await provider.getNetwork()
            const currentChainId = Number(network.chainId)
            setChainId(currentChainId)

            await updateBalance(addr)

            // Check if on correct network
            if (currentChainId !== 1043) {
                toast.info("Switching to BlockDAG network...")
                await switchToBlockDAG()
            } else {
                toast.success("Wallet connected!", {
                    description: `${addr.slice(0, 6)}...${addr.slice(-4)}`,
                })
            }
        } catch (error: any) {
            console.error("Error connecting wallet:", error)

            if (error.code === 4001) {
                toast.error("Connection rejected", {
                    description: "You rejected the connection request",
                })
            } else {
                toast.error("Failed to connect wallet", {
                    description: error.message || "Unknown error occurred",
                })
            }
        } finally {
            setIsConnecting(false)
        }
    }

    const switchToBlockDAG = async () => {
        if (typeof window === "undefined" || !window.ethereum) {
            return
        }

        try {
            // Try to switch to the network
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: BLOCKDAG_NETWORK.chainId }],
            })

            setChainId(1043)
            toast.success("Switched to BlockDAG Awakening Testnet")

            // Update balance after network switch
            if (address) {
                await updateBalance(address)
            }
        } catch (switchError: any) {
            // This error code indicates that the chain has not been added to MetaMask
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [BLOCKDAG_NETWORK],
                    })

                    setChainId(1043)
                    toast.success("BlockDAG network added!")

                    // Update balance after adding network
                    if (address) {
                        await updateBalance(address)
                    }
                } catch (addError: any) {
                    console.error("Error adding network:", addError)
                    toast.error("Failed to add network", {
                        description: addError.message || "Unknown error occurred",
                    })
                }
            } else {
                console.error("Error switching network:", switchError)
                toast.error("Failed to switch network", {
                    description: switchError.message || "Unknown error occurred",
                })
            }
        }
    }

    const disconnect = () => {
        setAddress(null)
        setBalance(null)
        setChainId(null)
        toast.info("Wallet disconnected")
    }

    return (
        <WalletContext.Provider
            value={{
                address,
                balance,
                chainId,
                isConnected,
                isConnecting,
                connect,
                disconnect,
                switchToBlockDAG,
            }}
        >
            {children}
        </WalletContext.Provider>
    )
}

export function useWallet() {
    const context = useContext(WalletContext)
    if (context === undefined) {
        throw new Error("useWallet must be used within a WalletProvider")
    }
    return context
}

// Extend Window interface for TypeScript
declare global {
    interface Window {
        ethereum?: any
    }
}
