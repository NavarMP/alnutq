"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)
  const { theme } = useTheme()

  useEffect(() => {
    // Check if we should disable custom cursor (for mobile/tablet)
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768
    if (isMobile) return

    setHidden(false)

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const handleLinkHoverEvents = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, select, [tabindex="0"]').forEach((el) => {
        el.addEventListener("mouseenter", () => setLinkHovered(true))
        el.addEventListener("mouseleave", () => setLinkHovered(false))
      })
    }

    addEventListeners()
    handleLinkHoverEvents()

    return () => {
      removeEventListeners()
    }
  }, [])

  // Don't render the cursor if hidden
  if (hidden) return null

  // Determine cursor color based on theme
  const cursorColor = theme === "dark" ? "rgba(255, 255, 255, 0.8)" : "rgba(65, 90, 128, 0.8)"
  const cursorRingColor = theme === "dark" ? "rgba(255, 255, 255, 0.2)" : "rgba(65, 90, 128, 0.2)"

  return (
    <>
      <div
        className={`cursor-dot ${clicked ? "cursor-dot--clicked" : ""} ${linkHovered ? "cursor-dot--link-hovered" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          backgroundColor: cursorColor,
        }}
      />
      <div
        className={`cursor-ring ${clicked ? "cursor-ring--clicked" : ""} ${linkHovered ? "cursor-ring--link-hovered" : ""}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          borderColor: cursorRingColor,
        }}
      />
      <style jsx global>{`
        body {
          cursor: none;
        }
        
        a, button, [role="button"], input, textarea, select, [tabindex="0"] {
          cursor: none;
        }
        
        .cursor-dot {
          pointer-events: none;
          position: fixed;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.2s, height 0.2s, opacity 0.2s;
          z-index: 999;
        }
        
        .cursor-ring {
          pointer-events: none;
          position: fixed;
          width: 40px;
          height: 40px;
          border: 2px solid;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          transition: width 0.3s, height 0.3s, border-color 0.3s, opacity 0.3s;
          z-index: 998;
        }
        
        .cursor-dot--clicked {
          transform: translate(-50%, -50%) scale(0.5);
          opacity: 0.8;
        }
        
        .cursor-ring--clicked {
          transform: translate(-50%, -50%) scale(1.5);
          opacity: 0.2;
        }
        
        .cursor-dot--link-hovered {
          width: 12px;
          height: 12px;
          opacity: 0.8;
        }
        
        .cursor-ring--link-hovered {
          width: 30px;
          height: 30px;
          border-width: 3px;
          opacity: 0.5;
        }
        
        @media (max-width: 768px) {
          .cursor-dot, .cursor-ring {
            display: none;
          }
          
          body, a, button, [role="button"], input, textarea, select, [tabindex="0"] {
            cursor: auto;
          }
        }
      `}</style>
    </>
  )
}

