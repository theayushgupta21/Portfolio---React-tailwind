"use client";

import React from "react";
import { motion } from "framer-motion";

import { MdWavingHand } from "react-icons/md";
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa6";

import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";

import image from "@/public/Profileimage.png";

export default function Home() {
    const socialLinks = [
        {
            name: "GitHub",
            icon: FaGithub,
            href: "https://github.com/",
        },
        {
            name: "LinkedIn",
            icon: FaLinkedinIn,
            href: "https://www.linkedin.com/",
        },
        {
            name: "Instagram",
            icon: FaInstagram,
            href: "https://www.instagram.com/",
        },
    ];

    return (
        <div className="min-h-screen overflow-x-hidden bg-white">
            <Navbar />

            {/* =========================================================
                HERO SECTION
            ========================================================== */}

            <section
                id="home"
                className="
                    relative
                    min-h-screen
                    overflow-hidden
                    bg-white
                    px-5
                    pb-16
                    pt-28
                    sm:px-8
                    sm:pb-20
                    sm:pt-32
                    md:px-10
                    lg:px-16
                    lg:pb-24
                    lg:pt-36
                    xl:px-20
                "
            >
                {/* =====================================================
                    BACKGROUND DECORATION
                ====================================================== */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -left-32
                        top-20
                        h-72
                        w-72
                        rounded-full
                        bg-green-300/10
                        blur-[100px]
                        sm:h-96
                        sm:w-96
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        -right-32
                        bottom-10
                        h-72
                        w-72
                        rounded-full
                        bg-green-200/10
                        blur-[100px]
                        sm:h-96
                        sm:w-96
                    "
                />

                {/* Subtle grid */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        opacity-[0.025]
                        [background-image:linear-gradient(#111_1px,transparent_1px),linear-gradient(90deg,#111_1px,transparent_1px)]
                        [background-size:40px_40px]
                    "
                />

                {/* =====================================================
                    MAIN CONTAINER
                ====================================================== */}

                <div
                    className="
                        relative
                        z-10
                        mx-auto
                        flex
                        min-h-[calc(100vh-8rem)]
                        max-w-7xl
                        flex-col
                        justify-center
                    "
                >
                    <div
                        className="
                            grid
                            items-center
                            gap-12
                            lg:grid-cols-[1.05fr_0.95fr]
                            lg:gap-8
                            xl:gap-16
                        "
                    >
                        {/* =================================================
                            LEFT CONTENT
                        ================================================== */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -70,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                order-2
                                text-center
                                lg:order-1
                                lg:text-left
                            "
                        >
                            {/* Greeting */}

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
                                    duration: 0.5,
                                    delay: 0.1,
                                }}
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    lg:justify-start
                                "
                            >
                                <span
                                    className="
                                        font-dyna-puff
                                        text-base
                                        text-gray-800
                                        sm:text-lg
                                    "
                                >
                                    Hey
                                </span>

                                <motion.span
                                    animate={{
                                        rotate: [0, 18, -8, 18, 0],
                                    }}
                                    transition={{
                                        duration: 1.8,
                                        repeat: Infinity,
                                        repeatDelay: 2,
                                    }}
                                    className="inline-flex origin-bottom"
                                >
                                    <MdWavingHand
                                        className="
                                            text-xl
                                            text-green-500
                                            sm:text-2xl
                                        "
                                    />
                                </motion.span>
                            </motion.div>

                            {/* Name */}

                            <motion.h1
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.15,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="
                                    mt-4
                                    font-playfair
                                    text-[2.7rem]
                                    font-bold
                                    leading-[0.95]
                                    tracking-tight
                                    text-black
                                    sm:text-5xl
                                    md:text-6xl
                                    lg:text-6xl
                                    xl:text-7xl
                                "
                            >
                                AYUSH{" "}
                                <span
                                    className="
                                        font-dyna-puff
                                        text-green-500
                                    "
                                >
                                    GUPTA
                                </span>
                            </motion.h1>

                            {/* Small line */}

                            <motion.div
                                initial={{
                                    width: 0,
                                }}
                                whileInView={{
                                    width: "100px",
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.4,
                                }}
                                className="
                                    mx-auto
                                    mt-6
                                    h-[2px]
                                    rounded-full
                                    bg-green-500
                                    lg:mx-0
                                "
                            />

                            {/* Roles */}

                            <motion.ul
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.3,
                                }}
                                className="
                                    mx-auto
                                    mt-7
                                    max-w-xl
                                    space-y-2
                                    font-playfair
                                    text-sm
                                    leading-6
                                    text-gray-700
                                    sm:text-base
                                    md:text-lg
                                    lg:mx-0
                                "
                            >
                                <li>
                                    <span className="mr-2 text-green-500">
                                        •
                                    </span>
                                    MERN Stack Developer
                                </li>

                                <li>
                                    <span className="mr-2 text-green-500">
                                        •
                                    </span>
                                    Content Creator
                                </li>

                                <li>
                                    <span className="mr-2 text-green-500">
                                        •
                                    </span>
                                    AI Explorer
                                </li>

                                <li>
                                    <span className="mr-2 text-green-500">
                                        •
                                    </span>
                                    Photographer & Video Editor
                                </li>

                                <li>
                                    <span className="mr-2 text-green-500">
                                        •
                                    </span>
                                    Motion Graphics Enthusiast
                                </li>

                                <li>
                                    <span className="mr-2 text-green-500">
                                        •
                                    </span>
                                    Open to Full-Time & Internship
                                    Opportunities
                                </li>
                            </motion.ul>

                            {/* Description */}

                            <motion.p
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.45,
                                }}
                                className="
                                    mx-auto
                                    mt-7
                                    max-w-xl
                                    font-dyna-puff
                                    text-sm
                                    leading-7
                                    text-gray-600
                                    sm:text-base
                                    lg:mx-0
                                    lg:text-lg
                                "
                            >
                                Always learning.{" "}
                                <span className="text-green-500">
                                    Always building.
                                </span>{" "}
                                Always exploring.
                            </motion.p>

                            {/* =================================================
                                BUTTONS
                            ================================================== */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.7,
                                    delay: 0.55,
                                }}
                                className="
                                    mt-8
                                    flex
                                    flex-col
                                    items-center
                                    justify-center
                                    gap-3
                                    sm:flex-row
                                    lg:justify-start
                                "
                            >
                                {/* Resume */}

                                <motion.button
                                    type="button"
                                    whileHover={{
                                        y: -3,
                                        scale: 1.02,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    onClick={() =>
                                        window.open(
                                            "/Ayush_Gupta_Resume.pdf",
                                            "_blank"
                                        )
                                    }
                                    className="
                                        w-full
                                        rounded-2xl
                                        bg-blue-700
                                        px-6
                                        py-3.5
                                        font-dyna-puff
                                        text-sm
                                        font-medium
                                        text-white
                                        shadow-lg
                                        transition-all
                                        duration-300
                                        hover:bg-green-500
                                        hover:shadow-[0_15px_35px_rgba(34,197,94,0.2)]
                                        sm:w-auto
                                    "
                                >
                                    Download Resume
                                </motion.button>

                                {/* Contact */}

                                <motion.a
                                    href="#contact"
                                    whileHover={{
                                        y: -3,
                                    }}
                                    whileTap={{
                                        scale: 0.97,
                                    }}
                                    className="
                                        w-full
                                        rounded-2xl
                                        border
                                        border-gray-200
                                        bg-white
                                        px-6
                                        py-3.5
                                        text-center
                                        font-dyna-puff
                                        text-sm
                                        font-medium
                                        text-gray-700
                                        shadow-sm
                                        transition-all
                                        duration-300
                                        hover:border-green-300
                                        hover:bg-green-50
                                        hover:text-green-600
                                        sm:w-auto
                                    "
                                >
                                    Let's Connect
                                </motion.a>
                            </motion.div>

                            {/* =================================================
                                SOCIAL LINKS
                            ================================================== */}

                            {/* <motion.div
                                initial={{
                                    opacity: 0,
                                }}
                                whileInView={{
                                    opacity: 1,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.7,
                                }}
                                className="
                                    mt-7
                                    flex
                                    justify-center
                                    gap-3
                                    lg:justify-start
                                "
                            >
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <motion.a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.name}
                                            whileHover={{
                                                y: -4,
                                                scale: 1.08,
                                            }}
                                            whileTap={{
                                                scale: 0.95,
                                            }}
                                            className="
                                                flex
                                                h-10
                                                w-10
                                                items-center
                                                justify-center
                                                rounded-xl
                                                border
                                                border-gray-200
                                                bg-white
                                                text-gray-500
                                                shadow-sm
                                                transition-all
                                                duration-300
                                                hover:border-green-300
                                                hover:bg-green-50
                                                hover:text-green-500
                                            "
                                        >
                                            <Icon className="text-sm" />
                                        </motion.a>
                                    );
                                })}
                            </motion.div> */}
                        </motion.div>

                        {/* =================================================
                            RIGHT PROFILE
                        ================================================== */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 70,
                                scale: 0.85,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}
                            transition={{
                                duration: 0.9,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="
                                order-1
                                flex
                                items-center
                                justify-center
                                lg:order-2
                            "
                        >
                            <div
                                className="
                                    relative
                                    flex
                                    items-center
                                    justify-center
                                    py-4
                                    sm:py-6
                                    lg:py-0
                                "
                            >
                                {/* Green glow */}

                                <motion.div
                                    animate={{
                                        scale: [1, 1.08, 1],
                                        opacity: [0.35, 0.5, 0.35],
                                    }}
                                    transition={{
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                    className="
                                        absolute
                                        h-56
                                        w-56
                                        rounded-full
                                        bg-green-300/20
                                        blur-3xl
                                        sm:h-72
                                        sm:w-72
                                        md:h-80
                                        md:w-80
                                        lg:h-[400px]
                                        lg:w-[400px]
                                    "
                                />

                                {/* Scribble circle */}

                                <motion.svg
                                    viewBox="0 0 500 500"
                                    fill="none"
                                    className="
                                        pointer-events-none
                                        absolute
                                        h-[280px]
                                        w-[280px]
                                        text-green-500/20
                                        sm:h-[350px]
                                        sm:w-[350px]
                                        md:h-[400px]
                                        md:w-[400px]
                                        lg:h-[500px]
                                        lg:w-[500px]
                                    "
                                    animate={{
                                        rotate: [0, 2, -2, 0],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <motion.path
                                        d="
                                            M250 40
                                            C365 38 460 125 460 250
                                            C460 375 365 460 250 460
                                            C125 460 40 375 40 250
                                            C40 130 130 40 250 40
                                            C370 40 430 120 420 215
                                        "
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeDasharray="8 12"
                                    />
                                </motion.svg>

                                {/* Profile image */}

                                <motion.img
                                    src={image.src}
                                    alt="Ayush Gupta"
                                    whileHover={{
                                        scale: 1.035,
                                    }}
                                    transition={{
                                        duration: 0.4,
                                    }}
                                    className="
                                        relative
                                        z-10
                                        w-52
                                        rounded-full
                                        object-contain
                                        sm:w-64
                                        md:w-72
                                        lg:w-[350px]
                                        xl:w-[390px]
                                    "
                                />

                                {/* Floating label */}

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.8,
                                    }}
                                    animate={{
                                        y: [0, -8, 0],
                                    }}
                                    className="
                                        absolute
                                        bottom-4
                                        left-0
                                        z-20
                                        rounded-2xl
                                        border
                                        border-green-200
                                        bg-white/90
                                        px-4
                                        py-2.5
                                        shadow-lg
                                        backdrop-blur-xl
                                        sm:bottom-8
                                        sm:left-4
                                    "
                                >
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-green-500">
                                        Available
                                    </p>

                                    <p className="mt-1 text-xs font-medium text-gray-700">
                                        Let's build something
                                    </p>
                                </motion.div>

                                {/* Developer badge */}

                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    viewport={{
                                        once: true,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 1,
                                    }}
                                    animate={{
                                        y: [0, 8, 0],
                                    }}
                                    className="
                                        absolute
                                        right-0
                                        top-8
                                        z-20
                                        rounded-2xl
                                        border
                                        border-gray-200
                                        bg-white/90
                                        px-4
                                        py-2.5
                                        shadow-lg
                                        backdrop-blur-xl
                                        sm:right-4
                                        sm:top-10
                                    "
                                >
                                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                                        Role
                                    </p>

                                    <p className="mt-1 text-xs font-bold text-gray-800">
                                        Full Stack Dev
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>

                    {/* =====================================================
                        SCROLL INDICATOR
                    ====================================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            delay: 1.5,
                            duration: 0.8,
                        }}
                        className="
                            absolute
                            bottom-4
                            left-1/2
                            hidden
                            -translate-x-1/2
                            flex-col
                            items-center
                            gap-2
                            lg:flex
                        "
                    >
                        <span
                            className="
                                text-[9px]
                                font-semibold
                                uppercase
                                tracking-[0.3em]
                                text-gray-400
                            "
                        >
                            Scroll
                        </span>

                        <motion.div
                            animate={{
                                y: [0, 6, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                            }}
                            className="
                                h-8
                                w-px
                                bg-gradient-to-b
                                from-green-400
                                to-transparent
                            "
                        />
                    </motion.div>
                </div>
            </section>

            {/* =========================================================
                OTHER SECTIONS
            ========================================================== */}

            <Skills />

            <Experience />

            <Projects />

            <Footer />
        </div>
    );
}