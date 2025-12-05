"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system
    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
    }> = []

    const colors = ["#00ffff", "#8b5cf6", "#ec4899", "#10b981"]

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    let animationFrame: number
    let time = 0

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Animated gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      const shift = Math.sin(time * 0.5) * 0.5 + 0.5
      gradient.addColorStop(0, `rgba(15, 5, 30, 1)`)
      gradient.addColorStop(shift * 0.5, `rgba(30, 10, 60, 1)`)
      gradient.addColorStop(0.5 + shift * 0.3, `rgba(20, 30, 80, 1)`)
      gradient.addColorStop(1, `rgba(10, 20, 40, 1)`)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = "rgba(0, 255, 255, 0.05)"
      ctx.lineWidth = 1
      const gridSize = 60
      const gridOffset = (time * 20) % gridSize

      for (let x = -gridSize + gridOffset; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = -gridSize + gridOffset; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Aurora effect
      ctx.globalAlpha = 0.1
      const auroraGradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time) * 200,
        canvas.height / 3,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.6,
      )
      auroraGradient.addColorStop(0, "rgba(139, 92, 246, 0.4)")
      auroraGradient.addColorStop(0.5, "rgba(0, 255, 255, 0.2)")
      auroraGradient.addColorStop(1, "transparent")
      ctx.fillStyle = auroraGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.globalAlpha = 1

      // Draw and update particles
      particles.forEach((particle) => {
        particle.x += particle.speedX
        particle.y += particle.speedY

        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = particle.opacity * (0.5 + Math.sin(time + particle.x * 0.01) * 0.5)
        ctx.fill()
        ctx.globalAlpha = 1

        // Glow effect
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2)
        const glowGradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3,
        )
        glowGradient.addColorStop(0, particle.color + "40")
        glowGradient.addColorStop(1, "transparent")
        ctx.fillStyle = glowGradient
        ctx.fill()
      })

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrame)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }} />
}
