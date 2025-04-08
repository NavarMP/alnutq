"use client"

import { CardContent } from "@/components/ui/card"

import { Card } from "@/components/ui/card"

import { useLanguage } from "@/components/language-provider"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CalendarIcon, Clock, Globe, Share2 } from "lucide-react"

export default function BattleOfBadrArticle() {
  const { language, setLanguage } = useLanguage()

  // Article data
  const article = {
    id: "badr-battle",
    title: "ബദ്ർ യുദ്ധം",
    content: `
      <p class="text-lg leading-relaxed mb-4">
        ബദ്ർ യുദ്ധം ഹൃസ്വമായ നിലയിൽ അറിഞ്ഞിരിക്കണം. എങ്കിലേ ബദ്ർ മൗലീദ് കേൾക്കുമ്പോൾ നമ്മുടെ ഈമാൻ വർദ്ധിക്കുകയുള്ളൂ...
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        മദീനയിൽ നിന്ന് കിലോമീറ്ററുകളോളം ദൂരമുള്ള സ്ഥലമാണ് ബദ്ർ. അവിടെ കിനാന അല്ലെങ്കിൽ ബനൂ ളംറ ഗോത്രക്കാരനായ ബദ്റുബ്നു യഖ്ലദ്ബ്നുന്നള്ർ ഈ സ്ഥലത്ത് താമസിച്ചിരുന്നത് കൊണ്ടാണ് ബദ്ർ എന്ന പേര് ലഭിച്ചത്. ഒരു വ്യക്തിയുടെ നാമം ആ നാടിന് നൽകപ്പെട്ടു.
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        ജനവാസം കുറഞ്ഞ ഗ്രാമമായിരുന്നു ബദ്ർ. ബദ്റുബ്ന് ഖുറൈശ് എന്നൊരാൾ അവിടെ ഒരു കിണർ കുഴിച്ചെന്നും അയാളുടെ പേര് കിണറിന് ലഭിച്ചെന്നും പിന്നീട് അത് സ്ഥല നാമമായിയെന്നും അഭിപ്രായം ഉണ്ട്.
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        സത്യത്തിന്റെയും, അസത്യത്തിന്റെയും, വർഗ്ഗ, വർണ്ണ വിവേചനത്തിനിടയിലുള്ള ധർമ്മസമരം, ഏക ഇലാഹെന്ന അല്ലാഹു ﷻ വിലുള്ള വിശ്വാസം നിലനിർത്തുന്നതിനുള്ള ഇസ്ലാമിന്റെ ഒന്നാം സ്വാതന്ത്ര്യ യുദ്ധമാണ് ബദ്ർ യുദ്ധം.
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        ഹിജ്റ രണ്ടാം വർഷം റമളാൻ മാസം 17 ന് അത്യുഷ്ണമുള്ള ഒരു വെള്ളിയാഴ്ചയാണ് ഇസ്ലാമിക ചരിത്രത്തിലെ ആദ്യത്തെ ഏറ്റവും വലിയ യുദ്ധമായ ബദ്ർ യുദ്ധം നടന്നത്. മുന്നൂറിൽ പരം സഹാബികൾ പ്രസ്തുത യുദ്ധത്തിൽ പങ്കെടുത്തതായി സഹീഹുൽ ബുഖാരിയിലും സഹീഹുൽ മുസ്ലിമിലും കാണാം. ആയുധങ്ങളും മറ്റ് യുദ്ധസാമഗ്രികളുമായി വന്ന ആയിരത്തോളം ശത്രുക്കളെ സഹാബത്ത് നേരിട്ടതും ശത്രുപക്ഷത്തിന്റെ പല പ്രമുഖരും കൊല്ലപ്പെട്ടതും ഇസ്ലാമിന് വിജയം ലഭിച്ചതും ഇവിടെ ശ്രദ്ധേയമാണ്.
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        ബദ്ർ യുദ്ധത്തിൽ പങ്കെടുത്ത സ്വഹാബികൾക്കാണ് ബദ്രീങ്ങൾ എന്നു പറയുന്നത്. ബദ്റിൽ പങ്കെടുത്തവരുടെ മഹത്വം ഇമാം ബുഖാരി അനസ് رضي اللّه عنه വിൽ നിന്നും നിവേദനം ചെയ്ത് രേഖപ്പെടുത്തിയതായി കാണാം.
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        കുട്ടിയായിരുന്ന ഹാരിസ رضي اللّه عنه വിനു ബദർ യുദ്ധത്തിൽ അമ്പേറ്റു. അപ്പോൾ അവരുടെ മാതാവ് നബി ﷺ യുടെ അരികിൽ വന്നു പരാതിപ്പെട്ടപ്പോൾ നബി ﷺ ഇപ്രകാരം പറഞ്ഞു: "നിശ്ചയം ഹാരിസ സ്വർഗത്തിലാണ്." (ബുഖാരി) അൻസാരികളിൽ നിന്ന് ആദ്യം ശഹീദായ വ്യക്തിയാണ് ഹാരിസ.
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        ഹൗളിൽ നിന്നും വെള്ളം കുടിച്ച് കൊണ്ടിരിക്കുമ്പോൾ ശത്രുപക്ഷത്തിൽ നിന്നുള്ള ഹിബ്ബാ ബ്നു ഹർഖത്താണ് അമ്പ് ചെയ്ത് ഹാരിസ رضي اللّه عنه നെ കൊന്നത്. ജന്നത്തുൽ ഫിർദൗസാണ് ഹാരിസക്ക് വാഗ്ദാനം ചെയ്തത്. (ഉംദത്തുൽ ഖാരി: 19/94)
      </p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">ബദ്ർ യുദ്ധത്തിന്റെ അനിവാര്യത</h2>
      
      <p class="text-lg leading-relaxed mb-4">
        ബദ്ർ യുദ്ധം അനിവാര്യമായിരുന്നു. സ്വന്തം നാടും വീടും സമ്പത്തും എല്ലാം ഉപേക്ഷിച്ച് മദീനത്തേക്ക് പോന്ന ഒരു ജനതയെ അവിടെയും ജീവിക്കാൻ അനുവദിക്കില്ലെന്ന് വന്നാൽ എന്ത് ചെയ്യും? മാത്രമല്ല അല്ലാഹു ﷻ വിന്റെ ദീൻ ഇവിടെ നിലനിൽപ്പില്ലെന്ന് വന്നാൽ എന്ത് ചെയ്യും? അവസാനം നബി ﷺ ക്കും സ്വഹാബത്തിനും യുദ്ധം ചെയ്യേണ്ടി വന്നു.
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        ബദ്ർ യുദ്ധം നടന്നതിന്റെ തൊട്ട് മുമ്പത്തെ ശഅ്ബാൻ മാസത്തിലാണ് റമളാൻ നോമ്പ് നിർബന്ധമാക്കപ്പെട്ടത്. പക്ഷേ ബദർ യുദ്ധവേളയിൽ നബി ﷺ യും സഹാബത്തും ഇസ്ലാം അനുവദിച്ച പ്രകാരം നോമ്പ് മുറിച്ചിരുന്നു. (സീറത്തുൽ ഹലബി 2/148)
      </p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">യുദ്ധത്തിലെ സൈന്യബലം</h2>
      
      <p class="text-lg leading-relaxed mb-4">
        ആയിരത്തോളം വരുന്ന ശത്രുപക്ഷത്തോടൊപ്പം 600 അങ്കികളും, 100 കുതിരകളും, 700 ഒട്ടകങ്ങളും, പാട്ടുപാടി നൃത്തം വെച്ച് ആവേശം കൊള്ളിക്കാൻ നർത്തകിമാരും കൂടെ ഉണ്ടായിരുന്നു.
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        മുസ്ലിം പക്ഷത്ത് 313 സഹാബികളും 60 അങ്കികളും രണ്ട് കുതിരകളും മാത്രമാണ് ഉണ്ടായിരുന്നത്.
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        മൂന്ന് പതാകകൾ ബദ്ർ യുദ്ധത്തിൽ മുസ്ലിംകൾ വഹിച്ചിരുന്നു. ഒരു വെളുത്തതും രണ്ട് കറുത്തതുമായ പതാകകൾ. വെളുത്ത കൊടി മിസ്അബു ബ്നു ഉമൈർ رضي اللّه عنه വും, കറുത്ത കൊടികൾ ഒന്ന് അലി رضي اللّه عنه വും മറ്റൊന്ന് സഅദുബ്നു മുആദ് رضي اللّه عنه വുമായിരുന്നു പിടിച്ചിരുന്നത്.
      </p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">യുദ്ധത്തിലെ ശഹീദുകൾ</h2>
      
      <p class="text-lg leading-relaxed mb-4">
        ശത്രുപക്ഷത്ത് നിന്നും 70 പേർ കൊല്ലപ്പെടുകയും, 70 പേരെ മുസ്ലിംകൾ ബന്ധിയാക്കുകയും ചെയ്തു. മുസ്ലിം പക്ഷത്ത് നിന്ന് 14 പേര് ശഹീദായി. 8 അൻസാറുകളും 6 മുഹാജിറുകളും.
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        മുഹാജിറുകൾ:
      </p>
      
      <ol class="list-decimal pl-6 mb-4 space-y-1">
        <li>ഉബൈദത്തുബ്നു ഹാരിസ് رضي اللّه عنه</li>
        <li>ഉമൈറുബ്നു അബീവഖാസ് رضي اللّه عنه</li>
        <li>ദുശ്ശിമാലയ്നി رضي اللّه عنه</li>
        <li>ആഖിലുബ്നു ബുഖൈർ رضي اللّه عنه</li>
        <li>മിഹ്ജഅ് رضي اللّه عنه</li>
        <li>സ്വഫ് വാൻ رضي اللّه عنه</li>
      </ol>
      
      <p class="text-lg leading-relaxed mb-4">
        അൻസാറുകൾ:
      </p>
      
      <ol class="list-decimal pl-6 mb-4 space-y-1">
        <li>സഅദ് رضي اللّه عنه</li>
        <li>മുബശ്ശിർ رضي اللّه عنه</li>
        <li>യസീദ് رضي اللّه عنه</li>
        <li>ഉമൈറുബ്നുൽ ഹുമാം رضي اللّه عنه</li>
        <li>റാഫിഅ്‌ رضي اللّه عنه</li>
        <li>ഹാരിസ് رضي اللّه عنه</li>
        <li>ഔഫുബ്നു ഹാരിസ് رضي اللّه عنه</li>
        <li>മുഅവ്വിദ് رضي اللّه عنه</li>
      </ol>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">ബദ്രീങ്ങളുടെ മഹത്വം</h2>
      
      <p class="text-lg leading-relaxed mb-4">
        ബദ്രീങ്ങൾ ആദരിക്കപ്പെട്ടത് പോലെ അവരുടെ നാമങ്ങളും ആദരിക്കപ്പെട്ടതാണ്. അവരുടെ നാമങ്ങൾ എഴുതി വെക്കുന്നതും, പാരായണം ചെയ്യുന്നതും വലിയ പുണ്യമുള്ള അമലാണ്. വല്ല വ്യക്തിയും സ്വന്തം ശരീരത്തിലോ, വീടുകളിലോ, ചരക്കുകളിലോ, കടകളിലോ അസ്മാഉൽ ബദർ എഴുതി വെച്ചാൽ അത് മുഖേന അല്ലാഹു ﷻ വിന്റെ കാവലും, സർവ്വ വിഷമങ്ങളിൽ നിന്നും അവന് അല്ലാഹു ﷻ മുക്തിയും നൽകുന്നതാണെന്ന് ഇമാമുകൾ ഉദ്ദരിച്ചതായി കാണാം.
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        പ്രമുഖ സ്വഹാബീ വനിത ബീവി റുബയ്യിഅ رضي اللّه عنها പറയുന്നു. എന്റെ വിവാഹ ദിവസം തിരുനബി ﷺ എന്റെ വീട്ടിലേക്ക് വന്നു. അന്ന് എന്റെ വീട്ടിൽ ചില പെൺകുട്ടികൾ ബദ്റിൽ ശഹീദായ ശുഹദാക്കളുടെ പേരുകൾ പറഞ്ഞ് ബദർ പാട്ട് പാടിക്കൊണ്ടിരിക്കുകയായിരുന്നു. ഇത് കേട്ട് കൊണ്ടാണ് നബി ﷺ തങ്ങൾ എന്റെ വീട്ടിലേക്ക് കയറിവന്നത്. ഇത് കണ്ട പെൺകുട്ടികൾ ബദർ പാട്ടുകൾ നിർത്തി നബി ﷺ യുടെ മദ്ഹ് ചൊല്ലാൻ തുടങ്ങി.
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        അതിൽ ഒരു പെൺകുട്ടി ഇങ്ങനെ പാടി: وفينا نبيي يعلم ما في غد (വഫീനാ നബിയ്യും യ അലമു മാഫീ ഗദി)-അർത്ഥം: വരാനിരിക്കുന്ന കാര്യങ്ങൾ അറിയുന്ന ഒരു പ്രവാചകൻ ഞങ്ങളിലുണ്ട്.
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        ഇത് കേട്ട നബി ﷺ തങ്ങൾ തൽസമയം ഇങ്ങനെ പറഞ്ഞു: "എന്നെ പറ്റിയുള്ള കാവ്യം നീ ഉപേക്ഷിക്കുക. ആദ്യം ആലപിച്ചത് തന്നെ തുടരുക." (ബുഖാരി) ബദ്ർ ശുഹദാക്കളുടെ കാവ്യം ആലപിച്ചു കൊണ്ടിരിക്കുന്ന തിനിടയിൽ തിരുനബി ﷺ യെ കുറിച്ചു പറഞ്ഞത്കൊണ്ടാണ് അത് നിർത്താൻ നബി ﷺ ആ കുട്ടികളോട് ആവശ്യപ്പെട്ടത്. (മിർഖാത്ത് 3/419)
      </p>
      
      <h2 class="text-2xl font-bold mt-8 mb-4">ബദ്ർ ദിനാചരണം</h2>
      
      <p class="text-lg leading-relaxed mb-4">
        എല്ലാ വർഷവും റമളാൻ 17 വരുമ്പോൾ മുസ്ലീംകൾ ബദ്ർ ദിനം ആചരിക്കുന്നു. പ്രസ്തുത ദിവസം ബദ്ർ മൗലിദും യാസീനും ഓതി ഭക്ഷണ വിതരണം നടത്തുന്ന ചര്യ നൂറ്റാണ്ടുകളായി നിലനിന്ന് പോരുന്ന ഒരു സദാചാരമാണ്. ബദ്രീങ്ങളുടെ പേരുകൾ പറഞ്ഞ് തവസ്സുലാക്കി ദുആ ചെയ്താൽ അല്ലാഹു ﷻ അവന്റെ ആവശ്യം നിർവ്വഹിച്ച് കൊടുക്കുമെന്ന് പണ്ഡിതന്മാർ രേഖപ്പെടുത്തിയിട്ടുണ്ട്.
      </p>
      
      <p class="text-lg leading-relaxed mb-4">
        നമ്മുടെ മുൻഗാമികൾ ബദ്ർ പാട്ടും, മൗലിദും വീട്ടിലും പള്ളികളിലും നടത്തുകയും, ഭക്ഷണം കൊടുക്കുകയും, വിതരണം ചെയ്യുകയും ചെയ്തിരുന്നു. ബദർ ആണ്ട് നേർച്ച നടത്തലും, അതിലേക്ക് വസ്തുക്കൾ നേർച്ചയാക്കലും പുണ്യകരമായ കാര്യമാണ്. അതാതു നാട്ടിലെ പതിവും, വഴക്കവുമാണ് പരിഗണിക്കേണ്ടത്. (തുഹ്ഫ 10/100)
      </p>
    `,
    coverImage: "/placeholder.svg?height=600&width=1200",
    author: "ഹുസൈൻ കാമിൽ ഓമച്ചപ്പുഴ",
    authorImage: "/placeholder.svg?height=80&width=80",
    authorBio: "ഇസ്ലാമിക ചരിത്ര ഗവേഷകൻ",
    date: "April 8, 2024",
    readTime: "10 min read",
    category: "ഇസ്ലാമിക ചരിത്രം",
    tags: ["ബദ്ർ യുദ്ധം", "ഇസ്ലാമിക ചരിത്രം", "സഹാബികൾ"],
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
            <Card>
              <CardContent className="p-0">
                <Link href="/articles/islamic-history" className="block group">
                  <div className="grid sm:grid-cols-2">
                    <div className="relative h-48 sm:h-full">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Islamic History"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium group-hover:underline">ഇസ്ലാമിക ചരിത്രത്തിലെ പ്രധാന സംഭവങ്ങൾ</h3>
                      <p className="text-sm text-muted-foreground mt-2">
                        ഇസ്ലാമിക ചരിത്രത്തിലെ നിർണായക സംഭവങ്ങളെക്കുറിച്ചുള്ള ഒരു അവലോകനം
                      </p>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-0">
                <Link href="/articles/ramadan-significance" className="block group">
                  <div className="grid sm:grid-cols-2">
                    <div className="relative h-48 sm:h-full">
                      <Image
                        src="/placeholder.svg?height=200&width=300"
                        alt="Ramadan Significance"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium group-hover:underline">റമദാൻ മാസത്തിന്റെ പ്രാധാന്യം</h3>
                      <p className="text-sm text-muted-foreground mt-2">റമദാൻ മാസത്തിന്റെ ആത്മീയവും ചാരിത്രികവുമായ പ്രാധാന്യം</p>
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
    </div>
  )
}
