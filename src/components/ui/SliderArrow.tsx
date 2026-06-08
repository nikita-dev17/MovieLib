import { MoveLeft } from "lucide-react"

interface SliderArrowProps {
  direction: "left" | "right"
  className: string
  onClick: () => void
}

export default function SliderArrow({ direction, onClick, className="" }: SliderArrowProps) {
  return (
    <button onClick={onClick} className={`
      absolute top-1/2 -translate-y-1/2 z-20 size-12 flex items-center justify-center
      rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 transition
       ${className} ${direction === "left" ? "-left-6" : "-right-6"}
    `}>
      <MoveLeft className={`size-6 text-white ${direction === "right" ? "rotate-180" : ""}`}/>
    </button>
  )
}