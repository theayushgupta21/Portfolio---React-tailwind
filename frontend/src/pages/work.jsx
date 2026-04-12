import React from "react";
import { motion } from "framer-motion";

export default function WorkExperience() {
    return (
        <section className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex items-center justify-center px-6">

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="max-w-4xl bg-white/5 backdrop-blur-lg border border-gray-700 rounded-3xl p-8 shadow-2xl"
            >
                {/* Title */}
                <h1 className="text-4xl font-bold mb-4">
                    SEO Intern – <span className="text-indigo-400">Robral Technologies</span>
                </h1>

                {/* Duration */}
                <p className="text-gray-400 mb-6">
                    Work Experience & CEO Feedback
                </p>

                {/* Feedback Content */}
                <div className="space-y-4 text-gray-300 leading-relaxed">

                    <p>
                        During this period, he worked with our digital marketing team and contributed to
                        various <span className="text-yellow-400 font-semibold">Search Engine Optimization (SEO)</span> activities including{" "}
                        <span className="text-indigo-400">keyword research</span>,{" "}
                        <span className="text-indigo-400">on-page SEO optimization</span>,{" "}
                        <span className="text-indigo-400">competitor analysis</span>,{" "}
                        <span className="text-indigo-400">technical SEO audits</span>, and{" "}
                        <span className="text-indigo-400">content optimization strategies</span>.
                    </p>

                    <p>
                        Ayush demonstrated{" "}
                        <span className="text-green-400 font-semibold">dedication</span>,{" "}
                        <span className="text-green-400 font-semibold">enthusiasm</span>, and a{" "}
                        <span className="text-green-400 font-semibold">willingness to learn</span> new concepts related to digital marketing and search engine optimization.
                    </p>

                    <p>
                        His contributions supported our efforts in improving{" "}
                        <span className="text-pink-400">website visibility</span>,{" "}
                        <span className="text-pink-400">search rankings</span>, and{" "}
                        <span className="text-pink-400">overall online presence</span>.
                    </p>

                    <p>
                        We <span className="text-yellow-400 font-bold">appreciate the efforts and commitment</span> shown during the internship period and wish him{" "}
                        <span className="text-indigo-400 font-semibold">success in future academic and professional endeavors</span>.
                    </p>

                </div>

            </motion.div>
        </section>
    );
}