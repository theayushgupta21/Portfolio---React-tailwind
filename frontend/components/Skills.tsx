import React from "react";
import type { IconType } from "react-icons";

import {
    FaJs,
    FaJava,
    FaGithub,
    FaNodeJs,
    FaReact,
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
            icons: [SiReact, SiNextdotjs, FaNodeJs, SiExpress, SiTailwindcss],
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
            icons: [SiMongodb, SiPostgresql, SiVercel, SiNetlify, SiRender, SiRailway],
        },
    ];

    return (
        <section id="skills" className="bg-white py-16 sm:py-20 ">
            <div className="mx-auto max-w-7xl px-6">

                {/* Top Line */}
                <div className="mx-auto mb-24 w-full border-t-2 border-gray-400 -translate-y-55 " />

                {/* Heading */}
                <div className="mb-9 text-center -translate-y-70 ">
                    <h2 className=" mx-auto
    w-fit
    rounded-lg
    
    border-gray-300
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
    hover:shadow-[0_0_8px_rgba(249,115,22,0.8),0_0_20px_rgba(249,115,22,0.5)]">
                        Technical Skills
                    </h2>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 -translate-x-8 -translate-y-65 h-30 w-325  ">
                    {skillCategories.map((category) => {

                        return (
                            <div
                                key={category.title}
                                className="
                  min-h-50
                  rounded-xl
                  border-3
                  border-gray-400
                  bg-gray-100
                  p-5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-md
                "
                            >
                                {/* Icon */}
                                <div className="mb-4 flex flex-wrap gap-3">
                                    {category.icons.map((Icon, index) => (
                                        <div
                                            key={index}
                                            className="flex border h-8 w-8 rounded-lg items-center justify-center border-gray-300  bg-white text-sky-500 transition-all duration-300 hover:scale-100 hover:border-orange-400 hover:text-orange-500 hover:shadow-[0_0_6px_rgba(249,115,22,0.6)]">
                                            <Icon className="text-xl text-sky-500" />
                                        </div>
                                    ))}
                                </div>

                                {/* Title */}
                                < h3 className="mb-3 text-base font-semibold text-gray-900" >
                                    {category.title}
                                </h3>

                                {/* Skills */}
                                <p className="text-sm leading-6 text-gray-600">
                                    {category.skills}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}