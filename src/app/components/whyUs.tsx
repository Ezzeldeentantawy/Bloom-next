"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const WhyUs = () => {
    // Refs with TypeScript types
    const sectionRef = useRef<HTMLElement | null>(null);
    const svgRefs = useRef<SVGSVGElement[]>([]);

    useEffect(() => {
        // Ensure refs are available
        if (!sectionRef.current || svgRefs.current.length === 0) return;

        // Set initial stroke properties for drawing effect
        svgRefs.current.forEach((svg) => {
            const paths = svg.querySelectorAll('path');
            paths.forEach((path: SVGPathElement) => {
                const length = path.getTotalLength();
                gsap.set(path, {
                    strokeDasharray: length,
                    strokeDashoffset: length,
                });
            });
        });

        // Animate each SVG's paths with stagger
        svgRefs.current.forEach((svg, index) => {
            const paths = svg.querySelectorAll('path');
            gsap.to(paths, {
                strokeDashoffset: 0,
                duration: 1.5,
                ease: 'power2.out',
                stagger: 0.3, // Stagger paths within each SVG
                delay: index * 0.6, // Stagger SVGs
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%', // Start when top of section is 80% from top of viewport
                    toggleActions: 'play none none reset', // Play on enter, reset on leave
                },
            });
        });
        gsap.fromTo(
            sectionRef.current,
            { y: -100, opacity: 0 },
            {
                y: 0, opacity: 1, duration: 1,
                scrollTrigger: {
                    start: 'top 85%', // Trigger when card's top is 85% from viewport top
                    toggleActions: 'play none none reset',
                }
            },
        )

        // Clean up ScrollTrigger on component unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    // Helper to assign refs to SVGs
    const addToSvgRefs = (el: SVGSVGElement | null) => {
        if (el && !svgRefs.current.includes(el)) {
            svgRefs.current.push(el);
        }
    };

    return (
        <section
            className="why-shadow py-12 px-6 md:px-20 my-5"
            id="Whyus"
            ref={sectionRef}
        >
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-main-color">Why Choose Us?</h2>
                <p className="text-white mt-2">Discover what sets our beauty clinic apart</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
                {/* Expertise */}
                <div className="flex flex-col items-center">
                    <svg
                        className="w-12 h-12 text-red-500 mb-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        ref={addToSvgRefs}
                        aria-label="Expert Team Icon"
                    >
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.75a12.083 12.083 0 01-6.16-11.172L12 14z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-main-color">Expert Team</h3>
                    <p className="text-white mt-2">
                        Certified professionals dedicated to your skincare and beauty goals.
                    </p>
                </div>

                {/* Technology */}
                <div className="flex flex-col items-center">
                    <svg
                        className="w-12 h-12 text-red-500 mb-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        ref={addToSvgRefs}
                        aria-label="Technology Icon"
                    >
                        <path d="M9.75 3v1.5M14.25 3v1.5M3 6.75h18M4.5 6.75v12A2.25 2.25 0 006.75 21h10.5A2.25 2.25 0 0019.5 18.75v-12" />
                    </svg>
                    <h3 className="text-lg font-semibold text-main-color">Advanced Technology</h3>
                    <p className="text-white mt-2">
                        We use the latest equipment to deliver safe, effective treatments.
                    </p>
                </div>

                {/* Personalized Care */}
                <div className="flex flex-col items-center">
                    <svg
                        className="w-12 h-12 text-red-500 mb-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        ref={addToSvgRefs}
                        aria-label="Personalized Care Icon"
                    >
                        <path d="M12 4.5c2.485 0 4.5 2.015 4.5 4.5S14.485 13.5 12 13.5 7.5 11.485 7.5 9 9.515 4.5 12 4.5z" />
                        <path d="M12 13.5c-3.314 0-6 2.686-6 6v.75h12V19.5c0-3.314-2.686-6-6-6z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-main-color">Personalized Treatments</h3>
                    <p className="text-white mt-2">
                        Tailored skincare plans that suit your unique skin type and needs.
                    </p>
                </div>
            </div>
        </section>
    );
}