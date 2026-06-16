import { useEffect, useState } from "react";
import type { Favorite } from "../types/favorite";

export default function useFavorites() {
  const [favorites, setFavorites] = useState<Favorite[]>(() => {
    const data = localStorage.getItem("favorites")
    try { return data ? JSON.parse(data) : [] }
    catch { return [] }
  })

  const addFavorite = ({id, mediaType}: Favorite) => {
    if (!favorites.some(favorite => favorite.id === id && favorite.mediaType === mediaType))
      setFavorites([...favorites, {id, mediaType}])
  }

  const removeFavorite = ({id, mediaType}: Favorite) => {
    setFavorites(favorites.filter((favorite) => favorite.id !== id || favorite.mediaType !== mediaType))
  }

  const isFavorite = ({id, mediaType}: Favorite) => {
    return favorites.some(favorite => favorite.id === id && favorite.mediaType === mediaType)
  }

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  
  return {
    favorites, addFavorite, removeFavorite, isFavorite
  }
}