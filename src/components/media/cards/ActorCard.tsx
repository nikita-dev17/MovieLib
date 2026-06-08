import type { Actor } from "../../../types/actor"

interface ActorCardProps {
  actor: Actor
}

export default function ActorCard ({ actor }: ActorCardProps) {
  return (
    <div className="w-54 overflow-hidden rounded-xl bg-zinc-800 transition-transform duration-300 hover:scale-101 shrink-0">

      {/* POSTER */}
      <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name}
        className="w-full object-cover aspect-2/3"
      />

      {/* ABOUT */}
      <div className="p-3">
        <p className="font-semibold text-white">
          {actor.name}
        </p>

        <p className="text-sm text-white/60 line-clamp-2">
          {actor.character}
        </p>
      </div>
    </div>
  )
}