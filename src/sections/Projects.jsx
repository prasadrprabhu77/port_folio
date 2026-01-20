import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 sm:px-10 lg:px-20 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2
          className="
            text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-14
            bg-gradient-to-r from-indigo-400 to-cyan-400
            bg-clip-text text-transparent
          "
        >
          Projects
        </h2>

        {/* Grid */}
        <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => {
            const githubLinks = project.githubLink ?? [];

            return (
              <div
                key={project.id}
                className="
                  group relative rounded-2xl p-7
                  bg-white/5 backdrop-blur-xl
                  border border-white/10
                  hover:border-indigo-400/40
                  transition-all duration-300
                  hover:-translate-y-2
                "
              >
                {/* Glow on hover */}
                <div
                  className="
                    absolute inset-0 rounded-2xl opacity-0
                    group-hover:opacity-100
                    bg-gradient-to-br from-indigo-500/10 to-cyan-400/10
                    transition duration-300
                  "
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Title */}
                  <h3
                    className="
                      text-xl sm:text-2xl font-semibold mb-4
                      text-white group-hover:text-indigo-400
                      transition-colors
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 leading-relaxed mb-5 text-sm sm:text-base">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <p className="text-sm text-gray-400 mb-6">
                    <span className="text-gray-200 font-medium">
                      Tech Stack:
                    </span>{" "}
                    {project.tech.join(", ")}
                  </p>

                  {/* Links */}
                  <div className="mt-auto flex flex-wrap gap-4 text-sm font-medium">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          px-4 py-2 rounded-lg
                          bg-indigo-500/10 text-indigo-400
                          hover:bg-indigo-500/20
                          transition
                        "
                      >
                        Live Demo
                      </a>
                    )}

                    {githubLinks.length === 2 ? (
                      <>
                        <a
                          href={githubLinks[0]}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
                        >
                          Frontend
                        </a>
                        <a
                          href={githubLinks[1]}
                          target="_blank"
                          rel="noreferrer"
                          className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
                        >
                          Backend
                        </a>
                      </>
                    ) : githubLinks.length === 1 ? (
                      <a
                        href={githubLinks[0]}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition"
                      >
                        GitHub
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
