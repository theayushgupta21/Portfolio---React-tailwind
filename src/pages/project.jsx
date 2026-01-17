import React from "react";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Calm Llama – AI Chatbot",
        description:
            "A modern web platform enabling users to discover and book premium wellness experiences with secure payments and real-time availability.",
        image: "/projects/calm-llama.png",
        tech: [
            "TypeScript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Stripe",
            "Supabase",
        ],
    },
    {
        title: "Mini Otio – AI Research Assistant",
        description:
            "AI-powered research assistant combining real-time web search with structured, intelligent responses and streaming capabilities.",
        image: "/projects/mini-otio.png",
        tech: [
            "Next.js 15",
            "TypeScript",
            "Shadcn UI",
            "Zustand",
            "OpenRouter",
            "AI SDK",
        ],
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative min-h-screen bg-gray-950 px-6 py-40 my-  text-white overflow-hidden"
        >
            {/* Animated Background */}
            <motion.div
                animate={{ opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-purple-500/10 blur-3xl"
            />

            {/* Section Heading */}
            <div className="relative z-10 text-center mb-24">
                <h2 className="text-4xl font-bold">My Projects</h2>
                <p className="text-gray-400 mt-3">
                    Projects I worked on. Each containing its own case study.
                </p>
            </div>

            {/* Projects Grid */}
            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
                {projects.map((project, index) => (
                    <motion.article
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.15 }}
                        whileHover={{ y: -8 }}
                        className="group relative rounded-2xl p-[1.5px]"
                    >
                        {/* Animated Border */}
                        <motion.div
                            animate={{
                                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500 bg-[length:300%_300%]"
                        />

                        {/* Card Content */}
                        <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                            {/* Image */}
                            <div className="overflow-hidden rounded-xl mb-6">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                                    loading="lazy"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-semibold mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tech.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-3 py-1 rounded-full bg-black/50 border border-white/10"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <button className="inline-flex items-center gap-2 text-sm font-medium text-yellow-400 hover:text-yellow-300 transition">
                                Preview →
                            </button>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
