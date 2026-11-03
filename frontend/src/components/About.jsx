
import {
  MapPin,
  Layers3,
  ScanLine,
  Workflow,
  Database,
  ClipboardCheck,
  Sparkles
} from "lucide-react";

const strengths = [
  {
    icon: Layers3,
    title: "GIS & Spatial Analysis",
    description:
      "Spatial data analysis, GIS mapping, geospatial datasets and spatial processing.",
    color: "emerald"
  },
  {
    icon: Database,
    title: "Data Management",
    description:
      "Geospatial data creation, editing, management and technical documentation.",
    color: "cyan"
  },
  {
    icon: ClipboardCheck,
    title: "Quality Control",
    description:
      "GIS data quality control, validation, accuracy and compliance.",
    color: "blue"
  },
  {
    icon: Workflow,
    title: "Project Coordination",
    description:
      "Team supervision, daily task distribution and project progress monitoring.",
    color: "purple"
  }
];

function About() {
  return (
    <section
      id="about"
      className="about-section relative min-h-[calc(100svh-76px)] flex items-center overflow-hidden px-5 md:px-8 py-12 scroll-mt-[76px]"
    >
      <div className="about-glow absolute top-0 left-0 w-72 h-72 rounded-full bg-emerald-500/10 blur-[110px]" />

      <div className="about-glow absolute bottom-0 right-0 w-72 h-72 rounded-full bg-cyan-500/10 blur-[110px]" />

      <div className="relative z-10 max-w-7xl w-full mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 about-enter">

          <span className="text-xs tracking-[0.3em] font-bold text-emerald-400 uppercase">
            Get To Know Me
          </span>

          <h2 className="about-heading text-3xl md:text-4xl font-extrabold mt-3">
            About{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mt-4" />

        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-7 items-stretch">

          {/* Professional Summary */}
          <div className="about-card relative rounded-3xl border p-7 md:p-9 overflow-hidden about-enter">

            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-500/10 blur-[90px]" />

            <div className="relative z-10">

              <div className="flex items-center gap-3 mb-7">

                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
                  <MapPin className="text-emerald-400" size={25} />
                </div>

                <div>
                  <h3 className="about-heading text-xl font-bold">
                    Professional Profile
                  </h3>

                  <p className="about-muted text-xs mt-1">
                    GIS & Geospatial Technology
                  </p>
                </div>

              </div>

              <p className="about-text text-sm md:text-base leading-8">
                Motivated and detail-oriented professional with
                experience in GIS, data management, quality control,
                project coordination, and field operations.
                Skilled in data analysis, technical documentation,
                problem-solving, and maintaining accuracy across
                project environments. Adaptable team player with
                strong communication and organizational skills,
                committed to operational efficiency and continuous
                improvement.
              </p>

              <div className="h-px bg-gradient-to-r from-emerald-400/30 via-cyan-400/20 to-transparent my-7" />

              <div className="flex items-center gap-2 mb-4">

                <Sparkles size={17} className="text-emerald-400" />

                <h4 className="about-heading font-semibold text-sm">
                  Professional Interests
                </h4>

              </div>

              <div className="flex flex-wrap gap-2">

                {[
                  "Geospatial Analysis",
                  "LiDAR Data",
                  "GIS Mapping",
                  "Spatial Processing",
                  "Quality Assurance",
                  "Field Operations"
                ].map((item) => (
                  <span
                    key={item}
                    className="about-tag px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 hover:-translate-y-1"
                  >
                    {item}
                  </span>
                ))}

              </div>

            </div>

          </div>

          {/* Professional Strengths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  style={{
                    animationDelay: `${index * 120}ms`
                  }}
                  className="about-strength about-enter rounded-2xl border p-5 flex flex-col justify-center transition-all duration-300 hover:-translate-y-2"
                >

                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center mb-4">
                    <Icon
                      size={22}
                      className="text-emerald-400"
                    />
                  </div>

                  <h3 className="about-heading text-base font-bold">
                    {item.title}
                  </h3>

                  <p className="about-muted text-xs leading-6 mt-3">
                    {item.description}
                  </p>

                </article>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
