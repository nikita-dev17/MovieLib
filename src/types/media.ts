export interface Media {
  id: number
  title?: string
  name?: string
  poster_path: string | null
  backdrop_path: string | null
  vote_average: number
  release_date?: string
  first_air_date?: string
  media_type: "movie" | "tv"
  overview?: string
}

export interface MediaDetails extends Media {
  vote_count: number
  runtime?: number
  number_of_seasons?: number
  number_of_episodes?: number
  status?: string
  original_language: string
  budget: number
  revenue: number

  production_countries?: {
    iso_3166_1: string
    name: string
  }[]

  genres?: {
    id: number
    name: string
  }[]

  production_companies?: {
    id: number
    name: string
  }[]
}