import useDocumentTitle from "../hooks/useDocumentTitle";
import useHomeData from "../hooks/useHomeData"
import HeroCarousel from "../components/media/sliders/HeroCarousel";
import PageContainer from "../components/layout/PageContainer";
import MediaTopList from "../components/media/sections/MediaTopList";
import MediaSection from "../components/media/sections/MediaSection";
import { APP_NAME } from "../constants/app";

export default function HomePage() {
  useDocumentTitle(APP_NAME)
  const { trendingMovies, nowPlayingMovies, topRatedMovies, topRatedTVShows } = useHomeData()

  return (
    <PageContainer>
      <HeroCarousel items={trendingMovies} /> 

      <MediaSection 
        title="Зараз у кіно"
        description="Фільми, які зараз показують у кінотеатрах"
        type="media"
        items={nowPlayingMovies}
      />

      <MediaSection 
        title="Найпопулярніші фільми"
        type="media"
        items={topRatedMovies}
      />

      <MediaTopList title="Найпопулярніші серіали" items={topRatedTVShows} />
    </PageContainer>
  )
}