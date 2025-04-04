"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { CalendarIcon, Clock, Search } from "lucide-react"

export default function ArticlesPage() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data for categories and tags
  const categories = [
    { id: "all", name: "All" },
    { id: "islamic-thought", name: "Islamic Thought" },
    { id: "contemporary-issues", name: "Contemporary Issues" },
    { id: "history", name: "Islamic History" },
    { id: "fiqh", name: "Fiqh (Jurisprudence)" },
    { id: "clarifications", name: "Clarifications" },
  ]

  // Mock data for articles
  const articles = [
    {
      id: 1,
      title: "Understanding Authentic Islamic Teachings",
      excerpt: "An exploration of traditional Islamic teachings and how they differ from modern innovations.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Sheikh Ahmad",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "May 15, 2024",
      readTime: "8 min read",
      category: "Islamic Thought",
      tags: ["tradition", "authentic-islam", "teachings"],
    },
    {
      id: 2,
      title: "The History of Bid'ah and Its Evolution",
      excerpt: "A comprehensive look at the concept of bid'ah (innovation) in Islam and how it has evolved over time.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Dr. Muhammad Ali",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "April 28, 2024",
      readTime: "10 min read",
      category: "Islamic History",
      tags: ["bidah", "history", "evolution"],
    },
    {
      id: 3,
      title: "Misconceptions About Traditional Islam",
      excerpt: "Clarifying common misconceptions about traditional Islamic practices and beliefs.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Ustadh Ibrahim",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "June 02, 2024",
      readTime: "6 min read",
      category: "Clarifications",
      tags: ["misconceptions", "tradition", "clarification"],
    },
    {
      id: 4,
      title: "The Danger of Following Modernist Movements",
      excerpt: "Examining how modernist Islamic movements deviate from authentic teachings and their implications.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Sheikh Abdullah",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "May 20, 2024",
      readTime: "12 min read",
      category: "Contemporary Issues",
      tags: ["modernism", "deviance", "warning"],
    },
    {
      id: 5,
      title: "The Importance of Following Scholarly Consensus",
      excerpt:
        "Why following scholarly consensus (ijma) is crucial for maintaining the integrity of Islamic understanding.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Dr. Aisha Rahman",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "June 10, 2024",
      readTime: "7 min read",
      category: "Fiqh (Jurisprudence)",
      tags: ["ijma", "consensus", "scholarship"],
    },
    {
      id: 6,
      title: "Wahhabism: A Historical and Theological Analysis",
      excerpt: "An objective analysis of Wahhabism, its origins, and how it differs from traditional Sunni Islam.",
      image: "/placeholder.svg?height=400&width=600",
      author: "Prof. Khalid Hussein",
      authorImage: "/placeholder.svg?height=40&width=40",
      date: "April 15, 2024",
      readTime: "15 min read",
      category: "Islamic History",
      tags: ["wahhabism", "analysis", "history"],
    },
  ]

  // Filter articles based on search term
  const filteredArticles = articles.filter(
    (article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
  )

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{t("articles")}</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-3xl">
          Explore our collection of articles on traditional Islamic teachings and contemporary issues.
        </p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search articles..."
            className="pl-10 max-w-lg"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="mb-8 flex flex-wrap h-auto bg-transparent p-0 justify-start">
          {categories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 py-2 mr-2 mb-2"
            >
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="w-full">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles
                .filter((article) => category.id === "all" || article.category === category.name)
                .map((article) => (
                  <Card key={article.id} className="overflow-hidden flex flex-col h-full">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {article.category}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <CalendarIcon className="mr-1 h-3 w-3" />
                          {article.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl">
                        <Link href={`/articles/${article.id}`} className="hover:underline">
                          {article.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2 mt-2">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0 mt-auto flex items-center justify-between">
                      <div className="flex items-center">
                        <Avatar className="h-8 w-8 mr-2">
                          <AvatarImage src={article.authorImage} alt={article.author} />
                          <AvatarFallback>{article.author[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">{article.author}</span>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        {article.readTime}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

