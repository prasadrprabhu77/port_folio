import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "GitHub", path: "/github" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/70 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <h1 className="text-xl font-bold text-indigo-400">
          Prasad Prabhu
        </h1>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition hover:text-cyan-400 ${
                  isActive ? "text-cyan-400" : "text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
