const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} Prasad. All rights reserved.
        </p>

        <p className="text-sm text-muted">
          Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
