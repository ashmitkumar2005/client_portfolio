"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="relative w-full bg-[#050505] py-32 px-4 z-10 overflow-hidden">
            <div className="w-[80%] max-w-none mx-auto">

                {/* Header */}
                <div className="text-center mb-24">
                    <div className="inline-block mb-4">
                        <span className="text-xs font-medium tracking-[0.2em] text-gray-400 uppercase">
                            + ABOUT +
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white">
                        Journey so far
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-2 md:order-1"
                    >
                        <div className="mb-8">
                            <span className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs text-gray-300 font-medium">
                                My story
                            </span>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-normal text-white mb-8 leading-tight truncate">
                            Crafting engaging experiences & exploring new horizons
                        </h3>

                        <div className="space-y-6 text-gray-400 font-light leading-relaxed text-xs md:text-sm">
                            <p>
                                I have always had a deep fascination with computers, particularly in the realm of data and the evolving technologies that drive it. I find joy in working with numbers, and possess the ability to manage multiple priorities effectively while collaborating with cross-functional teams under pressure to solve complex business problems.
                            </p>

                            <p>
                                My experience spans a wide range of data-related tasks, including data extraction, data cleaning, exploratory data analysis, statistical analysis, insights generation, and dashboard creation.
                            </p>

                            <p>
                                When I'm not immersed in data projects, you'll likely find me exploring new cities with my camera, capturing the beauty of everyday life. Balancing work with personal adventures keeps me inspired and fuels my creativity.
                            </p>
                        </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 md:order-2 relative w-[80%] ml-auto"
                    >
                        <div className="relative aspect-[4/3] w-full rounded-[2rem] overflow-hidden">
                            {/* Copy the generated image to public folder manually if needed or import directly if supported by next/image? 
                  Next.js expects public assets. I will assume the image will be moved to public/images/about.png.
                  For now I will use a temporary relative path or assume I can move it.
                  Wait, I cannot use the absolute path in Next.js Image component easily if not in public.
                  I will use a standard placeholder for now and instruct to move the file. 
                  actually I can interpret the uploaded image. 
                  But for now, I will assume the user has to manually place it or I use a color block.
                  Actually I can construct a 'data:image' if I read it? No that's huge. 
                  I'll use a placeholder div that LOOKS like the image for now, or just a gray background 
                  and ask user to move the generated image. 
                  
                  BETTER: I will use a simple color div with the prompt as text for now to avoid broken image,
                  OR I will try to use the uploaded image from the PREVIOUS step if it was a photo? No that was a screenshot.
                  I'll stick to a nice gradient div placeholder that matches the theme until I can move the file.
              */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black z-0" />
                            <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm">
                                [Place Personal Image Here]
                            </div>
                            {/* 
                  Actually I have the generated image path: /home/ashmit/.gemini/antigravity/brain/f6abc9b0-e3be-430e-8fab-6aad86a3c88e/about_me_placeholder_1768055480357.png
                  I will COPY this file to the public directory using run_command so I can use it.
               */}
                            <Image
                                src="/about-me.png"
                                alt="Workspace"
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
