
import {
  Briefcase,
  CalendarDays,
  MapPin,
  Layers,
  Users,
  ShieldCheck,
  Database,
  ScanLine
} from "lucide-react";

const experiences = [
  {
    id: 1,
    position: "Jr. GIS Specialist",
    company: "Geospatial Works",
    duration: "June 2026 – Present",
    status: "Currently Working",
    project: "GIS & Cadastral Data Projects",
    color: "emerald",
    responsibilities: [
      "Digitizing and georeferencing Mouza sheets and cadastral data.",
      "Performing Land Use and Land Cover (LULC) mapping and analysis.",
      "Processing traverse points and performing spatial data editing.",
      "Conducting GIS quality control and data validation."
    ],
    tools: [
      "ArcGIS Pro",
      "QGIS",
      "ArcMap",
      "LiDAR",
      "Python (Basic)",
      "AutoCAD (Basic)",
      "MicroStation",
      "Google Earth"
    ]
  },
  {
    id: 2,
    position: "GIS Analyst",
    company: "NexGen Geospatial Solutions",
    duration: "March 2026 – May 2026",
    status: "Completed",
    project: "LiDAR & Utility Mapping (Project Based)",
    color: "cyan",
    responsibilities: [
      "Digitized GIS features from LiDAR LAS/LAZ data using ArcGIS Pro.",
      "Created and managed LAS datasets.",
      "Extracted utility assets and edited geodatabases.",
      "Performed quality control and quality assurance.",
      "Digitized utility networks and engineering drawings using AutoCAD.",
      "Collaborated with team members to achieve project targets."
    ],
    tools: [
      "ArcGIS Pro",
      "LiDAR",
      "LAS/LAZ",
      "Geodatabases",
      "AutoCAD"
    ]
  },
  {
    id: 3,
    position: "GIS Expert",
    company: "GroupMappers",
    duration: "January 2026",
    status: "Completed",
    project: "Zoonotic Disease Control Program",
    color: "blue",
    responsibilities: [
      "Provided GIS data collection training and supervision.",
      "Supported field surveillance and monitoring activities.",
      "Prepared daily task plans and coordinated team activities.",
      "Performed GIS data quality control and validation."
    ],
    tools: [
      "GIS Data Collection",
      "Field Surveillance",
      "Data Validation",
      "Team Coordination"
    ]
  },
  {
    id: 4,
    position: "GIS Operator Supervisor",
    company: "GroupMappers",
    duration: "June 2025 – December 2025",
    status: "Completed",
    project: "Village Mapping Project (Health Related)",
    color: "purple",
    responsibilities: [
      "Supervised GIS operators during village mapping activities.",
      "Distributed daily tasks among team members.",
      "Monitored mapping progress and performed quality control.",
      "Coordinated project deadlines and operational activities."
    ],
    tools: [
      "Village Mapping",
      "GIS Operations",
      "Quality Control",
      "Team Supervision"
    ]
  },
  {
    id: 5,
    position: "GIS Analyst",
    company: "GMGI Solutions",
    duration: "September 2024 – June 2025",
    status: "Completed",
    project: "COXDA Authority Project",
    color: "emerald",
    responsibilities: [
      "Conducted spatial data analysis and GIS mapping.",
      "Created, edited, and maintained geospatial datasets.",
      "Supported GIS solutions and technical reporting.",
      "Ensured data accuracy and compliance."
    ],
    tools: [
      "Spatial Analysis",
      "GIS Mapping",
      "Geospatial Data",
      "Technical Reporting"
    ]
  }
];

function Experience() {
  return (
    <>
      <style>{`
        @keyframes experienceReveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes experiencePulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(16,185,129,.12);
          }
          50% {
            box-shadow: 0 0 0 7px rgba(16,185,129,0);
          }
        }

        .experience-reveal {
          animation: experienceReveal .7s ease both;
        }

        .experience-item {
          transition: transform .35s ease, border-color .35s ease,
            box-shadow .35s ease;
        }

        .experience-item:hover {
          transform: translateY(-5px);
          border-color: rgba(16,185,129,.5);
          box-shadow: 0 15px 35px rgba(16,185,129,.08);
        }

        .experience-current {
          animation: experiencePulse 2.5s infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .experience-reveal,
          .experience-current {
            animation: none !important;
          }
        }
      `}</style>

      <section
        id="experience"
        className="relative min-h-[calc(100svh-76px)] bg-[#080b14] text-white px-5 md:px-8 py-12 md:py-14 scroll-mt-[76px] overflow-hidden"
      >

        {/* Background */}
        <div className="absolute top-10 left-0 w-72 h-72 bg-emerald-500/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="absolute bottom-10 right-0 w-72 h-72 bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-10 experience-reveal">

            <p className="text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase">
              My Professional Journey
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
              Work{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>

            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mt-4" />

            <p className="text-slate-400 text-sm mt-4">
              My professional journey in GIS and Geospatial Technology.
            </p>

          </div>

          {/* Experience Grid */}
          <div className="grid md:grid-cols-2 gap-5">

            {experiences.map((exp, index) => (

              <article
                key={exp.id}
                style={{
                  animationDelay: `${index * 120}ms`
                }}
                className="experience-reveal experience-item relative rounded-2xl border border-white/10 bg-[#111827]/90 overflow-hidden"
              >

                {/* Top accent */}
                <div className="h-[3px] bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500" />

                <div className="p-5 md:p-6">

                  {/* Company and Status */}
                  <div className="flex justify-between items-start gap-3 mb-5">

                    <div className="flex gap-3 items-center">

                      <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
                        <Briefcase size={21} className="text-emerald-400" />
                      </div>

                      <div>
                        <p className="text-[10px] text-emerald-400 font-bold tracking-widest uppercase">
                          Experience {String(index + 1).padStart(2, "0")}
                        </p>

                        <p className="text-slate-400 text-xs mt-1">
                          Professional Employment
                        </p>
                      </div>

                    </div>

                    {exp.status === "Currently Working" && (
                      <span className="experience-current text-[10px] text-emerald-300 bg-emerald-500/10 border border-emerald-400/30 px-3 py-1.5 rounded-full whitespace-nowrap">
                        ● Current
                      </span>
                    )}

                  </div>

                  {/* Position */}
                  <h3 className="text-xl font-bold text-white">
                    {exp.position}
                  </h3>

                  <div className="flex items-center gap-2 mt-2 text-emerald-300">
                    <MapPin size={15} />
                    <span className="text-sm font-semibold">
                      {exp.company}
                    </span>
                  </div>

                  {/* Duration */}
                  <div className="flex flex-wrap gap-3 mt-4">

                    <span className="inline-flex items-center gap-2 text-xs text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-lg px-3 py-2">
                      <CalendarDays size={14} />
                      {exp.duration}
                    </span>

                  </div>

                  {/* Project */}
                  <div className="mt-5 rounded-xl bg-white/[0.035] border border-white/[0.08] p-3">

                    <div className="flex items-center gap-2 mb-1">
                      <Layers size={15} className="text-emerald-400" />
                      <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                        Project
                      </span>
                    </div>

                    <p className="text-sm text-slate-200 font-medium">
                      {exp.project}
                    </p>

                  </div>

                  {/* Responsibilities */}
                  <div className="mt-5">

                    <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-3">
                      <ScanLine size={16} className="text-emerald-400" />
                      Key Responsibilities
                    </h4>

                    <ul className="space-y-2">

                      {exp.responsibilities.map((item, i) => (

                        <li
                          key={i}
                          className="flex gap-2 text-xs text-slate-400 leading-relaxed"
                        >
                          <span className="text-emerald-400 mt-0.5">✓</span>
                          <span>{item}</span>
                        </li>

                      ))}

                    </ul>

                  </div>

                  {/* Skills */}
                  <div className="mt-5">

                    <h4 className="text-xs text-slate-300 font-semibold mb-3 flex items-center gap-2">
                      <Database size={15} className="text-cyan-400" />
                      Tools & Expertise
                    </h4>

                    <div className="flex flex-wrap gap-2">

                      {exp.tools.map((tool) => (

                        <span
                          key={tool}
                          className="px-2.5 py-1.5 rounded-lg text-[10px] text-emerald-200 bg-emerald-500/[0.08] border border-emerald-400/20 hover:bg-emerald-500/20 hover:border-emerald-400/50 transition-all duration-300"
                        >
                          {tool}
                        </span>

                      ))}

                    </div>

                  </div>

                </div>

              </article>

            ))}

          </div>

          <div className="text-center mt-8">
            <p className="text-[10px] text-slate-500 tracking-[0.25em] uppercase">
              Experience • Skills • Professional Growth
            </p>
          </div>

        </div>
      </section>
    </>
  );
}

export default Experience;
