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
      w-full h-full flex flex-col overflow-hidden rounded-lg lg:rounded-xl bg-zinc-800 transition-transform duration-300 hover:scale-101 shrink-0
    ">

      {/* POSTER */}
      <img src={`https://image.tmdb.org/t/p/w500${media.poster_path}`} alt={media.title}
        className="w-full object-cover aspect-2/3"
      />

      {/* ABOUT */}
      <div className="p-2 lg:p-3 flex flex-col flex-1">
        
        {/* TITLE AND TYPE */}
        <p className="min-h-10 lg:min-h-14 text-sm lg:text-lg font-bold text-white line-clamp-2 mb-1">
          {media.title || media.name}
        </p>

        <div className="mt-auto flex justify-between items-center">
          <Rating vote_average={media.vote_average}/>
          <Release release_date={media.release_date} first_air_date={media.first_air_date}/>
        </div>

      </div>
    </Link>
  )
}