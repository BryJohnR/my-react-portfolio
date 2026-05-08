import hero from "../assets/images/hero.jpg";
import cv from "../assets/etc/Bryan_John_Rosas_Resume_Web_Developer.pdf";

export default function Home({ data }) {
  return (
    <section
      id="home"
      className="relative min-h-screen h-[52vh] md:h-[60vh] bg-black overflow-hidden rounded-lg"
    >
      <img
        src={hero}
        alt="hero"
        className="absolute inset-0 w-full h-full object-cover opacity-90 "
      />
      <div className="absolute inset-0 bg-hero-grad"></div>

      <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
        <div className="w-full md:w-1/2 text-white">
          <h1 className="text-7xl md:text-8xl font-extrabold">
            {data.first_name}
          </h1>
          <h2 className="text-6xl md:text-7xl font-bold text-blue-400">
            {data.title}
          </h2>

          <div className="mt-7 flex gap-3">
            <a
              href={cv}
              className="px-4 py-2 border border-indigo-500 rounded bg-blue-600 text-white"
              download
            >
              Download CV
            </a>
            <a
              href={`mailto:${data.contact.email}`}
              className="px-4 py-2 border border-gray-400 rounded hover:bg-gray-800"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
