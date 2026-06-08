import { Routes, Route } from "react-router-dom"
import { routes } from "../constants/routes"
import HomePage from "../pages/HomePage"
import MedaiDetailsPage from "../pages/MedaiDetailsPage"
import MediaCatalogPage from "../pages/MediaCatalogPage"
import FavoritesPage from "../pages/FavoritesPage"

export default function AppRouter() {
  return (
    <Routes>
      <Route path={routes.home.href} element={<HomePage />} />
      <Route path="/movies/:id" element={<MedaiDetailsPage />} />
      <Route path="/tv/:id" element={<MedaiDetailsPage />} />
      <Route path={routes.movies.popular.path} element={<MediaCatalogPage />}/>
      <Route path={routes.tv.popular.path} element={<MediaCatalogPage />}/>
      <Route path={routes.movies.topRated.path} element={<MediaCatalogPage />}/>
      <Route path={routes.tv.topRated.path} element={<MediaCatalogPage />}/>
      <Route path={routes.favorites.path} element={<FavoritesPage />}/>
    </Routes>
  )
}