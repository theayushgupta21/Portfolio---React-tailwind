import { motion } from "framer-motion";

export default function HireMeForm() {
    return (
        <section
            id="hire-me"
            className="relative min-h-screen bg-gray-950 flex items-center justify-center px-6 overflow-hidden"
            aria-labelledby="hire-me-title"
        >
            {/* Animated Background Glow */}
            <div className="absolute inset-14 bg-linear-to-br from-yellow-500/10 via-transparent to-purple-500/10 blur-3xl w-fit" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-2xl"
            >
                <h2
                    id="hire-me-title"
                    className="text-3xl md:text-4xl font-bold text-white text-center mb-4"
                >
                    Hire <span className="text-yellow-400">Me</span>
                </h2>

                <p className="text-gray-400 text-center mb-10">
                    Have a project in mind? Let’s build something modern, fast, and
                    impactful together.
                </p>

                <form className="space-y-6">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            required
                            className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            required
                            className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label htmlFor="message" className="sr-only">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Tell me about your project..."
                            required
                            className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full rounded-full bg-white text-black py-4 font-semibold hover:bg-yellow-400 transition-all duration-300"
                        aria-label="Submit hire me form"
                    >
                        Send Message →
                    </button>
                </form>
            </motion.div>
        </section>
    );
}
