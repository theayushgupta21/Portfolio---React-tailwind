import { motion } from "framer-motion";

export default function Navbar() {
    const links = ["home", "about", "experience", "projects", "hire"];

    // Smooth scroll handler
    const handleScroll = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <motion.nav
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-auto"
        >
            <div className="flex gap-6 px-6 py-3 rounded-full 
        bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-md border border-white/10 shadow-lg">

                {links.map((link) => (
                    <button
                        key={link}
                        onClick={() => handleScroll(link)}
                        className="text-gray-300 capitalize hover:text-yellow-500 transition font-medium"
                    >
                        {link}
                    </button>
                ))}
            </div>
        </motion.nav>
    );
}
