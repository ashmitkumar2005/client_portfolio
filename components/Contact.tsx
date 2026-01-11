"use client";

import { motion } from "framer-motion";
import { SiFramer, SiLinkedin, SiBehance, SiMedium } from "react-icons/si";
import { BsLightningChargeFill, BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";

export default function Contact() {


    return (
        <section id="contact" className="relative w-full min-h-[80vh] bg-[#050505] flex flex-col justify-end overflow-hidden pb-10 pt-32 px-4">

            {/* Background Glow - Horizon */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] h-[50vh] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white/10 via-white/0 to-transparent pointer-events-none blur-[60px]" />
            <div className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

            <div className="relative z-10 max-w-4xl w-full mx-auto flex flex-col items-center text-center">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-medium text-white mb-6 tracking-tight"
                >
                    Let's collaborate?
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-gray-400 mb-10 max-w-md font-light"
                >
                    I'm open for exciting opportunities, feel free to reach out!
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center items-center gap-4 mb-20"
                >
                    {/* Resume Button */}
                    <button className="px-8 py-3 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2 group">
                        Resume
                        <span className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-black transition-colors" />
                    </button>

                    {/* Get Context Button */}
                    <Link href="mailto:hello@example.com" className="px-8 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
                        Get In Touch
                    </Link>
                </motion.div>

                {/* Footer and Socials */}
                <div className="flex flex-col items-center gap-8 w-full">
                    {/* Socials */}
                    <div className="flex items-center gap-4">
                        {[
                            { icon: SiLinkedin, href: "#" },
                            { icon: SiBehance, href: "#" },
                            { icon: SiMedium, href: "#" },
                        ].map((social, idx) => (
                            <Link
                                key={idx}
                                href={social.href}
                                className="w-10 h-10 rounded-lg bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                            >
                                <social.icon size={18} />
                            </Link>
                        ))}
                    </div>

                    {/* Footer Text */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center gap-2 text-sm text-gray-500 font-light"
                    >
                        <span>Crafted by a designer, with love & patience</span>
                        <BsLightningChargeFill className="text-gray-400" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
