import { useEffect, useState } from "react";
import scrollToSection from "../utils/scrollToSection.js";
import { FaArrowUp } from "react-icons/fa";

// Import Section Components
import About from "../sections/About";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Experience from "../sections/Experience";
import Certifications from "../sections/Certifications";
import Talks from "../sections/Talks";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";

function HomePage() {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    document.title = "KQ's Portfolio | Showcase";

    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="bg-gray-900 sticky top-0 z-20 shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            {/* Left: Logo */}
            <a href="/" className="text-2xl font-bold transition group block w-fit">
              <code className="flex items-center font-mono text-base">
                <span className="text-purple-400 animate-type inline-block whitespace-nowrap overflow-hidden">
                  <span className="text-green-400">print</span>
                  <span className="text-white">("</span>
                  <span className="font-ntg text-[#61dafb]">KQ Tan</span>
                  <span className="text-white">")</span>
                </span>
              </code>
            </a>

            {/* Right: Nav Links */}
            <div className="flex gap-4">
            {[
                "about",
                "skills",
                "education",
                "experience",
                "projects",
                "certifications",
                "talks",
                "contact",
            ].map((section) => (
                <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-[#61dafb] capitalize hover:text-white transition"
                >
                {section}
                </button>
            ))}
            </div>
        </div>
    </nav>


      {/* Sections */}
      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="certifications">
        <Certifications />
      </section>

      <section id="talks">
        <Talks />
      </section>

      <section id="contact">
        <Contact />
      </section>

      {/* Back to Top Button */}
      {showTopButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[#61dafb] text-gray-900 shadow-lg hover:bg-white transition"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default HomePage;
