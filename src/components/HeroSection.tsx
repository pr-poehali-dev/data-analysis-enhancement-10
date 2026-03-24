import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80",
      alt: "Свадебная церемония",
    },
    {
      image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=1920&q=80",
      alt: "Молодожёны",
    },
    {
      image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1920&q=80",
      alt: "Свадебные цветы и детали",
    },
  ]

  const navItems = [
    { name: "Начало", href: "#hero" },
    { name: "О нас", href: "#mission" },
    { name: "Наша история", href: "#community" },
    { name: "Слова близких", href: "#testimonials" },
    { name: "Детали", href: "#join" },
  ]

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-stone-900">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${slides[currentSlide].image}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between p-6 md:p-8">
        <div className="text-white font-light text-xl tracking-[0.4em] italic" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          A & M
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="relative text-white/90 hover:text-white transition-colors duration-300 font-light tracking-widest text-sm pb-1 group"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-white/60 transition-all duration-300 ease-out group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-white hover:text-gray-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          <span className="sr-only">Меню</span>
        </button>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/90 z-30 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white text-2xl font-light tracking-[0.3em] hover:text-gray-300 transition-colors duration-300 italic"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center text-white max-w-4xl">
          <p className="text-sm md:text-base font-light tracking-[0.5em] mb-6 text-white/70 uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Приглашение на свадьбу
          </p>

          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-light tracking-wide mb-4 leading-none italic"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Алина
            <br />
            <span className="text-4xl md:text-5xl lg:text-6xl not-italic tracking-[0.4em] font-extralight">&amp;</span>
            <br />
            Михаил
          </h1>

          <p className="text-lg md:text-xl font-light tracking-[0.3em] mb-10 text-white/80" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            15 июня 2025 года
          </p>

          <LiquidButton
            size="xxl"
            className="font-light text-base tracking-[0.3em]"
            onClick={() => scrollToSection("#join")}
          >
            Подтвердить присутствие
          </LiquidButton>
        </div>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 ${
                currentSlide === index ? "w-8 h-px bg-white" : "w-3 h-px bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Слайд ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Side Navigation */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 z-20 hidden md:flex flex-col space-y-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-px h-8 transition-all duration-300 ${
              currentSlide === index ? "bg-white" : "bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Слайд ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
