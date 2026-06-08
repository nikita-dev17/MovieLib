import { headerSections } from "../../constants/header-navigation";
import { routes } from "../../constants/routes";
import { ChevronDown } from "lucide-react";
import SearchInput from "../media/search/SearchInput";
import { Link } from "react-router-dom";
import { APP_NAME } from "../../constants/app";

export default function Header () {

  return (
    <header>
      <nav className="fixed z-50 w-full h-18 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="px-4 flex items-center h-full max-w-7xl mx-auto">

          {/* LEFT */}
          <div className="flex">

            {/* LOGO */}
            <Link to="/" className="text-2xl font-bold px-3 py-2 text-white tracking-wider">
              {APP_NAME}
            </Link>

            {/* HEADER ELEMENTS */}
            <div className="flex mx-8 gap-8">
              {headerSections.map((section) => (
                <div key={section.title} className="relative group">

                  {/* HEADER SECTIONS */}
                  <div className="flex items-center text-white/70 px-3 py-2">
                    <span className="text-lg group-hover:text-white">
                      {section.title}
                    </span>
                    <ChevronDown className="h-5 w-5 mx-2 group-hover:rotate-180 group-hover:text-white duration-300"
                    />
                  </div>

                  {/* DROPDOWN MENU */}
                  <div className="
                    absolute top-full left-1/2 z-50 -translate-x-1/2 translate-y-2 opacity-0 invisible
                    group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible transition-all duration-200
                    min-w-40 bg-zinc-800 border border-white/10 shadow-lg rounded-sm p-2
                  ">
                    {section.items.map((item) => (
                      <Link key={item.href} to={item.href} className="
                        block px-4 py-2 text-white/70 hover:text-white hover:bg-white/10 transition rounded-lg
                      ">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="ml-auto flex items-center gap-4">

            {/* SEARCH */}
            <SearchInput />

            {/* FAVORITES */}
            <Link to={routes.favorites.path} className="py-2 px-2 rounded-lg
            text-white/70 hover:text-white transition hover:bg-white/10"
            >
              Favorites
            </Link>

          </div> 
        </div>
      </nav>
    </header>
  )
}