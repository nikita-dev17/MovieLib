import { getMovieDeatils, getMovieCharacter, getTvShowsDeatils, getTvCharacter} from "../api/media"
import { useEffect, useState } from "react"
import type { MediaDetails } from "../types/media"
import type { Actor } from "../types/actor"

export default function useMediaDetails( id?: string, mediaType: "movie" | "tv" = "movie" ) {
  const [media, setMedia] = useState<MediaDetails | null>(null)
  const [actors, setActors] = useState<Actor[]>([])

  useEffect(() => { 
    if (!id) return
    window.scrollTo({ top: 0 })

    const getDetails = mediaType === "movie" ? getMovieDeatils : getTvShowsDeatils
    const getCharacter = mediaType === "movie" ? getMovieCharacter : getTvCharacter
    getDetails(id).then(setMedia).catch(console.error)
    getCharacter(id).then(setActors).catch(console.error)

  }, [id, mediaType])

  return {
    media, actors
  }
}