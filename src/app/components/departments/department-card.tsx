'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

    interface Props {
    src: string;
    alt: string;
    title: string;
    describtion: React.ReactNode;
    }

    export const DepartmentCard: React.FC<Props> = ({ src, alt, title, describtion }) => {
    // Refs for card and child elements
    const cardRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const descRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Ensure refs are available
        if (!cardRef.current || !overlayRef.current || !imageRef.current || !titleRef.current || !descRef.current || !buttonRef.current) return;

        // Set initial state for image (hidden behind overlay)
        gsap.set(imageRef.current, { opacity: 0 });

        // Create timeline for sequential animations
        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: cardRef.current,
            start: 'top 85%', 
            end: 'bottom 15%',
            toggleActions: 'play none none reset', // Play on enter, reset on leave
        },
        });

        // Add animations to timeline
        tl
        // Slide down beige overlay to reveal image
        .to(overlayRef.current, {
            y: '100%',
            duration: 1,
            ease: 'power2.out',
        })
        // Fade in image
        .to(imageRef.current, {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
        }, '-=0.8') // Overlap with overlay
        // Slide in title
        .fromTo(
            titleRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
            '-=0.4'
        )
        // Slide in description
        .fromTo(
            descRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
            '-=0.4'
        )
        // Slide in button
        .fromTo(
            buttonRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
            '-=0.4'
        );

        // Clean up ScrollTrigger on unmount
        return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div
        className="flex items-center justify-center flex-col min-w-80 w-96 bg-white pt-2 shadow-lg rounded-2xl relative"
        ref={cardRef}
        >
        <div className="relative">
            {/* Beige overlay */}
            <div
            className="absolute inset-0 bg-beige z-10"
            ref={overlayRef}
            ></div>
            <Image
            src={src}
            alt={alt}
            width={350}
            height={200}
            className="rounded-lg"
            loading="lazy"
            ref={imageRef}
            />
        </div>
        <div className="flex h-64 flex-col items-center justify-around">
            <h1
            className="text-2xl mb-auto font-bold text-center mt-4"
            ref={titleRef}
            >
            {title}
            </h1>
            <div
            className="text-center overflow-hidden text-ellipsis whitespace-wrap line-clamp-3 px-2"
            ref={descRef}
            >
            {describtion}
            </div>
            <div
            className="w-32 h-fit mcbg text-center text-white rounded-2xl font-bold py-2 px-4 mt-6 mb-4"
            ref={buttonRef}
            >
            <Link
                href={`/ departments / ${ title.replace(/\s+/g, '-').toLowerCase() } `}
                className="w-full"
            >
                Show more...
            </Link>
            </div>
        </div>
        </div>
    );
    };