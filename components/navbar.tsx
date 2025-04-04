"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Search, Menu, X, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const isMobile = useMobile()
  const [showSearch, setShowSearch] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.svg" alt="Al Nutq Logo" width={40} height={40} />
            <span className="hidden font-bold sm:inline-block">Al Nutq</span>
          </Link>

          {!isMobile && (
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{t("home")}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/articles" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{t("articles")}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/podcasts" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{t("podcasts")}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/mentorship" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{t("mentorship")}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/donate" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>{t("donate")}</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>

        <div className="flex items-center gap-2">
          {!isMobile ? (
            <>
              <Button variant="ghost" size="icon" onClick={() => setShowSearch(!showSearch)} aria-label="Search">
                <Search className="h-5 w-5" />
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Language">
                    <Globe className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setLanguage("en")}>English</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("ml")}>മലയാളം</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage("ar")}>العربية</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <ThemeToggle />

              <Link href="/login">
                <Button variant="ghost" size="sm">
                  {t("login")}
                </Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">{t("signup")}</Button>
              </Link>
            </>
          ) : (
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Zawiyah Al Nutq</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <SheetClose asChild>
                    <Link href="/" className="block py-2 font-medium">
                      {t("home")}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/articles" className="block py-2 font-medium">
                      {t("articles")}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/podcasts" className="block py-2 font-medium">
                      {t("podcasts")}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/mentorship" className="block py-2 font-medium">
                      {t("mentorship")}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/donate" className="block py-2 font-medium">
                      {t("donate")}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/login" className="block py-2 font-medium">
                      {t("login")}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link href="/signup" className="block py-2 font-medium">
                      {t("signup")}
                    </Link>
                  </SheetClose>
                  <div className="flex items-center gap-2 pt-4">
                    <Button variant="outline" size="sm" onClick={() => setLanguage("en")} className="flex-1">
                      EN
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => setLanguage("ml")} className="flex-1">
                      ML
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => setLanguage("ar")} className="flex-1">
                      AR
                    </Button>
                    <ThemeToggle />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          )}
        </div>
      </div>

      {showSearch && !isMobile && (
        <div className="border-t py-4 px-4 bg-background">
          <div className="container">
            <div className="flex items-center gap-2">
              <Input placeholder={t("search")} className="flex-1" autoFocus />
              <Button variant="ghost" size="icon" onClick={() => setShowSearch(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

