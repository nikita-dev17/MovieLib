import type { MediaDetails } from "../../../types/media"

interface MediaInfoGridProps {
  media: MediaDetails
  mediaType: "movie" | "tv"
}

export default function MediaInfoGrid ({ media, mediaType }: MediaInfoGridProps) {
  const countries = media.production_countries?.map(country => country.name).join(", ")
  const data = [
    { title: "Дата виходу", item: media.release_date || media.first_air_date },
    ...(mediaType === "tv"
    ? [
        { title: "Сезонів", item: media.number_of_seasons },
        { title: "Серій", item: media.number_of_episodes },
      ]
    : [ 
        { title: "Тривалість", item: `${media.runtime} хв` },
        { title: "Бюджет", item: media.budget ? `$${media.budget.toLocaleString()}` : "-" },
        { title: "Збори", item: media.revenue ? `$${media.revenue.toLocaleString()}` : "-" }
      ]
    ),
    { title: "Рейтинг", item: media.vote_average?.toFixed(1) },
    { title: "Голосів", item: media.vote_count?.toLocaleString() },
    { title: "Статус", item: media.status },
    { title: "Країна", item: countries },
    { title: "Мова", item: media.original_language?.toUpperCase()},
  ]

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* INFO */}
      <div className="p-6 lg:p-8 bg-white/5 rounded-xl">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Деталі
        </h2>
        <div className="space-y-4">
          {data.map((element, index) => (
            <div key={index} className="flex justify-between border-b border-white/10 py-2">
              <span className="text-white/60">{element.title}</span>
              <span className="text-white">{element.item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* COMPANIES */}
      <div className="p-6 lg:p-8 bg-white/5 rounded-xl">
        <h2 className="mb-6 text-xl lg:text-2xl font-bold text-white">
          Виробництво
        </h2>

        <div className="space-y-3">
          <div className="grid grid-cols-1 gap-3">
            {media.production_companies?.map((company) => (
              <div key={company.id} className="rounded-xl border border-white/10 bg-white/5 p-3 lg:p-4">
                <p className="font-medium text-white">
                  {company.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}