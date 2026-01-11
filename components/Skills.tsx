"use client";

import { motion } from "framer-motion";
import { SiPython, SiTableau, SiNeo4J, SiJavascript } from "react-icons/si";

const skills = [
    {
        icon: SiPython,
        title: "Data Analytics",
        description: "Expertise in Python, SQL, and Excel (Pivot Tables, Formulas) to conduct exploratory data analysis and generate actionable insights.",
    },
    {
        icon: SiTableau,
        title: "Business Intelligence",
        description: "Crafting impactful dashboards and visual stories using Power BI, Power Query, and Tableau to drive data-driven decisions.",
    },
    {
        icon: SiNeo4J,
        title: "AI & Engineering",
        description: "Hands-on experience with Recommendation Engines, Neo4j, Vector Embeddings, and 11Labs integrations for AI solutions.",
    },
    {
        icon: SiJavascript,
        title: "Web Development",
        description: "Solid foundation in HTML, CSS, JavaScript, and Backend development to build and maintain responsive web applications.",
    },
];

export default function Skills() {
    return (
        <section id="skills" className="relative w-full bg-[#050505] py-32 px-4 z-10">

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-4">
                        <span className="text-xs font-medium tracking-[0.2em] text-gray-400 uppercase">
                            + Skills +
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-white mb-6">
                        Things I'm good at
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col items-center text-center"
                        >
                            {/* Icon - Standalone, large, "PNG-like" with drop shadow */}
                            <div className="mb-8 relative flex items-center justify-center transition-all duration-500">
                                <skill.icon className="text-8xl text-gray-200 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] opacity-90 group-hover:opacity-100 group-hover:scale-110 group-hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] transition-all duration-500" />
                            </div>

                            <h3 className="text-xl font-medium text-white mb-4 group-hover:text-blue-200 transition-colors">
                                {skill.title}
                            </h3>

                            <p className="text-sm text-gray-400 leading-relaxed font-light opacity-80 max-w-[280px]">
                                {skill.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
