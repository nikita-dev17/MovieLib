import type { Actor } from "../../../types/actor"

interface ActorCardProps {
  actor: Actor
}

export default function ActorCard ({ actor }: ActorCardProps) {
  return (
    <div className="w-full h-full overflow-hidden rounded-xl bg-zinc-800 transition-transform duration-300 hover:scale-101 shrink-0">

      {/* POSTER */}
      <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name}
        className="w-full object-cover aspect-2/3"
      />

      {/* ABOUT */}
      <div className="p-3">
        <p className="text-sm lg:text-base font-semibold text-white line-clamp-2 h-10 lg:h-12">
          {actor.name}
        </p>

        <div className="my-2 h-px w-8 bg-yellow-500" />

        <p className="text-xs lg:text-sm text-white/60 line-clamp-2 h-8 lg:h-10 mt-1">
          {actor.character}
        </p>
      </div>
    </div>
  )
}