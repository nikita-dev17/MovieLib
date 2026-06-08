import type { NavigateFunction } from "react-router-dom"
import type { MediaDetails } from "../../../types/media"
import Rating from "../../ui/Rating"
import Release from "../../ui/Release"
import { ArrowLeft } from "lucide-react"
import useFavorites from "../../../hooks/useFavorites"
import Favorite from "../../ui/Favorite"

interface MediaDetailsProps {
  media: MediaDetails
  navigate: NavigateFunction
  mediaType: "movie" | "tv"
}

export default function MediaHero({ media, navigate, mediaType }: MediaDetailsProps) {

  const { addFavorite, removeFavorite, isFavorite } = useFavorites()

  const favoriteItem = {
    id: media.id,
    mediaType: mediaType
  }

  const favorite = isFavorite(favoriteItem)

  return (
    <div className="relative overflow-hidden rounded-3xl">

      {/* BACKDROP */}
      <img
        src={`https://image.tmdb.org/t/p/original${media.backdrop_path}`}
        alt={media.title || media.name}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/85 to-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 flex gap-8 p-10">

        {/* POSTER */}
        <img
          src={`https://image.tmdb.org/t/p/w500${media.poster_path}`}
          alt={media.title || media.name}
          className="w-80 rounded-2xl shadow-2xl"
        />

        {/* INFO */}
        <div className="flex max-w-3xl flex-col justify-center">

          <button onClick={() => navigate(-1)} className="
            mb-6 flex w-fit items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-white backdrop-blur-sm transition-all hover:bg-white/20
          ">
            <ArrowLeft className="h-5 w-5" />
            Назад
          </button>

          <h1 className="mb-3 text-6xl font-black text-white">
            {media.title || media.name}
          </h1>

          <div className="mb-5 flex flex-wrap gap-2">
            {media.genres?.map((genre) => (

              <span key={genre.id} className="rounded-full border border-yellow-500/20 bg-yellow-500/10
                px-3 py-1 text-sm font-medium text-yellow-300 backdrop-blur-sm
              ">
                {genre.name}
              </span>
            ))}
          </div>

          <div className="mb-6 flex gap-6 text-white/80 items-center">
            <Rating vote_average={media.vote_average} />
            <Release release_date={media.release_date} first_air_date={media.first_air_date}/>
            <Favorite isFavorite={favorite} onClick={() => { favorite ? removeFavorite(favoriteItem) : addFavorite(favoriteItem) }}/>
          </div>

          <p className="text-lg leading-relaxed text-white/80">
            {media.overview}
          </p>

        </div>              

      </div>

    </div>
  )
}