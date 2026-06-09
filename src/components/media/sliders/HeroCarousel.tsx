import { useRef, useState } from "react"
import type { Media } from "../../../types/media"
import Rating from "../../ui/Rating"
import Release from "../../ui/Release"
import SliderArrow from "../../ui/SliderArrow"
import { Link } from "react-router-dom"

interface ItemsProps {
  items: Media[]
}

export default function HeroCarousel({ items }: ItemsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.scrollLeft
      const itemWidth = containerRef.current.offsetWidth
      const index = Math.round(scrollLeft / itemWidth)
      setCurrentIndex(index)
    }
  }

  const scrollTo = (index: number) => {
    if (containerRef.current) {
      const itemWidth = containerRef.current.offsetWidth
      containerRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth"
      })
    }
  }

  return (
    <div className="relative h-120 sm:h-120 lg:h-160 mb-6 lg:mb-16">
      
      <div ref={containerRef} onScroll={handleScroll} className="
        flex h-full w-full no-scrollbar overflow-x-auto snap-x snap-mandatory scrollbar-hide
      ">
        {items.map((movie) => (
          <div key={movie.id} className="relative h-full w-full flex-none snap-center">
            <img
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt={movie.title || movie.name}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/80 to-transparent lg:bg-linear-to-r lg:from-black lg:via-black/80 lg:to-black/20" />
            
            <div className="relative z-10 flex h-full flex-col justify-end pb-16 px-5 md:px-16 lg:justify-center lg:pl-32 lg:pb-0 max-w-3xl">
              <span className="mb-2 lg:mb-4 w-fit rounded-full bg-yellow-500/20 px-2.5 py-0.5 lg:px-3 lg:py-1 text-xs lg:text-sm font-medium text-yellow-400">
                У тренді
              </span>
              <h1 className="mb-2.5 text-2xl md:text-5xl lg:text-6xl font-bold text-white line-clamp-2 leading-tight">
                {movie.title || movie.name}
              </h1>
              <p className="mb-4 lg:mb-6 line-clamp-2 md:line-clamp-3 lg:line-clamp-4 text-sm md:text-base lg:text-lg leading-relaxed text-white/70">
                {movie.overview}
              </p>
              <div className="mb-5 lg:mb-8 flex items-center gap-4 lg:gap-6">
                <Rating vote_average={movie.vote_average} />
                <Release release_date={movie.release_date || movie.first_air_date} />
              </div>
              <Link to={movie.title ? `/movies/${movie.id}` : `/tv/${movie.id}`} className="w-full sm:w-fit text-center rounded-xl bg-yellow-500 px-6 py-3 text-sm md:text-base font-semibold text-black transition-all hover:scale-105">
                Детальніше
              </Link>
            </div>
          </div>
        ))}
      </div>

      <SliderArrow direction="left" onClick={() => scrollTo(currentIndex - 1)} className="hidden md:flex left-6 z-20" />
      <SliderArrow direction="right" onClick={() => scrollTo(currentIndex + 1)} className="hidden md:flex right-6 z-20" />

      <div className="absolute bottom-4 lg:bottom-12 w-full z-20 px-6 flex justify-center lg:justify-center lg:px-32 gap-1.5 lg:gap-2">
        {items.map((_, index) => (

          <div key={index} onClick={() => scrollTo(index)} className={`
            h-1 rounded-full transition-all duration-300 cursor-pointer 
            ${index === currentIndex ? "w-5 lg:w-16 bg-yellow-500" : "w-2 lg:w-8 bg-white/30"}
          `}/>
          
        ))}
      </div>
    </div>
  )
}