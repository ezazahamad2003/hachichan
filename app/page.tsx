"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
                  Women’s history matters because it fills in the gaps that are left by traditional history that we are
                  taught in school. More often than not, women’s achievements are overshadowed by men, especially in
                  history. Studying women’s history gives us insight into how women have shaped the society we live in
                  today, challenged inequalities, and fought for rights in all areas of our lives. Women’s history also
                  helps to explain current gender inequalities by showing past laws and old social norms that limited
                  women’s opportunities. It also allows us to reflect on how far we have come as a society in comparison
                  to the past.
                </p>
                <p>
                  The theme I have chosen is <strong>Women and Education</strong>. This topic is important because education has been
                  a key factor in helping women not only gain independence, but also economic stability and confidence.
                  Historically, many women were denied the right to an education. Girls in some countries still are
                  denied education, while boys are encouraged to go to school, which makes it even more crucial to know
                  women’s history and continue to change our society into a more equal one.
                </p>
              </div>
            </Card>

            {/* Meet the Historian Card */}
            <Card className="p-5 sm:p-6 bg-secondary/20 rounded-2xl shadow-lg space-y-6 h-fit anim-rise anim-delay-1">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-secondary-foreground text-center">
                Meet the Historian
              </h3>
              <div className="flex flex-col items-center space-y-4">
                <Avatar className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-primary/20">
                  <AvatarImage src="/IMG_7749.jpeg" alt="Amanat Virk" className="object-cover" />
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl sm:text-2xl font-bold">
                    AV
                  </AvatarFallback>
                </Avatar>
                <div className="text-center space-y-2">
                  <h4 className="font-semibold text-base sm:text-lg text-foreground">Amanat Virk</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed text-left">
                    My name is Amanat Virk, and I am a current college student interested in pursuing nursing. Some of my
                    hobbies are making crafts, listening to music, painting, reading, and going to the gym. My mom was
                    the first woman in our family to go to college, and she earned a master’s degree. I really look up to
                    her because she set the standard for me wanting to be a CRNA one day. I could not pursue nursing
                    without her support, and this project is dedicated to her. Education has played a major role in
                    shaping my goals, and learning women’s history helps me to appreciate women’s struggles and where we
                    are now as a society. I especially appreciate my mother for not only her journey in education, her
                    journey to America. As the daughter of immigrants, I know that I have a better education than my
                    parents were allowed to have which I am very grateful for.
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
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-6">
              1. Early American Education (17th Century)
            </h3>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-1 space-y-4 text-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  During the seventeenth century, educational opportunities were very limited for girls compared to boys.
                  Most girls’ formal education ended between the ages of 12 and 14. It was not deemed necessary for a girl
                  to complete further schooling, especially because these girls were expected to become homemakers one day
                  by society. In school, they were taught only basic skills such as reading, arithmetic, as well as writing
                  which at the time were considered to be sufficient for women’s expected roles of being homemakers,
                  caregivers, and of course mothers. Boys, in contrast, were actually encouraged to pursue higher
                  education and they studied various subjects such as Latin, geography, and history, which prepared them
                  for pursuing higher education.
                </p>
                <p>
                  Despite these limitations, women still played a crucial role in early American education as teachers. In
                  the beginning of 1717, Connecticut required towns to at least have one school. Specifically, in the town
                  of Cornwall, one of the earliest schools was held in the home of a woman named Rachel Marsh Douglass and
                  her husband, James Douglass. Rachel and her husband had a schedule. Rachel would teach during the summer
                  months, and her husband would teach during the winter. This arrangement actually reflects a common
                  pattern across the state of Connecticut, where winter months were primarily taught by men, while summer
                  months were primarily taught by women. Also, women taught specifically in “women’s schools”.
                </p>
                <p>
                  These women’s schools were essential to receive basic education within communities, even though female
                  teachers were only allowed to teach students foundational topics. Young women who aimed to become
                  teachers were expected to have strong moral character for example instead of having proper academic
                  training. This example connects to my theme of Women and Education by showing how women were continuously
                  excluded from higher education, yet relied on as teachers. Their participation mapped the pathway for
                  later efforts to expand educational access for women.
                </p>
              </div>
              <div className="w-full md:w-1/3 flex flex-col gap-2">
                <div className="relative overflow-hidden rounded-xl border-4 border-primary/20 bg-muted">
                  <img
                    src="/Screenshot 2025-12-15 at 10.56.16 PM.png"
                    alt="Early American Education"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center italic">
                  Early American Education
                </p>
              </div>
            </div>
          </Card>

          {/* Voice 2 */}
          <Card className="p-6 sm:p-8 bg-card rounded-2xl shadow-lg anim-rise">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-6">
              2. The Reconstruction Era (1867-1877)
            </h3>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-1 space-y-4 text-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  The Reconstruction era in the United States took place from 1867-1877, following the Civil War. The main
                  goal of this era was to reintergrate the Southern states back into the union, and to essentially rebuild
                  the South. During the Reconstruction era, women played a critical role in expanding educational
                  opportunities for Black women, depsite the wide range of challenges that they continuously faced. As Kay
                  Ann Taylor stated, “The status of all women during this time was embedded in oppression. Black women
                  lived in greater oppression than White women, thus making it more difficult for Black women to secure
                  sponsorship to participate in the education of the freedpeople.”(Herstory, Chapter 10). In this context,
                  the achievements of Black female educators like Charlotte Forte were very significant, considering the
                  determination it takes to fight against a system that is meant to push you back. White women have always
                  had more privileges than black women have had, and this rang true especially in this time period, which
                  makes me reflect on how far women of color especially have fought to gain the rights that we have now.
                </p>
                <p>
                  Female reformers ran schools that provided students with not only the basic academics they were used to,
                  but also practical life skills. This was huge, because formerly women were only taught skills that would
                  befit a homemaker. Now women were taught skills every human being should have regardless of the gender
                  they are. The Penn school, founded by abolitionists Charlotte Forten, Ellen Murray, and Laura Towne,
                  offered both history and literacy courses alongside training in things like shoemaking for
                  African-American children.
                </p>
                <p>
                  Other women even went as far as to invest personal resources to support education. For example, “In
                  1868, Martha Schofield, a Quaker from Pennsylvania, brought her life savings of $468 to Aiken, South
                  Carolina to establish a school for newly freed African-American folks (Herstory, Chapter 10)”. Her
                  school, the Schofield Normal and Industrial School, provided courses in both academic and practical
                  skills, like cooking and sewing. These skills helped students to navigate in a post slavery soceity.
                </p>
                <p>
                  Through these combined efforts, women reforms helped to massively shape the course of the education
                  landscape during the Reconstruction era. Despite the challenges of teaching in postwar Southern
                  communities, women found a way to provide opportunities for not only the advancement of African
                  Americans, but African American people as a whole. Reading this makes me be thankful for the sacrifice
                  that millions of women made before my time, because I would not be here without their sacrifices.
                </p>
              </div>
              <div className="w-full md:w-1/3 flex flex-col gap-2">
                <div className="relative overflow-hidden rounded-xl border-4 border-primary/20 bg-muted">
                  <img
                    src="/24 History-Making Black Women You Probably Didn't Learn About In School.jpeg"
                    alt="Reconstruction Era Education"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center italic">
                  African American Women in History
                </p>
              </div>
            </div>
          </Card>

          {/* Voice 3 */}
          <Card className="p-6 sm:p-8 bg-card rounded-2xl shadow-lg anim-rise">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-6">
              3. Begum Zaffar Ali
            </h3>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
              <div className="flex-1 space-y-4 text-foreground leading-relaxed text-sm sm:text-base">
                <p>
                  Begum Zaffar Ali, was a central figure in education, a women’s liberation activist, who made major
                  contributions to womens education. Ali grew up in a conservative society where women’s bodies and
                  movements were controlled by male heads in their families. Women had to ask permission from their male
                  counterparts to perform basic tasks. Begum Zaffar Ali sought to fight this, and also fight for women’s
                  pursuit of education. She was lucky and encouraged by her supportive parents, and she received formal
                  education from A European Christian governess and a seperate tutor specifically for religious
                  instruction. In addition to learning basic subjects, she learned about topics such as health education,
                  and houskeeping. She learned the best of both worlds, both practical and basic skills every human being
                  should be equipped with.
                </p>
                <p>
                  After marrying her cousin Agha Zaffar Ali and having three children, she still continued to prioritze
                  education. In 1925, she started teaching at an all girls school in Fateh Kadal, Srinagar. She not only
                  taught standard subjects, but she also taught things like etiquette to her students. She made sure her
                  students were well rounded, beyond the standard education that they were provided with. Motivated by her
                  own growing passion for learning, she took the matriculation exam in 1930, becoming the first female
                  matriculate in Kashmir, which was a groundbreaking step in the field of education for women. Not only did
                  she become a teacher in a time where women were considered to only have the role of being a housewife,
                  she went a step further and did something no woman had yet accomplished. She paved a way for future
                  generations of Indian women in the pathway of education. Her activism also went far beyond the classroom.
                  She advocated for girls’ education, and promoted the introduction of mid day meals in schools, she also
                  served as headmistress at the school that she worked at. Her legacy continues to inspire women not only
                  in India, but all across the world.
                </p>
              </div>
              <div className="w-full md:w-1/3 flex flex-col gap-2">
                <div className="relative overflow-hidden rounded-xl border-4 border-primary/20 bg-muted">
                  <img
                    src="/_ (20).jpeg"
                    alt="Begum Zaffar Ali"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-xs text-muted-foreground text-center italic">
                  Begum Zaffar Ali
                </p>
              </div>
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
                    For my interview, I chose to interview my aunt, who is a nurse. I chose her because I want to become
                    a nurse someday, specifically a CRNA. A CRNA is a Certified Registered Nurse Anesthesiest, and the
                    degree takes eight years to complete. One of the responses she gave to me that stood out to me the
                    most was when she said, “I wanted to become a nurse, but it was not accepted in society (Harkirat
                    Bhangu)”. I was surprised by this, because I thought that nursing was always an accepted career. I
                    think I had this notion because nursing has always been a female dominated career, for as long as I
                    can even remember.
                  </p>
                  <p>
                    Another response that stuck out to me was that my aunt's grandfather encouraged her to get an
                    education. In India during that time period, most people held traditional values, meaning that they
                    didn’t allow their daughters to go to school. So it was nice hearing that my aunt had her grandfather
                    supporting her educational journey. She also told me that he would always say that “You can always
                    lose gold and money, but you will always have an education”. He told her no one can steal your
                    education from you, and it just highlights how important education is. You can lose everything else
                    in your life, but your education will always remain with you.
                  </p>
                  <p>
                    The last response that stuck out to me was that my aunt was the first woman in her village to not
                    only go to college, but also to go to university. She directly paved the path for so many women in
                    her village. In the interview she also stated that, due to her nursing degree, she is able to guide
                    students like me. She said that she wouldn’t have been able to do that without having her degree.
                    Listening to her throughout this interview truly inspired me to become a CRNA, and pave my own path,
                    like she did.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-card p-6 rounded-xl shadow-inner text-center space-y-4">
                <div className="relative overflow-hidden rounded-xl border-4 border-primary/20 bg-muted">
                  <img
                    src="/Screenshot 2025-12-15 at 10.50.00 PM.png"
                    alt="Harkirat Bhangu during interview"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">
                  Harkirat Bhangu during our interview about education and nursing.
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
                  href="https://feminisminindia.com/2017/11/14/extraordinary-life-begum-zaffar-ali/#google_vignette"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-4 break-all"
                >
                  https://feminisminindia.com/2017/11/14/extraordinary-life-begum-zaffar-ali/#google_vignette
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
