import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Smooth scroll handler
  const handleScroll = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // close mobile menu
    }
  };

  // Active link detection
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Scroll progress bar
  useEffect(() => {
    const handleProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleProgress);
    return () => window.removeEventListener("scroll", handleProgress);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 text-white shadow-lg z-50 backdrop-blur-sm">
      {/* Progress bar */}
      <div
        className="absolute top-0 left-0 h-1 bg-blue-400 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Top bar */}
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, "#home")}
          className="text-2xl font-bold text-blue-400"
        >
          &lt;BryJohn/&gt;
        </a>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 font-medium">
          {data.menu.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`transition-colors duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-blue-400 font-semibold"
                    : "hover:text-blue-400"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger button (visible on tablet & mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile/Tablet Menu */}
      <div
        className={`lg:hidden bg-black/95 w-full transition-all duration-300 ${
          isOpen ? "max-h-96 py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col px-6 space-y-4 font-medium">
          {data.menu.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`block transition-colors duration-300 ${
                  activeSection === link.href.replace("#", "")
                    ? "text-blue-400 font-semibold"
                    : "hover:text-blue-400"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
