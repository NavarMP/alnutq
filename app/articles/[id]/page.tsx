"use client"

import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CalendarIcon, Clock, Globe, Share2 } from "lucide-react"

export default function ArticlePage({ params }: { params: { id: string } }) {
  const { t, language, setLanguage } = useLanguage()

  // Mock article data (in a real app, this would come from an API)
  const article = {
    id: Number.parseInt(params.id),
    title: "Understanding Authentic Islamic Teachings",
    content: `
      <p class="text-lg leading-relaxed mb-4">
        The concept of following authentic Islamic teachings is central to preserving the integrity of the religion. Throughout Islamic history, scholars have emphasized the importance of adhering to the Quran and Sunnah, along with the understanding of the righteous predecessors (Salaf).
      </p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Importance of Traditional Knowledge</h2>
      
      <p class="text-lg leading-relaxed mb-4">
        Traditional Islamic knowledge provides a structured and time-tested approach to understanding religious teachings. It emphasizes the continuous chain of transmission (isnad) that ensures the authenticity of religious knowledge.
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        The Prophet Muhammad ﷺ said: "The best people are those of my generation, then those who come after them, then those who come after them." This hadith highlights the importance of the early generations in understanding and implementing Islamic teachings.
      </p>
      
      <blockquote class="border-l-4 border-primary pl-4 italic my-6">
        "Whoever innovates something in this matter of ours (Islam) that is not part of it, will have it rejected." - Prophet Muhammad ﷺ
      </blockquote>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">The Problem with Modern Innovations</h2>
      
      <p class="text-lg leading-relaxed mb-4">
        When examining many contemporary movements that claim to represent Islam, we find numerous deviations from established principles. These innovations often arise from a misunderstanding of religious texts or a desire to reinterpret Islam according to modern sensibilities.
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        One significant concern is the rejection of scholarly consensus (ijma), which has been a safeguard against misinterpretation throughout Islamic history. When individuals or movements dismiss centuries of scholarship in favor of their own interpretations, this leads to fragmentation and deviation.
      </p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
      
      <p class="text-lg leading-relaxed mb-4">
        Preserving authentic Islamic teachings requires a commitment to established methodologies of learning and interpretation. This includes respecting the chain of knowledge transmission, adhering to scholarly consensus, and approaching religious texts with proper contextual understanding.
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        As Muslims navigate the complexities of the modern world, the guidance provided by traditional Islamic scholarship remains an invaluable resource for maintaining the integrity of religious practice and understanding.
      </p>
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: "Sheikh Ahmad",
    authorImage: "/placeholder.svg?height=80&width=80",
    authorBio:
      "Sheikh Ahmad is a graduate of Islamic University of Madinah with expertise in comparative fiqh and aqeedah.",
    date: "May 15, 2024",
    readTime: "8 min read",
    category: "Islamic Thought",
    tags: ["tradition", "authentic-islam", "teachings"],
    relatedArticles: [
      {
        id: 2,
        title: "The History of Bid'ah and Its Evolution",
        excerpt: "A comprehensive look at the concept of bid'ah (innovation) in Islam.",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: 3,
        title: "Misconceptions About Traditional Islam",
        excerpt: "Clarifying common misconceptions about traditional Islamic practices and beliefs.",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }

  return (
    <div className="container py-10">
      <article>
        {/* Article Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-6">
            <Link href="/articles">
              <Button variant="ghost" size="sm">
                ← Back to Articles
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="ml-auto">
                  <Globe className="h-4 w-4 mr-2" />
                  Language
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("ml")}>മലയാളം</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("ar")}>العربية</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm">
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>

          <h1 className="text-4xl font-bold tracking-tight">{article.title}</h1>

          <div className="flex items-center mt-4 mb-6">
            <Badge variant="secondary" className="mr-3">
              {article.category}
            </Badge>
            <div className="flex items-center text-muted-foreground text-sm">
              <CalendarIcon className="mr-1 h-4 w-4" />
              {article.date}
            </div>
            <div className="flex items-center text-muted-foreground text-sm ml-4">
              <Clock className="mr-1 h-4 w-4" />
              {article.readTime}
            </div>
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative w-full aspect-[21/9] mb-10">
          <Image
            src={article.coverImage || "/placeholder.svg"}
            alt={article.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Author Info */}
        <div className="flex items-center mb-8">
          <Avatar className="h-12 w-12 mr-4">
            <AvatarImage src={article.authorImage} alt={article.author} />
            <AvatarFallback>{article.author[0]}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium">{article.author}</div>
            <div className="text-sm text-muted-foreground">{article.authorBio}</div>
          </div>
        </div>

        <Separator className="mb-8" />

        {/* Article Content */}
        <div
          className="prose prose-lg dark:prose-invert max-w-none mb-10"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        <Separator className="mb-8" />

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              #{tag}
            </Badge>
          ))}
        </div>

        {/* Related Articles */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {article.relatedArticles.map((relatedArticle) => (
              <Card key={relatedArticle.id}>
                <CardContent className="p-0">
                  <Link href={`/articles/${relatedArticle.id}`} className="block group">
                    <div className="grid sm:grid-cols-2">
                      <div className="relative h-48 sm:h-full">
                        <Image
                          src={relatedArticle.image || "/placeholder.svg"}
                          alt={relatedArticle.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium group-hover:underline">{relatedArticle.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2">{relatedArticle.excerpt}</p>
                      </div>
                    </div>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </article>
    </div>
  )
}

