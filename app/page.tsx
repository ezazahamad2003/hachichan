"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function WomenHistorySite() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "voices", "sources"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const photoDelayClasses = ["anim-delay-0", "anim-delay-1", "anim-delay-2", "anim-delay-3"]

  return (
    <div className="min-h-screen">
      {/* Sticky Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-sm anim-fade-down">
        <div className="max-w-5xl mx-auto px-3 sm:px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between gap-3">
            <h1 className="font-serif text-lg sm:text-2xl font-bold text-primary whitespace-nowrap">
              Women's History
            </h1>
            <div className="flex gap-3 sm:gap-6 overflow-x-auto whitespace-nowrap scrollbar-thin scrollbar-thumb-primary/30">
              {[
                { id: "home", label: "Home" },
                { id: "voices", label: "Voices from the Past" },
                { id: "sources", label: "Sources & Credits" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-xs sm:text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-3 sm:px-4">
        {/* HOME SECTION */}
        <section id="home" className="py-12 sm:py-16 space-y-10 sm:space-y-12">
          {/* Hero Area */}
          <div className="text-center space-y-4 sm:space-y-6 py-8 sm:py-12">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight anim-fade-up">
              Women's History Project
            </h1>
            <p className="font-serif text-lg sm:text-2xl text-muted-foreground italic anim-fade-up anim-delay-1">
              Theme: <span className="text-primary">[Your Theme Here]</span>
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Text - Takes up 2 columns */}
            <Card className="md:col-span-2 p-6 sm:p-8 bg-card rounded-2xl shadow-lg space-y-6 anim-rise">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary">Why Women's History Matters</h2>
              <div className="space-y-4 text-foreground leading-relaxed text-sm sm:text-base">
                {/* TODO: Replace this with your own 100+ word explanation of why Women's History matters and why your theme is important. */}
                <p>
                  Women's History as a discipline is essential because it illuminates the often-overlooked
                  contributions, struggles, and achievements of women throughout time. By studying women's experiences,
                  we gain a more complete and accurate understanding of our past, challenging traditional narratives
                  that have centered primarily on men's perspectives and accomplishments.
                </p>
                <p>
                  This project explores the theme of <strong>[INSERT YOUR THEME HERE]</strong>, which is particularly
                  significant because [EXPLAIN WHY YOUR THEME MATTERS]. Through examining this theme, we can better
                  understand how women have shaped society, politics, culture, and more.
                </p>
                <p>
                  Understanding women's history helps us recognize patterns of inequality, celebrate resilience, and
                  inspire future generations. It reminds us that women have always been active participants in shaping
                  our world, even when their voices were systematically silenced or excluded from official records. [ADD
                  MORE OF YOUR OWN THOUGHTS HERE TO REACH 100+ WORDS]
                </p>
                <div className="bg-accent/30 border-l-4 border-primary p-4 rounded-lg mt-6">
                  <p className="text-sm font-medium text-accent-foreground">
                    📝 <strong>Student Note:</strong> Replace this entire text block with your own 100+ word explanation
                    of why Women's History matters and why your chosen theme is important.
                  </p>
                </div>
              </div>
            </Card>

            {/* Meet the Historian Card */}
            <Card className="p-5 sm:p-6 bg-secondary/20 rounded-2xl shadow-lg space-y-6 h-fit anim-rise anim-delay-1">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-secondary-foreground text-center">
                Meet the Historian
              </h3>
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-primary/20">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl sm:text-2xl font-bold">
                    AB
                  </AvatarFallback>
                </Avatar>
                <div className="text-center space-y-2">
                  <h4 className="font-semibold text-base sm:text-lg text-foreground">[Your Name Here]</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    [Write a short 3-4 line bio about yourself here. What grade are you in? What interests you about
                    history? What do you hope to learn from this project?]
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Photo Cards */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-center text-primary">Photo Gallery</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {[1, 2, 3, 4].map((i) => (
                <Card
                  key={i}
                  className={`p-3 sm:p-4 bg-card rounded-2xl shadow-lg space-y-3 anim-pop ${photoDelayClasses[i - 1]}`}
                >
                  <div className="aspect-square bg-muted rounded-xl flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl">📸</span>
                  </div>
                  <p className="text-xs text-center text-muted-foreground italic">Add your photo here</p>
                </Card>
              ))}
            </div>
            <p className="text-sm text-center text-muted-foreground">
              💡 Replace these placeholders with real photos of yourself
            </p>
          </div>
        </section>

        {/* VOICES FROM THE PAST SECTION */}
        <section id="voices" className="py-12 sm:py-16 space-y-8">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Voices from the Past</h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-serif italic">Example 1: 1700s or Earlier</p>
          </div>

          <Card className="p-6 sm:p-8 md:p-10 bg-card rounded-2xl shadow-lg anim-rise">
            <div className="grid gap-6 md:grid-cols-2 md:gap-8">
              {/* Left Column - Text Content */}
              <div className="space-y-6">
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary">
                  [Name of Woman / Historical Example Here]
                </h3>

                <div className="space-y-4 text-foreground leading-relaxed text-sm sm:text-base">
                  {/* TODO: Write ~300+ words here in your own words summarizing the example and explaining how it connects to your theme. Do NOT copy from websites. */}
                  <p>
                    [Write your introduction paragraph here. Introduce the historical woman or example you're
                    discussing. When and where did she live? What was her background? What made her significant?]
                  </p>
                  <p>
                    [Continue with the main body of your analysis. What did this woman accomplish? What challenges did
                    she face? How did she overcome obstacles? What impact did she have on her time period?]
                  </p>
                  <p>
                    [Explain how this example connects to your theme. Why is this person or event a good illustration of
                    your chosen theme? What does this tell us about women's experiences during this time period?]
                  </p>
                  <p>
                    [Conclude with the lasting significance. How did this woman or event influence later generations?
                    What can we learn from this example today? Keep writing until you reach 300+ words total.]
                  </p>

                  <div className="bg-accent/30 border-l-4 border-primary p-4 rounded-lg mt-6">
                    <p className="text-sm font-medium text-accent-foreground">
                      📝 <strong>Student Note:</strong> Replace this with ~300+ words in YOUR OWN WORDS. Summarize your
                      historical example and explain how it connects to your theme. Do NOT copy from websites—write it
                      yourself and cite your sources below!
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Image and Key Connections */}
              <div className="space-y-6">
                {/* Image Placeholder */}
                <div className="space-y-3">
                  <div className="aspect-[3/4] bg-muted rounded-xl flex items-center justify-center border-4 border-primary/10">
                    <div className="text-center space-y-2 p-6">
                      <span className="text-5xl sm:text-6xl">🖼️</span>
                      <p className="text-muted-foreground font-medium">Historical image here</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm italic text-muted-foreground">
                      <strong>Figure 1.</strong> [Write a short caption describing the image here]
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <strong>Source:</strong> [Author/Creator, "Title," Year, URL or Archive location]
                    </p>
                  </div>
                </div>

                {/* Key Connections Box */}
                <Card className="p-5 sm:p-6 bg-secondary/20 rounded-xl space-y-4 anim-pop anim-delay-1">
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-secondary-foreground flex items-center gap-2">
                    <span>🔗</span> Key Connections to Theme
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Connection point #1 to your theme",
                      "Connection point #2 to your theme",
                      "Connection point #3 to your theme",
                      "Connection point #4 to your theme",
                      "Connection point #5 to your theme",
                    ].map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-secondary-foreground">
                        <span className="text-primary text-lg flex-shrink-0">✓</span>
                        <span className="leading-relaxed">[{point}]</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </Card>
        </section>

        {/* SOURCES & CREDITS SECTION */}
        <section id="sources" className="py-12 sm:py-16 space-y-8 pb-24">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Sources & Credits</h2>
            <p className="text-base sm:text-lg text-muted-foreground">Academic Sources Used in This Project</p>
          </div>

          <Card className="p-6 sm:p-8 md:p-10 bg-card rounded-2xl shadow-lg space-y-6 anim-rise">
            <div className="space-y-4 sm:space-y-6">
              {[
                'Lastname, Firstname. "Article Title." Journal Name, vol. X, no. Y, Year, pp. XX-XX.',
                "Author, A. B. Book Title: Subtitle. Publisher, Year.",
                'Lastname, Firstname. "Chapter Title." In Book Title, edited by Editor Name, pp. XX-XX. Publisher, Year.',
                'Author Name. "Article/Page Title." Website Name, Organization, Date Published, URL.',
                'Archive Name. "Document Title." Collection Name, Box/Folder Number, Archive Location.',
              ].map((source, i) => (
                <Card key={i} className="p-3 sm:p-4 bg-muted/50 rounded-xl border-l-4 border-primary anim-pop">
                  <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                    <strong>Source {i + 1}:</strong> [{source}]
                  </p>
                </Card>
              ))}
            </div>

            <div className="bg-accent/30 border border-primary/20 p-4 sm:p-6 rounded-xl mt-6 sm:mt-8">
              <p className="text-sm text-accent-foreground leading-relaxed">
                <strong>⚠️ Citation Reminder:</strong> Use academic sources and cite them properly in MLA, APA, or
                Chicago format (check with your teacher). Do NOT use SparkNotes, AI summaries, or unreliable websites.
                Look for journal articles, books by historians, primary source documents, and reputable historical
                databases.
              </p>
            </div>
          </Card>
        </section>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8">
        <Button
          onClick={scrollToTop}
          className="rounded-full px-5 py-5 sm:px-6 sm:py-6 shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base"
        >
          Back to top ⬆️
        </Button>
      </div>
    </div>
  )
}
