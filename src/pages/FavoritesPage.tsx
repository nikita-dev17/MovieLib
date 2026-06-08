import { useEffect, useState } from "react"
import PageContainer from "../components/layout/PageContainer"
import MediaRow from "../components/media/sections/MediaRow"
import useFavorites from "../hooks/useFavorites"
import type { Media } from "../types/media"
import { getMovieDeatils, getTvShowsDeatils } from "../api/media"
import useDocumentTitle from "../hooks/useDocumentTitle"
import { APP_NAME } from "../constants/app"

export default function FavoritesPage () {  
  useDocumentTitle(`Favorites | ${APP_NAME}`)
  const { favorites } = useFavorites()

  const [media, setMedia] = useState<Media[]>([])

  useEffect(() => {
    const load = async () => {
      const results = await Promise.all(
        favorites.map((item) => item.mediaType === "movie"
          ? getMovieDeatils(String(item.id))
          : getTvShowsDeatils(String(item.id))
        )
      )
      setMedia(results)
    }

    favorites.length ? load() : setMedia([])

  }, [favorites])

  return (
    <PageContainer>
      <MediaRow title="Улюблене" items={media}/>
    </PageContainer>
  )
}