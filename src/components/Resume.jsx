import { motion } from "framer-motion";
import resumeBg from "../assets/images/resume.jpg";
import { fadeInUp, fadeIn } from "../utils/animations";

export default function Resume({ data }) {
  return (
    <section
      id="resume"
      className="py-20 bg-gray-900 text-white min-h-screen"
      style={{
        backgroundImage: `url(${resumeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h2 className="uppercase text-3xl font-bold inline-block relative">
          Resume
          <motion.span
            className="block h-1 bg-blue-400 mt-2 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6 }}
          />
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 py-6 max-w-9xl grid md:grid-cols-3 gap-14"
      >
        {/* Skills */}
        <motion.div variants={fadeIn}>
          <h2 className="uppercase text-2xl font-bold mb-4 underline underline-offset-4 decoration-blue-400 decoration-2 dark:text-gray-200">
            SKILLS
          </h2>
          <h3 className="text-1xl font-bold mb-4">Web Development</h3>
          {Object.entries(data.skills.web_development).map(
            ([skill, level], idx) => (
              <div className="flex grid-cols-2 gap-2" key={skill}>
                <div className="w-full">
                  <p>{skill}</p>
                </div>
                <div className="w-full my-auto bg-white h-2 rounded overflow-hidden">
                  <motion.div
                    className="bg-blue-500 h-2 rounded"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1.2, delay: idx * 0.2 }}
                  />
                </div>
              </div>
            ),
          )}
          <h3 className="text-1xl font-bold my-4">Testing & Automation</h3>
          {Object.entries(data.skills.testing).map(([skill, level], idx) => (
            <div className="flex grid-cols-2 gap-2" key={skill}>
              <div className="w-full">
                <p>{skill}</p>
              </div>
              <div className="w-full my-auto bg-white h-2 rounded overflow-hidden">
                <motion.div
                  className="bg-blue-500 h-2 rounded"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  transition={{ duration: 1.2, delay: idx * 0.2 }}
                />
              </div>
            </div>
          ))}
          <h3 className="text-1xl font-bold my-4">Analytics & SEO</h3>
          {Object.entries(data.skills.analytics).map(([skill, level], idx) => (
            <div className="flex grid-cols-2 gap-2" key={skill}>
              <div className="w-full">
                <p>{skill}</p>
              </div>
              <div className="w-full my-auto bg-white h-2 rounded overflow-hidden">
                <motion.div
                  className="bg-blue-500 h-2 rounded"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  transition={{ duration: 1.2, delay: idx * 0.2 }}
                />
              </div>
            </div>
          ))}
          <h3 className="text-1xl font-bold my-4">Version Control</h3>
          {Object.entries(data.skills.versioning).map(([skill, level], idx) => (
            <div className="flex grid-cols-2 gap-2" key={skill}>
              <div className="w-full">
                <p>{skill}</p>
              </div>
              <div className="w-full my-auto bg-white h-2 rounded overflow-hidden">
                <motion.div
                  className="bg-blue-500 h-2 rounded"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  transition={{ duration: 1.2, delay: idx * 0.2 }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Experience */}
        <motion.div variants={fadeIn}>
          <h2 className="uppercase text-2xl font-bold mb-4 underline underline-offset-4 decoration-blue-400 decoration-2 dark:text-gray-200">
            Experience
          </h2>
          <div className="space-y-5">
            {data.experience.map((exp) => (
              <motion.div
                key={exp.company}
                variants={fadeIn}
                className="border-l-2 border-blue-500 pl-4"
              >
                <p className="text-blue-400 text-sm">{exp.year}</p>
                <p className="font-semibold">{exp.company}</p>
                <p className="text-sm">{exp.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other */}
        <motion.div variants={fadeIn}>
          <h2 className="uppercase text-2xl font-bold mb-4 underline underline-offset-4 decoration-blue-400 decoration-2 dark:text-gray-200">
            WHAT I CAN DO?
          </h2>
          <motion.p>{data.whatIDo.join(" – ")}</motion.p>
          <h2 className="uppercase text-2xl font-bold my-4 underline underline-offset-4 decoration-blue-400 decoration-2 dark:text-gray-200">
            Personal Skills
          </h2>
          <motion.p variants={fadeIn} className="text-sm leading-relaxed">
            {data.skills.personal.join(" – ")}
          </motion.p>
          <h2 className="uppercase text-2xl font-bold my-8 underline underline-offset-4 decoration-blue-400 decoration-2 dark:text-gray-200">
            EDUCATION
          </h2>
          <motion.p variants={fadeIn} className="text-sm leading-relaxed">
            {data.education.degree}, {data.education.school}
          </motion.p>
          <h2 className="uppercase text-2xl font-bold my-8 underline underline-offset-4 decoration-blue-400 decoration-2 dark:text-gray-200">
            LANGUAGES
          </h2>
          <motion.p variants={fadeIn} className="text-sm leading-relaxed">
            {data.skills.languages.join(" – ")}
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
}
