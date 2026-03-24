import type * as React from "react"
import { useRef } from "react"
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion"
import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { MapPin, Heart, Calendar, Music } from "lucide-react"

interface SmoothScrollHeroProps {
  scrollHeight?: number
  desktopImage: string
  mobileImage: string
  initialClipPercentage?: number
  finalClipPercentage?: number
}

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1875,
  desktopImage,
  mobileImage,
  initialClipPercentage = 25,
  finalClipPercentage = 75,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // Clip path animation - image fully reveals by 70% scroll progress
  const clipStart = useTransform(scrollYProgress, [0, 0.7], [initialClipPercentage, 0])
  const clipEnd = useTransform(scrollYProgress, [0, 0.7], [finalClipPercentage, 100])
  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`

  // Background size animation - completes when image is fully revealed
  const backgroundSize = useTransform(scrollYProgress, [0, 0.7], ["170%", "100%"])

  // Scale animation - completes when image is fully revealed
  const scale = useTransform(scrollYProgress, [0, 0.7], [1.2, 1])

  // CTA overlay animations - appears earlier and completes by 50%
  const ctaOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
  const ctaY = useTransform(scrollYProgress, [0.3, 0.5], [50, 0])

  return (
    <div ref={containerRef} style={{ height: `${scrollHeight}px` }} className="relative w-full">
      <motion.div
        className="sticky top-0 h-screen w-full bg-black overflow-hidden"
        style={{
          clipPath,
          willChange: "transform",
        }}
      >
        {/* Desktop background */}
        <motion.div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url(${desktopImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            scale,
          }}
        />
        {/* Mobile background */}
        <motion.div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${mobileImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            scale,
          }}
        />

        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/40" />

        {/* CTA Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{
            opacity: ctaOpacity,
            y: ctaY,
          }}
        >
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            {/* Main CTA Heading */}
            <p className="text-sm tracking-[0.5em] mb-4 text-white/70 uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
              Ждём вас
            </p>
            <h2
              className="text-4xl md:text-6xl lg:text-7xl font-light tracking-widest mb-6 leading-none italic"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              15 июня
              <br />
              <span className="bg-gradient-to-r from-white via-rose-100 to-white bg-clip-text text-transparent">
                2025 года
              </span>
            </h2>

            {/* Supporting Text */}
            <p
              className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Будьте рядом в самый важный день нашей жизни.
              <br className="hidden md:block" />
              Ваше присутствие — лучший подарок для нас.
            </p>

            {/* Details Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="text-xl md:text-2xl font-light text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>15 июня</div>
                <div className="text-xs md:text-sm text-gray-300 font-light tracking-widest">2025 года</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="text-xl md:text-2xl font-light text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Банкетный зал</div>
                <div className="text-xs md:text-sm text-gray-300 font-light tracking-widest">«Белый сад»</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="text-xl md:text-2xl font-light text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>15:00</div>
                <div className="text-xs md:text-sm text-gray-300 font-light tracking-widest">Начало церемонии</div>
              </div>

              <div className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Music className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="text-xl md:text-2xl font-light text-white mb-1" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Дресс-код</div>
                <div className="text-xs md:text-sm text-gray-300 font-light tracking-widest">Нежные тона</div>
              </div>
            </div>

            {/* CTA Button */}
            <LiquidButton
              size="xxl"
              className="font-light text-lg tracking-[0.3em]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              Подтвердить присутствие
            </LiquidButton>

            {/* Footer note */}
            <div className="mt-12 pt-6 border-t border-white/20">
              <p className="text-sm text-gray-300 font-light tracking-widest" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                Просим подтвердить ваш ответ до 1 июня 2025 года
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SmoothScrollHero