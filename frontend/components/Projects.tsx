"use client";

import React, { useRef } from "react";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";

import type { IconType } from "react-icons";

import {
    FaReact,
    FaNodeJs,
    FaGoogle,
    FaGithub,
    FaArrowUpRightFromSquare,
} from "react-icons/fa6";

import {
    SiNextdotjs,
    SiMongodb,
    SiSocketdotio,
    SiRazorpay,
} from "react-icons/si";


// ============================================================
// TYPES
// ============================================================

interface Project {
    number: string;
    title: string;
    description: string;
    category: string;
    technologies: string[];
    icons: IconType[];

    // Project Links
    github: string;
    live: string;
}


// ============================================================
// PROJECT DATA
// ============================================================

const projects: Project[] = [
    {
        number: "01",
        title: "Oxywise.AI",

        category:
            "AI • HEALTHCARE • REAL-TIME",

        description:
            "AI-powered healthcare platform combining disease detection, LLM intelligence, OpenAI agents and real-time communication using Socket.io.",

        technologies: [
            "Socket.io",
            "MERN Stack",
            "Next.js",
            "LLM",
            "OpenAI APIs",
            "AI Agent",
        ],

        icons: [
            SiNextdotjs,
            SiMongodb,
            SiSocketdotio,
        ],

        github:
            "https://github.com/YOUR_USERNAME/oxywise-ai",

        live:
            "https://oxywise-ai.vercel.app",
    },

    {
        number: "02",
        title: "Adoptify",

        category:
            "AI • FULL STACK • PAYMENTS",

        description:
            "A modern adoption platform with Google authentication, AI integration, MERN architecture, Razorpay payments and OpenAI API capabilities.",

        technologies: [
            "Google Auth",
            "MERN Stack",
            "AI Integration",
            "Razorpay",
            "OpenAI API",
        ],

        icons: [
            FaReact,
            FaNodeJs,
            FaGoogle,
            SiRazorpay,
        ],

        github:
            "https://github.com/YOUR_USERNAME/adoptify",

        live:
            "https://adoptify.vercel.app",
    },

    {
        number: "03",
        title: "GreenGift.AI",

        category:
            "AI • E-COMMERCE • WEB & APP",

        description:
            "AI-powered green home decor shopping experience built for web and app with modern full-stack architecture, RAG, LLM capabilities and secure payments.",

        technologies: [
            "Next.js",
            "MERN Stack",
            "RAG System",
            "LLM",
            "REST APIs",
            "Razorpay",
        ],

        icons: [
            SiNextdotjs,
            SiMongodb,
            SiRazorpay,
        ],

        github:
            "https://github.com/YOUR_USERNAME/greengift-ai",

        live:
            "https://greengift-ai.vercel.app",
    },
];


// ============================================================
// PROJECT CARD
// ============================================================

function ProjectCard({
    project,
    index,
}: {
    project: Project;
    index: number;
}) {
    const cardRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // ========================================================
    // 3D ROTATION
    // ========================================================

    const rotateX = useSpring(
        useTransform(
            mouseY,
            [-0.5, 0.5],
            [4, -4]
        ),
        {
            stiffness: 160,
            damping: 24,
        }
    );

    const rotateY = useSpring(
        useTransform(
            mouseX,
            [-0.5, 0.5],
            [-4, 4]
        ),
        {
            stiffness: 160,
            damping: 24,
        }
    );


    // ========================================================
    // MOUSE MOVE
    // ========================================================

    const handleMouseMove = (
        event: React.MouseEvent<HTMLDivElement>
    ) => {
        if (!cardRef.current) return;

        const rect =
            cardRef.current.getBoundingClientRect();

        const x =
            (event.clientX - rect.left) /
            rect.width -
            0.5;

        const y =
            (event.clientY - rect.top) /
            rect.height -
            0.5;

        mouseX.set(x);
        mouseY.set(y);
    };


    // ========================================================
    // MOUSE LEAVE
    // ========================================================

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };


    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 55,
                scale: 0.96,
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
                duration: 0.75,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full"
            style={{
                perspective: 1200,
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
                    y: -7,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeOut",
                }}
                className="
                    group
                    relative
                    isolate
                    flex
                    h-full
                    min-h-[410px]
                    flex-col
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-black/[0.07]
                    bg-white/55
                    p-6
                    shadow-[0_8px_35px_rgba(0,0,0,0.045)]
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:border-green-500/20
                    hover:bg-white/70
                    hover:shadow-[0_20px_55px_rgba(34,197,94,0.10)]
                    sm:p-7
                "
            >

                {/* =================================================
                    GLASS HIGHLIGHT
                ================================================= */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-x-0
                        top-0
                        h-32
                        bg-gradient-to-b
                        from-white/80
                        to-transparent
                    "
                />


                {/* =================================================
                    GREEN GLOW
                ================================================= */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-6
                        -top-6
                        h-24
                        w-24
                        rounded-full
                        bg-green-300/10
                        blur-3xl
                        transition-all
                        duration-700
                        group-hover:bg-green-300/20
                    "
                />


                {/* =================================================
                    SCRIBBLE
                ================================================= */}

                <svg
                    viewBox="0 0 180 120"
                    fill="none"
                    className="
                        pointer-events-none
                        absolute
                        -right-5
                        top-3
                        h-28
                        w-40
                        text-green-500/[0.12]
                        transition-all
                        duration-700
                        group-hover:rotate-3
                        group-hover:text-green-500/[0.22]
                    "
                >

                    <motion.path
                        d="
                            M15 65
                            C25 25 72 8 119 24
                            C157 37 171 67 147 89
                            C122 112 70 111 39 88
                            C11 68 21 38 52 27
                            C84 16 127 26 145 51
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
                            duration: 1.4,
                            delay:
                                0.25 +
                                index * 0.1,
                            ease: "easeInOut",
                        }}
                    />

                    <motion.path
                        d="
                            M43 77
                            C58 50 88 39 116 46
                            C133 50 138 61 128 70
                            C115 82 88 83 69 75
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
                            duration: 1,
                            delay:
                                0.65 +
                                index * 0.1,
                            ease: "easeInOut",
                        }}
                    />

                </svg>


                {/* =================================================
                    CONTENT
                ================================================= */}

                <div
                    className="
                        relative
                        z-10
                        flex
                        h-full
                        flex-col
                    "
                    style={{
                        transform:
                            "translateZ(20px)",
                    }}
                >

                    {/* =================================================
                        TOP
                    ================================================= */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                        "
                    >

                        <span
                            className="
                                text-[11px]
                                font-semibold
                                tracking-[0.28em]
                                text-green-500
                            "
                        >
                            {project.number}
                        </span>


                        <span
                            className="
                                rounded-full
                                border
                                border-gray-200/80
                                bg-white/60
                                px-3
                                py-1.5
                                text-[9px]
                                font-medium
                                tracking-[0.15em]
                                text-gray-400
                                backdrop-blur-md
                            "
                        >
                            PROJECT
                        </span>

                    </div>


                    {/* =================================================
                        CATEGORY
                    ================================================= */}

                    <p
                        className="
                            mt-6
                            text-[9px]
                            font-semibold
                            tracking-[0.22em]
                            text-gray-400
                        "
                    >
                        {project.category}
                    </p>


                    {/* =================================================
                        TITLE
                    ================================================= */}

                    <h3
                        className="
                            mt-2
                            text-2xl
                            font-bold
                            tracking-tight
                            text-gray-900
                            transition-colors
                            duration-300
                            group-hover:text-green-600
                            sm:text-[28px]
                        "
                    >
                        {project.title}
                    </h3>


                    {/* =================================================
                        DESCRIPTION
                    ================================================= */}

                    <p
                        className="
                            mt-4
                            max-w-xl
                            text-sm
                            leading-6
                            text-gray-500
                        "
                    >
                        {project.description}
                    </p>


                    {/* =================================================
                        DIVIDER
                    ================================================= */}

                    <div
                        className="
                            my-6
                            h-px
                            w-full
                            bg-gradient-to-r
                            from-gray-200
                            via-gray-100
                            to-transparent
                        "
                    />


                    {/* =================================================
                        TECHNOLOGY ICONS
                    ================================================= */}

                    <div
                        className="
                            flex
                            flex-wrap
                            gap-2
                        "
                    >

                        {project.icons.map(
                            (Icon, iconIndex) => (
                                <motion.div
                                    key={iconIndex}
                                    whileHover={{
                                        y: -3,
                                        scale: 1.08,
                                    }}
                                    transition={{
                                        duration: 0.2,
                                    }}
                                    className="
                                        flex
                                        h-9
                                        w-9
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border
                                        border-gray-200/80
                                        bg-white/70
                                        text-gray-500
                                        shadow-sm
                                        backdrop-blur-md
                                        transition-all
                                        duration-300
                                        hover:border-green-300
                                        hover:text-green-500
                                    "
                                >
                                    <Icon
                                        className="
                                            text-[17px]
                                        "
                                    />
                                </motion.div>
                            )
                        )}

                    </div>


                    {/* =================================================
                        TECHNOLOGY TAGS
                    ================================================= */}

                    <div
                        className="
                            mt-5
                            flex
                            flex-wrap
                            gap-2
                        "
                    >

                        {project.technologies.map(
                            (technology) => (
                                <span
                                    key={technology}
                                    className="
                                        rounded-full
                                        border
                                        border-gray-200/80
                                        bg-white/50
                                        px-2.5
                                        py-1
                                        text-[10px]
                                        font-medium
                                        text-gray-500
                                        backdrop-blur-sm
                                        transition-all
                                        duration-300
                                        group-hover:border-green-200
                                        group-hover:text-gray-600
                                    "
                                >
                                    {technology}
                                </span>
                            )
                        )}

                    </div>


                    {/* =================================================
                        BOTTOM ACTIONS
                    ================================================= */}

                    <div
                        className="
                            mt-auto
                            flex
                            items-center
                            justify-between
                            gap-4
                            pt-7
                        "
                    >

                        {/* Project Type */}

                        <span
                            className="
                                hidden
                                text-[9px]
                                font-medium
                                uppercase
                                tracking-[0.2em]
                                text-gray-400
                                sm:block
                            "
                        >
                            Full Stack • AI
                        </span>


                        {/* Buttons */}

                        <div
                            className="
                                ml-auto
                                flex
                                items-center
                                gap-2
                            "
                        >

                            {/* =================================================
                                GITHUB
                            ================================================= */}

                            <motion.a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`View ${project.title} source code`}
                                whileHover={{
                                    y: -3,
                                    scale: 1.04,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                className="
                                    group/github
                                    flex
                                    h-10
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-gray-200
                                    bg-white/70
                                    px-3
                                    text-gray-500
                                    shadow-sm
                                    backdrop-blur-md
                                    transition-all
                                    duration-300
                                    hover:border-gray-300
                                    hover:bg-gray-900
                                    hover:text-white
                                    hover:shadow-lg
                                "
                            >

                                <FaGithub
                                    className="
                                        text-base
                                        transition-transform
                                        duration-300
                                        group-hover/github:rotate-6
                                    "
                                />

                                <span
                                    className="
                                        hidden
                                        text-[10px]
                                        font-semibold
                                        sm:block
                                    "
                                >
                                    Code
                                </span>

                            </motion.a>


                            {/* =================================================
                                LIVE DEMO
                            ================================================= */}

                            <motion.a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Open ${project.title} live demo`}
                                whileHover={{
                                    y: -3,
                                    scale: 1.04,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                className="
                                    group/live
                                    flex
                                    h-10
                                    items-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-green-200
                                    bg-green-50/70
                                    px-3
                                    text-green-600
                                    shadow-sm
                                    backdrop-blur-md
                                    transition-all
                                    duration-300
                                    hover:border-green-400
                                    hover:bg-green-500
                                    hover:text-white
                                    hover:shadow-[0_10px_25px_rgba(34,197,94,0.20)]
                                "
                            >

                                <span
                                    className="
                                        text-[10px]
                                        font-semibold
                                    "
                                >
                                    Live
                                </span>

                                <FaArrowUpRightFromSquare
                                    className="
                                        text-[11px]
                                        transition-transform
                                        duration-300
                                        group-hover/live:translate-x-0.5
                                        group-hover/live:-translate-y-0.5
                                    "
                                />

                            </motion.a>

                        </div>

                    </div>

                </div>


                {/* =================================================
                    BOTTOM SCRIBBLE ACCENT
                ================================================= */}

                <motion.div
                    initial={{
                        width: 0,
                    }}
                    whileInView={{
                        width: "30%",
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.8,
                        delay:
                            0.7 +
                            index * 0.1,
                    }}
                    className="
                        absolute
                        bottom-0
                        left-1/2
                        h-[2px]
                        -translate-x-1/2
                        rounded-full
                        bg-green-400/70
                    "
                />

            </motion.article>

        </motion.div>
    );
}


// ============================================================
// PROJECTS SECTION
// ============================================================

export default function Projects() {

    return (
        <section
            id="projects"
            className="
                relative
                overflow-hidden
                bg-white
                py-16
                sm:py-20
                lg:py-24
            "
        >

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-[-150px]
                    top-[20%]
                    h-[300px]
                    w-[300px]
                    rounded-full
                    bg-green-200/10
                    blur-[100px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-150px]
                    bottom-[10%]
                    h-[300px]
                    w-[300px]
                    rounded-full
                    bg-emerald-200/10
                    blur-[100px]
                "
            />


            <div
                className="
                    relative
                    mx-auto
                    max-w-7xl
                    px-6
                    sm:px-8
                    lg:px-10
                "
            >

                {/* =================================================
                    TOP LINE
                ================================================= */}

                <motion.div
                    initial={{
                        scaleX: 0,
                    }}
                    whileInView={{
                        scaleX: 1,
                    }}
                    viewport={{
                        once: true,
                        amount: 0.5,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: "easeInOut",
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


                {/* =================================================
                    HEADING
                ================================================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 35,
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
                    className="
                        mb-12
                        text-center
                    "
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
                        Selected Work
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
                        Featured{" "}

                        <span
                            className="
                                text-green-500
                            "
                        >
                            Projects
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
                        A selection of applications built with
                        modern full-stack technologies and AI.
                    </p>

                </motion.div>


                {/* =================================================
                    PROJECT GRID
                ================================================= */}

                <div
                    className="
                        grid
                        grid-cols-1
                        gap-6
                        md:grid-cols-2
                        lg:grid-cols-3
                        lg:gap-7
                    "
                >

                    {projects.map(
                        (project, index) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                index={index}
                            />
                        )
                    )}

                </div>

            </div>

        </section>
    );
}