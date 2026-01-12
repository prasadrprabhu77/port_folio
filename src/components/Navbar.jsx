import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-xl font-bold text-dark">
          Prasad Prabhu
        </h1>

        <ul className="flex gap-8 text-sm font-medium text-muted">
          <li><Link to="/" className="hover:text-primary">Home</Link></li>
          <li><Link to="/about" className="hover:text-primary">About</Link></li>
          <li><Link to="/skills" className="hover:text-primary">Skills</Link></li>
          <li><Link to="/projects" className="hover:text-primary">Projects</Link></li>
          <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
