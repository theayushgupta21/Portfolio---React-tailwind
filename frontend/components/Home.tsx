"use client";
import React from 'react'
import { MdWavingHand } from "react-icons/md";
import { motion } from "framer-motion";

import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Skills from './Skills'
import image from '@/public/Profileimage.png'
import { FaGithub } from 'react-icons/fa6';
import Projects from './Projects';
import Experience from './Experience';

export default function Home() {

    const techStack = [
        // { name: "React", icon: "⚛️", position: "top-0 left-1/2" },
        // { name: "JS", icon: "JS", position: "left-0 top-1/2" },
        // { name: "TS", icon: "TS", position: "right-0 top-1/2" },
        // { name: "Next", icon: "N", position: "bottom-0 left-1/2" },
    ];

    const socialLinks = [
        {
            name: "GitHub",
            icon: <FaGithub />,
            href: "",
        },
        {
            name: "LinkedIn",
            icon: <FaGithub />,
            href: "",
        }
    ];

    return (
        <div>

            <Navbar />

            <section
                id="home"
                className="min-h-screen px-6 pt-28 sm:px-10 md:px-12 lg:px-20 bg-white"
            >

                <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

                    {/* Left Content */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -120,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: false,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="text-left"
                    >

                        <motion.p
                            initial={{
                                opacity: 0,
                                x: -50,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: false,
                                amount: 0.5,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.1,
                            }}
                            className="font-dyna-puff text-lg text-black"
                        >
                            Hey 👋..
                        </motion.p>

                        <motion.h1
                            initial={{
                                opacity: 0,
                                x: -70,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: false,
                                amount: 0.5,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.15,
                                ease: "easeOut",
                            }}
                            className="mt-3 text-4xl font-bold sm:text-5xl lg:text-6xl text-black font-playfair"
                        >
                            AYUSH{" "}
                            <span className="text-green-500 font-dyna-puff">
                                GUPTA
                            </span>
                        </motion.h1>

                        <motion.ul
                            initial={{
                                opacity: 0,
                                x: -80,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: false,
                                amount: 0.3,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: 0.25,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="mt-5 space-y-2 text-base sm:text-lg text-black font-playfair"
                        >
                            <li>MERN Stack Developer</li>
                            <li>Content Creator</li>
                            <li>AI Explorer</li>
                            <li>Passionate Photographer & Video Editor</li>
                            <li>Motion Graphics Enthusiast</li>
                            <li>Open to Full-Time & Internship Opportunities</li>
                        </motion.ul>

                        <motion.p
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: false,
                                amount: 0.5,
                            }}
                            transition={{
                                duration: 0.7,
                                delay: 0.4,
                            }}
                            className="mt-6 font-dyna-puff text-base sm:text-lg text-black"
                        >
                            Always learning.{" "}
                            <span className="text-green-500">
                                Always building.
                            </span>{" "}
                            Always exploring.
                        </motion.p>

                    </motion.div>


                    {/* Right Image */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 120,
                            scale: 0.85,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                        }}
                        viewport={{
                            once: false,
                            amount: 0.3,
                        }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative flex items-center justify-center translate-x-22"
                    >

                        {/* Profile */}
                        <motion.img
                            src={image.src}
                            alt="Ayush"
                            initial={{
                                scale: 0.8,
                                opacity: 0,
                            }}
                            whileInView={{
                                scale: 1,
                                opacity: 1,
                            }}
                            viewport={{
                                once: false,
                                amount: 0.3,
                            }}
                            transition={{
                                duration: 0.9,
                                delay: 0.15,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            whileHover={{
                                scale: 1.03,
                            }}
                            className="relative z-6 w-60 sm:w-70 md:w-75 lg:w-90 rounded-full "
                        />

                        {/* Tech Stack */}
                        {/* {techStack.map((tech, index) => (
                            <motion.div
                                key={index}
                                className={`absolute ${tech.position} z-20`}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{
                                    delay: 0.2 * index,
                                    duration: 0.5,
                                }}
                            >
                                {tech.icon}
                            </motion.div>
                        ))} */}

                    </motion.div>


                    <motion.button
                        initial={{
                            opacity: 0,
                            y: 70,
                            scale: 0.9,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        viewport={{
                            once: false,
                            amount: 0.5,
                        }}
                        transition={{
                            duration: 0.7,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        whileHover={{
                            scale: 1.05,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        onClick={() => window.open('/Ayush_Gupta_Resume.pdf', '_blank')}
                        className="-mt-4 rounded-4xl bg-purple-700 px-4 mx-45 py-4 transition-colors hover:bg-blue-600 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-70 -translate-x-40 cursor-progress font-dyna-puff text-gray-100 "
                    >
                        Download Resume

                    </motion.button>

                </div>
            </section>

            <Skills />
            <Experience />
            <Projects />
            <Footer />


        </div >
    )
}