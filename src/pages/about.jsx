import React from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaDatabase,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiJavascript,
} from "react-icons/si";

const icons = [
    FaReact,
    SiNextdotjs,
    SiJavascript,
    SiTailwindcss,
    FaNodeJs,
    FaDatabase,
];

export default function About() {
    return (
        <section
            id="about"
            aria-labelledby="about-heading"
            className="relative min-h-screen bg-gray-950 text-white flex items-center justify-center px-6 overflow-hidden"
        >
            <div className="max-w-3xl text-center relative z-10">

                {/* Heading */}
                <h2
                    id="about-heading"
                    className="text-3xl md:text-4xl font-semibold mb-8"
                >
                    About Me
                </h2>

                {/* Content */}
                <div className="space-y-6 text-gray-400 text-sm md:text-base leading-relaxed">
                    <p>
                        My name is <span className="text-white">Ayush Gupta</span>, and I am a
                        frontend-focused developer passionate about building fast,
                        accessible, and visually polished web applications.
                    </p>

                    <p>
                        I specialize in crafting smooth user interfaces using
                        <span className="text-white"> React</span>,
                        <span className="text-white"> Tailwind CSS</span>, and modern
                        JavaScript, bringing interfaces to life with subtle animations and
                        clean layouts.
                    </p>

                    <p>
                        Alongside frontend development, I have experience working with
                        backend technologies like Node.js and databases, allowing me to
                        understand products end-to-end — from UI to logic.
                    </p>

                    <p>
                        Outside of work, I enjoy photography, learning new tools, and
                        constantly improving my craft. I’m always open to opportunities
                        where I can grow and create meaningful digital experiences.
                    </p>
                </div>

                {/* Cinematic Tech Marquee */}
                <div className="relative mt-16 w-full overflow-hidden">
                    {/* fade edges */}
                    <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-gray-950 to-transparent z-10" />
                    <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-gray-950 to-transparent z-10" />

                    <motion.div
                        className="flex gap-12 w-max"
                        animate={{ x: ["15%", "-40%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 20,
                            ease: "anticipate",
                        }}
                    >
                        {[...icons, ...icons].map((Icon, index) => (
                            <Icon
                                key={index}
                                aria-hidden="true"
                                className="text-3xl md:text-4xl text-white opacity-60 hover:opacity-100 hover:text-yellow-400 transition-all duration-300"
                            />
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* subtle background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_60%)]" />
        </section>
    );
}
