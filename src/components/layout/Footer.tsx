import { Link } from "react-router-dom"
import { APP_NAME } from "../../constants/app"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-neutral-950">
      <div className="mx-auto max-w-7xl px-8 py-8">

        <Link to="/" className="text-2xl font-bold text-white">
          {APP_NAME}
        </Link>

        <p className="mt-2 max-w-md text-sm text-white/50">
          Browse thousands of movies and TV shows.
        </p>

        <div className="mt-8 border-t border-white/10 pt-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} {APP_NAME}. Data provided by TMDB.
          </p>
        </div>

      </div>
    </footer>
  )
}