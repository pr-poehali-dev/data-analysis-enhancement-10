import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Wedding testimonials from family and friends
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Я знаю Алину с детства и всегда мечтала увидеть её такой счастливой. Михаил — именно тот человек, которого она заслуживает. Это пара, созданная друг для друга.",
    by: "Ольга, подруга невесты",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OlgaBridesmaid&backgroundColor=c9a96e&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Когда Миша впервые рассказал мне об Алине, я увидел в его глазах что-то особенное. Она осветила его жизнь. Я счастлив называть её сестрой.",
    by: "Артём, брат жениха",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ArtemBrother&backgroundColor=8b7355&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Смотреть на них вместе — это как читать любимую книгу. Каждый момент наполнен теплом, смехом и нежностью. Желаю вам целую жизнь таких моментов!",
    by: "Катя, подруга невесты",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KatyaFriend&backgroundColor=d4a5a5&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Мы дружим с Михаилом двадцать лет, и я никогда не видел его таким спокойным и наполненным. Алина — его равновесие и вдохновение одновременно.",
    by: "Денис, лучший друг жениха",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DenisFriend&backgroundColor=7b9ea6&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Алиночка, ты росла такой мечтательной девочкой. И вот твоя мечта сбылась — рядом с тобой человек, который любит тебя по-настоящему. Это наше главное счастье.",
    by: "Мама невесты",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=BrideMom&backgroundColor=b8860b&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Я наблюдала, как они строили отношения — с уважением, терпением и юмором. Они умеют слышать друг друга. Это редкость и настоящее богатство.",
    by: "Наталья, тётя невесты",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NatalyaAunt&backgroundColor=9b7fa6&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Алина и Миша — та пара, рядом с которой всегда хорошо. Они умеют создавать атмосферу тепла и принятия. Уверен, их дом будет полон счастья.",
    by: "Игорь, коллега жениха",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=IgorColleague&backgroundColor=6b8f71&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Помню, как Алина позвонила мне после первого свидания — голос дрожал от радости. Тогда я поняла: это навсегда. Счастья вам, мои дорогие!",
    by: "Саша, лучшая подруга",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SashaBestFriend&backgroundColor=c47d7d&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Сын, ты выбрал замечательную женщину. Мы с папой с первой встречи полюбили Алину. Желаем вам строить жизнь вместе — шаг за шагом, с любовью и пониманием.",
    by: "Мама жениха",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=GroomMom&backgroundColor=b5956a&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "Они дополняют друг друга идеально: Алина — мечтатель, Миша — воплотитель. Вместе они могут всё. Завидую в самом лучшем смысле этого слова!",
    by: "Вика, подруга пары",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=VikaFriend&backgroundColor=8fa6c4&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Три года я наблюдаю за вами и вижу: с каждым днём вы становитесь ближе. Это и есть настоящая любовь — та, что растёт и крепнет со временем.",
    by: "Родион, друг семьи",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RodionFamilyFriend&backgroundColor=7a8c6e&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "Алина — самая добрая душа, которую я знаю. А то, как Михаил смотрит на неё — словно она весь его мир. Берегите друг друга, это очень ценно.",
    by: "Анна, подруга с детства",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AnnaChildhoodFriend&backgroundColor=c4a882&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}