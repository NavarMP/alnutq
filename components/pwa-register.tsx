"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function PWARegister() {
  const [installPrompt, setInstallPrompt] = useState<any>(null)
  const [isInstalled, setIsInstalled] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    // Check if the app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true)
    }

    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault()
      // Stash the event so it can be triggered later
      setInstallPrompt(e)
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt)

    // Check if service worker is supported
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
          console.log("Service Worker registered with scope:", registration.scope)
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error)
        })
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstallClick = () => {
    if (!installPrompt) {
      toast({
        title: "Installation not available",
        description: "Your browser doesn't support PWA installation or the app is already installed.",
        variant: "destructive",
      })
      return
    }

    // Show the install prompt
    installPrompt.prompt()

    // Wait for the user to respond to the prompt
    installPrompt.userChoice.then((choiceResult: { outcome: string }) => {
      if (choiceResult.outcome === "accepted") {
        toast({
          title: "Installation successful",
          description: "Al Nutq has been installed on your device.",
        })
        setIsInstalled(true)
      }
      // Reset the install prompt variable
      setInstallPrompt(null)
    })
  }

  if (isInstalled || !installPrompt) return null

  return (
    <Button onClick={handleInstallClick} variant="outline" size="sm" className="flex items-center gap-2">
      <Download className="h-4 w-4" />
      Install App
    </Button>
  )
}

