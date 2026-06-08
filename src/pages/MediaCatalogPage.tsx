import { useLocation } from "react-router-dom"
import PageContainer from "../components/layout/PageContainer"
import MediaRow from "../components/media/sections/MediaRow"
import useDocumentTitle from "../hooks/useDocumentTitle"
import useMediaCatalog from "../hooks/useMediaCatalog"
import { APP_NAME } from "../constants/app"

export default function MediaCatalogPage () {
  const { pathname } = useLocation()
  const mediaType = pathname.startsWith("/tv") ? "tv" : "movie"
  const category = pathname.includes("top") ? "top_rated" : "popular"
  const { media, page, totalPages, loading, title, nextPage, prevPage } = useMediaCatalog(mediaType, category)
  useDocumentTitle(`${title} | ${APP_NAME}`)

  return (

    <PageContainer>
      <MediaRow 
        title={title}
        page={page}
        totalPages={totalPages}
        onNext={nextPage}
        onPrev={prevPage}
        items={media}
        loading={loading}
      />
    </PageContainer>
  )
}