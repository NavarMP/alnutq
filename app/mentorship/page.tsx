"use client"

import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Check } from "lucide-react"

export default function MentorshipPage() {
  const { t } = useLanguage()

  // Mock mentors data
  const mentors = [
    {
      id: 1,
      name: "Sheikh Ahmad",
      image: "/placeholder.svg?height=128&width=128",
      position: "Senior Scholar",
      specialization: "Aqeedah & Comparative Religion",
      bio: "Sheikh Ahmad has over 20 years of experience teaching traditional Islamic sciences with a focus on creed and addressing modern misconceptions.",
      availability: "Tuesday, Thursday",
    },
    {
      id: 2,
      name: "Dr. Aisha Rahman",
      image: "/placeholder.svg?height=128&width=128",
      position: "Islamic Researcher",
      specialization: "Contemporary Fiqh Issues",
      bio: "Dr. Aisha specializes in applying traditional jurisprudential principles to modern contexts, helping students navigate contemporary challenges.",
      availability: "Monday, Wednesday, Friday",
    },
    {
      id: 3,
      name: "Ustadh Ibrahim",
      image: "/placeholder.svg?height=128&width=128",
      position: "Educational Director",
      specialization: "Islamic History & Development",
      bio: "Ustadh Ibrahim provides contextual understanding of Islamic history and the development of various movements and deviations throughout time.",
      availability: "Wednesday, Saturday",
    },
  ]

  // Programs data
  const programs = [
    {
      id: 1,
      title: "Beginner's Program",
      description: "Foundational understanding of authentic Islamic beliefs and practices",
      features: [
        "8-week curriculum covering basic aqeedah",
        "Weekly 1-hour one-on-one sessions",
        "Curated reading materials",
        "Progress assessments",
      ],
      duration: "2 months",
      suitable: "Those new to traditional Islamic teachings",
    },
    {
      id: 2,
      title: "Intermediate Program",
      description: "Deeper exploration of traditional methodology and contemporary challenges",
      features: [
        "12-week curriculum with specialized tracks",
        "Bi-weekly one-on-one sessions",
        "Group discussions on selected topics",
        "Research projects and presentations",
      ],
      duration: "3 months",
      suitable: "Those with basic knowledge seeking deeper understanding",
    },
    {
      id: 3,
      title: "Advanced Program",
      description: "Specialized guidance for those seeking scholarly development",
      features: [
        "6-month personalized learning path",
        "Regular sessions with multiple mentors",
        "Supervised research and writing",
        "Teaching opportunities within the community",
      ],
      duration: "6 months",
      suitable: "Students of knowledge with established foundation",
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">{t("mentorship")}</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-3xl">
          Connect with knowledgeable mentors who can guide you in understanding authentic Islamic teachings and avoiding
          innovations.
        </p>
      </div>

      <Tabs defaultValue="programs" className="w-full">
        <TabsList className="w-full max-w-md mx-auto grid grid-cols-3 mb-12">
          <TabsTrigger value="programs">Programs</TabsTrigger>
          <TabsTrigger value="mentors">Mentors</TabsTrigger>
          <TabsTrigger value="apply">Apply</TabsTrigger>
        </TabsList>

        {/* Programs Tab */}
        <TabsContent value="programs">
          <div className="grid gap-8 md:grid-cols-3">
            {programs.map((program) => (
              <Card key={program.id} className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium">Duration:</span>
                      <span className="text-sm ml-2">{program.duration}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Suitable for:</span>
                      <span className="text-sm ml-2">{program.suitable}</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-sm font-medium">Features:</span>
                      <ul className="mt-2 space-y-2">
                        {program.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Check className="h-4 w-4 mr-2 mt-1 text-primary" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/mentorship?tab=apply">Apply Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-muted/40 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">How Our Mentorship Works</h3>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">1</span>
                </div>
                <h4 className="font-medium mb-2">Application</h4>
                <p className="text-sm text-muted-foreground">
                  Submit your application with your background, goals, and preferred program
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">2</span>
                </div>
                <h4 className="font-medium mb-2">Matching</h4>
                <p className="text-sm text-muted-foreground">
                  We match you with an appropriate mentor based on your needs and their expertise
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold">3</span>
                </div>
                <h4 className="font-medium mb-2">Journey</h4>
                <p className="text-sm text-muted-foreground">
                  Begin your structured learning journey with regular sessions and progress tracking
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Mentors Tab */}
        <TabsContent value="mentors">
          <div className="grid gap-8 md:grid-cols-3">
            {mentors.map((mentor) => (
              <Card key={mentor.id} className="flex flex-col h-full">
                <CardHeader className="text-center">
                  <Avatar className="h-24 w-24 mx-auto mb-4">
                    <AvatarImage src={mentor.image} alt={mentor.name} />
                    <AvatarFallback>{mentor.name[0]}</AvatarFallback>
                  </Avatar>
                  <CardTitle>{mentor.name}</CardTitle>
                  <CardDescription>{mentor.position}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium">Specialization:</span>
                      <span className="text-sm ml-2">{mentor.specialization}</span>
                    </div>
                    <div>
                      <span className="text-sm font-medium">Availability:</span>
                      <span className="text-sm ml-2">{mentor.availability}</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-sm">{mentor.bio}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href={`/mentorship?tab=apply&mentor=${mentor.id}`}>Request This Mentor</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              All our mentors are thoroughly vetted for their knowledge, teaching ability, and adherence to authentic
              Islamic teachings.
            </p>
            <Button asChild variant="outline">
              <Link href="/mentorship?tab=apply">Apply for Mentorship</Link>
            </Button>
          </div>
        </TabsContent>

        {/* Apply Tab */}
        <TabsContent value="apply">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle>Mentorship Application</CardTitle>
              <CardDescription>Please fill out the form below to apply for our mentorship program.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <Label>Preferred Program</Label>
                  <RadioGroup defaultValue="beginner">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="beginner" id="beginner" />
                      <Label htmlFor="beginner">Beginner's Program</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="intermediate" id="intermediate" />
                      <Label htmlFor="intermediate">Intermediate Program</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="advanced" id="advanced" />
                      <Label htmlFor="advanced">Advanced Program</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="background">Islamic Knowledge Background</Label>
                  <Textarea
                    id="background"
                    placeholder="Please describe your current level of Islamic knowledge and any previous studies."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals">Learning Goals</Label>
                  <Textarea
                    id="goals"
                    placeholder="What do you hope to achieve through this mentorship program?"
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Preferred Mentor (Optional)</Label>
                  <RadioGroup defaultValue="any">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="any" id="any-mentor" />
                      <Label htmlFor="any-mentor">No preference (assign me to the most suitable mentor)</Label>
                    </div>
                    {mentors.map((mentor) => (
                      <div key={mentor.id} className="flex items-center space-x-2">
                        <RadioGroupItem value={mentor.id.toString()} id={`mentor-${mentor.id}`} />
                        <Label htmlFor={`mentor-${mentor.id}`}>
                          {mentor.name} - {mentor.specialization}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Submit Application</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

