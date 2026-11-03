
import {
  GraduationCap,
  School,
  Award,
  CalendarDays,
  MapPin,
  BookOpen,
  Sparkles
} from "lucide-react";

const education = [
  {
    id: 1,
    degree: "Bachelor of Science",
    subject: "Geography and Environment",
    institution: "Dhaka College",
    affiliation: "University of Dhaka",
    year: "2020 – 2021",
    result: "CGPA: 3.22 / 4.00",
    level: "Undergraduate",
    icon: GraduationCap,
    color: "emerald"
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate",
    subject: "Science",
    institution: "Hamdard Public College",
    affiliation: "Dhaka, Bangladesh",
    year: "2020",
    result: "GPA: 5.00 / 5.00",
    level: "Higher Secondary",
    icon: School,
    color: "cyan"
  },
  {
    id: 3,
    degree: "Secondary School Certificate",
    subject: "Science",
    institution: "Lalmonirhat Govt High School",
    affiliation: "Lalmonirhat, Bangladesh",
    year: "2018",
    result: "GPA: 5.00 / 5.00",
    level: "Secondary",
    icon: BookOpen,
    color: "blue"
  }
];

function Education() {
  return (
    <>
      <style>{`
        @keyframes educationReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .education-reveal {
          animation: educationReveal .7s ease both;
        }

        .education-card {
          transition: transform .35s ease,
            border-color .35s ease,
            box-shadow .35s ease;
        }

        .education-card:hover {
          transform: translateY(-6px);
          border-color: rgba(52,211,153,.5);
          box-shadow: 0 15px 35px rgba(16,185,129,.09);
        }

        .education-icon {
          transition: transform .4s ease;
        }

        .education-card:hover .education-icon {
          transform: rotate(-8deg) scale(1.1);
        }

        @media (prefers-reduced-motion: reduce) {
          .education-reveal {
            animation: none !important;
          }
        }
      `}</style>

      <section
        id="education"
        className="relative min-h-[calc(100svh-76px)] flex items-center justify-center overflow-hidden bg-[#080b14] text-white px-5 md:px-8 py-8 md:py-10 scroll-mt-[76px]"
      >

        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl w-full mx-auto">

          {/* Heading */}
          <div className="text-center mb-9 education-reveal">

            <p className="text-emerald-400 text-xs font-bold tracking-[0.3em] uppercase">
              Academic Background
            </p>

            <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
              My{" "}
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Education
              </span>
            </h2>

            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mt-4" />

            <p className="text-slate-400 text-sm mt-4">
              My academic journey and educational qualifications.
            </p>

          </div>

          {/* Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {education.map((item, index) => {

              const Icon = item.icon;

              return (

                <article
                  key={item.id}
                  style={{
                    animationDelay: `${index * 150}ms`
                  }}
                  className="education-reveal education-card relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/95 p-6"
                >

                  {/* Top Accent */}
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-emerald-500 via-cyan-400 to-blue-500" />

                  {/* Decorative Glow */}
                  <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-emerald-500/10 blur-[70px] pointer-events-none" />

                  <div className="relative z-10">

                    {/* Icon and Level */}
                    <div className="flex items-center justify-between mb-6">

                      <div className="education-icon w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center">
                        <Icon
                          size={28}
                          className="text-emerald-400"
                        />
                      </div>

                      <span className="text-[9px] tracking-wider uppercase font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 px-3 py-2 rounded-full">
                        {item.level}
                      </span>

                    </div>

                    {/* Degree */}
                    <h3 className="text-lg md:text-xl font-bold text-white leading-snug">
                      {item.degree}
                    </h3>

                    <p className="text-sm font-semibold text-cyan-300 mt-2">
                      {item.subject}
                    </p>

                    {/* Institution */}
                    <div className="mt-6 space-y-3">

                      <div className="flex items-start gap-3">

                        <School
                          size={17}
                          className="text-emerald-400 mt-0.5 shrink-0"
                        />

                        <div>
                          <p className="text-[9px] text-slate-500 uppercase tracking-widest">
                            Institution
                          </p>

                          <p className="text-sm text-slate-200 font-medium mt-1">
                            {item.institution}
                          </p>
                        </div>

                      </div>

                      <div className="flex items-start gap-3">

                        <MapPin
                          size={17}
                          className="text-cyan-400 mt-0.5 shrink-0"
                        />

                        <div>
                          <p className="text-[9px] text-slate-500 uppercase tracking-widest">
                            Affiliation / Location
                          </p>

                          <p className="text-xs text-slate-400 mt-1">
                            {item.affiliation}
                          </p>
                        </div>

                      </div>

                      <div className="flex items-center gap-3">

                        <CalendarDays
                          size={17}
                          className="text-blue-400 shrink-0"
                        />

                        <div>
                          <p className="text-[9px] text-slate-500 uppercase tracking-widest">
                            Academic Year
                          </p>

                          <p className="text-xs text-slate-300 mt-1">
                            {item.year}
                          </p>
                        </div>

                      </div>

                    </div>

                    {/* Result */}
                    <div className="mt-6 p-4 rounded-xl bg-emerald-500/[0.07] border border-emerald-400/20">

                      <div className="flex items-center gap-2">

                        <Award
                          size={19}
                          className="text-emerald-400"
                        />

                        <span className="text-xs text-emerald-300 font-bold">
                          Academic Result
                        </span>

                      </div>

                      <p className="text-lg font-extrabold text-white mt-2">
                        {item.result}
                      </p>

                    </div>

                  </div>

                </article>

              );

            })}

          </div>

          {/* Certification */}
          <div className="education-reveal mt-6 rounded-2xl border border-cyan-400/20 bg-[#111827]/90 p-5 md:p-6">

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center shrink-0">
                  <Award size={25} className="text-cyan-400" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">
                    Professional Certification
                  </p>

                  <h3 className="text-sm md:text-base font-bold text-white mt-1">
                    Spatial Analysis
                  </h3>

                  <p className="text-xs text-slate-400 mt-1">
                    Esri Bangladesh
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-2 text-xs text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 rounded-full px-4 py-2 w-fit">
                <CalendarDays size={14} />
                October 2025
              </div>

            </div>

          </div>

          {/* Footer */}
          <div className="flex justify-center items-center gap-3 mt-7">

            <div className="w-8 h-px bg-emerald-500/50" />

            <p className="text-[9px] tracking-[0.25em] text-slate-500 uppercase">
              Education • Knowledge • Growth
            </p>

            <div className="w-8 h-px bg-cyan-500/50" />

          </div>

        </div>

      </section>
    </>
  );
}

export default Education;
