import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./sections/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Github from "./sections/Github";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-200 flex flex-col">
      <Navbar />

      {/* spacing for fixed navbar */}
      <main className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/github" element={<Github />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
