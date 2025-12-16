"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

export default function WomenHistorySite() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "voices", "interview", "sources"]
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
                { id: "voices", label: "Voices from Past" },
                { id: "interview", label: "Modern Voice" },
                { id: "sources", label: "Sources" },
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
              Women and Education
            </h1>
            <p className="font-serif text-lg sm:text-2xl text-muted-foreground italic anim-fade-up anim-delay-1">
              "Education is the passport to the future."
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Text - Takes up 2 columns */}
            <Card className="md:col-span-2 p-6 sm:p-8 bg-card rounded-2xl shadow-lg space-y-6 anim-rise">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-primary">Why Women's History Matters</h2>
              <div className="space-y-4 text-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  Women's history matters because it fills in the gaps that are left by traditional history that we are
                  taught in school. More often than not, women's achievements are overshadowed by men, especially in
                  history. Studying women's history gives us insight into how women have shaped the society we live in
                  today, challenged inequalities, and fought for rights in all areas of our lives.
                </p>
                <p>
                  Women's history also helps to explain current gender inequalities by showing past laws and old social
                  norms that limited women's opportunities. It also allows us to reflect on how far we have come as a
                  society in comparison to the past.
                </p>
                <p>
                  The theme I have chosen is <strong>Women and Education</strong>. This topic is important because education has been
                  a key factor in helping women not only gain independence, but also economic stability and confidence.
                  Historically, many women were denied the right to an education. Girls in some countries still are
                  denied education, while boys are encouraged to go to school, which makes it even more crucial to know
                  women's history and continue to change our society into a more equal one.
                </p>
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
                    AV
                  </AvatarFallback>
                </Avatar>
                <div className="text-center space-y-2">
                  <h4 className="font-semibold text-base sm:text-lg text-foreground">Amanat Virk</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed text-left">
                    I am a current college student interested in pursuing nursing. Some of my hobbies are making crafts,
                    listening to music, painting, reading, and going to the gym. My mom was the first woman in our
                    family to go to college, and she earned a master's degree. I really look up to her because she set
                    the standard for me wanting to be a CRNA one day.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          {/* Video Section */}
          <div className="py-8">
             <Card className="overflow-hidden bg-black/5 border-0 shadow-xl rounded-2xl">
               <div className="p-4 bg-primary text-primary-foreground">
                 <h3 className="text-xl font-serif font-bold text-center">Featured Video</h3>
               </div>
               <div className="aspect-video w-full bg-black flex items-center justify-center">
                 <video 
                   controls 
                   className="w-full h-full object-contain"
                   src="/video2233907115.mp4"
                 >
                   Your browser does not support the video tag.
                 </video>
               </div>
             </Card>
          </div>
        </section>

        {/* VOICES FROM THE PAST SECTION */}
        <section id="voices" className="py-12 sm:py-16 space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Voices from the Past</h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-serif italic">
              Stories of Resilience and Change
            </p>
          </div>

          {/* Voice 1 */}
          <Card className="p-6 sm:p-8 bg-card rounded-2xl shadow-lg anim-rise">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-4">
              1. Early American Education (17th Century)
            </h3>
            <div className="space-y-4 text-foreground leading-relaxed text-sm sm:text-base">
              <p>
                During the seventeenth century, educational opportunities were very limited for girls compared to boys.
                Most girls' formal education ended between the ages of 12 and 14. It was not deemed necessary for a girl
                to complete further schooling, especially because these girls were expected to become homemakers one day.
                In school, they were taught only basic skills such as reading, arithmetic, as well as writing which at
                the time were considered sufficient for women's expected roles. Boys, in contrast, were encouraged to
                pursue higher education and studied subjects like Latin, geography, and history.
              </p>
              <p>
                Despite these limitations, women played a crucial role as teachers. In 1717, Connecticut required towns
                to have at least one school. In Cornwall, one of the earliest schools was held in the home of Rachel
                Marsh Douglass and her husband, James Douglass. Rachel would teach during the summer months ("women's
                schools"), and her husband during the winter. This arrangement reflects a common pattern where women
                were relied upon as teachers for foundational topics, mapping the pathway for later efforts to expand
                educational access.
              </p>
            </div>
          </Card>

          {/* Voice 2 */}
          <Card className="p-6 sm:p-8 bg-card rounded-2xl shadow-lg anim-rise">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-4">
              2. The Reconstruction Era (1867-1877)
            </h3>
            <div className="space-y-4 text-foreground leading-relaxed text-sm sm:text-base">
              <p>
                During the Reconstruction era following the Civil War, women played a critical role in expanding
                educational opportunities for Black women, despite facing immense challenges. As Kay Ann Taylor stated,
                "Black women lived in greater oppression than White women, thus making it more difficult for Black women
                to secure sponsorship to participate in the education of the freedpeople."
              </p>
              <p>
                Achievements of Black female educators like Charlotte Forten were significant. The Penn School, founded
                by abolitionists Charlotte Forten, Ellen Murray, and Laura Towne, offered history and literacy courses
                alongside practical training. Other women, like Martha Schofield, invested personal resources; in 1868,
                she used her life savings to establish a school in Aiken, South Carolina. These schools provided both
                academic and practical skills, helping students navigate a post-slavery society. These sacrifices laid
                the groundwork for future generations.
              </p>
            </div>
          </Card>

          {/* Voice 3 */}
          <Card className="p-6 sm:p-8 bg-card rounded-2xl shadow-lg anim-rise">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-4">
              3. Begum Zaffar Ali
            </h3>
            <div className="space-y-4 text-foreground leading-relaxed text-sm sm:text-base">
              <p>
                Begum Zaffar Ali was a central figure in education and a women's liberation activist who grew up in a
                conservative society where women's lives were heavily controlled. Encouraged by supportive parents, she
                received a formal education that included both standard subjects and practical skills like health
                education.
              </p>
              <p>
                In 1925, she started teaching at an all-girls school in Fateh Kadal, Srinagar. She went beyond standard
                subjects, teaching etiquette and ensuring her students were well-rounded. In 1930, she became the first
                female matriculate in Kashmir, a groundbreaking achievement. She advocated for girls' education,
                promoted mid-day meals in schools, and served as a headmistress. Her legacy continues to inspire women
                across the world, showing that women could go beyond the role of housewife and achieve academic
                excellence.
              </p>
            </div>
          </Card>
        </section>

        {/* VOICE FROM TODAY SECTION */}
        <section id="interview" className="py-12 sm:py-16 space-y-8">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Voice from Today</h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-serif italic">
              An Interview with a Modern Professional
            </p>
          </div>

          <Card className="p-6 sm:p-8 bg-secondary/10 border-2 border-secondary/20 rounded-2xl shadow-lg anim-pop">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1 space-y-4">
                <h3 className="font-serif text-2xl font-bold text-foreground">Interview with Harkirat Bhangu (CRNA)</h3>
                <div className="prose prose-sm sm:prose-base text-muted-foreground">
                  <p>
                    For my interview, I chose my aunt, a Certified Registered Nurse Anesthetist (CRNA). I chose her
                    because I want to become a nurse someday.
                  </p>
                  <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-foreground font-medium">
                    "I wanted to become a nurse, but it was not accepted in society."
                  </blockquote>
                  <p>
                    I was surprised by this response, as I thought nursing was always an accepted career given it has
                    been female-dominated. My aunt shared that her grandfather encouraged her to get an education in
                    India during a time when traditional values often kept daughters out of school.
                  </p>
                  <p className="mt-4">
                    She told me he would always say: <strong>"You can always lose gold and money, but no one can ever
                    take away your education."</strong> This resonates with me deeply as I pursue my own path in
                    healthcare.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-card p-6 rounded-xl shadow-inner text-center space-y-4">
                 <span className="text-6xl">👩‍⚕️</span>
                 <p className="text-sm text-muted-foreground">
                   Generational support for education empowers women to break barriers in fields like medicine.
                 </p>
              </div>
            </div>
          </Card>
        </section>

        {/* SOURCES SECTION */}
        <section id="sources" className="py-12 sm:py-16 space-y-8 pb-24">
          <div className="text-center space-y-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-primary">Citations</h2>
          </div>

          <Card className="p-6 sm:p-8 bg-card rounded-2xl shadow-lg space-y-4 anim-rise">
            <ul className="space-y-4 text-sm sm:text-base text-muted-foreground list-disc pl-5">
              <li>
                Cornsoc. (2021a, June 25). <em>Early Education for Women (1740 - 1847)</em>. Cornwall Historical
                Society.{" "}
                <a
                  href="https://cornwallhistoricalsociety.org/early-education-for-women"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-4 break-all"
                >
                  https://cornwallhistoricalsociety.org/early-education-for-women
                </a>
              </li>
              <li>
                <em>10. women and reconstruction</em>. Remedial Herstory. (n.d.).{" "}
                <a
                  href="https://www.remedialherstory.com/10-women-and-reconstruction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-4 break-all"
                >
                  https://www.remedialherstory.com/10-women-and-reconstruction
                </a>
              </li>
              <li>
                Janardhan, S. (2021, July 28). <em>The extraordinary life of Educationist Begum Zaffar Ali</em>.
                Feminism in India.{" "}
                <a
                  href="https://feminisminindia.com/2017/11/14/extraordinary-life-begum-zaffar-ali/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-4 break-all"
                >
                  https://feminisminindia.com/2017/11/14/extraordinary-life-begum-zaffar-ali/
                </a>
              </li>
            </ul>
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
