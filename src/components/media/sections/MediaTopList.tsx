import type { Media } from "../../../types/ui"
import Rating from "../../ui/Rating"
import { useState } from "react"
import SectionTitle from "../../ui/SectionTitle"
import { Link } from "react-router-dom"


interface MediaListProps {
  title: string
  description?: string
  items: Media[]
}

export default function MediaTopList ({ title, description="", items }: MediaListProps) {

  const [selectedIndex, setSelectedIndex] = useState(0)

  const selectedMedia = items[selectedIndex]

  return (
    <>
      <SectionTitle title={title} description={description}/>
      <div className="rounded-2xl border border-white/10 bg-white/3 p-6">
        <div className="grid grid-cols-2 gap-8">

          {/* LIST */}
          <div className="flex flex-col gap-3">
            {items.slice(0,10).map((element, index) => (
              <button 
                onClick={() => setSelectedIndex(index)}
                key={index} 
                className={`flex items-center justify-between rounded-xl border p-4 transition-all
                  ${selectedMedia?.id === element.id ? "border-yellow-500/50 bg-yellow-500/5" : "border-white/10"}
                `}
              >
                <div className="flex items-center gap-4 ">
                  <p className="text-3xl font-black text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <p className="font-semibold text-white">
                    {element.title || element.name}
                  </p>
                </div>
                <Rating vote_average={element.vote_average}/>
              </button>
            ))}
          </div>

          <div className="rounded-xl bg-white/5 p-6">
            {selectedMedia && (
              <>
                <img src={`https://image.tmdb.org/t/p/original${selectedMedia.backdrop_path}`}
                  className="mb-5 h-64 w-full rounded-xl object-cover"
                />

                <span className="mb-3 inline-block rounded-full bg-yellow-500/20 px-3 py-1 text-sm font-medium text-yellow-400">
                  ТОП #{selectedIndex + 1}
                </span>

                <h3 className="mb-3 text-3xl font-bold text-white">
                  {selectedMedia.name || selectedMedia.title}
                </h3>

                <div className="mb-4 flex items-center gap-4">
                  <Rating vote_average={selectedMedia.vote_average} />
                  <span className="text-white/50">
                    {(selectedMedia.first_air_date || selectedMedia.release_date)?.slice(0, 4)}
                  </span>
                </div>

                <p className="mb-6 line-clamp-5 leading-relaxed text-white/70">
                  {selectedMedia.overview}
                </p>

                <Link to={selectedMedia.title ? `/movie/${selectedMedia.id}` : `/tv/${selectedMedia.id}`} className="rounded-xl bg-yellow-500 px-5 py-3 font-semibold text-black transition-all hover:scale-105">
                  Детальніше
                </Link>
              </>
            )}
          </div>

        </div>
      </div>
    </>
  )
}