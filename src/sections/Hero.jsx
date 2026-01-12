const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark mb-4 leading-tight">
          Hi, I’m Prasad
        </h1>

        <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-6">
          Full Stack Developer
        </h2>

        <p className="text-base sm:text-lg text-muted leading-relaxed mb-8">
          I build clean, scalable, and user-focused web applications using
          React, Node.js, and modern web technologies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/projects"
            className="px-6 py-3 bg-primary text-black rounded-md font-medium border border-primary transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            View Projects
          </a>

          <a
            href="/contact"
            className="px-6 py-3 border border-primary text-primary rounded-md font-medium transition-all duration-200 hover:bg-primary hover:text-black hover:shadow-lg hover:-translate-y-0.5"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
