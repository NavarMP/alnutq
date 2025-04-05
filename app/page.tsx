"use client"

import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarIcon, Clock, HeadphonesIcon, UserIcon } from "lucide-react"
import NewsletterForm from "@/components/newsletter-form"
import { motion } from "framer-motion"

export default function HomePage() {
  const { t } = useLanguage()

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  // Simulated data for the homepage
  const featuredArticles = [
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
    },
  ]

  const popularPodcasts = [
    {
      id: 1,
      title: "The Path of the Righteous Predecessors",
      description: "Exploring the way of the Salaf and its relevance today.",
      image: "/placeholder.svg?height=300&width=300",
      duration: "45 min",
      date: "June 05, 2024",
    },
    {
      id: 2,
      title: "Addressing Modern Challenges with Traditional Knowledge",
      description: "How traditional Islamic knowledge provides solutions for contemporary issues.",
      image: "/placeholder.svg?height=300&width=300",
      duration: "38 min",
      date: "May 22, 2024",
    },
    {
      id: 3,
      title: "Conversations with Scholars: Preserving Authentic Islam",
      description: "Interviews with leading scholars on preserving authentic Islamic teachings.",
      image: "/placeholder.svg?height=300&width=300",
      duration: "52 min",
      date: "June 12, 2024",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/10 z-10" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-20" />

        <motion.div className="container relative z-20" initial="hidden" animate="visible" variants={fadeIn}>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Zawiyah Al Nutq
            </h1>
            <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
              A community dedicated to preserving authentic Islamic teachings and rejecting innovations
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                <Link href="/articles">Explore Articles</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Featured Content Section */}
      <section className="py-16 bg-gradient-subtle dark:bg-gradient-dark">
        <div className="container">
          <Tabs defaultValue="articles" className="w-full">
            <motion.div
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                {t("recent_articles")}
              </h2>
              <TabsList className="mt-4 sm:mt-0">
                <TabsTrigger value="articles">Articles</TabsTrigger>
                <TabsTrigger value="podcasts">Podcasts</TabsTrigger>
              </TabsList>
            </motion.div>

            <TabsContent value="articles" className="w-full">
              <motion.div
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {featuredArticles.map((article) => (
                  <motion.div key={article.id} variants={fadeIn}>
                    <Card className="overflow-hidden flex flex-col h-full bg-gradient-card hover:shadow-lg transition-shadow duration-300">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover transition-transform hover:scale-105 duration-500"
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
                          <Link href={`/articles/${article.id}`} className="hover:text-primary transition-colors">
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
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="mt-8 text-center"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Link href="/articles">View All Articles</Link>
                </Button>
              </motion.div>
            </TabsContent>

            <TabsContent value="podcasts" className="w-full">
              <motion.div
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {popularPodcasts.map((podcast) => (
                  <motion.div key={podcast.id} variants={fadeIn}>
                    <Card className="overflow-hidden flex flex-col h-full bg-gradient-card hover:shadow-lg transition-shadow duration-300">
                      <div className="relative aspect-square overflow-hidden">
                        <Image
                          src={podcast.image || "/placeholder.svg"}
                          alt={podcast.title}
                          fill
                          className="object-cover transition-transform hover:scale-105 duration-500"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300">
                          <Button variant="secondary" size="sm" className="rounded-full">
                            <HeadphonesIcon className="h-4 w-4 mr-2" />
                            Play
                          </Button>
                        </div>
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="text-xl">
                          <Link href={`/podcasts/${podcast.id}`} className="hover:text-primary transition-colors">
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
                  </motion.div>
                ))}
              </motion.div>
              <motion.div
                className="mt-8 text-center"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Button
                  asChild
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Link href="/podcasts">View All Podcasts</Link>
                </Button>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Mentorship Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            className="grid gap-8 lg:grid-cols-2 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                {t("join_mentorship")}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Connect with knowledgeable mentors who can guide you in understanding authentic Islamic teachings and
                avoiding innovations.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary mr-3">
                    <UserIcon className="h-4 w-4" />
                  </div>
                  <p>One-on-one sessions with qualified mentors</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary mr-3">
                    <UserIcon className="h-4 w-4" />
                  </div>
                  <p>Structured learning paths tailored to your level of knowledge</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary mr-3">
                    <UserIcon className="h-4 w-4" />
                  </div>
                  <p>Regular follow-ups and progress tracking</p>
                </li>
              </ul>
              <Button asChild className="mt-8 bg-gradient-primary hover:opacity-90 transition-opacity">
                <Link href="/mentorship">{t("apply_now")}</Link>
              </Button>
            </motion.div>
            <motion.div variants={fadeIn} className="lg:pl-10">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Mentorship Program"
                width={600}
                height={600}
                className="rounded-lg object-cover shadow-md"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 bg-gradient-subtle dark:bg-gradient-dark">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              {t("support_us")}
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Your donations help us produce high-quality content, organize events, and continue our mission of
              spreading authentic Islamic knowledge.
            </p>
            <Button asChild className="mt-8 bg-gradient-primary hover:opacity-90 transition-opacity">
              <Link href="/donate">{t("donate_now")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
            <NewsletterForm />
          </motion.div>
        </div>
      </section>
    </>
  )
}

