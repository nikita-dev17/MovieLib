import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import type { Media } from "../types/media"
import { mediaConfig } from "../constants/config"

export default function useMediaCatalog( mediaType: "movie" | "tv" = "movie", category: "popular" | "top_rated" ) {
  const [totalPages, setTotalPages] = useState(1)
  const [media, setMedia] = useState<Media[]>([])
  const [loading, setLoading] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get("page")) || 1

  const nextPage = () => { 
    setSearchParams({ 
      page: String(Math.min(totalPages, page + 1))
    })
  }
  
  const prevPage = () => { 
    setSearchParams({ 
      page:String(Math.max(1, page - 1))
    }) 
  }

  const func = mediaConfig[mediaType][category].func
  const title = mediaConfig[mediaType][category].title


  useEffect(() => {
    setLoading(true)

    func(page)
      .then((data) => {
        setMedia(data.result)
        setTotalPages(data.total_page)
        window.scrollTo({ top: 0, behavior: "smooth"})
      })
      .finally(() => { setLoading(false) })
      .catch(console.error)

  }, [page, mediaType, category, func])


  return { 
    media, page, totalPages, loading, title, nextPage, prevPage
  }
}