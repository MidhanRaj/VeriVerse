"use client"

export function NeonDivider() {
  return (
    <div className="relative w-full h-1 my-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
        style={{
          animation: "beam-pulse 2s ease-in-out infinite",
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50"
        style={{
          animation: "beam-pulse 2s ease-in-out infinite 0.5s",
        }}
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-neon-cyan rounded-full shadow-[0_0_20px_var(--neon-cyan),0_0_40px_var(--neon-cyan)]" />
    </div>
  )
}
