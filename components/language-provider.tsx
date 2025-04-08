"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "ml" | "ar"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
  fontClass: string
}

// Simple translation system
const translations: Record<Language, Record<string, string>> = {
  en: {
    home: "Home",
    articles: "Articles",
    podcasts: "Podcasts",
    mentorship: "Mentorship",
    donate: "Donate",
    login: "Log In",
    signup: "Sign Up",
    search: "Search",
    subscribe: "Subscribe",
    newsletter: "Newsletter",
    copyright: "© 2024 Zawiyah Al Nutq. All rights reserved.",
    developed_by: "Developed by",
    NavarMP: "Muhammed Navar",
    recent_articles: "Recent Articles",
    popular_podcasts: "Popular Podcasts",
    join_mentorship: "Join Mentorship Program",
    support_us: "Support Our Cause",
    read_more: "Read More",
    listen_now: "Listen Now",
    apply_now: "Apply Now",
    donate_now: "Donate Now",
    eu_description: "Edified Ummah: A sister page dedicated to general Islamic content",
  },
  ml: {
    home: "ഹോം",
    articles: "ലേഖനങ്ങൾ",
    podcasts: "പോഡ്‌കാസ്റ്റുകൾ",
    mentorship: "മെന്റർഷിപ്പ്",
    donate: "സംഭാവന",
    login: "ലോഗിൻ",
    signup: "രജിസ്റ്റർ",
    search: "തിരയുക",
    subscribe: "സബ്‌സ്‌ക്രൈബ്",
    newsletter: "ന്യൂസ്‌ലെറ്റർ",
    copyright: "© 2024 സാവിയ അൽ നുത്ഖ്. എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം.",
    developed_by: "വികസിപ്പിച്ചത്: ",
    NavarMP: "മുഹമ്മദ് നവാർ",
    recent_articles: "പുതിയ ലേഖനങ്ങൾ",
    popular_podcasts: "ജനപ്രിയ പോഡ്‌കാസ്റ്റുകൾ",
    join_mentorship: "മെന്റർഷിപ്പ് പ്രോഗ്രാമിൽ ചേരുക",
    support_us: "ഞങ്ങളുടെ ലക്ഷ്യത്തെ പിന്തുണയ്ക്കുക",
    read_more: "കൂടുതൽ വായിക്കുക",
    listen_now: "ഇപ്പോൾ കേൾക്കുക",
    apply_now: "ഇപ്പോൾ അപേക്ഷിക്കുക",
    donate_now: "ഇപ്പോൾ സംഭാവന ചെയ്യുക",
    eu_description: "എഡിഫൈഡ് ഉമ്മ: പൊതു ഇസ്ലാമിക ഉള്ളടക്കത്തിന് സമർപ്പിച്ച ഒരു സഹോദരി പേജ്",
  },
  ar: {
    home: "الرئيسية",
    articles: "المقالات",
    podcasts: "البودكاست",
    mentorship: "الإرشاد",
    donate: "تبرع",
    login: "تسجيل الدخول",
    signup: "التسجيل",
    search: "بحث",
    subscribe: "اشتراك",
    newsletter: "النشرة الإخبارية",
    copyright: "© 2024 زاوية النطق. جميع الحقوق محفوظة.",
    developed_by: "طوره",
    NavarMP: "محمد نوار",
    recent_articles: "أحدث المقالات",
    popular_podcasts: "البودكاست الشائع",
    join_mentorship: "انضم إلى برنامج الإرشاد",
    support_us: "ادعم قضيتنا",
    read_more: "اقرأ المزيد",
    listen_now: "استمع الآن",
    apply_now: "قدّم الآن",
    donate_now: "تبرع الآن",
    eu_description: "الأمة المتعلمة: صفحة شقيقة مخصصة للمحتوى الإسلامي العام",
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
  fontClass: "font-montserrat",
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [fontClass, setFontClass] = useState("font-montserrat")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && ["en", "ml", "ar"].includes(savedLanguage)) {
      setLanguage(savedLanguage)
      updateFontClass(savedLanguage)
    }
  }, [])

  const updateFontClass = (lang: Language) => {
    switch (lang) {
      case "en":
        setFontClass("font-montserrat")
        break
      case "ml":
        setFontClass("font-anek-malayalam")
        break
      case "ar":
        setFontClass("font-monadi")
        break
      default:
        setFontClass("font-montserrat")
    }
  }

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    updateFontClass(newLanguage)
    localStorage.setItem("language", newLanguage)

    // Set RTL for Arabic
    document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr"
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t, fontClass }}>
      <div className={fontClass}>{children}</div>
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

