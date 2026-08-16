"use client";

import React, { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaArrowUp,
    FaPaperPlane,
    FaCheck,
    FaTimes,
    FaPuzzlePiece,
} from "react-icons/fa";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
];

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/",
        icon: FaGithub,
    },
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/",
        icon: FaLinkedinIn,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/",
        icon: FaInstagram,
    },
];

export default function ContactFooter(): React.JSX.Element {
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSending, setIsSending] = useState(false);

    // Puzzle state
    const [puzzleSolved, setPuzzleSolved] = useState(false);
    const [selectedPiece, setSelectedPiece] = useState<number | null>(null);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handlePuzzleClick = (index: number) => {
        if (puzzleSolved) return;

        /*
         * Simple puzzle interaction:
         * Click the pieces in the correct order.
         * Correct order: 0 -> 1 -> 2 -> 3
         */
        if (selectedPiece === null && index === 0) {
            setSelectedPiece(0);
            return;
        }

        if (selectedPiece === 0 && index === 1) {
            setSelectedPiece(1);
            return;
        }

        if (selectedPiece === 1 && index === 2) {
            setSelectedPiece(2);
            return;
        }

        if (selectedPiece === 2 && index === 3) {
            setSelectedPiece(3);

            setTimeout(() => {
                setPuzzleSolved(true);
            }, 350);

            return;
        }

        // Wrong piece → reset
        setSelectedPiece(null);
    };

    const resetPuzzle = () => {
        setPuzzleSolved(false);
        setSelectedPiece(null);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;
        const formData = new FormData(form);

        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        if (!name || !email || !message) return;

        setIsSending(true);

        await new Promise((resolve) => setTimeout(resolve, 900));

        console.log({
            name,
            email,
            message,
        });

        setIsSending(false);
        form.reset();

        setShowSuccess(true);

        setTimeout(() => {
            setShowSuccess(false);
        }, 5000);
    };

    return (
        <>
            {/* =====================================================
                CONTACT
            ====================================================== */}

            <section
                id="contact"
                className="
                    relative
                    overflow-hidden
                    bg-white
                    py-20
                    sm:py-24
                    lg:py-28
                "
            >
                {/* Background Grid */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        inset-0
                        opacity-[0.025]
                        [background-image:linear-gradient(#111_1px,transparent_1px),linear-gradient(90deg,#111_1px,transparent_1px)]
                        [background-size:36px_36px]
                    "
                />

                {/* Green Glow */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        left-[-180px]
                        top-[15%]
                        h-[420px]
                        w-[420px]
                        rounded-full
                        bg-green-300/10
                        blur-[120px]
                    "
                />

                <div
                    className="
                        pointer-events-none
                        absolute
                        right-[-180px]
                        bottom-[10%]
                        h-[420px]
                        w-[420px]
                        rounded-full
                        bg-emerald-300/10
                        blur-[120px]
                    "
                />

                <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

                    {/* ================= SCRIBBLE TOP ================= */}

                    <div className="mb-14 flex justify-center">
                        <svg
                            viewBox="0 0 420 60"
                            fill="none"
                            className="h-12 w-72 text-green-500/30 sm:w-96"
                        >
                            <motion.path
                                d="
                                    M5 30
                                    C35 5 55 55 90 28
                                    C120 5 145 55 175 28
                                    C205 5 230 55 260 28
                                    C290 5 315 55 345 28
                                    C370 10 395 20 415 28
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
                                    duration: 1.8,
                                    ease: "easeInOut",
                                }}
                            />
                        </svg>
                    </div>

                    {/* ================= HEADING ================= */}

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
                            amount: 0.4,
                        }}
                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="mb-14 text-center"
                    >
                        <p
                            className="
                                mb-3
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.35em]
                                text-green-500
                            "
                        >
                            Contact
                        </p>

                        <h2
                            className="
                                text-4xl
                                font-bold
                                tracking-tight
                                text-gray-900
                                sm:text-5xl
                                lg:text-6xl
                            "
                        >
                            Let's create something{" "}
                            <span className="text-green-500">
                                meaningful.
                            </span>
                        </h2>

                        <p
                            className="
                                mx-auto
                                mt-5
                                max-w-2xl
                                text-sm
                                leading-7
                                text-gray-500
                                sm:text-base
                            "
                        >
                            Have an idea, project, opportunity or simply
                            want to connect? Complete the little puzzle and
                            send me a message.
                        </p>
                    </motion.div>

                    {/* =================================================
                        CONTACT CARD
                    ================================================== */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 60,
                            rotateX: 8,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        transition={{
                            duration: 0.9,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        style={{
                            transformPerspective: 1200,
                        }}
                        className="
                            relative
                            overflow-hidden
                            rounded-[2rem]
                            border
                            border-gray-200/80
                            bg-white/60
                            shadow-[0_30px_80px_rgba(0,0,0,0.08)]
                            backdrop-blur-2xl
                        "
                    >
                        {/* Glass layer */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-0
                                bg-gradient-to-br
                                from-white/90
                                via-transparent
                                to-green-50/50
                            "
                        />

                        <div className="relative z-10 grid lg:grid-cols-2">

                            {/* =================================================
                                LEFT SIDE
                            ================================================== */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: -50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.8,
                                }}
                                className="
                                    relative
                                    flex
                                    min-h-[560px]
                                    flex-col
                                    justify-between
                                    overflow-hidden
                                    border-b
                                    border-gray-200/70
                                    p-7
                                    sm:p-10
                                    lg:border-b-0
                                    lg:border-r
                                    lg:p-12
                                "
                            >
                                {/* Scribble decorations */}

                                <svg
                                    className="
                                        pointer-events-none
                                        absolute
                                        -right-16
                                        top-10
                                        h-48
                                        w-48
                                        text-green-500/10
                                    "
                                    viewBox="0 0 200 200"
                                    fill="none"
                                >
                                    <motion.path
                                        d="
                                            M20 100
                                            C20 45 60 20 105 30
                                            C155 40 180 80 165 125
                                            C150 170 90 185 50 155
                                            C10 125 30 70 80 60
                                            C130 50 160 90 135 125
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
                                            duration: 2,
                                            ease: "easeInOut",
                                        }}
                                    />
                                </svg>

                                <div className="relative z-10">

                                    <div
                                        className="
                                            inline-flex
                                            items-center
                                            gap-2
                                            rounded-full
                                            border
                                            border-green-200
                                            bg-green-50/70
                                            px-3
                                            py-1.5
                                        "
                                    >
                                        <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

                                        <span
                                            className="
                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                tracking-[0.2em]
                                                text-green-700
                                            "
                                        >
                                            Available
                                        </span>
                                    </div>

                                    <h3
                                        className="
                                            mt-7
                                            max-w-md
                                            text-3xl
                                            font-bold
                                            leading-tight
                                            text-gray-900
                                            sm:text-4xl
                                        "
                                    >
                                        Your idea is the missing{" "}
                                        <span className="text-green-500">
                                            piece.
                                        </span>
                                    </h3>

                                    <p
                                        className="
                                            mt-5
                                            max-w-md
                                            text-sm
                                            leading-7
                                            text-gray-500
                                            sm:text-base
                                        "
                                    >
                                        Put the pieces together, solve the
                                        little scribble puzzle and unlock the
                                        conversation.
                                    </p>
                                </div>

                                {/* ================= PUZZLE ================= */}

                                <div className="relative z-10 mt-12">

                                    <div className="mb-4 flex items-center justify-between">
                                        <div>
                                            <p
                                                className="
                                                    text-[10px]
                                                    font-bold
                                                    uppercase
                                                    tracking-[0.25em]
                                                    text-gray-400
                                                "
                                            >
                                                Mini Puzzle
                                            </p>

                                            <p className="mt-1 text-xs text-gray-500">
                                                {puzzleSolved
                                                    ? "Puzzle completed!"
                                                    : "Connect the pieces in order"}
                                            </p>
                                        </div>

                                        {puzzleSolved && (
                                            <motion.button
                                                initial={{
                                                    opacity: 0,
                                                    scale: 0.7,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                onClick={resetPuzzle}
                                                className="
                                                    text-[10px]
                                                    font-semibold
                                                    text-green-600
                                                    hover:text-green-700
                                                "
                                            >
                                                Reset
                                            </motion.button>
                                        )}
                                    </div>

                                    {/* Puzzle Board */}

                                    <div
                                        className="
                                            relative
                                            h-48
                                            overflow-hidden
                                            rounded-2xl
                                            border
                                            border-gray-200
                                            bg-white/70
                                            shadow-inner
                                        "
                                    >
                                        {/* Scribble path */}

                                        <svg
                                            viewBox="0 0 500 190"
                                            className="
                                                pointer-events-none
                                                absolute
                                                inset-0
                                                h-full
                                                w-full
                                            "
                                            fill="none"
                                        >
                                            <motion.path
                                                d="
                                                    M55 140
                                                    C75 45 145 35 180 100
                                                    C210 155 270 155 295 90
                                                    C320 30 390 40 440 110
                                                "
                                                stroke="currentColor"
                                                className="text-gray-200"
                                                strokeWidth="2"
                                                strokeDasharray="7 8"
                                            />

                                            <motion.path
                                                d="
                                                    M55 140
                                                    C75 45 145 35 180 100
                                                    C210 155 270 155 295 90
                                                    C320 30 390 40 440 110
                                                "
                                                stroke="currentColor"
                                                className="text-green-400"
                                                strokeWidth="2"
                                                initial={{
                                                    pathLength: 0,
                                                }}
                                                animate={{
                                                    pathLength: puzzleSolved
                                                        ? 1
                                                        : 0,
                                                }}
                                                transition={{
                                                    duration: 1.2,
                                                    ease: "easeInOut",
                                                }}
                                            />
                                        </svg>

                                        {/* Puzzle Pieces */}

                                        {[0, 1, 2, 3].map((piece) => {
                                            const positions = [
                                                "left-[8%] top-[62%]",
                                                "left-[31%] top-[18%]",
                                                "left-[54%] top-[48%]",
                                                "right-[7%] top-[30%]",
                                            ];

                                            const isSelected =
                                                selectedPiece === piece ||
                                                puzzleSolved;

                                            return (
                                                <motion.button
                                                    key={piece}
                                                    type="button"
                                                    onClick={() =>
                                                        handlePuzzleClick(
                                                            piece
                                                        )
                                                    }
                                                    whileHover={{
                                                        scale: 1.15,
                                                        rotate: 5,
                                                    }}
                                                    whileTap={{
                                                        scale: 0.9,
                                                    }}
                                                    animate={{
                                                        y: isSelected
                                                            ? -4
                                                            : 0,
                                                        rotate: isSelected
                                                            ? piece % 2 === 0
                                                                ? -4
                                                                : 4
                                                            : 0,
                                                    }}
                                                    className={`
                                                        absolute
                                                        ${positions[piece]}
                                                        flex
                                                        h-12
                                                        w-12
                                                        items-center
                                                        justify-center
                                                        rounded-xl
                                                        border
                                                        transition-colors
                                                        duration-300
                                                        ${isSelected
                                                            ? "border-green-300 bg-green-50 text-green-500 shadow-[0_8px_25px_rgba(34,197,94,0.2)]"
                                                            : "border-gray-200 bg-white text-gray-400 shadow-sm hover:border-green-300 hover:text-green-500"
                                                        }
                                                    `}
                                                >
                                                    <FaPuzzlePiece className="text-lg" />

                                                    <span
                                                        className="
                                                            absolute
                                                            -right-1
                                                            -top-1
                                                            flex
                                                            h-4
                                                            w-4
                                                            items-center
                                                            justify-center
                                                            rounded-full
                                                            bg-gray-900
                                                            text-[8px]
                                                            font-bold
                                                            text-white
                                                        "
                                                    >
                                                        {piece + 1}
                                                    </span>
                                                </motion.button>
                                            );
                                        })}

                                        {/* Solved */}

                                        <AnimatePresence>
                                            {puzzleSolved && (
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        scale: 0.8,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        scale: 1,
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                    }}
                                                    className="
                                                        absolute
                                                        inset-0
                                                        flex
                                                        items-center
                                                        justify-center
                                                        bg-white/40
                                                        backdrop-blur-[2px]
                                                    "
                                                >
                                                    <div
                                                        className="
                                                            rounded-full
                                                            border
                                                            border-green-200
                                                            bg-green-50/90
                                                            px-4
                                                            py-2
                                                            text-xs
                                                            font-semibold
                                                            text-green-600
                                                            shadow-lg
                                                        "
                                                    >
                                                        ✓ Puzzle Solved
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>
                            </motion.div>

                            {/* =================================================
                                RIGHT SIDE — FORM
                            ================================================== */}

                            <motion.div
                                initial={{
                                    opacity: 0,
                                    x: 50,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.1,
                                }}
                                className="p-7 sm:p-10 lg:p-12"
                            >
                                <div className="mb-8">
                                    <p
                                        className="
                                            text-[10px]
                                            font-bold
                                            uppercase
                                            tracking-[0.3em]
                                            text-green-500
                                        "
                                    >
                                        Send a Message
                                    </p>

                                    <h3
                                        className="
                                            mt-3
                                            text-2xl
                                            font-bold
                                            text-gray-900
                                            sm:text-3xl
                                        "
                                    >
                                        Tell me about your project.
                                    </h3>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-5"
                                >
                                    {/* Name */}

                                    <div>
                                        <label
                                            htmlFor="contact-name"
                                            className="
                                                mb-2
                                                block
                                                text-xs
                                                font-semibold
                                                text-gray-700
                                            "
                                        >
                                            Name
                                        </label>

                                        <input
                                            id="contact-name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="Your name"
                                            className="
                                                h-13
                                                w-full
                                                rounded-2xl
                                                border
                                                border-gray-200
                                                bg-white/70
                                                px-4
                                                text-sm
                                                text-gray-900
                                                outline-none
                                                transition-all
                                                duration-300
                                                placeholder:text-gray-400
                                                focus:border-green-400
                                                focus:bg-white
                                                focus:ring-4
                                                focus:ring-green-500/10
                                            "
                                        />
                                    </div>

                                    {/* Email */}

                                    <div>
                                        <label
                                            htmlFor="contact-email"
                                            className="
                                                mb-2
                                                block
                                                text-xs
                                                font-semibold
                                                text-gray-700
                                            "
                                        >
                                            Email
                                        </label>

                                        <input
                                            id="contact-email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder="you@example.com"
                                            className="
                                                h-13
                                                w-full
                                                rounded-2xl
                                                border
                                                border-gray-200
                                                bg-white/70
                                                px-4
                                                text-sm
                                                text-gray-900
                                                outline-none
                                                transition-all
                                                duration-300
                                                placeholder:text-gray-400
                                                focus:border-green-400
                                                focus:bg-white
                                                focus:ring-4
                                                focus:ring-green-500/10
                                            "
                                        />
                                    </div>

                                    {/* Message */}

                                    <div>
                                        <label
                                            htmlFor="contact-message"
                                            className="
                                                mb-2
                                                block
                                                text-xs
                                                font-semibold
                                                text-gray-700
                                            "
                                        >
                                            Message
                                        </label>

                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            required
                                            rows={6}
                                            placeholder="Tell me about your idea..."
                                            className="
                                                w-full
                                                resize-none
                                                rounded-2xl
                                                border
                                                border-gray-200
                                                bg-white/70
                                                px-4
                                                py-4
                                                text-sm
                                                leading-6
                                                text-gray-900
                                                outline-none
                                                transition-all
                                                duration-300
                                                placeholder:text-gray-400
                                                focus:border-green-400
                                                focus:bg-white
                                                focus:ring-4
                                                focus:ring-green-500/10
                                            "
                                        />
                                    </div>

                                    {/* Button */}

                                    <motion.button
                                        type="submit"
                                        disabled={isSending || !puzzleSolved}
                                        whileHover={
                                            !isSending && puzzleSolved
                                                ? {
                                                    y: -3,
                                                    scale: 1.01,
                                                }
                                                : {}
                                        }
                                        whileTap={
                                            !isSending && puzzleSolved
                                                ? {
                                                    scale: 0.97,
                                                }
                                                : {}
                                        }
                                        className="
                                            group
                                            flex
                                            h-13
                                            w-full
                                            items-center
                                            justify-center
                                            gap-3
                                            rounded-2xl
                                            bg-gray-900
                                            px-6
                                            text-sm
                                            font-semibold
                                            text-white
                                            shadow-xl
                                            transition-all
                                            duration-300
                                            hover:bg-green-500
                                            hover:shadow-[0_15px_35px_rgba(34,197,94,0.25)]
                                            disabled:cursor-not-allowed
                                            disabled:bg-gray-200
                                            disabled:text-gray-400
                                            disabled:shadow-none
                                        "
                                    >
                                        {isSending
                                            ? "Sending..."
                                            : puzzleSolved
                                                ? "Send Message"
                                                : "Solve Puzzle First"}

                                        {!isSending && puzzleSolved && (
                                            <FaPaperPlane
                                                className="
                                                    text-xs
                                                    transition-transform
                                                    duration-300
                                                    group-hover:translate-x-1
                                                    group-hover:-translate-y-1
                                                "
                                            />
                                        )}
                                    </motion.button>

                                    {!puzzleSolved && (
                                        <p className="text-center text-[10px] text-gray-400">
                                            Complete the scribble puzzle to
                                            unlock the button.
                                        </p>
                                    )}
                                </form>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* =====================================================
                FOOTER
            ====================================================== */}

            <footer
                className="
                    relative
                    overflow-hidden
                    border-t
                    border-gray-200/70
                    bg-white
                    py-10
                "
            >
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">

                    <div
                        className="
                            grid
                            grid-cols-1
                            gap-10
                            md:grid-cols-[1.5fr_1fr_1fr]
                        "
                    >
                        {/* Brand */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: -30,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.6,
                            }}
                        >
                            <div className="flex items-center gap-3">
                                <motion.div
                                    whileHover={{
                                        rotate: 8,
                                        scale: 1.08,
                                    }}
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        border
                                        border-green-200
                                        bg-green-50
                                        font-bold
                                        text-green-500
                                    "
                                >
                                    A
                                </motion.div>

                                <div>
                                    <h3 className="text-base font-bold text-gray-900">
                                        Ayush Gupta
                                    </h3>

                                    <p
                                        className="
                                            text-[9px]
                                            font-semibold
                                            uppercase
                                            tracking-[0.2em]
                                            text-green-500
                                        "
                                    >
                                        Developer
                                    </p>
                                </div>
                            </div>

                            <p
                                className="
                                    mt-5
                                    max-w-md
                                    text-sm
                                    leading-7
                                    text-gray-500
                                "
                            >
                                Building modern digital experiences with
                                clean interfaces and scalable technologies.
                            </p>

                            <div className="mt-6 flex gap-2.5">
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
                            </div>
                        </motion.div>

                        {/* Navigation */}

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
                                duration: 0.6,
                                delay: 0.1,
                            }}
                        >
                            <p
                                className="
                                    mb-5
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.25em]
                                    text-green-500
                                "
                            >
                                Navigation
                            </p>

                            <div className="flex flex-col gap-3">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        whileHover={{
                                            x: 5,
                                        }}
                                        className="
                                            flex
                                            w-fit
                                            items-center
                                            gap-2
                                            text-sm
                                            text-gray-500
                                            transition-colors
                                            duration-300
                                            hover:text-green-500
                                        "
                                    >
                                        <span className="text-[9px] text-gray-300">
                                            0{index + 1}
                                        </span>

                                        {item.name}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Stack */}

                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                x: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                duration: 0.6,
                                delay: 0.15,
                            }}
                        >
                            <p
                                className="
                                    mb-5
                                    text-[10px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.25em]
                                    text-green-500
                                "
                            >
                                Built With
                            </p>

                            <div className="flex max-w-xs flex-wrap gap-2">
                                {[
                                    "React",
                                    "Next.js",
                                    "TypeScript",
                                    "Node.js",
                                    "MongoDB",
                                    "Tailwind",
                                ].map((tech) => (
                                    <motion.span
                                        key={tech}
                                        whileHover={{
                                            y: -3,
                                        }}
                                        className="
                                            rounded-full
                                            border
                                            border-gray-200
                                            bg-gray-50
                                            px-3
                                            py-1.5
                                            text-[10px]
                                            font-medium
                                            text-gray-500
                                            transition-all
                                            duration-300
                                            hover:border-green-200
                                            hover:bg-green-50
                                            hover:text-green-600
                                        "
                                    >
                                        {tech}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Divider */}

                    <div
                        className="
                            my-9
                            h-px
                            bg-gradient-to-r
                            from-transparent
                            via-gray-200
                            to-transparent
                        "
                    />

                    {/* Bottom */}

                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                            sm:flex-row
                            sm:items-center
                            sm:justify-between
                        "
                    >
                        <p className="text-xs text-gray-400">
                            © 2026 Ayush Gupta. All rights reserved.
                        </p>

                        <div className="flex items-center gap-3">
                            <span
                                className="
                                    text-[9px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-gray-400
                                "
                            >
                                Always Learning
                            </span>

                            <span className="h-1 w-1 rounded-full bg-green-400" />

                            <span
                                className="
                                    text-[9px]
                                    font-semibold
                                    uppercase
                                    tracking-[0.2em]
                                    text-green-500
                                "
                            >
                                Always Building
                            </span>

                            <motion.button
                                type="button"
                                onClick={scrollToTop}
                                whileHover={{
                                    y: -3,
                                    scale: 1.05,
                                }}
                                whileTap={{
                                    scale: 0.95,
                                }}
                                aria-label="Back to top"
                                className="
                                    ml-2
                                    flex
                                    h-9
                                    w-9
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
                                <FaArrowUp className="text-xs" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </footer>

            {/* =====================================================
                SUCCESS POPUP
            ====================================================== */}

            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30,
                            scale: 0.9,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            y: 20,
                            scale: 0.95,
                        }}
                        transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="
                            fixed
                            bottom-6
                            left-1/2
                            z-[100]
                            w-[calc(100%-2rem)]
                            max-w-sm
                            -translate-x-1/2
                            sm:left-auto
                            sm:right-6
                            sm:translate-x-0
                        "
                    >
                        <div
                            className="
                                relative
                                overflow-hidden
                                rounded-2xl
                                border
                                border-green-200/80
                                bg-white/90
                                p-4
                                shadow-[0_20px_50px_rgba(0,0,0,0.15)]
                                backdrop-blur-2xl
                            "
                        >
                            <div className="absolute left-0 top-0 h-full w-1 bg-green-500" />

                            <div className="flex items-start gap-3">
                                <motion.div
                                    initial={{
                                        scale: 0,
                                        rotate: -30,
                                    }}
                                    animate={{
                                        scale: 1,
                                        rotate: 0,
                                    }}
                                    transition={{
                                        delay: 0.1,
                                        type: "spring",
                                        stiffness: 250,
                                    }}
                                    className="
                                        flex
                                        h-10
                                        w-10
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-green-50
                                        text-green-500
                                    "
                                >
                                    <FaCheck className="text-sm" />
                                </motion.div>

                                <div className="min-w-0 flex-1">
                                    <h4 className="text-sm font-bold text-gray-900">
                                        Message Sent!
                                    </h4>

                                    <p className="mt-1 text-xs leading-5 text-gray-500">
                                        Thanks for reaching out. I'll get
                                        back to you soon.
                                    </p>
                                </div>

                                <motion.button
                                    type="button"
                                    onClick={() => setShowSuccess(false)}
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 90,
                                    }}
                                    whileTap={{
                                        scale: 0.9,
                                    }}
                                    aria-label="Close notification"
                                    className="
                                        flex
                                        h-7
                                        w-7
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-lg
                                        text-gray-400
                                        transition-colors
                                        duration-200
                                        hover:bg-gray-100
                                        hover:text-gray-700
                                    "
                                >
                                    <FaTimes className="text-xs" />
                                </motion.button>
                            </div>

                            <motion.div
                                initial={{
                                    scaleX: 1,
                                }}
                                animate={{
                                    scaleX: 0,
                                }}
                                transition={{
                                    duration: 5,
                                    ease: "linear",
                                }}
                                className="
                                    absolute
                                    bottom-0
                                    left-0
                                    h-0.5
                                    w-full
                                    origin-left
                                    bg-green-500
                                "
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}