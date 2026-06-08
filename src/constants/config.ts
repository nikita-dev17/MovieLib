import { getPopularMovies, getPopularTVShows, getTopRatedMovies, getTopRatedTVShows } from "../api/media"

export const mediaConfig = {
    movie: {
      popular: {
        title: "Популярні фільми",
        func: getPopularMovies
      },
      top_rated: {
        title: "Найкращі фільми",
        func: getTopRatedMovies
      }
    },

    tv: {
      popular: {
        title: "Популярні серіали",
        func: getPopularTVShows
      },
      top_rated: {
        title: "Найкращі серіали",
        func: getTopRatedTVShows
      }
    }
  }