export default function Experience() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-14 items-start">
          
          {/* LEFT — Sticky context */}
          <div className="lg:sticky lg:top-28">
            <p className="text-xs tracking-wide text-brand/80 font-semibold">
              EXPERIENCE
            </p>

            <h2
              id="experience-heading"
              className="mt-2 text-3xl md:text-4xl font-extrabold"
            >
              Professional Experience
            </h2>

            <p className="mt-4 text-sm md:text-base text-zinc-400 leading-relaxed">
              Early-stage startup work, client-facing delivery, and hands-on
              engineering experience focused on building and shipping real
              products.
            </p>
          </div>

          {/* RIGHT — Flowing narrative */}
          <div className="space-y-16">
            {/* Startup */}
            <div>
              <h3 className="text-xl font-semibold">
                Co-Founder — Early-Stage Startup
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                India · Dec 2022 – Dec 2023
              </p>

              <div className="mt-5 space-y-4 text-sm md:text-base text-zinc-300 leading-relaxed">
                <p>
                  Co-founded and led an early-stage startup focused on building
                  web and mobile applications for local businesses and
                  close-network clients. I handled client outreach, requirement
                  discovery, project scoping, and delivery coordination while
                  working closely with a technical co-founder on execution.
                </p>

                <p>
                  Personally closed projects through direct conversations with
                  business owners, collected advance payments, and managed
                  end-to-end delivery across research, development, deployment,
                  and production. The team delivered ~12 projects, including
                  multiple fully deployed web applications.
                </p>

                <p>
                  Recruited and mentored university students as paid interns,
                  providing real-world project exposure and formal internship
                  experience. The startup was paused when both founders moved
                  abroad to pursue graduate studies.
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-white/10" />

            {/* Areksoft */}
            <div>
              <h3 className="text-xl font-semibold">
                Software Engineering Intern — Areksoft Technologies
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                Aug 2022 – Dec 2022
              </p>

              <div className="mt-5 space-y-4 text-sm md:text-base text-zinc-300 leading-relaxed">
                <p>
                  Worked as a software engineering intern during my undergraduate
                  studies, gaining first-hand exposure to how client-driven
                  software companies operate. Contributed to frontend and
                  backend features using HTML, CSS, JavaScript, Python, and
                  Flask.
                </p>

                <p>
                  Learned practical aspects of client acquisition, professional
                  networking, and project communication. Assisted with UI/UX
                  work using tools like Figma and Canva, and supported outreach
                  and marketing efforts.
                </p>

                <p>
                  This experience shaped my interest in building products,
                  working directly with clients, and eventually starting my own
                  venture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
