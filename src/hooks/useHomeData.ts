import { useEffect, useState } from "react"
import { getTrendingMovies, getNowPlayingMovies, getTopRatedMovies, getTopRatedTVShows } from "../api/media"
import type { Media } from "../types/media"

export default function useHomeData() {
  const [trendingMovies, setTrendingMovies] = useState<Media[]>([])
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Media[]>([])
  const [topRatedMovies, setTopRatedMovies] = useState<Media[]>([])
  const [topRatedTVShows, setTopRatedTVShows] = useState<Media[]>([])

  useEffect(() => {
    getTrendingMovies().then(setTrendingMovies).catch(console.error)
    getNowPlayingMovies().then(setNowPlayingMovies).catch(console.error)
    getTopRatedMovies().then(data => setTopRatedMovies(data.result)).catch(console.error)
    getTopRatedTVShows().then(data => setTopRatedTVShows(data.result)).catch(console.error)
  }, [])

  return {
    trendingMovies, nowPlayingMovies, topRatedMovies, topRatedTVShows,
  }
}