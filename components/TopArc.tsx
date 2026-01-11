"use client";

export default function TopArc() {
    return (
        <div className="fixed -top-[140vh] left-1/2 -translate-x-1/2 w-[300vw] h-[150vh] rounded-[50%] bg-[#050505]/40 backdrop-blur-md z-40 shadow-[0_10px_100px_-20px_rgba(255,255,255,0.1)] overflow-hidden border-b border-white/10 pointer-events-none">
            {/* Sharp Rim Light - Bottom Edge */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-90 blur-[0.5px]"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[20px] bg-gradient-to-t from-white/10 to-transparent blur-[10px]"></div>
        </div>
    );
}
