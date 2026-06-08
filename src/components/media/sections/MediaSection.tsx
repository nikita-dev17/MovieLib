import SectionTitle from "../../ui/SectionTitle"
import ActorCard from "../cards/ActorCard"
import MediaCard from "../cards/MediaCard"
import type { Media } from "../../../types/media"
import type { Actor } from "../../../types/actor"
import HorizontalSlider from "../sliders/HorizontalSlider"

interface MediaSectionProps {
  title: string, 
  description?: string,
  type: "actor" | "media"
  items: Media[] | Actor[]
}

export default function MediaSection({ title, description="", type, items }: MediaSectionProps) {
  return (
    <>
      <SectionTitle
        title={title}
        description={description}
      />
      {items.length > 0 && (
        <HorizontalSlider>
          {items.map((item) => (
            <div key={item.id} className="shrink-0">
              {type === "actor" && (
                <ActorCard actor={item as Actor} />
              )}
              {type === "media" && (
                <MediaCard media={item as Media} />
              )}
            </div>
          ))}
        </HorizontalSlider>
      )}
    </>
  )
}