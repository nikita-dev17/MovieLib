import { useRef } from "react"
import SliderArrow from "../../ui/SliderArrow"

interface HorizontalSliderProps {
  children: React.ReactNode
}

export default function HorizontalSlider({
  children,
}: HorizontalSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null)

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 1150,
      behavior: "smooth",
    })
  }

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -1150,
      behavior: "smooth",
    })
  }

  return (
    <div className="relative mb-20 lg:px-8">
      <SliderArrow direction="left" className="hidden lg:flex -left-6" onClick={scrollLeft} />

      <div className="px-2 lg:px-3 bg-white/5 rounded-xl">
        <div ref={sliderRef} className="flex py-2 lg:py-3 gap-2 lg:gap-6 overflow-x-auto overflow-y-hidden">
          {children}
        </div>
      </div>

      <SliderArrow direction="right" className="hidden lg:flex -right-6" onClick={scrollRight} />
    </div>
  )
}