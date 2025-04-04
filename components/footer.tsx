"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, MessageSquare, Send } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-muted/40">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/logo.svg" alt="Al Nutq Logo" width={40} height={40} />
              <span className="font-bold">Zawiyah Al Nutq</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              An Islamic community focused on rejecting bid'ah, particularly Wahhabism and Jamaat-e-Islami, while
              promoting authentic Islamic teachings.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <div className="grid grid-cols-1 gap-2">
              <Link href="/articles" className="text-sm text-muted-foreground hover:text-foreground">
                {t("articles")}
              </Link>
              <Link href="/podcasts" className="text-sm text-muted-foreground hover:text-foreground">
                {t("podcasts")}
              </Link>
              <Link href="/mentorship" className="text-sm text-muted-foreground hover:text-foreground">
                {t("mentorship")}
              </Link>
              <Link href="/donate" className="text-sm text-muted-foreground hover:text-foreground">
                {t("donate")}
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Related Pages</h3>
            <div className="grid grid-cols-1 gap-4">
              <Link
                href="https://www.instagram.com/edified.ummah/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-foreground"
              >
                <div className="flex items-center space-x-2">
                  <Instagram className="h-4 w-4" />
                  <span>Edified Ummah</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{t("eu_description")}</p>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold">{t("newsletter")}</h3>
            <p className="text-sm text-muted-foreground">Stay updated with our latest articles and announcements</p>
            <div className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="max-w-[220px] flex-1" />
              <Button type="submit" size="sm">
                {t("subscribe")}
              </Button>
            </div>
            <div className="flex space-x-3 pt-2">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://www.instagram.com/al.nutq/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                    >
                      <Youtube className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>YouTube</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      href="https://whatsapp.com/channel/0029Vb1AoYxLikgC6h3y5n0Y"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                    >
                      <MessageSquare className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>WhatsApp</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="https://t.me/alnutq" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                      <Send className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Telegram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">{t("copyright")}</p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">{t("developed_by")}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

