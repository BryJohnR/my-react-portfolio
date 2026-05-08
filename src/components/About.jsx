import profile from "../assets/images/profile.png";
import { FaGamepad, FaRunning, FaRobot, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

export default function About({ data }) {
  return (
    <section
      id="about"
      className="container mx-auto px-6 py-12 min-h-screen relative"
    >
      <div className="grid lg:grid-cols-2 md:grid-cols-2 items-center gap-8">
        {/* Left Content */}
        <motion.div
          className="grid md:grid-rows-1 gap-8 text-white order-2 lg:order-1 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div>
            {/* Section Title */}
            <motion.h2
              className="text-3xl font-bold mt-6 mb-3 relative inline-block dark:text-gray-200"
              variants={fadeInUp}
            >
              About
              <motion.span
                className="absolute left-0 bottom-0 h-1 bg-blue-400 w-full origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </motion.h2>
            {/* Intro */}
            <motion.p
              className="text-2xl text-gray-300 mb-3"
              variants={fadeInUp}
              custom={1}
            >
              My Name is{" "}
              <span className="text-blue-400">
                {data.first_name + " " + data.last_name}
              </span>
            </motion.p>
          </motion.div>
          <motion.div>
            {/* About description */}
            <motion.p
              className="mb-6 text-lg leading-relaxed"
              variants={fadeInUp}
              custom={2}
            >
              {data.about}
            </motion.p>
          </motion.div>
          <motion.div>
            <motion.div
              className="my-6 py-6 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { label: "Address", value: data.contact.location },
                { label: "Email", value: data.contact.email },
                { label: "Phone", value: data.contact.phone },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="md:my-2"
                  variants={fadeInUp}
                  custom={i + 3}
                >
                  <p>{item.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right - Profile with Glow */}
        <motion.div
          className="flex justify-center relative order-1 lg:order-2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Glow background */}
          {/* <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-30 animate-pulse"></div> */}
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-3xl opacity-30 animate-pulse"></div>

          {/* Profile */}
          <div className="relative border-4 border-blue-400 inline-block p-2 rounded-xl bg-black/60">
            <img
              src={profile}
              alt="Profile"
              // className="w-80 h-auto object-cover rounded-lg"
              className="w-64 sm:w-72 md:w-80 h-auto object-cover rounded-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
