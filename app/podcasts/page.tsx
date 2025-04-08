"use client"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeadphonesIcon } from "lucide-react"

export default function PodcastsPage() {
  const { t } = useLanguage()

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{t("podcasts")}</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-3xl">
          Listen to our collection of podcasts discussing traditional Islamic teachings and addressing contemporary
          issues.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="rounded-full bg-primary/10 p-8 mb-6">
          <HeadphonesIcon className="h-16 w-16 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Podcasts Coming Soon</h2>
        <p className="text-muted-foreground max-w-lg mb-8">
          We're currently working on producing high-quality Islamic podcasts that will provide valuable insights and
          knowledge. Please check back soon!
        </p>
        <div className="flex flex-col items-center">
          <p className="font-medium mb-2">Would you like to be notified when our podcasts are available?</p>
          <Link href="/#newsletter">
            <Button>Subscribe to Newsletter</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}