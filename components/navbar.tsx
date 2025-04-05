"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
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
import PWARegister from "./pwa-register"
import { useTheme } from "next-themes"

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage()
  const isMobile = useMobile()
  const [showSearch, setShowSearch] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Determine if scrolled down from top
      setIsScrolled(currentScrollY > 10)

      // Auto-hide logic - hide when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY.current + 10) {
        setIsVisible(false)
      } else if (currentScrollY < lastScrollY.current - 10 || currentScrollY < 50) {
        setIsVisible(true)
      }

      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Determine logo color based on theme
  const logoColor = theme === "dark" ? "white" : "#415a80"

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-background",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1080 1080" // Kept from your original SVG
            width="40" // Matches your original navbar size
            height="40" // Matches your original navbar size
          >
            <g>
              <g id="Layer_1">
                <g>
                  <path
                    className="cls-1"
                    fill={logoColor} // Dynamic fill based on theme
                    d="M627.57,453.35c-19.77-19.57-39.02-38.61-58.69-58.08,9.19-9.08,17.88-17.59,26.5-26.18,19.13-19.07,38.18-38.23,57.39-57.22,2.67-2.64,2.88-4.22.1-6.96-17.36-17.13-34.6-34.37-51.72-51.73-2.61-2.65-4.11-2.56-6.61.05-8.24,8.58-16.71,16.93-24.72,25-9.54-9.59-18.77-18.86-28.42-28.56,8.84-8.51,18.46-17.77,27.65-26.62-10.41-10.37-20.04-19.97-29.46-29.35-18.55,18.58-37.7,37.76-56.9,57,9.16,8.98,18.62,18.24,27.62,27.06-10.12,10.1-19.47,19.42-28.51,28.44-18.17-18.18-37.1-37.12-55.8-55.84,37.68-37.64,75.87-75.77,113.72-113.58,76.37,76.38,153.2,153.22,229.88,229.9-56.93,56.82-114.44,114.22-171.91,171.58-8.7-8.9-17.93-18.36-27.23-27.88,18.45-18.43,37.44-37.39,57.12-57.04ZM656.04,423.98c.34-.2.76-.34,1.04-.62,18.34-18.29,36.66-36.61,55.03-54.87,1.77-1.75,1.34-2.95-.22-4.46-3.78-3.67-7.47-7.42-11.17-11.16-5.24-5.29-10.46-10.61-15.25-15.47-19.74,19.63-39.02,38.82-58.25,57.95,9.39,9.33,18.99,18.86,28.83,28.63Z"
                  />
                  <path
                    className="cls-1"
                    fill={logoColor}
                    d="M943.1,539.71c-47.65,47.7-95.38,95.48-142.95,143.1-8.91-8.99-18.06-18.21-28.45-28.68.79-.41,2.45-.81,3.48-1.84,36.31-36.2,72.52-72.5,108.88-108.65,2.96-2.95,3.19-4.57.06-7.52-7.77-7.31-15.27-14.9-22.65-22.61-2.55-2.66-4.02-2.56-6.59.03-26.36,26.55-52.87,52.95-79.27,79.46-1.34,1.35-2.1,3.28-3.02,4.78-29.74-29.78-58.2-58.28-86.3-86.42,37.97-38.01,76.18-76.27,114.22-114.35,47.38,47.42,95.13,95.21,142.59,142.7ZM771.16,539.08c19.2-19.24,38.39-38.47,57.86-57.98-8.34-8.3-17.04-16.81-25.53-25.54-2.49-2.56-3.99-2.24-6.34.14-15.57,15.76-31.24,31.41-46.96,47.02-2.63,2.61-5.65,4.82-8.38,7.12,10.49,10.45,19.98,19.9,29.34,29.23Z"
                  />
                  <path
                    className="cls-1"
                    fill={logoColor}
                    d="M365.43,538.85c-8.79-9.06-18.01-18.56-27.51-28.35-1.7,1.47-2.87,2.37-3.91,3.4-26.76,26.72-53.46,53.51-80.33,80.12-3,2.97-2.96,4.59.03,7.53,16.99,16.71,33.77,33.63,50.62,50.49,1.07,1.07,2.09,2.18,2.9,3.03-9.45,9.37-18.74,18.58-27.78,27.55-28.06-28.08-56.61-56.65-85.3-85.36,38.01-37.95,76.3-76.17,114.9-114.71-19.71-19.53-38.93-38.57-57.95-57.41,29.25-29.21,57.74-57.67,85.82-85.71,37.8,37.87,75.99,76.13,113.91,114.12-27.8,27.77-56.38,56.32-85.4,85.3ZM308.12,424.34c18.98,18.98,37.58,37.56,56.13,56.18,1.82,1.83,3.02,1.07,4.47-.39,5.45-5.51,10.89-11.03,16.45-16.43,3.45-3.35,7.12-6.48,11.5-10.45-4.8-4.5-8.8-8.07-12.6-11.85-14.62-14.55-29.16-29.17-43.77-43.73-1.16-1.15-2.29-3.35-4.36-1.29-9.19,9.18-18.33,18.41-27.82,27.95Z"
                  />
                  <path
                    className="cls-1"
                    fill={logoColor}
                    d="M310.03,597.18c8.82-8.83,18.01-18.02,27.25-27.27,47.88,47.94,95.88,96.01,143.55,143.75,10.3-10.33,19.83-19.88,29.59-29.66-18.53-18.4-37.65-37.38-56.44-56.05,29.25-29.18,57.84-57.72,86.15-85.97,27.89,27.88,56.45,56.42,84.68,84.64-47.37,47.37-95.22,95.21-142.71,142.7-56.9-56.92-114.43-114.47-172.07-172.13ZM568.71,627.63c-10.12-10.18-19.63-19.75-28.96-29.13-9.29,9.29-18.83,18.84-28.71,28.72,9.03,9.02,18.18,18.21,27.47,27.28.52.5,2.51.36,3.11-.21,9.23-8.94,18.34-18,27.09-26.66Z"
                  />
                  <path
                    className="cls-1"
                    fill={logoColor}
                    d="M539.96,943.21c-37.94-37.94-76.09-76.1-113.98-113.99,8.93-8.91,18.11-18.07,27.79-27.73,28.35,28.34,57.08,57.06,86.05,86.03,48.33-48.37,96.27-96.34,144.07-144.17,9.7,9.69,18.95,18.93,28.03,28-57.32,57.29-114.76,114.69-171.97,171.86Z"
                  />
                  <path
                    className="cls-1"
                    fill={logoColor}
                    d="M567.36,453.3c-9.01,8.99-18.2,18.16-27.11,27.05-57.3-57.24-114.82-114.69-172.27-172.08,9.07-8.89,18.39-18.03,27.56-27.01,56.91,56.98,114.31,114.45,171.82,172.04Z"
                  />
                  <path
                    className="cls-1"
                    fill={logoColor}
                    d="M682.96,684.86c-47.49,47.47-95.29,95.24-142.87,142.81-9.13-9.15-18.48-18.52-27.72-27.78,47.44-47.41,95.29-95.24,142.97-142.89,9.09,9.17,18.32,18.48,27.62,27.87Z"
                  />
                  <path
                    className="cls-1"
                    fill={logoColor}
                    d="M310.19,713.35c8.81-8.83,18.07-18.11,26.98-27.04,28.3,28.3,56.84,56.84,85.17,85.18-8.87,8.8-18.18,18.03-27.18,26.96-28.03-28.08-56.6-56.69-84.97-85.1Z"
                  />
                  <path
                    className="cls-1"
                    fill={logoColor}
                    d="M539.48,364.94c-9.04-9.03-18.22-18.19-27.1-27.05,9.28-9.24,18.62-18.55,27.85-27.74,8.63,8.81,17.84,18.2,26.89,27.43-8.78,8.69-18.18,18-27.64,27.36Z"
                  />
                  <path
                    className="cls-1"
                    fill={logoColor}
                    d="M509.49,511.16c-9.12,9.08-18.4,18.33-27.59,27.48-9.06-9.15-18.28-18.45-27.38-27.63,9.1-8.97,18.49-18.22,27.76-27.36,8.76,8.85,17.97,18.17,27.21,27.51Z"
                  />
                  <path
                    className="cls-1"
                    fill={logoColor}
                    d="M451.09,569.07c-8.8,8.8-18.05,18.04-27.17,27.16-8.97-9.05-18.17-18.34-27.25-27.51,8.99-8.89,18.3-18.09,27.3-26.99,8.77,8.84,18.05,18.19,27.12,27.34Z"
                  />
                  <path
                    className="cls-1"
                    fill={logoColor}
                    d="M742.26,740.57c-8.82-8.82-18-18.01-26.9-26.91,8.97-8.87,18.28-18.07,27.34-27.04,8.46,8.59,17.65,17.91,26.71,27.12-8.55,8.45-17.87,17.65-27.16,26.82Z"
                  />
                  <path
                    className="cls-1"
                    fill={logoColor}
                    d="M222.07,454.69c8.81,8.89,18.02,18.18,26.96,27.19-9.07,9.03-18.43,18.34-27.62,27.49-8.88-8.84-18.15-18.08-27.17-27.06,9.19-9.11,18.45-18.31,27.83-27.62Z"
                  />
                  <path
                    className="cls-1"
                    fill={logoColor}
                    d="M655.6,596.06c-9.11-9.06-18.31-18.2-27.35-27.18,9.21-9.08,18.53-18.28,27.8-27.43,8.74,8.79,17.99,18.09,27.05,27.2-9.16,9.13-18.5,18.43-27.5,27.41Z"
                  />
                  <path
                    className="cls-1"
                    fill={logoColor}
                    d="M686.03,626.15c8.85-8.75,18.06-17.86,26.95-26.64,8.97,9.05,18.23,18.4,27.27,27.52-8.45,8.41-17.71,17.63-26.87,26.75-8.8-8.89-18.08-18.26-27.34-27.62Z"
                  />
                  <path
                    className="cls-1"
                    fill={logoColor}
                    d="M163.7,512.36c9.27,9.31,18.51,18.6,27.62,27.75-8.96,8.92-18.15,18.06-27.04,26.91-9.03-9.15-18.3-18.53-27.38-27.72,8.47-8.51,17.7-17.78,26.81-26.94Z"
                  />
                </g>
              </g>
            </g>
          </svg>
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
              <PWARegister />

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

