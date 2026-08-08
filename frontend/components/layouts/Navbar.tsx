"use client";

import { useState } from "react";
import {
    FaGithub,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa";
import { Mail, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-white/80 px-4 py-4 backdrop-blur-md md:px-8 lg:px-12">
            <div className="mx-auto flex max-w-7xl items-center justify-between">

                {/* Logo */}
                <a
                    href="#home"
                    className="font-playfair text-lg text-black sm:text-xl"
                >
                    Ayush{" "}
                    <span className="rounded-2xl bg-blue-500 px-2 py-1 text-white font-dyna-puff">
                        .dev
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:block">
                    <ul className="flex items-center gap-5 lg:gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="font-playfair text-base text-black transition-colors hover:text-yellow-500 lg:text-lg"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Social Icons */}
                <div className="hidden items-center gap-2 md:flex lg:gap-3">
                    <a
                        href="https://www.linkedin.com/in/theayushgupta21/"
                        target="Linkedin"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="rounded-2xl p-2 text-blue-600 transition-all hover:border hover:border-gray-400 hover:opacity-80"
                    >
                        <FaLinkedinIn size={20} />
                    </a>

                    <a
                        href="https://github.com/theayushgupta21"
                        target="Github"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="rounded-2xl p-2 text-green-500 transition-all hover:border hover:border-gray-400 hover:opacity-80"
                    >
                        <FaGithub size={20} />
                    </a>

                    <a
                        href="ayushgupta9510@gmail.com"
                        aria-label="Email"
                        className="rounded-2xl p-2 text-red-500 transition-all hover:border hover:border-gray-400 hover:opacity-80"
                    >
                        <Mail size={20} />
                    </a>

                    <a
                        href="https://x.com/portraitcoder"
                        target="Twitter"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="rounded-2xl p-2 text-blue-600 transition-all hover:border hover:border-gray-400 hover:opacity-80"
                    >
                        <FaTwitter size={20} />
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-lg p-2 text-black md:hidden"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mt-4 border-t border-gray-200 px-2 pb-2 pt-4 md:hidden">
                    <ul className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block font-playfair text-lg text-black transition-colors hover:text-yellow-500"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Social Icons */}
                    <div className="mt-5 flex items-center gap-3 border-t border-gray-200 pt-4">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="rounded-2xl p-2 text-blue-600 hover:border hover:border-gray-400"
                        >
                            <FaLinkedinIn size={20} />
                        </a>

                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="rounded-2xl p-2 text-green-500 hover:border hover:border-gray-400"
                        >
                            <FaGithub size={20} />
                        </a>

                        <a
                            href="mailto:example@gmail.com"
                            aria-label="Email"
                            className="rounded-2xl p-2 text-red-500 hover:border hover:border-gray-400"
                        >
                            <Mail size={20} />
                        </a>

                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="rounded-2xl p-2 text-blue-600 hover:border hover:border-gray-400"
                        >
                            <FaTwitter size={20} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;