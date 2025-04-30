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
    list: React.ReactNode
    }

    export const DepartmentCard: React.FC<Props> = ({ src, alt, title, describtion, list }) => {
    // Refs for card and child elements
    const cardRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const imageRef = useRef<HTMLImageElement | null>(null);
    const titleRef = useRef<HTMLHeadingElement | null>(null);
    const descRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLAnchorElement | null>(null);
    const featureRef = useRef<HTMLDivElement | null>(null);
    const listRef = useRef<HTMLDivElement | null>(null);
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
        gsap.set([titleRef.current, descRef.current, buttonRef.current, featureRef.current, listRef.current], { y: -50, opacity: 0 });

        // Create timeline
        timelineRef.current = gsap.timeline({ paused: true })
        // Slide down beige overlay to reveal image
        .to(overlayRef.current, {
            y: '100%',
            duration: 1,
            ease: 'power2.out',
        })
        // Fade in image
            .fromTo(
                imageRef.current,
                { opacity: 0, scale: 1.2 },
                { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' },
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
            featureRef.current,
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'power2.out',
            },
            '-=0.4'
            )
            .to(
                listRef.current,
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power2.out',
                },
                '-=0.4'
            )
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
        className="flex items-center justify-center flex-col min-w-96 max-w-96 bg-white pt-2 shadow-2xl rounded relative mx-auto"
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
            className="rounded"
            loading="lazy"
            ref={imageRef}
            />
        </div>
        <div className="flex h-92 flex-col px-4 justify-around">
            <h1
            className="text-[20px] my-2 font-bold text-center mt-4"
            ref={titleRef}
            >
            {title}
            </h1>
            <div
            className="text-[16px] sm:text-[18px] text-start overflow-hidden text-ellipsis whitespace-wrap font-light line-clamp-3 px-2"
            ref={descRef}
            >
            {describtion}
            </div>
            <div ref={featureRef} className='flex items-center justify-center'>
                <span className='border-b border-[#ee2424] px-10'></span>
                    <p className='mx-2 text-[14px] sm:text-[16px] font-bold'>Featured treatments</p>
                <span className='border-b border-[#ee2424] px-10'></span>
            </div>
            <div ref={listRef} className='my-auto text-start ps-2 text-[14px] sm:text-[16px] font-bold'>
                {list}
            </div>
            <Link
                ref={buttonRef}
                    className='py-2 flex items-center bg-[#fac06a] px-2 my-4 border-2 border-[#ffa826] shadow-2xl rounded justify-center'
                href={`/departments/${title.replace(/\s+/g, '-').toLowerCase()}`}
            >
                {title} &rarr;
            </Link>
        </div>
        </div>
    );
    };