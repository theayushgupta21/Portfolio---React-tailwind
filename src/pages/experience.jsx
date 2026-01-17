import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        company: "Impact Academies, United Kingdom",
        role: "IT Tutor",
        duration: "2024 - Present",
        description:
            "Teaching Scratch, Java, JavaScript, Python, HTML, CSS, Motion Design, AI & ML. Helping students build real-world projects.",
        skills: ["Scratch", "Java", "JavaScript", "Python", "HTML", "CSS", "AI", "ML"],
    },
    {
        company: "Dragon Sino Group, United Kingdom",
        role: "Full Stack Developer",
        duration: "2024 - 2025",
        description:
            "Built fully functional MERN stack applications with responsive UI, API integrations, and scalable backend architecture.",
        skills: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Node.js",
            "Express",
            "MongoDB",
            "MySQL",
        ],
    },
    {
        company: "Octane Apps, Remote",
        role: "Frontend Developer (React)",
        duration: "2023 - 2024",
        description:
            "Developed Next.js dashboards and frontend systems focusing on performance, SEO, and smooth UX.",
        skills: ["Next.js", "React", "SCSS", "SEO", "API Integration"],
    },
];

// animation variants
const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
};

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative min-h-screen bg-gray-950 text-white px-6 py-32"
        >
            {/* Heading */}
            <div className="text-center mb-20">
                <h2 className="text-4xl font-bold">My Experience</h2>
                <p className="text-gray-400 mt-3">
                    Professional experience accumulated over the years
                </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
                {/* Timeline Line */}
                <motion.div
                    animate={{ opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute left-4 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-yellow-400/50 to-transparent"
                />

                {/* Experience Cards */}
                <div className="space-y-16 pl-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.3 }}
                            className="
                relative bg-gray-900/70 backdrop-blur-xl
                border border-white/10 rounded-2xl p-6
                shadow-xl hover:border-yellow-400/40
              "
                        >
                            {/* Timeline Dot */}
                            <span className="absolute -left-[42px] top-6 w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_12px_#facc15]" />

                            <h3 className="text-lg font-semibold">{exp.company}</h3>
                            <p className="text-yellow-400 text-sm mt-1">{exp.role}</p>
                            <p className="text-gray-400 text-xs mt-1">{exp.duration}</p>

                            <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                                {exp.description}
                            </p>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2 mt-5">
                                {exp.skills.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-3 py-1 rounded-full bg-black/50 border border-white/10"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
