import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

interface Repo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    language: string | null;
    stargazers_count: number;
    updated_at: string;
}

async function getRepos(): Promise<Repo[]> {
    // Fetch public repos from GitHub
    const res = await fetch("https://api.github.com/users/JaiswalAnshu/repos?sort=updated&per_page=6", {
        next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!res.ok) {
        console.error("Failed to fetch repos");
        return [];
    }

    const repos = await res.json();
    // Filter out forks if desired, or just return top results
    return repos;
}

// Helper to generate deterministic cool gradients based on repo name
const getGradient = (name: string) => {
    const colors = [
        "from-blue-600 to-violet-600",
        "from-emerald-500 to-teal-900",
        "from-orange-500 to-red-900",
        "from-pink-500 to-rose-900",
        "from-cyan-500 to-blue-900",
        "from-purple-500 to-indigo-900",
    ];
    // Simple hash
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const index = Math.abs(hash) % colors.length;
    return colors[index];
};

export default async function Projects() {
    const repos = await getRepos();

    return (
        <section id="projects" className="relative w-full bg-[#050505] pb-20">
            {/* Top Planet Arc - Scrollable Horizon */}
            {/* This sits at the top of the section and protrudes upwards to create the horizon curve */}
            {/* Top Planet Arc - Scrollable Horizon */}
            {/* Added rendering optimizations to prevent flicker */}
            <div className="absolute -top-[10vh] left-1/2 -translate-x-1/2 w-[300vw] h-[150vh] rounded-[50%] bg-[#050505] pointer-events-none shadow-[0_-10px_100px_-20px_rgba(255,255,255,0.1)] overflow-hidden border-t border-white/5 transform-gpu will-change-transform backface-hidden z-0">
                {/* Sharp Rim Light */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 blur-[0.5px] transform-gpu translate-z-0"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50%] h-[20px] bg-gradient-to-b from-white/10 to-transparent blur-[10px] transform-gpu translate-z-0"></div>
            </div>

            {/* Mask to hide the bottom of the planet arc (The "Third Arc") */}
            <div className="absolute inset-0 bg-[#050505] z-1 pointer-events-none" />

            <div className="relative z-10 px-4 pt-32 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-4">
                        <span className="text-xs font-medium tracking-[0.2em] text-gray-400 uppercase">
                            + Projects +
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white">
                        What i've been up to
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {repos.map((repo) => (
                        <Link
                            href={repo.html_url}
                            key={repo.id}
                            target="_blank"
                            className="group relative block w-full aspect-[16/10] rounded-[2rem] overflow-hidden bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-all duration-500"
                        >
                            {/* Gradient Placeholder / Cover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${getGradient(repo.name)} opacity-20 group-hover:opacity-30 transition-opacity duration-500`} />

                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80" />

                            {/* Content Content - Bottom Left */}
                            <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">

                                {/* Language Tag */}
                                {repo.language && (
                                    <div className="mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <span className="text-[10px] uppercase tracking-widest px-2 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-white/70">
                                            {repo.language}
                                        </span>
                                    </div>
                                )}

                                <div className="flex items-end justify-between w-full">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-medium text-white mb-2 leading-tight">
                                            {repo.name}
                                        </h3>
                                        <p className="text-sm md:text-base text-gray-400 line-clamp-2 max-w-[90%] font-light">
                                            {repo.description || "A cool project currently in development."}
                                        </p>
                                    </div>

                                    {/* Arrow Icon */}
                                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out">
                                        <BsArrowUpRight className="text-lg" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
