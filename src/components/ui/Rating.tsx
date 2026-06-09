import { Star } from "lucide-react"

interface RatingProps {
  vote_average?: number
  className?: string
}

export default function Rating({ vote_average, className="" }: RatingProps) {
  return (
    <div className="flex items-center gap-1">
      <Star className="w-3 h-3 lg:w-4 lg:h-4 fill-yellow-500 text-yellow-500" />
      <span className={`font-semibold text-white ${className}`}>
        {vote_average?.toFixed(1) ?? 0}
      </span>
    </div>
  )
}