const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div
        className="
          max-w-7xl mx-auto
          px-6 py-6
          flex flex-col sm:flex-row
          items-center justify-between
          gap-4
          text-sm text-gray-400
        "
      >
        <p>
          © {new Date().getFullYear()} Prasad. All rights reserved.
        </p>

        <p className="flex items-center gap-1">
          Built with
          <span className="text-indigo-400 font-medium">
            React
          </span>
          &
          <span className="text-cyan-400 font-medium">
            Tailwind CSS
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
