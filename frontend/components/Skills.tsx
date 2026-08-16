import React from "react";
import { motion } from "framer-motion";
import type { IconType } from "react-icons";

import {
    FaJs,
    FaJava,
    FaGithub,
    FaNodeJs,
} from "react-icons/fa";

import {
    SiCplusplus,
    SiReact,
    SiNextdotjs,
    SiExpress,
    SiTailwindcss,
    SiMongodb,
    SiPostgresql,
    SiVercel,
    SiNetlify,
    SiRender,
    SiRailway,
    SiCursor,
} from "react-icons/si";

interface SkillCategory {
    title: string;
    skills: string;
    icons: IconType[];
}

export default function Skills(): React.JSX.Element {
    const skillCategories: SkillCategory[] = [
        {
            title: "Languages & Core CS",
            skills:
                "JavaScript, Java, C++, OOP, DBMS, Operating Systems, Computer Networks",
            icons: [FaJs, FaJava, SiCplusplus],
        },
        {
            title: "Frontend & Backend",
            skills:
                "React.js, Next.js, Node.js, Express.js, REST APIs, Tailwind CSS",
            icons: [
                SiReact,
                SiNextdotjs,
                FaNodeJs,
                SiExpress,
                SiTailwindcss,
            ],
        },
        {
            title: "AI & Developer Tools",
            skills:
                "Claude AI, Cursor, Antigravity, Codex, Git, GitHub",
            icons: [SiCursor, FaGithub],
        },
        {
            title: "Database & Deployment",
            skills:
                "MongoDB, PostgreSQL, Vercel, Netlify, Render, Railway",
            icons: [
                SiMongodb,
                SiPostgresql,
                SiVercel,
                SiNetlify,
                SiRender,
                SiRailway,
            ],
        },
    ];

    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-white py-16 sm:py-20"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Top Line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="mx-auto mb-24 w-full origin-center border-t-2 border-gray-400"
                />

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{
                        duration: 0.7,
                        ease: "easeOut",
                    }}
                    className="mb-12 text-center"
                >
                    <h2
                        className="
                            mx-auto
                            w-fit
                            rounded-lg
                            px-4
                            py-2
                            text-3xl
                            font-bold
                            tracking-tight
                            text-black
                            transition-all
                            duration-300
                            sm:text-4xl
                            hover:text-green-400
                            hover:shadow-[0_0_8px_rgba(249,115,22,0.8),0_0_20px_rgba(249,115,22,0.5)]
                        "
                    >
                        Technical Skills
                    </h2>
                </motion.div>

                {/* Skills */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                    {skillCategories.map((category, index) => {

                        const fromLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={category.title}

                                initial={{
                                    opacity: 0,
                                    x: fromLeft ? -120 : 120,
                                    scale: 0.9,
                                }}

                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                }}

                                viewport={{
                                    once: false,
                                    amount: 0.25,
                                }}

                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.12,
                                    ease: [0.22, 1, 0.36, 1],
                                }}

                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    transition: {
                                        duration: 0.25,
                                    },
                                }}

                                className="
                                    min-h-[200px]
                                    rounded-xl
                                    border-2
                                    border-gray-400
                                    bg-gray-100
                                    p-5
                                    shadow-sm
                                    transition-shadow
                                    duration-300
                                    hover:border-gray-500
                                    hover:shadow-xl
                                "
                            >

                                {/* Icons */}
                                <motion.div
                                    className="mb-5 flex flex-wrap gap-3"
                                >
                                    {category.icons.map((Icon, iconIndex) => (
                                        <motion.div
                                            key={iconIndex}

                                            initial={{
                                                opacity: 0,
                                                scale: 0,
                                            }}

                                            whileInView={{
                                                opacity: 1,
                                                scale: 1,
                                            }}

                                            viewport={{
                                                once: false,
                                                amount: 0.5,
                                            }}

                                            transition={{
                                                duration: 0.4,
                                                delay:
                                                    index * 0.12 +
                                                    iconIndex * 0.08,
                                                type: "spring",
                                                stiffness: 200,
                                            }}

                                            whileHover={{
                                                scale: 1.15,
                                                rotate: 5,
                                            }}

                                            className="
                                                flex
                                                h-9
                                                w-9
                                                items-center
                                                justify-center
                                                rounded-lg
                                                border
                                                border-gray-300
                                                bg-white
                                                text-sky-500
                                                shadow-sm
                                                transition-all
                                                duration-300
                                                hover:border-orange-400
                                                hover:text-orange-500
                                                hover:shadow-[0_0_8px_rgba(249,115,22,0.6)]
                                            "
                                        >
                                            <Icon className="text-xl" />
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Title */}
                                <h3 className="mb-3 text-base font-semibold text-gray-900">
                                    {category.title}
                                </h3>

                                {/* Skills */}
                                <p className="text-sm leading-6 text-gray-600">
                                    {category.skills}
                                </p>

                            </motion.div>
                        );
                    })}

                </div>
            </div>
        </section>
    );
}