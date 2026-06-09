import { headerSections } from "../../constants/header-navigation";
import { routes } from "../../constants/routes";
import { ChevronDown, Menu, Heart } from "lucide-react";
import SearchInput from "../media/search/SearchInput";
import { Link } from "react-router-dom";
import { APP_NAME } from "../../constants/app";
import { useState } from "react";

export default function Header () {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <header>
        <nav className="fixed z-50 w-full h-16 lg:h-18 bg-black/80 backdrop-blur-md border-b border-white/10">

          <div className="px-4 flex items-center h-full max-w-7xl mx-auto">

            {/* LEFT */}
            <div className="flex items-center gap-2">

              {/* MOBILE */}
              <button onClick={() => { setIsOpen(prev => !prev); }} 
                className="lg:hidden p-2 text-white"
              >
                <Menu className="w-8 h-8" />
              </button>

              {/* LOGO */}
              <Link to="/" className="text-xl lg:text-2xl font-bold lg:px-3 text-white tracking-wider">
                {APP_NAME}
              </Link>

              {/* HEADER ELEMENTS */}
              <div className="hidden lg:flex mx-8 gap-8">
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

              {/* DESKTOP */}
              <div className="hidden lg:flex items-center gap-4">
                <SearchInput onClose={() => setIsOpen(false)}/>

                <Link to={routes.favorites.path} className="
                  flex items-center gap-2 py-2 px-2 rounded-lg text-white/70 hover:text-white transition hover:bg-white/10
                ">
                  <span>Обране</span>
                  <Heart className="w-4 h-4 fill-red-500 text-red-500"/>
                </Link>
              </div>
            </div>

          </div>

        </nav>
      </header>

      {/* BURGER MENU */}
      <div className={`lg:hidden fixed top-16 left-0 w-68 h-[calc(100vh-64px)] bg-zinc-950 border-r border-white/10
        transition-transform duration-300 z-50 overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
        
        <div className="p-4 flex flex-col gap-6">
          
          <div className="w-full pb-2 border-b border-white/5">
            <SearchInput onClose={() => setIsOpen(false)}/>
          </div>

          <nav className="flex flex-col gap-5">
                  
            {headerSections.map((section) => (
              <div key={section.title} className="flex flex-col gap-1">
                <p className="text-xs font-semibold text-white/40 uppercase tracking-wider px-3 mb-1">
                  {section.title}
                </p>
                
                {section.items.map((item) => (
                  <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)} className="
                    bg-white/4 w-full px-3 py-2 text-base text-white/70 rounded-lg
                  ">
                    {item.label}
                  </Link>
                ))}
              </div>
            ))}
            
            <div className="flex flex-col gap-1">
              <p className="text-xs font-semibold text-white/40 uppercase tracking-wider px-3 mb-1">
                Колекція
              </p>
              <Link to={routes.favorites.path} onClick={() => setIsOpen(false)} className="
                flex items-center bg-white/4 gap-2 w-full px-3 py-2 text-base text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition group
              ">
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                <span>Обране</span>
              </Link>
            </div>

          </nav>
        </div>
      </div>
      
      {/* OVERLAY */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
        />
      )}
    </>
  )
}