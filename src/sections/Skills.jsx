import { skills } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 px-6 sm:px-10 lg:px-20 bg-slate-950"
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-14 
                       bg-gradient-to-r from-indigo-400 to-cyan-400 
                       bg-clip-text text-transparent">
          Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="
                group relative rounded-2xl p-6
                bg-white/5 backdrop-blur-xl
                border border-white/10
                hover:border-indigo-400/40
                transition-all duration-300
                hover:-translate-y-1
              "
            >
              {/* Glow Effect */}
              <div
                className="
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                  bg-gradient-to-br from-indigo-500/10 to-cyan-400/10
                  transition duration-300
                "
              />

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-5 capitalize text-indigo-300">
                  {category}
                </h3>

                <ul className="space-y-3 text-gray-300 text-sm sm:text-base">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3"
                    >
                      <span
                        className="
                          h-2.5 w-2.5 rounded-full
                          bg-gradient-to-r from-indigo-400 to-cyan-400
                        "
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
