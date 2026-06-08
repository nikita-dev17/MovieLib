import { useState } from "react"
import type { Media } from "../../../types/media"
import Rating from "../../ui/Rating"
import Release from "../../ui/Release"
import { AnimatePresence, motion } from "motion/react"
import SliderArrow from "../../ui/SliderArrow"
import { Link } from "react-router-dom"

interface ItemsProps {
  items: Media[]
}

export default function HeroCarousel ({ items }: ItemsProps) {

  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)


  if (!items.length)
    return null

  const movie = items[currentIndex]

  const nextMovie = () => {
    setDirection(1)
    setCurrentIndex((prev) => 
      prev === items.length - 1 ? 0 : prev + 1
    )
  }

  const prevMovie = () => {
    setDirection(-1)
    setCurrentIndex((prev) => 
      prev === 0 ? items.length - 1 : prev - 1
    )
  }

  const variants = {
    enter: (direction: number) => ({ x: direction > 0 ? "100%" : "-100%" }),

    center: { x: "0%" },

    exit: (direction: number) => ({ x: direction > 0 ? "-100%" : "100%" })
  }


  return (
    <div className="relative h-160 overflow-hidden rounded-3xl border border-white/10 mb-16">
      {/* LEFT ARROW */}
      <SliderArrow
        direction="left"
        onClick={prevMovie}
        className="left-6"
      />

      {/* MAIN */}
      <AnimatePresence mode="sync" custom={direction}>
        <motion.div
          key={movie.id}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3, ease: "easeInOut"}}
          className="absolute inset-0"
        >

          {/* BACKDROP */}
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt={movie.title || movie.name}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/20" />

          {/* CONTENT AREA */}
          <div className="relative z-10 flex h-full flex-col justify-center max-w-3xl pl-32">

            <span className="mb-4 w-fit rounded-full bg-yellow-500/20 px-3 py-1
              text-sm font-medium text-yellow-400
            ">
              У тренді
            </span>

            <h1 className="mb-4 text-6xl font-bold text-white">
              {movie.title || movie.name}
            </h1>

            <p className="mb-6 line-clamp-4 text-lg leading-relaxed text-white/80">
              {movie.overview}
            </p>

            <div className="mb-8 flex items-center gap-6">
              <Rating vote_average={movie.vote_average} />
              <Release release_date={movie.release_date} />
            </div>

            <div className="flex items-center gap-4">
              <Link to={movie.title ? `/movies/${movie.id}` : `/tv/${movie.id}`} className="
                rounded-xl bg-yellow-500 px-6 py-3 font-semibold text-black transition-all hover:scale-105
              ">
                Детальніше
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* RIGHT ARROW */}
      <SliderArrow 
        direction="right" 
        onClick={nextMovie}
        className="right-6"
      />
    </div>
  )
}