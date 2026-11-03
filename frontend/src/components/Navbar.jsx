
import { useEffect, useRef, useState } from "react";

import {
  Menu,
  X,
  Sun,
  Moon,
  MapPin,
  ArrowUpRight
} from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [active, setActive] = useState("#home");

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("gis-theme") || "dark";
  });

  const lastScrollY = useRef(0);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "GIS Maps", href: "#gis-maps" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  // Theme Management
  useEffect(() => {
    document.documentElement.classList.toggle(
      "light",
      theme === "light"
    );

    localStorage.setItem("gis-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((previous) =>
      previous === "dark" ? "light" : "dark"
    );
  };

  // Scroll Detection and Navbar Animation
  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 20);

      if (window.innerWidth < 1024) {
        setHidden(false);
      } else if (currentY < 40) {
        setHidden(false);
      } else if (currentY > lastScrollY.current + 3) {
        setHidden(true);
      } else if (currentY < lastScrollY.current - 3) {
        setHidden(false);
      }

      lastScrollY.current = currentY;
    };

    const handleMouseMove = (event) => {
      if (
        window.innerWidth >= 1024 &&
        event.clientY <= 18
      ) {
        setHidden(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Active Section Detection
  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActive(`#${visibleSections[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 0.1, 0.25, 0.5]
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigation = (href) => {
    setActive(href);
    setOpen(false);
  };

  const isLight = theme === "light";

  return (
    <>
      <style>{`
        @keyframes navLogoGlow {
          0%, 100% {
            box-shadow: 0 0 10px rgba(16,185,129,.15);
          }
          50% {
            box-shadow: 0 0 25px rgba(16,185,129,.4);
          }
        }

        @keyframes navMenuEnter {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .nav-logo-glow {
          animation: navLogoGlow 4s ease-in-out infinite;
        }

        .nav-menu-enter {
          animation: navMenuEnter .35s ease both;
        }

        .nav-link {
          position: relative;
          transition: color .3s ease;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 50%;
          bottom: -7px;
          width: 0;
          height: 2px;
          border-radius: 10px;
          background: linear-gradient(90deg, #10b981, #06b6d4);
          transform: translateX(-50%);
          transition: width .3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 75%;
        }

        .nav-link:hover {
          color: #10b981;
        }

        .nav-theme-button {
          transition: all .3s ease;
        }

        .nav-theme-button:hover {
          transform: rotate(12deg) scale(1.08);
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-logo-glow,
          .nav-menu-enter {
            animation: none !important;
          }

          .nav-link,
          .nav-theme-button {
            transition: none !important;
          }
        }
      `}</style>

      <nav
        className={`
          fixed top-0 left-0 w-full z-[100]
          backdrop-blur-2xl
          border-b
          transition-all duration-500 ease-in-out
          ${hidden ? "-translate-y-full pointer-events-none" : "translate-y-0"}
          ${
            isLight
              ? "bg-white/85 border-slate-200 shadow-[0_5px_30px_rgba(15,23,42,0.06)]"
              : "bg-[#080b14]/85 border-white/[0.08] shadow-[0_5px_30px_rgba(0,0,0,0.2)]"
          }
          ${scrolled ? "py-0 shadow-xl" : "py-1"}
        `}
      >

        <div
          className={`
            max-w-[1450px] mx-auto px-5 md:px-8
            flex items-center justify-between
            transition-all duration-300
            ${scrolled ? "h-[65px]" : "h-[76px]"}
          `}
        >

          {/* LOGO */}

          <a
            href="#home"
            onClick={() => handleNavigation("#home")}
            className="flex items-center gap-3 shrink-0 group"
          >

            <div className="nav-logo-glow relative w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center overflow-hidden group-hover:rotate-12 transition-transform duration-500">

              <MapPin
                size={24}
                className="text-[#07111a] relative z-10"
              />

              <span className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

            </div>

            <div>
              <h1
                className={`text-xl md:text-2xl font-extrabold tracking-tight ${
                  isLight ? "text-slate-900" : "text-white"
                }`}
              >
                Fahim<span className="text-emerald-400">.</span>
              </h1>

              <p
                className={`text-[9px] tracking-[0.2em] font-semibold ${
                  isLight ? "text-slate-500" : "text-slate-400"
                }`}
              >
                GIS PROFESSIONAL
              </p>
            </div>

          </a>

          {/* DESKTOP NAVIGATION */}

          <div className="hidden lg:flex items-center gap-3 xl:gap-5">

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => handleNavigation(link.href)}
                className={`
                  nav-link py-3 text-xs xl:text-sm font-semibold
                  whitespace-nowrap
                  ${
                    active === link.href
                      ? "active text-emerald-400"
                      : isLight
                        ? "text-slate-600"
                        : "text-slate-300"
                  }
                `}
              >
                {link.name}
              </a>
            ))}

          </div>

          {/* RIGHT CONTROLS */}

          <div className="flex items-center gap-3">

            {/* Theme Toggle */}

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle dark and light mode"
              title={isLight ? "Switch to Dark Mode" : "Switch to Light Mode"}
              className={`
                nav-theme-button relative w-11 h-11 rounded-2xl
                border flex items-center justify-center overflow-hidden
                ${
                  isLight
                    ? "bg-slate-100 border-slate-200 text-slate-800 hover:border-emerald-400"
                    : "bg-white/[0.05] border-white/10 text-amber-300 hover:border-emerald-400"
                }
              `}
            >

              {isLight ? (
                <Moon size={20} />
              ) : (
                <Sun size={20} />
              )}

            </button>

            {/* Mobile Menu */}

            <button
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className={`
                lg:hidden w-11 h-11 rounded-2xl border
                flex items-center justify-center
                transition-all duration-300
                ${
                  isLight
                    ? "bg-slate-100 border-slate-200 text-slate-800"
                    : "bg-white/[0.05] border-white/10 text-white"
                }
              `}
            >

              {open ? (
                <X size={22} />
              ) : (
                <Menu size={22} />
              )}

            </button>

          </div>

        </div>

        {/* MOBILE MENU */}

        <div
          className={`
            lg:hidden overflow-hidden transition-all duration-500
            ${
              open
                ? "max-h-[600px] opacity-100 border-t"
                : "max-h-0 opacity-0 pointer-events-none"
            }
            ${
              isLight
                ? "bg-white/95 border-slate-200"
                : "bg-[#0b101c]/95 border-white/10"
            }
          `}
        >

          <div className="px-5 py-4 grid grid-cols-2 gap-2">

            {links.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                tabIndex={open ? 0 : -1}
                onClick={() => handleNavigation(link.href)}
                style={{
                  transitionDelay: open
                    ? `${index * 35}ms`
                    : "0ms"
                }}
                className={`
                  nav-menu-enter flex items-center justify-between
                  px-4 py-3 rounded-xl text-sm font-semibold
                  border transition-all duration-300
                  ${
                    active === link.href
                      ? isLight
                        ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                        : "bg-emerald-500/10 border-emerald-400/20 text-emerald-400"
                      : isLight
                        ? "border-slate-200 text-slate-600 hover:bg-slate-100"
                        : "border-white/[0.06] text-slate-300 hover:bg-white/[0.05] hover:text-emerald-400"
                  }
                `}
              >

                {link.name}

                <ArrowUpRight
                  size={14}
                  className="opacity-50"
                />

              </a>
            ))}

          </div>

          <div
            className={`px-6 pb-4 text-center text-[9px] tracking-[0.25em] uppercase ${
              isLight ? "text-slate-400" : "text-slate-600"
            }`}
          >
            Geospatial Intelligence • GIS Technology
          </div>

        </div>

      </nav>

      {/* Desktop top-edge reveal area */}

      {hidden && (
        <div
          className="fixed top-0 left-0 w-full h-3 z-[99] lg:block hidden"
          onMouseEnter={() => setHidden(false)}
        />
      )}

    </>
  );
}

export default Navbar;
