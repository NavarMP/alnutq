"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Check, Heart } from "lucide-react"

export default function DonatePage() {
  const { t } = useLanguage()

  // Impact statistics
  const impactStats = [
    {
      title: "Articles Published",
      value: "300+",
      description: "Articles on authentic Islamic teachings",
    },
    {
      title: "Podcasts Produced",
      value: "150+",
      description: "Hours of audio content",
    },
    {
      title: "Students Mentored",
      value: "500+",
      description: "Through structured mentorship programs",
    },
    {
      title: "Events Organized",
      value: "50+",
      description: "Lectures, seminars, and workshops",
    },
  ]

  // Donation options
  const donationOptions = [
    {
      id: "monthly",
      title: "Monthly Donation",
      description: "Support our ongoing work with a recurring monthly donation",
      amounts: [10, 25, 50, 100, 250, "Other"],
    },
    {
      id: "one-time",
      title: "One-time Donation",
      description: "Make a single contribution to our cause",
      amounts: [50, 100, 250, 500, 1000, "Other"],
    },
    {
      id: "project",
      title: "Project-based Support",
      description: "Fund specific projects and initiatives",
      projects: [
        {
          id: "research",
          name: "Research & Publications",
          description: "Support our scholarly research and publication efforts",
        },
        {
          id: "education",
          name: "Educational Resources",
          description: "Help us create high-quality educational content and materials",
        },
        {
          id: "community",
          name: "Community Programs",
          description: "Support local community events and programs",
        },
      ],
    },
  ]

  return (
    <div className="container py-10">
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight">{t("donate")}</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-3xl">
          Support our mission to preserve and spread authentic Islamic teachings through your generous contributions.
        </p>
      </div>

      <div className="grid gap-12 lg:grid-cols-2 items-start">
        <div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Your Impact</h2>
            <p className="text-muted-foreground mb-6">
              Your donations directly contribute to our efforts in countering innovations and deviations by promoting
              authentic Islamic teachings.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {impactStats.map((stat, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="font-medium mt-1">{stat.title}</div>
                    <div className="text-sm text-muted-foreground mt-1">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-muted/40 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-4">How Your Donations Are Used</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Check className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Content Creation</h4>
                  <p className="text-sm text-muted-foreground">
                    Producing articles, podcasts, and videos on authentic Islamic teachings
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Research & Development</h4>
                  <p className="text-sm text-muted-foreground">
                    Supporting scholarly research and development of educational resources
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Community Programs</h4>
                  <p className="text-sm text-muted-foreground">
                    Organizing events, workshops, and educational programs
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Check className="h-5 w-5 mr-3 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Mentorship Program</h4>
                  <p className="text-sm text-muted-foreground">
                    Supporting qualified mentors and developing structured curricula
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Tabs defaultValue="monthly" className="w-full">
            <TabsList className="w-full grid grid-cols-3 mb-6">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="one-time">One-time</TabsTrigger>
              <TabsTrigger value="project">Projects</TabsTrigger>
            </TabsList>

            {/* Monthly Donation Tab */}
            <TabsContent value="monthly">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Donation</CardTitle>
                  <CardDescription>Support our ongoing work with a recurring monthly donation</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label>Select Amount</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {donationOptions[0].amounts.map((amount, index) => (
                          <Button
                            key={index}
                            type="button"
                            variant={index === 2 ? "default" : "outline"}
                            className="h-12"
                          >
                            {amount === "Other" ? amount : `$${amount}`}
                          </Button>
                        ))}
                      </div>
                    </div>

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
                      <Label htmlFor="payment">Payment Information</Label>
                      <div className="bg-muted/40 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          Payment processing options will be integrated here (credit card, PayPal, etc.)
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Add a Message (Optional)</Label>
                      <Textarea id="message" placeholder="Your message or dedication" />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Heart className="h-4 w-4 mr-2" />
                    Donate Monthly
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* One-time Donation Tab */}
            <TabsContent value="one-time">
              <Card>
                <CardHeader>
                  <CardTitle>One-time Donation</CardTitle>
                  <CardDescription>Make a single contribution to our cause</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label>Select Amount</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {donationOptions[1].amounts.map((amount, index) => (
                          <Button
                            key={index}
                            type="button"
                            variant={index === 2 ? "default" : "outline"}
                            className="h-12"
                          >
                            {amount === "Other" ? amount : `$${amount}`}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name-onetime">First Name</Label>
                        <Input id="first-name-onetime" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name-onetime">Last Name</Label>
                        <Input id="last-name-onetime" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email-onetime">Email</Label>
                      <Input id="email-onetime" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="payment-onetime">Payment Information</Label>
                      <div className="bg-muted/40 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          Payment processing options will be integrated here (credit card, PayPal, etc.)
                        </p>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message-onetime">Add a Message (Optional)</Label>
                      <Textarea id="message-onetime" placeholder="Your message or dedication" />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Heart className="h-4 w-4 mr-2" />
                    Donate Now
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            {/* Project-based Donation Tab */}
            <TabsContent value="project">
              <Card>
                <CardHeader>
                  <CardTitle>Project-based Support</CardTitle>
                  <CardDescription>Fund specific projects and initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label>Select Project</Label>
                      <RadioGroup defaultValue="research">
                        {donationOptions[2].projects.map((project) => (
                          <div key={project.id} className="flex items-start space-x-2 p-3 border rounded-md">
                            <RadioGroupItem value={project.id} id={project.id} className="mt-1" />
                            <div>
                              <Label htmlFor={project.id} className="font-medium">
                                {project.name}
                              </Label>
                              <p className="text-sm text-muted-foreground">{project.description}</p>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div className="space-y-2">
                      <Label>Donation Amount</Label>
                      <div className="grid grid-cols-3 gap-2">
                        {[100, 250, 500, 1000, 2500, "Other"].map((amount, index) => (
                          <Button
                            key={index}
                            type="button"
                            variant={index === 2 ? "default" : "outline"}
                            className="h-12"
                          >
                            {amount === "Other" ? amount : `$${amount}`}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="first-name-project">First Name</Label>
                        <Input id="first-name-project" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name-project">Last Name</Label>
                        <Input id="last-name-project" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email-project">Email</Label>
                      <Input id="email-project" type="email" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="payment-project">Payment Information</Label>
                      <div className="bg-muted/40 p-4 rounded-lg">
                        <p className="text-sm text-muted-foreground">
                          Payment processing options will be integrated here (credit card, PayPal, etc.)
                        </p>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">
                    <Heart className="h-4 w-4 mr-2" />
                    Support Project
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

