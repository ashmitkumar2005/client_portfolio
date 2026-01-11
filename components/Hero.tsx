"use client";

import { BsArrowUpRightCircle } from "react-icons/bs";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section id="home" className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center pt-20">

            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
            >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse box-shadow-green"></span>
                <span className="text-xs text-gray-300 tracking-wide font-light">Open to opportunities</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-7xl md:text-8xl lg:text-9xl tracking-tight mb-8 bg-gradient-to-b from-white via-gray-300 to-gray-500 bg-clip-text text-transparent pb-4 font-normal"
                style={{ fontFamily: "var(--font-crysthel)" }}
            >
                <span className="tracking-tight">Hey, </span>
                <span className="ml-2">I'm Anshu</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-2xl text-gray-400 text-sm md:text-base leading-relaxed mb-10 font-light tracking-wide"
            >
                Data Analyst based in <span className="text-white font-medium">India</span> with hands-on industry experience,
                <br className="hidden md:block" />
                currently working on real-world analytics projects using <span className="text-white font-medium">SQL, Python, and BI tools</span>
            </motion.p>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex items-center gap-4"
            >
                <button className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 hover:border-white/30 transition-all text-white/90 text-sm font-medium backdrop-blur-sm">
                    Resume <BsArrowUpRightCircle />
                </button>
                <button className="px-6 py-3 rounded-full bg-white text-black hover:bg-gray-100 transition-all text-sm font-medium shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                    Get In Touch
                </button>
            </motion.div>
        </section>
    );
}
