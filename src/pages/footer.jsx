import React, { useState } from "react";
import { FaInstagram, FaGithub, FaLinkedin, FaXTwitter, FaEnvelope, FaGlobe } from "react-icons/fa6";

const notes = [
    "💻 Keep calm and code on!",
    "⚡ Code is like humor. When you have to explain it, it’s bad.",
    "🔥 First, solve the problem. Then, write the code.",
    "🚀 Writing clean code is an art!",
    "🧩 Debugging is like being the detective in a crime movie where you are also the murderer.",
    "✨ Practice makes perfect… code!",
    "📚 Comment your code or cry later.",
    "🌐 The web is your playground — explore it!",
];

export default function Footer() {
    const [note, setNote] = useState("Click me for a programming note!");

    const handleNoteClick = () => {
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        setNote(randomNote);
    };

    return (
        <footer className="bg-gray-950 text-gray-400 w-full flex justify-center px-6 py-12">
            <div className="bg-gray-900/90 backdrop-blur-md shadow-2xl rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 max-w-6xl w-full">

                {/* Social Links */}
                <nav aria-label="Social links" className="flex gap-6 text-2xl md:order-1">
                    <a href="https://instagram.com/portraitwalagallery" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition transform hover:scale-110"><FaInstagram /></a>
                    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition transform hover:scale-110"><FaGithub /></a>
                    <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition transform hover:scale-110"><FaLinkedin /></a>
                    <a href="https://x.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition transform hover:scale-110"><FaXTwitter /></a>
                    <a href="mailto:ayush@example.com" className="hover:text-yellow-400 transition transform hover:scale-110"><FaEnvelope /></a>
                    <a href="https://yourportfolio.com" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition transform hover:scale-110"><FaGlobe /></a>
                </nav>

                {/* Interactive Programming Note */}
                <div
                    onClick={handleNoteClick}
                    className="cursor-pointer px-6 py-3 bg-gray-800 rounded-2xl text-center text-white font-medium shadow-lg hover:bg-gray-700 transition transform hover:scale-105 md:order-2 flex-1"
                >
                    {note}
                </div>

                {/* Copyright */}
                <p className="text-sm text-center text-gray-400 md:order-3 md:text-right">
                    © {new Date().getFullYear()} <span className="text-white font-medium">Ayush Gupta</span>. Made with ❤️ and code ☕.
                </p>
            </div>
        </footer>
    );
}
