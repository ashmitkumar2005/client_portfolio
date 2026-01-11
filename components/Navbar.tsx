"use client";

import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRightCircle } from "react-icons/bs";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 max-w-7xl mx-auto w-full text-sm font-medium text-gray-400">
            {/* Logo */}
            <div className="flex items-center">
                <div className="w-10 h-10 relative">
                    <Image src="/logo.svg" alt="AP Logo" fill className="object-contain rounded-lg" />
                </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
                {["Home", "Projects", "Skills", "About", "Contact"].map((item) => (
                    <Link
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={(e) => {
                            e.preventDefault();
                            const target = document.querySelector(`#${item.toLowerCase()}`);
                            if (target) {
                                // @ts-expect-error: Lenis is added to window
                                window.lenis?.scrollTo(target);
                            }
                        }}
                        className="hover:text-white transition-colors"
                    >
                        {item}
                    </Link>
                ))}
            </div>

            {/* Resume Button */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all text-white/80 hover:text-white text-xs tracking-wide">
                Resume <BsArrowUpRightCircle className="text-sm" />
            </button>
        </nav>
    );
}
