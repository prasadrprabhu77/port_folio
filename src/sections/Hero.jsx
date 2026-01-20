import Resume from "../components/Resume";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Left */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-indigo-400">Prasad</span> 👋
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            Full Stack Developer focused on building responsive,
            scalable and user-friendly web applications using
            React and Node.js.
          </p>

          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="/projects"
              className="px-6 py-3 bg-indigo-500 rounded-lg hover:bg-indigo-600 transition"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/10 transition"
            >
              Contact Me
            </a>
            <Resume/>
          </div>
        </div>

        {/* Right glow */}
        <div className="flex justify-center">
          <div className="w-72 h-72 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 blur-3xl opacity-30"></div>
        </div>
      </div>
    </section>
  );
}
