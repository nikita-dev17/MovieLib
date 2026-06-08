export const routes = {
  home: {
    title: "Home",
    label: "Home",
    href: "/",
  },

  movies: {
    popular: {
      title: "Популярні фільми",
      label: "Популярні",
      path: "/movies/popular",
      href: "/movies/popular?page=1"
    },

    topRated: {
      title: "Найкращі фільми",
      label: "Найкращі",
      path: "/movies/top-rated",
      href: "/movies/top-rated?page=1",
    },
  },

  tv: {
    popular: {
      title: "Популярні серіали",
      label: "Популярні",
      path: "/tv/popular",
      href: "/tv/popular?page=1"
      
    },

    topRated: {
      title: "Найкращі серіали",
      label: "Найкращі",
      path: "/tv/top-rated",
      href: "/tv/top-rated?page=1",
    },
  },

  favorites: {
    title: "Favorite Movies",
    label: "Favorites",
    path: "/favorites",
  },
};