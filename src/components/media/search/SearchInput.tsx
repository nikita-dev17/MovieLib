import { Search } from "lucide-react"
import { searchMulti } from "../../../api/media"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Rating from "../../ui/Rating"
import Release from "../../ui/Release"
import type { SearchResult } from "../../../types/ui"


export default function SearchInput() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    if (!query.trim()) {
      setResults([])
      return 
    }
    
    searchMulti(query).then(data => {
      setResults(data.filter(item => item.media_type !== "person"))
    })
  }, [query])


  console.log(results)



  return (
    <div className="relative">

      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />

      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={handleChange}
        className="
          w-100 pl-9 pr-3 py-2 rounded-lg outline-none border transition text-white
          bg-white/10 placeholder-white/40 border-white/10 focus:border-white/30
        "
      />

      {results.length !== 0 && (
        <div className="max-h-120 overflow-y-auto absolute top-14 left-0 w-full bg-zinc-900/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden">
        {results.map((element) => (
          <Link
            to={element.media_type === "movie" ? `/movies/${element.id}` : `/tv/${element.id}`}
            onClick={() => setQuery("")}
            key={element.id}
            className="
              block px-4 py-3 hover:bg-white/10
              transition-colors border-b border-white/5
            "
          >
            <p className="text-white font-medium truncate">
              {element.title || element.name}
            </p>

            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm text-white/60">
                {element.media_type === "movie" ? "Movie" : "TV shows"}
              </span>

              <Release
                release_date={element.release_date}
                first_air_date={element.first_air_date}
                className="text-sm"
              />

              <Rating
                vote_average={element.vote_average}
                className="text-sm"
              />
              
            </div>
          </Link>
        ))}
      </div>
      )}

    </div>
  )
}