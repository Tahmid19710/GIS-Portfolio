
import {
  Layers3,
  ScanLine,
  Database,
  Workflow,
  Compass,
  Code,
  Globe,
  ShieldCheck,
  Sparkles
} from "lucide-react";

const skillGroups = [
  {
    id: 1,
    title: "GIS Software & Platforms",
    subtitle: "Geospatial Applications",
    icon: Layers3,
    color: "emerald",
    skills: [
      "ArcGIS Pro",
      "ArcMap",
      "QGIS",
      "Google Earth",
      "Google Earth Engine",
      "ArcGIS 10.8"
    ]
  },
  {
    id: 2,
    title: "Spatial Analysis & Mapping",
    subtitle: "Spatial Data Processing",
    icon: Compass,
    color: "cyan",
    skills: [
      "GIS & Spatial Analysis",
      "LULC Mapping",
      "Mapping & Digitization",
      "Spatial Data Management",
      "Cadastral Georeferencing",
      "Mouza Sheet Processing",
      "Traverse Point Processing"
    ]
  },
  {
    id: 3,
    title: "LiDAR & Data Processing",
    subtitle: "Point Cloud Technology",
    icon: ScanLine,
    color: "blue",
    skills: [
      "LiDAR Data Processing",
      "LAS / LAZ",
      "LAS Dataset Creation",
      "Point Cloud Analysis",
      "Utility Asset Extraction",
      "Geodatabase Editing",
      "MicroStation"
    ]
  },
  {
    id: 4,
    title: "Quality Control & Field Operations",
    subtitle: "Technical & Operational Skills",
    icon: ShieldCheck,
    color: "purple",
    skills: [
      "Quality Control (QC)",
      "Quality Assurance (QA)",
      "Data Validation",
      "Field Data Collection",
      "Field Surveillance",
      "Technical Reporting",
      "Team Coordination"
    ]
  }
];

const additionalSkills = [
  "Python (Basic)",
  "AutoCAD (Basic)",
  "Microsoft Office",
  "Microsoft Excel",
  "Microsoft Power BI"
];

function Skills() {
  return (
    <>
      <style>{`
        @keyframes skillsReveal {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes skillsGlow {
          0%, 100% {
            opacity: .25;
          }
          50% {
            opacity: .65;
          }
        }

        .skills-reveal {
          animation: skillsReveal .7s ease both;
        }

        .skills-glow {
          animation: skillsGlow 5s ease-in-out infinite;
        }

        .skills-card {
          transition: transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .skills-card:hover {
          transform: translateY(-5px);
          border-color: rgba(16,185,129,.5);
          box-shadow: 0 12px 35px rgba(16,185,129,.08);
        }

        .skill-tag {
          transition: all .25s ease;
        }

        .skill-tag:hover {
          transform: translateY(-3px);
          background: rgba(16,185,129,.18);
          border-color: rgba(52,211,153,.5);
          color: #a7f3d0;
        }

        @media (prefers-reduced-motion: reduce) {
          .skills-reveal,
          .skills-glow {
            animation: none !important;
          }
        }
      `}</style>

     <section
  id="skills"
  className="relative min-h-[calc(100svh-76px)] flex items-start overflow-hidden bg-[#080b14] text-white px-5 md:px-8 pt-8 md:pt-10 pb-8 md:pb-10 scroll-mt-[76px]"
>

        {/* Background Effects */}
        <div className="skills-glow absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="skills-glow absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl w-full mx-auto">

          {/* Heading */}
          <div className="text-center mb-7 skills-reveal">

            <p className="text-emerald-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
              Technical Expertise
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">
              My{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Skills
              </span>
            </h2>

            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mt-3" />

            <p className="text-slate-400 text-xs md:text-sm mt-3">
              GIS Software, Spatial Analysis, LiDAR Processing & Technical Expertise.
            </p>

          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {skillGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.id}
                  style={{
                    animationDelay: `${index * 120}ms`
                  }}
                  className="skills-reveal skills-card relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/90 p-5 md:p-6"
                >

                  <div className="skills-glow absolute -top-16 -right-16 w-40 h-40 rounded-full bg-emerald-500/10 blur-[70px] pointer-events-none" />

                  <div className="relative z-10">

                    {/* Category Heading */}
                    <div className="flex items-center gap-3 mb-4">

                      <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
                        <Icon
                          size={22}
                          className="text-emerald-400"
                        />
                      </div>

                      <div>
                        <h3 className="text-sm md:text-base font-bold text-white">
                          {group.title}
                        </h3>

                        <p className="text-[10px] text-slate-500 mt-1">
                          {group.subtitle}
                        </p>
                      </div>

                    </div>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2">

                      {group.skills.map((skill) => (

                        <span
                          key={skill}
                          className="skill-tag px-2.5 py-1.5 rounded-lg text-[10px] md:text-xs font-medium text-emerald-200 bg-emerald-500/[0.08] border border-emerald-400/20"
                        >
                          {skill}
                        </span>

                      ))}

                    </div>

                  </div>

                </article>
              );
            })}

          </div>

          {/* Additional Technical Skills */}
          <div className="skills-reveal mt-5 rounded-2xl border border-white/10 bg-white/[0.035] p-4 md:p-5">

            <div className="flex items-center gap-2 mb-3">

              <Sparkles size={17} className="text-emerald-400" />

              <h3 className="text-sm font-bold text-white">
                Additional Technical Skills
              </h3>

            </div>

            <div className="flex flex-wrap gap-2">

              {additionalSkills.map((skill) => (

                <span
                  key={skill}
                  className="skill-tag px-3 py-1.5 rounded-lg text-xs text-cyan-200 bg-cyan-500/[0.08] border border-cyan-400/20"
                >
                  {skill}
                </span>

              ))}

            </div>

          </div>

          {/* Footer */}
          <div className="flex justify-center items-center gap-2 mt-5">

            <div className="w-8 h-px bg-emerald-500/50" />

            <span className="text-[9px] tracking-[0.25em] text-slate-500 uppercase">
              Technology • Analysis • Innovation
            </span>

            <div className="w-8 h-px bg-cyan-500/50" />

          </div>

        </div>
      </section>
    </>
  );
}

export default Skills;
