import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 sm:px-10 lg:px-20"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-dark mb-12">
        Projects
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project) => {
          const githubLinks = project.githubLink ?? [];

          return (
            <div
              key={project.id}
              className="group border border-gray-200 rounded-xl p-6 transition-all duration-200 hover:shadow-xl hover:-translate-y-1"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-dark mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted leading-relaxed mb-4 text-sm sm:text-base">
                {project.description}
              </p>

              <p className="text-sm text-muted mb-5">
                <span className="font-medium text-dark">
                  Tech Stack:
                </span>{" "}
                {project.tech.join(", ")}
              </p>

              <div className="flex flex-wrap gap-4 text-sm font-medium">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:underline"
                >
                  Live Demo
                </a>

                {githubLinks.length === 2 ? (
                  <>
                    <a
                      href={githubLinks[0]}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline"
                    >
                      Frontend
                    </a>
                    <a
                      href={githubLinks[1]}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:underline"
                    >
                      Backend
                    </a>
                  </>
                ) : githubLinks.length === 1 ? (
                  <a
                    href={githubLinks[0]}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub
                  </a>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
