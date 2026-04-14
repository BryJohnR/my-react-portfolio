import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, fadeIn, zoomIn } from "../utils/animations";

export default function Portfolio({ data }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleImageError = (e) => {
    e.target.src = `${import.meta.env.BASE_URL}images/project/portfolio.jpg`;
  };

  return (
    <section id="portfolio" className="container mx-auto px-6 py-8 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="uppercase text-3xl font-bold inline-block relative">
            Portfolio
            <motion.span
              className="block h-1 bg-blue-400 mt-2 mx-auto"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
            />
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {data.portfolio.map((project, i) => (
            <motion.div
              key={i}
              className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
              onClick={() => setSelectedProject(project)}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              custom={i}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={`${import.meta.env.BASE_URL + project.img}`}
                alt={project.title}
                onError={handleImageError}
                className="mb-4 rounded-md"
              />
              <h3 className="text-xl font-bold">{project.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setSelectedProject(null)} // click outside to close
          >
            <motion.div
              className="bg-gray-900 rounded-lg shadow-lg max-w-2xl w-full relative"
              variants={zoomIn} // zoom animation
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 text-white text-xl hover:text-red-400"
              >
                ✕
              </button>

              {/* Project Image */}
              <img
                src={`${import.meta.env.BASE_URL + selectedProject.img}`}
                alt={selectedProject.title}
                onError={handleImageError}
                className="w-full h-80 object-cover rounded-t-lg"
              />

              {/* Project Details */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {selectedProject.description || "No description available."}
                </p>

                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                  >
                    🔗 View Project
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
