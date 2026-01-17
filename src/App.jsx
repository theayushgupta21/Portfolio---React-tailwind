import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "./pages/navbar.jsx";
import profilePic from "./assets/profile.jpg";
import About from "./pages/about";
import Experience from "./pages/experience.jsx";
import Hire from "./pages/hire.jsx";
import Projects from "./pages/project.jsx";
import Footer from "./pages/footer.jsx";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaRobot,
  FaTools,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaDownload,
} from "react-icons/fa6";

export default function Hero() {
  /* Cursor motion values */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const floatY = {
    y: [-20, 20, -20],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const [isBW, setIsBW] = useState(false);

  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <header
        id="home"
        className="relative z-20 min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-24 py-16"
      >
        {/* Profile Image */}
        <motion.img
          src={profilePic}
          alt="Ayush Gupta profile photo"
          loading="lazy"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          onClick={() => setIsBW(!isBW)}
          className={`
            w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full
            border border-white/20 shadow-[0_0_45px_rgba(250,204,21,0.45)]
            mb-4 sm:mb-6 transition duration-500 ease-linear
            ${isBW ? "filter grayscale" : "filter-none"}
            hover:filter grayscale
          `}
        />

        {/* Availability */}
        <div
          className="mb-4 px-3 py-1 sm:px-4 sm:py-2 rounded-full text-sm bg-green-500/10 text-green-400 border border-green-500/20"
          role="status"
        >
          ● Available for work
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight max-w-xl sm:max-w-2xl">
          Hi, I’m <span className="text-yellow-400">Ayush Gupta</span> — <br />
          Frontend Engineer with{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Full-Stack Expertise
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 sm:mt-6 max-w-md sm:max-w-xl md:max-w-2xl text-gray-400 text-base sm:text-lg">
          I build fast, accessible, and scalable web experiences using React, Tailwind CSS, Framer Motion, and backend integrations.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4 justify-center items-center">
          <a
            href="#hire-me"
            className="px-6 py-3 sm:px-8 sm:py-3 rounded-full bg-white text-black font-semibold shadow-lg hover:scale-105 hover:shadow-yellow-400/50 transition-transform"
          >
            Get in touch →
          </a>
          <a
            href="#projects"
            className="px-6 py-3 sm:px-8 sm:py-3 rounded-full border border-white/20 text-white hover:bg-white/10 hover:scale-105 transition-transform"
          >
            View projects
          </a>
        </div>

        {/* Social + CV */}
        <div className="mt-4 flex flex-wrap gap-4 justify-center items-center">
          <button
            onClick={() => alert("CV Download Started!")}
            className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-yellow-500 text-black rounded-full text-base sm:text-lg font-semibold shadow-md hover:bg-yellow-400 hover:scale-105 transition-transform"
          >
            <FaDownload className="text-xl sm:text-2xl" /> Download CV
          </button>

          <SocialButton
            url="https://linkedin.com/in/yourusername"
            icon={<FaLinkedinIn />}
            colorClass="bg-gradient-to-br from-blue-600 to-blue-400"
            label="LinkedIn"
          />
          <SocialButton
            url="https://github.com/yourusername"
            icon={<FaGithub />}
            colorClass="bg-gray-800"
            label="GitHub"
          />
          <SocialButton
            url="https://instagram.com/portraitwalagallery"
            icon={<FaInstagram />}
            colorClass="bg-gradient-to-tr from-pink-500 to-yellow-400"
            label="Instagram"
          />
          <SocialButton
            url="https://twitter.com/yourusername"
            icon={<FaTwitter />}
            colorClass="bg-gradient-to-br from-blue-400 to-cyan-400"
            label="Twitter"
          />
        </div>

        {/* FLOATING ICONS */}
        <FloatingIcon icon={<FaReact />} color="text-blue-400" style={{ top: "10%", left: "8%" }} mouseX={mouseX} mouseY={mouseY} animate={floatY} />
        <FloatingIcon icon={<FaNodeJs />} color="text-green-400" style={{ top: "18%", right: "10%" }} mouseX={mouseX} mouseY={mouseY} animate={floatY} />
        <FloatingIcon icon={<FaDatabase />} color="text-yellow-400" style={{ bottom: "18%", left: "20%" }} mouseX={mouseX} mouseY={mouseY} animate={floatY} />
        <FloatingIcon icon={<FaRobot />} color="text-purple-400" style={{ bottom: "22%", right: "22%" }} mouseX={mouseX} mouseY={mouseY} animate={floatY} />
        <FloatingIcon icon={<FaTools />} color="text-gray-300" style={{ top: "45%", right: "8%" }} mouseX={mouseX} mouseY={mouseY} animate={floatY} />
      </header>

      {/* SECTIONS */}
      <main>
        <About />
        <Experience />
        <Projects />
        <Hire />
        <Footer />
      </main>
    </div>
  );
}

/* SOCIAL BUTTON COMPONENT */
function SocialButton({ url, icon, colorClass, label }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`text-white text-3xl p-3 rounded-full shadow-lg hover:scale-110 transition-transform ${colorClass}`}
    >
      {icon}
    </a>
  );
}

/* FLOATING ICONS */
function FloatingIcon({ icon, color, style, mouseX, mouseY, animate }) {
  const x = useTransform(mouseX, (v) => v * 0.02);
  const y = useTransform(mouseY, (v) => v * 0.02);

  return (
    <motion.div
      aria-hidden="true"
      animate={animate}
      style={{ ...style, x, y }}
      className={`absolute text-4xl sm:text-5xl md:text-6xl ${color} opacity-60 drop-shadow-[0_0_30px_rgba(255,255,255,0.35)] pointer-events-none`}
    >
      {icon}
    </motion.div>
  );
}
