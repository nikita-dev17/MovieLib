import type { SearchResult } from "../types/search";
import { tmdbApi } from "./tmdb";

// POPULAR
export async function getPopularMovies(page = 1) {
  const { data } = await tmdbApi.get(`/movie/popular?page=${page}`)
  return {
    result: data.results, 
    total_page: Math.min(data.total_pages, 500)
  }
}

export async function getPopularTVShows(page = 1) {
  const { data } = await tmdbApi.get(`/tv/popular?page=${page}`)
  return {
    result: data.results, 
    total_page: Math.min(data.total_pages, 500)
  }
}


// TRANDING
export async function getTrendingMovies() {
  const { data } = await tmdbApi.get("/trending/movie/week")
  return data.results
}


// TOR RATED 
export async function getTopRatedMovies(page = 1) {
  const { data } = await tmdbApi.get(`/movie/top_rated?page=${page}`)
  return {
    result: data.results, 
    total_page: Math.min(data.total_pages, 500)
  }
}

export async function getTopRatedTVShows(page = 1) {
  const { data } = await tmdbApi.get(`/tv/top_rated?page=${page}`)
  return {
    result: data.results, 
    total_page: Math.min(data.total_pages, 500)
  }
}


// NOW PLAYING
export async function getNowPlayingMovies() {
  const { data } = await tmdbApi.get("/movie/now_playing")
  return data.results
}


// DETAILS
export async function getMovieDeatils(id: string) {
  const { data } = await tmdbApi.get(`/movie/${id}`)
  return data
}

export async function getTvShowsDeatils(id: string) {
  const { data } = await tmdbApi.get(`/tv/${id}`)
  return data
}


// CHARACTERS
export async function getMovieCharacter(id: string) {
  const { data } = await tmdbApi.get(`/movie/${id}/credits`)
  return data.cast
}

export async function getTvCharacter(id: string) {
  const { data } = await tmdbApi.get(`/tv/${id}/credits`)
  return data.cast
}


// SEARCH
export async function searchMulti(query: string) {
  const { data } = await tmdbApi.get("/search/multi", { params: {query} })
  return data.results as SearchResult[]
}