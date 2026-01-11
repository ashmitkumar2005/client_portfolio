"use client";

import { useEffect, useRef } from "react";

export default function Background() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Set canvas size
        const setSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setSize();
        window.addEventListener("resize", setSize);

        // Stars configuration
        const stars: { x: number; y: number; size: number; opacity: number; vx: number; vy: number }[] = [];
        const starCount = 100; // Reduced from 300

        const createStars = () => {
            stars.length = 0;
            for (let i = 0; i < starCount; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.5,
                    opacity: Math.random(),
                    vx: (Math.random() - 0.5) * 0.6, // Increased speed (was 0.2)
                    vy: (Math.random() - 0.5) * 0.6  // Increased speed (was 0.2)
                });
            }
        };
        createStars();

        // Animation Loop
        let animationFrameId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw stars
            stars.forEach((star) => {
                ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
                ctx.fill();

                // Twinkle effect (Faster & More visible)
                star.opacity += (Math.random() - 0.5) * 0.03;
                if (star.opacity < 0.05) star.opacity = 0.05; // Dimmer minimum
                if (star.opacity > 1.0) star.opacity = 1.0;   // Brighter maximum

                // Random Drift Movement
                star.x += star.vx;
                star.y += star.vy;

                // Wrap around screen edges
                if (star.x < 0) star.x = canvas.width;
                if (star.x > canvas.width) star.x = 0;
                if (star.y < 0) star.y = canvas.height;
                if (star.y > canvas.height) star.y = 0;
            });

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            window.removeEventListener("resize", setSize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#030303]">
            {/* Star Canvas */}
            <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-transparent opacity-80" />

            {/* Noise Texture Overlay for Dithering */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

            {/* Dynamic Aurora Glow Layers - Buttery Smooth OKLCH Gradients */}
            <div className="absolute inset-x-0 bottom-0 h-[80vh] z-0 overflow-hidden pointer-events-none">
                {/* Blue Base - Drifts Right */}
                <div className="absolute bottom-[-20%] left-[-20%] w-[120vw] h-[100vh] rounded-[100%] bg-[radial-gradient(circle_at_center,_oklch(0.3_0.1_260_/_0.4)_0%,_oklch(0.3_0.1_260_/_0.2)_40%,_oklch(0.3_0.1_260_/_0)_70%)] blur-[120px] animate-drift-right-slow"></div>

                {/* Green Mid - Drifts Left */}
                <div className="absolute bottom-[-10%] right-[-20%] w-[100vw] h-[80vh] rounded-[100%] bg-[radial-gradient(circle_at_center,_oklch(0.5_0.15_150_/_0.3)_0%,_oklch(0.5_0.15_150_/_0.15)_40%,_oklch(0.5_0.15_150_/_0)_60%)] blur-[100px] animate-drift-left-slow"></div>

                {/* White/Cyan Highlight - Drifts Right (Faster) */}
                <div className="absolute bottom-[0%] left-[-10%] w-[90vw] h-[60vh] rounded-[100%] bg-[radial-gradient(circle_at_center,_oklch(0.9_0.05_190_/_0.25)_0%,_oklch(0.9_0.05_190_/_0.1)_30%,_oklch(0.9_0.05_190_/_0)_50%)] blur-[90px] animate-drift-right-fast"></div>
            </div>


        </div>
    );
}
