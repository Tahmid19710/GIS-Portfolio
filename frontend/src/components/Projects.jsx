
import { useState } from "react";

import {
  Sun,
  GraduationCap,
  Building2,
  MapPin,
  Layers3,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  ScanLine,
  Droplets,
  Trees,
  Zap
} from "lucide-react";

const projects = [
  {
    id: 1,
    number: "PROJECT 01",
    title: "Net Metering System",
    category: "Renewable Energy & GIS",
    icon: Sun,
    color: "emerald",

    description:
      "A GIS-based project exploring rooftop solar integration potential, urban electricity networks, renewable energy distribution and grid connectivity.",

    focus: [
      "Rooftop Solar Potential",
      "Urban Electricity Networks",
      "Renewable Energy",
      "Grid Connectivity"
    ],

    technologies: [
      "GIS",
      "Spatial Analysis",
      "GIS Mapping",
      "Renewable Energy"
    ],

    details: [
      "Exploration of rooftop solar integration potential.",
      "Understanding the relationship between urban electricity networks and renewable energy distribution.",
      "Geospatial visualization of renewable energy and grid connectivity."
    ]
  },

  {
    id: 2,
    number: "PROJECT 02",
    title: "Undergraduate Thesis",
    category: "Socio-economic & Environmental Analysis",
    icon: GraduationCap,
    color: "cyan",

    location: "Dulahazara, Chakoria, Cox's Bazar",

    description:
      "An undergraduate research project involving socio-economic surveys, land-use analysis and environmental assessment to understand local conditions and spatial characteristics.",

    focus: [
      "Socio-economic Survey",
      "Land Use Analysis",
      "Environmental Assessment",
      "Spatial Mapping"
    ],

    technologies: [
      "GIS",
      "Spatial Analysis",
      "Land Use Mapping",
      "Data Analysis"
    ],

    details: [
      "Socio-economic survey and information collection.",
      "Land-use analysis of the study area.",
      "Environmental assessment and interpretation.",
      "Preparation of maps, charts and research documentation."
    ]
  },

  {
    id: 3,
    number: "PROJECT 03",
    title: "Slum Mapping & Hazard Assessment",
    category: "Urban GIS & Risk Assessment",
    icon: Building2,
    color: "blue",

    description:
      "A GIS-based urban assessment project focusing on slum mapping and identifying environmental and infrastructural problems affecting vulnerable communities.",

    focus: [
      "Slum Mapping",
      "Waste Dumping",
      "Drainage Blockage",
      "Waterlogging",
      "Health Risk Assessment"
    ],

    technologies: [
      "GIS Mapping",
      "Spatial Analysis",
      "Hazard Assessment",
      "Urban Mapping"
    ],

    details: [
      "Identification and mapping of slum areas.",
      "Assessment of waste dumping locations.",
      "Identification of drainage blockage and waterlogging issues.",
      "Assessment of environmental and public health risks.",
      "Preparation of spatial maps and project documentation."
    ]
  }
];

function Projects() {
  const [expanded, setExpanded] = useState({});

  const toggleDetails = (id) => {
    setExpanded((previous) => ({
      ...previous,
      [id]: !previous[id]
    }));
  };

  return (
    <>
      <style>{`
        @keyframes projectReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes projectFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-7px);
          }
        }

        .project-reveal {
          animation: projectReveal .7s ease both;
        }

        .project-card {
          transition:
            transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(16,185,129,.5);
          box-shadow: 0 18px 40px rgba(16,185,129,.09);
        }

        .project-visual {
          background-color: #101d28;
          background-image:
            linear-gradient(rgba(16,185,129,.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16,185,129,.07) 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .project-float {
          animation: projectFloat 4s ease-in-out infinite;
        }

        .project-detail {
          animation: projectReveal .3s ease both;
        }

        @media (prefers-reduced-motion: reduce) {
          .project-reveal,
          .project-float,
          .project-detail {
            animation: none !important;
          }
        }
      `}</style>

      <section
        id="projects"
        className="relative min-h-[calc(100svh-76px)] flex items-center overflow-hidden bg-[#080b14] text-white px-5 md:px-8 py-8 md:py-10 scroll-mt-[76px]"
      >

        {/* Background */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl w-full mx-auto">

          {/* Heading */}
          <div className="text-center mb-8 project-reveal">

            <p className="text-emerald-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
              What I Have Worked On
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              GIS{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>

            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mt-3" />

            <p className="text-slate-400 text-xs md:text-sm mt-3">
              Exploring geospatial technology through practical projects and research.
            </p>

          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

            {projects.map((project, index) => {

              const Icon = project.icon;

              return (

                <article
                  key={project.id}
                  style={{
                    animationDelay: `${index * 140}ms`
                  }}
                  className="project-reveal project-card relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/95"
                >

                  {/* Visual Header */}
                  <div className="project-visual relative h-36 flex items-center justify-center overflow-hidden">

                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-cyan-500/10" />

                    <div className="absolute top-3 left-3 text-[9px] font-bold tracking-widest text-emerald-300 bg-black/50 border border-emerald-400/20 px-3 py-1.5 rounded-full">
                      {project.number}
                    </div>

                    <div className="absolute top-3 right-3 text-[9px] text-slate-400 border border-white/10 bg-black/40 px-2 py-1 rounded-full">
                      GIS PROJECT
                    </div>

                    <div className="project-float relative w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex items-center justify-center shadow-[0_0_35px_rgba(16,185,129,.12)]">

                      <Icon
                        size={34}
                        className="text-emerald-400"
                      />

                    </div>

                    <div className="absolute bottom-3 left-4 flex items-center gap-2 text-[9px] text-emerald-300/70">

                      <MapPin size={12} />

                      Geospatial Technology

                    </div>

                  </div>

                  {/* Project Content */}
                  <div className="flex flex-col flex-1 p-5">

                    <p className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase">
                      {project.category}
                    </p>

                    <h3 className="text-lg font-bold text-white mt-2 leading-snug">
                      {project.title}
                    </h3>

                    {project.location && (
                      <p className="flex items-center gap-1.5 text-[11px] text-cyan-300 mt-2">
                        <MapPin size={13} />
                        {project.location}
                      </p>
                    )}

                    <p className="text-xs text-slate-400 leading-6 mt-3">
                      {project.description}
                    </p>

                    {/* Focus Areas */}
                    <div className="mt-4">

                      <h4 className="text-[11px] font-bold text-slate-200 mb-3 flex items-center gap-2">
                        <Layers3 size={14} className="text-emerald-400" />
                        Project Focus
                      </h4>

                      <div className="grid grid-cols-2 gap-x-2 gap-y-2">

                        {project.focus.map((item) => (

                          <div
                            key={item}
                            className="flex items-start gap-2 text-[10px] text-slate-400"
                          >
                            <span className="text-emerald-400">✓</span>
                            {item}
                          </div>

                        ))}

                      </div>

                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-4">

                      {project.technologies.map((tech) => (

                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg text-[9px] font-medium text-emerald-200 bg-emerald-500/[0.08] border border-emerald-400/20"
                        >
                          {tech}
                        </span>

                      ))}

                    </div>

                    {/* Expand Details */}
                    {expanded[project.id] && (

                      <div className="project-detail mt-4 p-3 rounded-xl border border-emerald-400/20 bg-emerald-500/[0.05]">

                        <h4 className="text-xs font-bold text-emerald-300 mb-3">
                          Project Details
                        </h4>

                        <ul className="space-y-2">

                          {project.details.map((detail, i) => (

                            <li
                              key={i}
                              className="flex gap-2 text-[10px] leading-relaxed text-slate-400"
                            >
                              <span className="text-emerald-400">•</span>
                              {detail}
                            </li>

                          ))}

                        </ul>

                      </div>

                    )}

                    {/* Button */}
                    <button
                      type="button"
                      onClick={() => toggleDetails(project.id)}
                      aria-expanded={!!expanded[project.id]}
                      className="mt-auto pt-4"
                    >

                      <span className="flex items-center justify-center gap-2 w-full rounded-xl border border-emerald-400/25 bg-emerald-500/[0.08] hover:bg-emerald-500/20 hover:border-emerald-400/50 py-2.5 text-xs font-semibold text-emerald-300 transition-all duration-300">

                        {expanded[project.id]
                          ? "Show Less"
                          : "Explore Project"}

                        {expanded[project.id]
                          ? <ChevronUp size={15} />
                          : <ArrowUpRight size={15} />}

                      </span>

                    </button>

                  </div>

                </article>

              );

            })}

          </div>

          {/* Footer */}
          <div className="flex items-center justify-center gap-3 mt-7">

            <div className="w-8 h-px bg-emerald-500/50" />

            <p className="text-[9px] tracking-[0.25em] text-slate-500 uppercase">
              Research • Mapping • Spatial Analysis
            </p>

            <div className="w-8 h-px bg-cyan-500/50" />

          </div>

        </div>

      </section>
    </>
  );
}

export default Projects;
