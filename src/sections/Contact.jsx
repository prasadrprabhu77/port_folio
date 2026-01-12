const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-3xl">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-dark mb-8">
          Contact
        </h2>

        <p className="text-muted text-base sm:text-lg leading-relaxed mb-10">
          I’m open to full-time roles, internships, and freelance projects.
          If you’d like to collaborate or discuss an opportunity, feel free
          to reach out.
        </p>

        <ul className="space-y-6 text-base sm:text-lg">
          <li className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-dark">Email:</span>
            <a
              href="mailto:prasadrprabhu77@gmail.com"
              className="text-primary hover:underline"
            >
              prasadrprabhu77@gmail.com
            </a>
          </li>

          <li className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-dark">GitHub:</span>
            <a
              href="https://github.com/prasadrprabhu77"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              github.com/prasad
            </a>
          </li>

          <li className="flex flex-wrap items-center gap-2">
            <span className="font-medium text-dark">LinkedIn:</span>
            <a
              href="https://www.linkedin.com/in/prasad-prabhu-348417251/"
              target="_blank"
              rel="noreferrer"
              className="text-primary hover:underline"
            >
              linkedin.com/in/prasad
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
