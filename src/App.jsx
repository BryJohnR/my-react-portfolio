import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/footer";
import { motion } from "framer-motion";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data/content.json")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) {
    return (
      <div className="flex flex-col justify-center items-center h-64">
        <motion.div
          className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        />
        <motion.p
          className="mt-4 text-lg font-semibold text-gray-300"
          animate={{ opacity: [0.2, 1, 0.2] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          Loading...
        </motion.p>
      </div>
    );
  }

  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Navbar data={data} />
      <Home data={data} />
      <About data={data} />
      <Resume data={data} />
      <Portfolio data={data} />
      <Footer data={data} />
    </div>
  );
}
