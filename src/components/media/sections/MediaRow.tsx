import type { Media } from "../../../types/media";
import MediaCard from "../cards/MediaCard";
import { MoveLeft } from "lucide-react";

interface MediaRowProps {
  title: string
  items: Media[]
  page?: number
  totalPages?: number
  loading?: boolean
  onNext?: () => void
  onPrev?: () => void
}

export default function MediaRow ({ title, items, page, totalPages, loading, onNext, onPrev }: MediaRowProps) {
  return (
    <section className="">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white border-l-4 border-yellow-500 pl-4">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-5 gap-6">
        {items.map((element) => (
          <MediaCard key={element.id} media={element}/>
        ))}
      </div>
      
      {page && totalPages && (
        <div className="my-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="mx-auto flex max-w-xl items-center justify-between">

            <button disabled={loading || page === 1} onClick={onPrev} className="
              rounded-full bg-white/10 p-3 transition-all hover:bg-yellow-500 hover:text-black disabled:opacity-40
            ">
              <MoveLeft className="h-6 w-6 text-white" />
            </button>

            <div className="text-center">
              <p className="text-2xl font-bold text-white">
                Сторінка {page}
              </p>
              <p className="text-sm text-white/50">
                з {totalPages} сторінок
              </p>
            </div>

            <button disabled={loading || page === totalPages} onClick={onNext} className="
              rounded-full bg-white/10 p-3 transition-all hover:bg-yellow-500 hover:text-black disabled:opacity-40
            ">
              <MoveLeft className="h-6 w-6 rotate-180 text-white" />
            </button>

          </div>
        </div>
      )}

    </section>
  )
}