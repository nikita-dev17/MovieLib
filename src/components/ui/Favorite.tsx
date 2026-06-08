import { Heart } from "lucide-react"

interface FavoriteProps {
  isFavorite: boolean
  onClick: () => void
}

export default function Favorite({ isFavorite, onClick }: FavoriteProps) {
  return (
    <button onClick={onClick} className="
      rounded-xl bg-white/10 p-3 backdrop-blur-sm transition-all hover:bg-white/20
    ">
      <Heart className={`h-6 w-6 ${isFavorite ? "fill-red-500 text-red-500" : "text-white"}`}/>
    </button>
  )
}