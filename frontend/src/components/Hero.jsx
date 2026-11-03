
import {
  MapPin,
  ArrowUpRight,
  Mail,
  Layers3,
  ScanLine,
  Workflow,
  Compass,
  Sparkles
} from "lucide-react";

function Hero() {
  const skills = [
    "ArcGIS Pro",
    "QGIS",
    "LiDAR Processing",
    "Spatial Analysis",
    "LULC Mapping",
    "Python"
  ];

  return (
    <section
      id="home"
      className="hero-section relative min-h-screen overflow-hidden px-5 md:px-8 pt-28 pb-12 flex items-center"
    >
      {/* Background Effects */}
      <div className="hero-orb absolute -top-32 -left-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="hero-orb absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-7">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 text-emerald-400 text-xs font-semibold tracking-wider">
            <Sparkles size={15} />
            GEOSPATIAL PROFESSIONAL
          </div>

          <div>
            <p className="hero-description text-lg mb-3">
              Hello, I'm
            </p>

            <h1 className="hero-heading text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-tight">
              Md Mehadi Hassan{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Fahim
              </span>
            </h1>

            <h2 className="mt-5 text-xl sm:text-2xl font-semibold text-emerald-400">
              GIS Analyst & Geospatial Specialist
            </h2>

            <p className="hero-description text-base sm:text-lg mt-3 leading-relaxed">
              Spatial Data Analysis • GIS Mapping • LiDAR Processing
            </p>
          </div>

          <p className="hero-description text-sm sm:text-base leading-8 max-w-xl">
            Motivated and detail-oriented GIS professional with
            experience in spatial data analysis, geospatial
            mapping, LiDAR data processing, quality control,
            project coordination, and field operations.
            Passionate about transforming spatial data into
            meaningful insights for sustainable development
            and real-world applications.
          </p>

          {/* Skill Badges */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="hero-skill px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/50"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">

            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-[#07121a] font-bold text-sm hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300"
            >
              Explore GIS Projects
              <ArrowUpRight size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/mdmehadihasanfahim"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-semibold hover:-translate-y-1 transition-all duration-300"
            >
              <span className="font-bold text-sm">in</span>
              LinkedIn
              <ArrowUpRight size={15} />
            </a>

            <a
              href="mailto:mdmehadifahim1@gmail.com"
              className="hero-button inline-flex items-center gap-2 px-6 py-3 rounded-xl border text-sm font-semibold hover:-translate-y-1 transition-all duration-300"
            >
              <Mail size={17} />
              Contact Me
            </a>

          </div>

          {/* Professional Highlights */}
          <div className="grid grid-cols-3 gap-3 pt-5 max-w-xl">

            <div className="hero-highlight p-3 rounded-xl border">
              <Layers3 className="text-emerald-400 mb-2" size={21} />
              <p className="hero-heading text-xs font-bold">
                Spatial Data
              </p>
              <p className="hero-description text-[10px] mt-1">
                Management
              </p>
            </div>

            <div className="hero-highlight p-3 rounded-xl border">
              <ScanLine className="text-cyan-400 mb-2" size={21} />
              <p className="hero-heading text-xs font-bold">
                LiDAR
              </p>
              <p className="hero-description text-[10px] mt-1">
                Data Processing
              </p>
            </div>

            <div className="hero-highlight p-3 rounded-xl border">
              <Workflow className="text-blue-400 mb-2" size={21} />
              <p className="hero-heading text-xs font-bold">
                Quality Control
              </p>
              <p className="hero-description text-[10px] mt-1">
                GIS Validation
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT GIS VISUALIZATION */}
        <div className="relative w-full max-w-xl mx-auto">

          <div className="hero-map-panel relative aspect-square sm:aspect-[5/4] rounded-[32px] border overflow-hidden shadow-2xl">

            {/* Map Grid */}
            <div className="hero-map-grid absolute inset-0" />

            {/* Map Header */}
            <div className="absolute top-5 left-5 right-5 flex justify-between items-center z-10">

              <div>
                <p className="hero-heading text-sm font-bold">
                  Geospatial Intelligence
                </p>
                <p className="hero-description text-[10px] mt-1 tracking-wider">
                  GIS VISUALIZATION
                </p>
              </div>

              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
                <Compass className="text-emerald-400" size={21} />
              </div>

            </div>

            {/* Abstract Map Artwork */}
            <svg
              viewBox="0 0 600 500"
              className="absolute inset-0 w-full h-full p-5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <g stroke="#34d399" strokeWidth="1.5" opacity="0.35">

                <path d="M30 120 L150 80 L240 135 L350 75 L500 125 L570 90" />
                <path d="M30 200 L130 170 L230 225 L340 175 L460 220 L570 180" />
                <path d="M30 300 L140 250 L250 310 L360 255 L480 315 L570 275" />
                <path d="M30 390 L140 350 L250 405 L370 355 L480 410 L570 375" />

                <path d="M100 40 L120 160 L90 270 L150 390 L130 460" />
                <path d="M230 30 L250 130 L220 250 L280 370 L260 470" />
                <path d="M370 30 L350 140 L390 250 L360 370 L400 460" />
                <path d="M500 40 L470 150 L510 260 L480 370 L520 460" />

              </g>

              <g stroke="#22d3ee" strokeWidth="2" opacity="0.65">

                <path d="M80 340 Q180 240 260 280 T430 180 T550 100" />
                <path d="M100 100 Q200 180 290 140 T470 300" />

              </g>

              <g fill="#34d399">
                <circle cx="150" cy="80" r="5" />
                <circle cx="350" cy="75" r="5" />
                <circle cx="460" cy="220" r="5" />
                <circle cx="250" cy="310" r="5" />
                <circle cx="480" cy="410" r="5" />
              </g>

              <circle
                cx="310"
                cy="225"
                r="48"
                fill="#34d399"
                opacity="0.08"
              />

              <circle
                cx="310"
                cy="225"
                r="27"
                stroke="#34d399"
                strokeWidth="2"
                opacity="0.7"
              />

              <circle
                cx="310"
                cy="225"
                r="10"
                fill="#34d399"
              />

            </svg>

            {/* Floating Location Marker */}
            <div className="hero-float absolute top-[40%] left-[48%] -translate-x-1/2 -translate-y-1/2">

              <div className="relative flex items-center justify-center">

                <div className="absolute w-20 h-20 rounded-full border border-emerald-400/30 animate-ping" />

                <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                  <MapPin size={25} className="text-[#07121a]" />
                </div>

              </div>

            </div>

            {/* Floating Information Cards */}
            <div className="hero-float absolute top-[24%] right-5 sm:right-8 hero-floating-card rounded-xl p-3 border backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Layers3 size={17} className="text-emerald-400" />
                <div>
                  <p className="hero-heading text-xs font-bold">
                    Spatial Analysis
                  </p>
                  <p className="hero-description text-[9px]">
                    GIS Mapping
                  </p>
                </div>
              </div>
            </div>

            <div className="hero-float-delayed absolute bottom-[25%] left-5 sm:left-8 hero-floating-card rounded-xl p-3 border backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <ScanLine size={18} className="text-cyan-400" />
                <div>
                  <p className="hero-heading text-xs font-bold">
                    LiDAR Processing
                  </p>
                  <p className="hero-description text-[9px]">
                    LAS / LAZ Data
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Label */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">

              <div>
                <p className="hero-description text-[9px] tracking-[0.2em]">
                  GEOSPATIAL TECHNOLOGY
                </p>
                <p className="hero-heading text-xs font-bold mt-1">
                  Mapping • Analysis • Visualization
                </p>
              </div>

              <div className="w-9 h-9 rounded-full border border-emerald-400/30 flex items-center justify-center">
                <Compass size={17} className="text-emerald-400" />
              </div>

            </div>

          </div>

          <div className="absolute -z-10 -inset-3 rounded-[38px] border border-emerald-400/10 blur-[1px]" />

        </div>

      </div>
    </section>
  );
}

export default Hero;
