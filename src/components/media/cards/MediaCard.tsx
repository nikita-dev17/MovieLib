import type { Media } from "../../../types/media"
import Rating from "../../ui/Rating"
import Release from "../../ui/Release"
import { Link } from "react-router-dom"

interface MediaCardProps {
  media: Media
}

export default function MediaCard ({ media }: MediaCardProps) {
  return (
    <Link  to={media.title ? `/movies/${media.id}` : `/tv/${media.id}`}  className="
      w-51.5 h-112 block overflow-hidden rounded-xl bg-zinc-800 transition-transform duration-300 hover:scale-101 shrink-0
    ">

      {/* POSTER */}
      <img src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} alt={media.title}
        className="w-full object-cover aspect-2/3"
      />

      {/* ABOUT */}
      <div className="p-3 h-28 flex flex-col justify-between">
        
        {/* TITLE AND TYPE */}
        <p className="min-h-14 text-lg font-bold text-white line-clamp-2 mb-1">
          {media.title || media.name}
        </p>
        <span className="self-start px-2 py-1 text-xs font-medium rounded-md bg-yellow-500/20 text-yellow-300">
          {media.title ? "🎬 Фільм" : "📺 Серіал"}
        </span>


        <div className="mt-2 flex justify-between items-center">
          <Rating vote_average={media.vote_average}/>
          <Release
            release_date={media.release_date}
            first_air_date={media.first_air_date}
          />
        </div>

      </div>
    </Link>
  )
}