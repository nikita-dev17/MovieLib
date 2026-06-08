import useMediaDetails from "../hooks/useMediaDetails"
import { useLocation, useParams, useNavigate } from "react-router-dom"
import PageContainer from "../components/layout/PageContainer"
import MediaHero from "../components/media/sections/MediaHero"
import MediaInfoGrid from "../components/media/sections/MediaInfoGrid"
import MediaSection from "../components/media/sections/MediaSection"
import useDocumentTitle from "../hooks/useDocumentTitle"
import { APP_NAME } from "../constants/app"


export default function MedaiDetailsPage() {
  const { id } = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const mediaType = location.pathname.startsWith("/tv") ? "tv" : "movie"
  const { media, actors } = useMediaDetails(id, mediaType)
  useDocumentTitle(media ? `${media.title || media.name} | ${APP_NAME}` : APP_NAME)
  

  return (
    <PageContainer>
      {media && (
        <section className="space-y-6">

          <MediaHero media={media} navigate={navigate} mediaType={mediaType}/>

          <MediaInfoGrid media={media} mediaType={mediaType}/>

          <MediaSection title="Головні актори" type="actor" items={actors.slice(0, 20)}/>

        </section>
      )}
    </PageContainer>
  )
}