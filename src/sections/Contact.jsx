const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-6 sm:px-10 lg:px-20 bg-slate-950"
    >
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2
          className="
            text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-8
            bg-gradient-to-r from-indigo-400 to-cyan-400
            bg-clip-text text-transparent
          "
        >
          Contact
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-14 max-w-2xl">
          I’m open to full-time roles, internships, and freelance projects.
          If you’d like to collaborate or discuss an opportunity,
          feel free to reach out anytime.
        </p>

        {/* Contact Card */}
        <div
          className="
            bg-white/5 backdrop-blur-xl
            border border-white/10
            rounded-2xl p-8 sm:p-10
            space-y-8
          "
        >
          {/* Email */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-gray-300 font-medium w-28">Email</span>
            <a
              href="mailto:prasadrprabhu77@gmail.com"
              className="text-indigo-400 hover:text-cyan-400 transition break-all"
            >
              prasadrprabhu77@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-gray-300 font-medium w-28">Phone</span>
            <a
              href="tel:+919876543210"
              className="text-indigo-400 hover:text-cyan-400 transition"
            >
              +91 74832 41781
            </a>
          </div>

          {/* Address */}
          <div className="flex flex-col sm:flex-row sm:items-start gap-3">
            <span className="text-gray-300 font-medium w-28">
              Address
            </span>
            <p className="text-gray-400 leading-relaxed">
              Bhatkal, Uttara Kannada District,  
              Karnataka, India
            </p>
          </div>

          {/* GitHub */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-gray-300 font-medium w-28">GitHub</span>
            <a
              href="https://github.com/prasadrprabhu77"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 hover:text-cyan-400 transition"
            >
              github.com/prasadrprabhu77
            </a>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <span className="text-gray-300 font-medium w-28">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/prasad-prabhu-348417251/"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-400 hover:text-cyan-400 transition"
            >
              linkedin.com/in/prasad-prabhu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
