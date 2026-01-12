import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 sm:px-10 lg:px-20"
    >
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-dark mb-12">
        Skills
      </h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {Object.entries(skills).map(([category, items]) => (
          <div
            key={category}
            className="rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
          >
            <h3 className="text-lg font-semibold text-dark mb-4 capitalize">
              {category}
            </h3>

            <ul className="space-y-2 text-muted text-sm sm:text-base">
              {items.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2"
                >
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
