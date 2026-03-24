import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"

export default function Index() {
  const missionStatement =
    "Мы шли разными дорогами, но судьба привела нас друг к другу. В этот особенный день мы хотим разделить нашу радость со всеми, кто дорог нам. Вы — часть нашей истории. Без вас этот день был бы неполным. Приходите разделить с нами первый день нашей совместной жизни, наполненный любовью, смехом и теплом близких сердец. Мы будем счастливы видеть вас рядом."

  const timelineEntries = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
      alt: "Первая встреча",
      title: "Наша первая встреча",
      description:
        "Это случилось три года назад на уютной вечеринке у общих друзей. Тот взгляд, та улыбка — и мир для нас стал другим. Мы говорили всю ночь напролёт и поняли: это начало чего-то особенного.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80",
      alt: "Помолвка",
      title: "Он сделал предложение",
      description:
        "На берегу моря на закате, когда небо окрасилось в золото и розовый, Михаил встал на одно колено. Алина плакала от счастья, а слово «да» разнеслось над волнами. Этот момент мы будем помнить вечно.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
      alt: "Наша свадьба",
      title: "И вот — наш день",
      description:
        "15 июня 2025 года мы произнесём «да» перед теми, кого любим. Впереди — совместная жизнь, полная приключений, тепла и взаимной поддержки. И мы очень хотим начать её именно с вами рядом.",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen" style={{ background: "hsl(30, 30%, 97%)" }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement Section */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20" style={{ background: "hsl(30, 30%, 97%)" }}>
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p
              className="text-sm tracking-[0.5em] mb-6 uppercase"
              style={{ color: "hsl(350, 30%, 55%)", fontFamily: "'Cormorant Garamond', serif" }}
            >
              С любовью
            </p>
            <h2
              className="text-4xl md:text-6xl font-light tracking-widest mb-12 italic"
              style={{ color: "hsl(25, 20%, 20%)", fontFamily: "'Cormorant Garamond', serif" }}
            >
              Дорогие гости
            </h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="community" className="relative py-20" style={{ background: "hsl(30, 25%, 95%)" }}>
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <p
                className="text-sm tracking-[0.5em] mb-4 uppercase"
                style={{ color: "hsl(350, 30%, 55%)", fontFamily: "'Cormorant Garamond', serif" }}
              >
                Три года вместе
              </p>
              <h2
                className="text-4xl md:text-6xl font-light tracking-widest mb-6 italic"
                style={{ color: "hsl(25, 20%, 20%)", fontFamily: "'Cormorant Garamond', serif" }}
              >
                Наша история
              </h2>
              <p
                className="text-xl md:text-2xl font-light max-w-3xl mx-auto"
                style={{ color: "hsl(25, 10%, 45%)", fontFamily: "'Cormorant Garamond', serif" }}
              >
                Каждая история любви уникальна. Вот наша — в трёх главах.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20" style={{ background: "hsl(30, 30%, 97%)" }}>
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p
              className="text-sm tracking-[0.5em] mb-4 uppercase"
              style={{ color: "hsl(350, 30%, 55%)", fontFamily: "'Cormorant Garamond', serif" }}
            >
              Тепло близких
            </p>
            <h2
              className="text-4xl md:text-6xl font-light tracking-widest mb-6 italic"
              style={{ color: "hsl(25, 20%, 20%)", fontFamily: "'Cormorant Garamond', serif" }}
            >
              Слова{" "}
              <span style={{ color: "hsl(350, 30%, 55%)" }}>близких</span>
            </h2>
            <p
              className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed mb-12"
              style={{ color: "hsl(25, 10%, 45%)", fontFamily: "'Cormorant Garamond', serif" }}
            >
              Те, кто знает нас лучше всего — делятся своими пожеланиями и воспоминаниями.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Final Parallax Section */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?w=1920&q=80"
          mobileImage="https://images.unsplash.com/photo-1507901747481-84a4f64fda6d?w=1200&q=80"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}
