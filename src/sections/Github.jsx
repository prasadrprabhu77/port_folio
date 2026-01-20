const Github = () => {
  const username = "prasadrprabhu77";

  return (
    <section
      id="github"
      className="py-24 px-6 sm:px-10 lg:px-20 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <h2
          className="
            text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-14
            bg-gradient-to-r from-indigo-400 to-cyan-400
            bg-clip-text text-transparent
          "
        >
          GitHub Activity
        </h2>

        {/* Contribution calendar */}
        <div
          className="
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-2xl p-6 mb-12
            overflow-x-auto
          "
        >
          <img
            src={`https://ghchart.rshah.org/409ba5/${username}`}
            alt="GitHub Contribution Chart"
            className="min-w-[700px] mx-auto"
          />
        </div>

        {/* Stats */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* GitHub stats */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex justify-center">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true`}
              alt="GitHub Stats"
              className="w-full max-w-lg"
            />
          </div>

          {/* Top languages */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex justify-center">
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true`}
              alt="Top Languages"
              className="w-full max-w-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Github;
