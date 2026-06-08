import { routes } from "./routes"

export const headerSections = [
  {
    title: "Фільми",
    items: [
      { label: routes.movies.popular.label, href: routes.movies.popular.href },
      { label: routes.movies.topRated.label, href: routes.movies.topRated.href },
    ]
  },
  {
    title: "Серіали",
    items: [
      { label: routes.tv.popular.label, href: routes.tv.popular.href },
      { label: routes.tv.topRated.label, href: routes.tv.topRated.href },
    ]
  }
]