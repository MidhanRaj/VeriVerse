"use client"

import { useEffect, useRef } from "react"

export function HolographicGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = 500
    canvas.height = 500

    let rotation = 0
    let animationFrame: number

    const drawGlobe = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = 180

      // Outer glow
      const outerGlow = ctx.createRadialGradient(centerX, centerY, radius * 0.8, centerX, centerY, radius * 1.5)
      outerGlow.addColorStop(0, "rgba(0, 255, 255, 0.1)")
      outerGlow.addColorStop(0.5, "rgba(139, 92, 246, 0.05)")
      outerGlow.addColorStop(1, "transparent")
      ctx.fillStyle = outerGlow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Globe sphere
      const globeGradient = ctx.createRadialGradient(
        centerX - radius * 0.3,
        centerY - radius * 0.3,
        0,
        centerX,
        centerY,
        radius,
      )
      globeGradient.addColorStop(0, "rgba(0, 255, 255, 0.2)")
      globeGradient.addColorStop(0.5, "rgba(139, 92, 246, 0.1)")
      globeGradient.addColorStop(1, "rgba(0, 0, 0, 0.3)")

      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.fillStyle = globeGradient
      ctx.fill()

      // Wireframe longitude lines
      ctx.strokeStyle = "rgba(0, 255, 255, 0.4)"
      ctx.lineWidth = 1
      for (let i = 0; i < 12; i++) {
        const angle = (i * Math.PI) / 6 + rotation
        ctx.beginPath()
        ctx.ellipse(centerX, centerY, Math.abs(Math.cos(angle)) * radius, radius, 0, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Latitude lines
      for (let i = 1; i < 6; i++) {
        const latRadius = radius * Math.sin((i * Math.PI) / 6)
        const y = centerY + radius * Math.cos((i * Math.PI) / 6) * (i > 3 ? -1 : 1)
        ctx.beginPath()
        ctx.ellipse(
          centerX,
          y - (i > 3 ? radius * 0.15 * (i - 3) : -radius * 0.15 * (3 - i)),
          latRadius * (i > 3 ? 1.2 - (i - 3) * 0.2 : 0.4 + i * 0.2),
          latRadius * 0.3,
          0,
          0,
          Math.PI * 2,
        )
        ctx.stroke()
      }

      // Data nodes
      const nodes = [
        { lat: 0.3, lon: rotation },
        { lat: -0.2, lon: rotation + 1 },
        { lat: 0.5, lon: rotation + 2 },
        { lat: -0.4, lon: rotation + 3 },
        { lat: 0.1, lon: rotation + 4 },
        { lat: -0.3, lon: rotation + 5 },
      ]

      nodes.forEach((node, i) => {
        const x = centerX + Math.cos(node.lon) * Math.cos(node.lat) * radius
        const y = centerY + Math.sin(node.lat) * radius
        const z = Math.sin(node.lon) * Math.cos(node.lat)

        if (z > -0.2) {
          const nodeSize = 4 + z * 3
          const opacity = 0.5 + z * 0.5

          // Node glow
          const nodeGlow = ctx.createRadialGradient(x, y, 0, x, y, nodeSize * 4)
          nodeGlow.addColorStop(0, `rgba(236, 72, 153, ${opacity * 0.5})`)
          nodeGlow.addColorStop(1, "transparent")
          ctx.fillStyle = nodeGlow
          ctx.fillRect(x - nodeSize * 4, y - nodeSize * 4, nodeSize * 8, nodeSize * 8)

          // Node
          ctx.beginPath()
          ctx.arc(x, y, nodeSize, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(236, 72, 153, ${opacity})`
          ctx.fill()

          // Connect nodes
          if (i > 0) {
            const prevNode = nodes[i - 1]
            const prevX = centerX + Math.cos(prevNode.lon) * Math.cos(prevNode.lat) * radius
            const prevY = centerY + Math.sin(prevNode.lat) * radius
            const prevZ = Math.sin(prevNode.lon) * Math.cos(prevNode.lat)

            if (prevZ > -0.2) {
              ctx.beginPath()
              ctx.moveTo(prevX, prevY)
              ctx.lineTo(x, y)
              ctx.strokeStyle = `rgba(0, 255, 255, ${Math.min(opacity, 0.5 + prevZ * 0.5) * 0.5})`
              ctx.stroke()
            }
          }
        }
      })

      // Outer ring
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius + 20, 0, Math.PI * 2)
      ctx.strokeStyle = "rgba(0, 255, 255, 0.3)"
      ctx.lineWidth = 2
      ctx.stroke()

      // Rotating ring
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius + 35, rotation, rotation + Math.PI * 0.5)
      ctx.strokeStyle = "rgba(139, 92, 246, 0.6)"
      ctx.lineWidth = 3
      ctx.stroke()

      rotation += 0.005
      animationFrame = requestAnimationFrame(drawGlobe)
    }

    drawGlobe()

    return () => cancelAnimationFrame(animationFrame)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-70"
    />
  )
}
