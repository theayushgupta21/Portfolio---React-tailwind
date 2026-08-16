"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
    FaSearch,
    FaPenNib,
    FaLink,
    FaChartLine,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const skills = [
    { name: "Google Analytics", icon: FaChartLine },
    { name: "Keyword Research", icon: FaSearch },
    { name: "Content Writing", icon: FaPenNib },
    { name: "Backlink Building", icon: FaLink },
    { name: "Digital Marketing", icon: FaChartLine },
    { name: "Next.js", icon: SiNextdotjs },
];

function ExperienceCard() {
    const cardRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(
        useTransform(mouseY, [-0.5, 0.5], [5, -5]),
        {
            stiffness: 180,
            damping: 25,
        }
    );

    const rotateY = useSpring(
        useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
        {
            stiffness: 180,
            damping: 25,
        }
    );

    const glowX = useTransform(
        mouseX,
        [-0.5, 0.5],
        ["20%", "80%"]
    );

    const glowY = useTransform(
        mouseY,
        [-0.5, 0.5],
        ["20%", "80%"]
    );

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        if (!cardRef.current) return;

        const rect = cardRef.current.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) / rect.width - 0.5;

        const y =
            (event.clientY - rect.top) / rect.height - 0.5;

        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 70,
                scale: 0.95,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            viewport={{
                once: true,
                amount: 0.2,
            }}
            transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
            style={{
                perspective: 1400,
            }}
        >
            <motion.article
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                whileHover={{
                    y: -6,
                }}
                className="
                    group
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-gray-200/80
                    bg-white/60
                    shadow-[0_15px_60px_rgba(0,0,0,0.06)]
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    hover:border-green-300/60
                    hover:shadow-[0_25px_70px_rgba(34,197,94,0.12)]
                "
            >
                {/* Glass highlight */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        top-0
                        h-40
                        bg-gradient-to-b
                        from-white/90
                        via-white/30
                        to-transparent
                    "
                />

                {/* Background grid */}
                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        opacity-[0.025]
                        [background-image:linear-gradient(#111_1px,transparent_1px),linear-gradient(90deg,#111_1px,transparent_1px)]
                        [background-size:32px_32px]
                    "
                />

                {/* Mouse glow */}
                <motion.div
                    className="
                        pointer-events-none
                        absolute
                        h-72
                        w-72
                        rounded-full
                        bg-green-300/10
                        blur-3xl
                    "
                    style={{
                        left: glowX,
                        top: glowY,
                        x: "-50%",
                        y: "-50%",
                    }}
                />

                {/* Scribble */}
                <svg
                    viewBox="0 0 240 160"
                    fill="none"
                    className="
                        pointer-events-none
                        absolute
                        right-0
                        top-0
                        h-40
                        w-56
                        text-green-500/10
                        transition-all
                        duration-700
                        group-hover:scale-110
                        group-hover:text-green-500/20
                    "
                >
                    <motion.path
                        d="
                            M20 94
                            C31 45 81 17 133 30
                            C180 42 217 77 193 108
                            C169 139 103 148 54 119
                            C14 95 24 55 61 40
                            C105 22 166 39 193 71
                        "
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        initial={{
                            pathLength: 0,
                        }}
                        whileInView={{
                            pathLength: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 1.6,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.path
                        d="
                            M53 109
                            C72 76 108 61 144 68
                            C166 72 176 88 161 101
                            C144 116 105 118 79 105
                        "
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        initial={{
                            pathLength: 0,
                        }}
                        whileInView={{
                            pathLength: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 1.2,
                            delay: 0.4,
                            ease: "easeInOut",
                        }}
                    />
                </svg>

                {/* Content */}
                <div
                    className="relative z-10 p-6 sm:p-8 lg:p-9"
                    style={{
                        transform: "translateZ(30px)",
                    }}
                >
                    {/* Header */}
                    <div
                        className="
                            flex
                            flex-col
                            gap-5
                            sm:flex-row
                            sm:items-start
                            sm:justify-between
                        "
                    >
                        <div className="flex items-start gap-4">
                            <motion.div
                                whileHover={{
                                    scale: 1.08,
                                    rotate: -5,
                                }}
                                className="
                                    flex
                                    h-14
                                    w-14
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-2xl
                                    border
                                    border-green-200
                                    bg-green-50
                                    text-green-500
                                    shadow-sm
                                "
                            >
                                <FaChartLine className="text-xl" />
                            </motion.div>

                            <div>
                                <p
                                    className="
                                        text-[10px]
                                        font-semibold
                                        uppercase
                                        tracking-[0.3em]
                                        text-green-500
                                    "
                                >
                                    Experience 01
                                </p>

                                <h3
                                    className="
                                        mt-1
                                        text-2xl
                                        font-bold
                                        tracking-tight
                                        text-gray-900
                                        sm:text-3xl
                                    "
                                >
                                    Robral Technologies
                                </h3>

                                <p className="mt-1 text-sm font-medium text-gray-500">
                                    SEO Intern
                                </p>
                            </div>
                        </div>

                        <div
                            className="
                                w-fit
                                rounded-full
                                border
                                border-green-200
                                bg-green-50/70
                                px-4
                                py-2
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.2em]
                                text-green-600
                            "
                        >
                            Professional Experience
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="my-8 flex items-center gap-3">
                        <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />

                        <div
                            className="
                                h-2
                                w-2
                                rounded-full
                                bg-green-500
                                shadow-[0_0_12px_rgba(34,197,94,0.5)]
                            "
                        />

                        <div className="h-px flex-1 bg-gradient-to-l from-gray-200 to-transparent" />
                    </div>

                    {/* Description */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 15,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2,
                        }}
                    >
                        <p className="text-sm leading-7 text-gray-500 sm:text-base">
                            Worked as an SEO Intern at{" "}
                            <span className="font-semibold text-gray-800">
                                Robral Technologies
                            </span>
                            , gaining practical experience in search
                            engine optimization, content strategy,
                            backlink building and digital marketing.
                        </p>

                        <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
                            Alongside SEO, I developed a practical
                            understanding of digital marketing workflows
                            and worked with{" "}
                            <span className="font-semibold text-gray-800">
                                Next.js
                            </span>{" "}
                            while independently exploring modern
                            development and optimization practices.
                        </p>
                    </motion.div>

                    {/* Skills */}
                    <div className="mt-8">
                        <p
                            className="
                                mb-4
                                text-[10px]
                                font-semibold
                                uppercase
                                tracking-[0.28em]
                                text-gray-400
                            "
                        >
                            Skills & Tools
                        </p>

                        <div className="flex flex-wrap gap-2.5">
                            {skills.map((skill, index) => {
                                const Icon = skill.icon;

                                return (
                                    <motion.div
                                        key={skill.name}
                                        initial={{
                                            opacity: 0,
                                            y: 12,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                        }}
                                        transition={{
                                            duration: 0.35,
                                            delay: 0.25 + index * 0.06,
                                        }}
                                        whileHover={{
                                            y: -3,
                                            scale: 1.04,
                                        }}
                                        className="
                                            flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            border
                                            border-gray-200
                                            bg-white/70
                                            px-3
                                            py-2
                                            text-xs
                                            font-medium
                                            text-gray-600
                                            shadow-sm
                                            backdrop-blur-md
                                            transition-all
                                            duration-300
                                            hover:border-green-300
                                            hover:bg-green-50
                                            hover:text-green-600
                                        "
                                    >
                                        <Icon className="text-sm" />
                                        <span>{skill.name}</span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Three Areas */}
                    <div
                        className="
                            mt-8
                            grid
                            grid-cols-1
                            gap-3
                            sm:grid-cols-3
                        "
                    >
                        <motion.div
                            whileHover={{ y: -4 }}
                            className="
                                rounded-2xl
                                border
                                border-gray-200/80
                                bg-gray-50/60
                                p-4
                                transition-all
                                duration-300
                                hover:border-green-200
                                hover:bg-green-50/40
                            "
                        >
                            <FaSearch className="text-green-500" />

                            <h4 className="mt-3 text-sm font-semibold text-gray-800">
                                SEO
                            </h4>

                            <p className="mt-1.5 text-xs leading-5 text-gray-500">
                                Keyword research, optimization and
                                organic search practices.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -4 }}
                            className="
                                rounded-2xl
                                border
                                border-gray-200/80
                                bg-gray-50/60
                                p-4
                                transition-all
                                duration-300
                                hover:border-green-200
                                hover:bg-green-50/40
                            "
                        >
                            <FaPenNib className="text-green-500" />

                            <h4 className="mt-3 text-sm font-semibold text-gray-800">
                                Content
                            </h4>

                            <p className="mt-1.5 text-xs leading-5 text-gray-500">
                                Content writing and content-focused
                                SEO practices.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -4 }}
                            className="
                                rounded-2xl
                                border
                                border-gray-200/80
                                bg-gray-50/60
                                p-4
                                transition-all
                                duration-300
                                hover:border-green-200
                                hover:bg-green-50/40
                            "
                        >
                            <FaChartLine className="text-green-500" />

                            <h4 className="mt-3 text-sm font-semibold text-gray-800">
                                Digital Marketing
                            </h4>

                            <p className="mt-1.5 text-xs leading-5 text-gray-500">
                                Practical understanding of digital
                                marketing and online growth strategies.
                            </p>
                        </motion.div>
                    </div>

                    {/* Footer */}
                    <div className="mt-8 flex items-center gap-3">
                        <span
                            className="
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.25em]
                                text-gray-400
                            "
                        >
                            Learn
                        </span>

                        <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />

                        <span
                            className="
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.25em]
                                text-green-500
                            "
                        >
                            Build
                        </span>

                        <div className="h-px flex-1 bg-gradient-to-l from-gray-200 to-transparent" />

                        <span
                            className="
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.25em]
                                text-gray-400
                            "
                        >
                            Grow
                        </span>
                    </div>
                </div>

                {/* Bottom accent */}
                <motion.div
                    initial={{
                        width: 0,
                    }}
                    whileInView={{
                        width: "18%",
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.5,
                    }}
                    className="
                        absolute
                        bottom-0
                        left-1/2
                        h-[2px]
                        -translate-x-1/2
                        rounded-full
                        bg-green-400
                    "
                />
            </motion.article>
        </motion.div>
    );
}

export default function Experience() {
    return (
        <section
            id="experience"
            className="
                relative
                overflow-hidden
                bg-white
                py-16
                sm:py-20
                lg:py-24
            "
        >
            <div className="mx-auto max-w-7xl px-6 sm:px-8">
                {/* Top line */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{
                        once: true,
                        amount: 0.5,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="
                        mx-auto
                        mb-20
                        h-px
                        w-full
                        origin-center
                        bg-gradient-to-r
                        from-transparent
                        via-gray-300
                        to-transparent
                    "
                />

                {/* Heading */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.5,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mb-12 text-center"
                >
                    <p
                        className="
                            mb-2
                            text-xs
                            font-semibold
                            uppercase
                            tracking-[0.3em]
                            text-green-500
                        "
                    >
                        My Journey
                    </p>

                    <h2
                        className="
                            text-3xl
                            font-bold
                            tracking-tight
                            text-black
                            sm:text-4xl
                            lg:text-5xl
                        "
                    >
                        Work{" "}
                        <span className="text-green-500">
                            Experience
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-4
                            max-w-2xl
                            text-sm
                            leading-6
                            text-gray-500
                            sm:text-base
                        "
                    >
                        Practical experience across SEO,
                        digital marketing and modern web development.
                    </p>
                </motion.div>

                {/* Experience */}
                <ExperienceCard />
            </div>
        </section>
    );
}