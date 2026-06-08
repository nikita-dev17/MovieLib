export interface SearchResult {
  id: number
  media_type: "movie" | "tv" | "person"
  title?: string
  name?: string
  release_date?: string
  first_air_date?: string
  vote_average?: number
}