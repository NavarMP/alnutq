"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

export default function NewsletterForm() {
  const { t } = useLanguage()
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true)
      setLoading(false)
    }, 1000)
  }

  return (
    <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
          {submitted ? "Thank you for subscribing!" : t("newsletter")}
        </CardTitle>
        {!submitted && (
          <CardDescription className="text-lg max-w-xl mx-auto">
            Subscribe to our newsletter for updates on articles, podcasts, and events.
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="py-6">
        {submitted ? (
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
            <p className="text-lg">
              We've sent a confirmation email to <span className="font-medium">{email}</span>.
            </p>
            <p className="text-muted-foreground mt-2">Please check your inbox and confirm your subscription.</p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 focus:ring-2 focus:ring-primary/50"
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-gradient-primary hover:opacity-90 transition-opacity"
            >
              {loading ? "Subscribing..." : t("subscribe")}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

