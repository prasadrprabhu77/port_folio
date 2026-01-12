const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-3xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-dark mb-8">
          About Me
        </h2>

        <p className="text-base sm:text-lg text-muted leading-relaxed mb-6">
          I’m a Full Stack Developer focused on building scalable,
          maintainable, and user-friendly web applications.
        </p>

        <p className="text-base sm:text-lg text-muted leading-relaxed">
          I work primarily with React on the frontend and Node.js on the
          backend, and I enjoy solving real-world problems with clean code.
        </p>
      </div>
    </section>
  );
};

export default About;
