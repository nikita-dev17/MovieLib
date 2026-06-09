import { Search, X } from "lucide-react"
import { searchMulti } from "../../../api/media"
import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import Rating from "../../ui/Rating"
import Release from "../../ui/Release"
import type { SearchResult } from "../../../types/search"

interface SearchInputProps {
  className?: string
  onClose?: () => void
}

export default function SearchInput({ className, onClose }: SearchInputProps) {
  const [query, setQuery] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
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


  return (
    <div className={`w-full lg:relative ${className}`}>

      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
        
        <input
          ref={inputRef}
          type="text"
          placeholder="Пошук..."
          value={query}
          onChange={handleChange}
          className="
            w-full lg:w-100 pl-9 pr-9 py-2 rounded-lg outline-none border transition text-white
            bg-white/10 placeholder-white/40 border-white/10 focus:border-white/30
          "
        />
        
        {query.length > 0 && (
          <button onClick={() => { setQuery(""); inputRef.current?.focus() }} className="
            absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full text-white 
            hover:bg-white/10 hover:text-white transition-all
          ">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {results.length !== 0 && (
        <div className="max-h-80 lg:max-h-120 overflow-y-auto bg-zinc-900/95 backdrop-blur-md border border-white/10
          rounded-xl shadow-2xl relative mt-3 w-full lg:absolute lg:top-14 lg:left-0 lg:mt-0 lg:z-50
        ">

        {results.map((element) => (
          <Link
            to={element.media_type === "movie" ? `/movies/${element.id}` : `/tv/${element.id}`}
            onClick={() => { setQuery(""); if (onClose) {onClose()} }}
            key={element.id}
            className="block px-4 py-3 hover:bg-white/10 transition-colors border-b border-white/5"
          >
            <p className="text-white font-medium truncate">
              {element.title || element.name}
            </p>

            <div className="flex items-center gap-3 mt-1">
              <span className="text-sm text-white/60">
                {element.media_type === "movie" ? "Фільм" : "Серіал"}
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