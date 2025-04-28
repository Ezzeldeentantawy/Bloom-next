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
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        // Ensure refs are available
        if (
        !cardRef.current ||
        !overlayRef.current ||
        !imageRef.current ||
        !titleRef.current ||
        !descRef.current ||
        !buttonRef.current
        )
        return;

        // Set initial states
        gsap.set(overlayRef.current, { y: 0 });
        gsap.set(imageRef.current, { opacity: 0 });
        gsap.set([titleRef.current, descRef.current, buttonRef.current], { y: -50, opacity: 0 });

        // Create timeline
        timelineRef.current = gsap.timeline({ paused: true })
        // Slide down beige overlay to reveal image
        .to(overlayRef.current, {
            y: '100%',
            duration: 1,
            ease: 'power2.out',
        })
        // Fade in image
        .to(
            imageRef.current,
            {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
            },
            '-=0.8'
        )
        // Slide in title
        .to(
            titleRef.current,
            {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            },
            '-=0.4'
        )
        // Slide in description
        .to(
            descRef.current,
            {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            },
            '-=0.4'
        )
        // Slide in button
        .to(
            buttonRef.current,
            {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            },
            '-=0.4'
        );

        // ScrollTrigger to control animation
        ScrollTrigger.create({
        trigger: cardRef.current,
        start: 'top 85%', // Trigger when card's top is 85% from viewport top
        end: 'bottom 20%', // End when card's bottom is 20% from viewport top
        onEnter: () => timelineRef.current?.restart(), // Play on scroll down
        onEnterBack: () => timelineRef.current?.restart(), // Play on scroll up
        onLeave: () => timelineRef.current?.progress(0).pause(), // Reset when leaving downward
        onLeaveBack: () => timelineRef.current?.progress(0).pause(), // Reset when leaving upward
        });

        // Clean up ScrollTrigger and timeline on unmount
        return () => {
        timelineRef.current?.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div
        className="flex items-center justify-center flex-col min-w-92 max-w-96 bg-white pt-2 shadow-2xl rounded-2xl relative"
        ref={cardRef}
        >
        <div className="relative">
            {/* Beige overlay */}
            <div
            className="z-10"
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
            className="w-32 py-2 flex items-center justify-center mt-2 mb-2"
            ref={buttonRef}
            >
            <Link
                href={`/departments/${title.replace(/\s+/g, '-').toLowerCase()}`}
            >
                <Image
                src="/departments-section/right.png"
                alt='show more'
                className='w-16 sm:w-20'
                width={256}
                height={256}
                />
            </Link>
            </div>
        </div>
        </div>
    );
    };