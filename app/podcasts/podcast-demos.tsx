"use client"

import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
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
import { CalendarIcon, Clock, HeadphonesIcon, Search } from "lucide-react"

export default function PodcastsPage() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")

  // Mock data for categories
  const categories = [
    { id: "all", name: "All" },
    { id: "islamic-thought", name: "Islamic Thought" },
    { id: "history", name: "History" },
    { id: "contemporary", name: "Contemporary Issues" },
    { id: "qa", name: "Q&A Sessions" },
  ]

  // Mock data for podcasts
  const podcasts = [
    {
      id: 1,
      title: "The Path of the Righteous Predecessors",
      description: "Exploring the way of the Salaf and its relevance today.",
      image: "/placeholder.svg?height=300&width=300",
      duration: "45 min",
      date: "June 05, 2024",
      category: "Islamic Thought",
    },
    {
      id: 2,
      title: "Addressing Modern Challenges with Traditional Knowledge",
      description: "How traditional Islamic knowledge provides solutions for contemporary issues.",
      image: "/placeholder.svg?height=300&width=300",
      duration: "38 min",
      date: "May 22, 2024",
      category: "Contemporary Issues",
    },
    {
      id: 3,
      title: "Conversations with Scholars: Preserving Authentic Islam",
      description: "Interviews with leading scholars on preserving authentic Islamic teachings.",
      image: "/placeholder.svg?height=300&width=300",
      duration: "52 min",
      date: "June 12, 2024",
      category: "Q&A Sessions",
    },
    {
      id: 4,
      title: "The Rise and Fall of Islamic Movements",
      description: "A historical perspective on various Islamic movements and their impact.",
      image: "/placeholder.svg?height=300&width=300",
      duration: "65 min",
      date: "April 18, 2024",
      category: "History",
    },
    {
      id: 5,
      title: "Understanding Aqeedah: Core Beliefs in Islam",
      description: "A detailed exploration of the fundamental beliefs in traditional Islam.",
      image: "/placeholder.svg?height=300&width=300",
      duration: "42 min",
      date: "May 30, 2024",
      category: "Islamic Thought",
    },
    {
      id: 6,
      title: "Q&A Session: Navigating Modern Life as a Muslim",
      description: "Answering common questions about living as a Muslim in the contemporary world.",
      image: "/placeholder.svg?height=300&width=300",
      duration: "58 min",
      date: "June 08, 2024",
      category: "Q&A Sessions",
    },
  ]

  // Filter podcasts based on search term
  const filteredPodcasts = podcasts.filter(
    (podcast) =>
      podcast.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      podcast.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      podcast.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="container py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{t("podcasts")}</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-3xl">
          Listen to our collection of podcasts discussing traditional Islamic teachings and addressing contemporary
          issues.
        </p>
      </div>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search podcasts..."
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
              {filteredPodcasts
                .filter((podcast) => category.id === "all" || podcast.category === category.name)
                .map((podcast) => (
                  <Card key={podcast.id} className="overflow-hidden flex flex-col h-full">
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={podcast.image || "/placeholder.svg"}
                        alt={podcast.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
                        <Button variant="secondary" size="sm" className="rounded-full">
                          <HeadphonesIcon className="h-4 w-4 mr-2" />
                          Play
                        </Button>
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-xl">
                        <Link href={`/podcasts/${podcast.id}`} className="hover:underline">
                          {podcast.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="line-clamp-2 mt-2">{podcast.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="p-4 pt-0 mt-auto flex items-center justify-between">
                      <div className="flex items-center text-xs text-muted-foreground">
                        <CalendarIcon className="mr-1 h-3 w-3" />
                        {podcast.date}
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <Clock className="mr-1 h-3 w-3" />
                        {podcast.duration}
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
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

