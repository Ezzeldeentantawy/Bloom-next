"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Props {
    src: string
    title: string
    department: string
}

export const Treatment = ({src, title, department} : Props) => {
    const cardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const card = cardRef.current;
        if (!card) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: card,
                    start: "top 80%",
                    end: "bottom 60%",
                    toggleActions: "play none none reverse",
                    markers: false,
                },
            });

            tl.from(card, {
                opacity: 0,
                y: 100,
                duration: 1,
                ease: "power3.out",
            })
                .from(card.querySelectorAll(".treatment-title, .department-title, .arrow-icon"), {
                    opacity: 0,
                    y: 30,
                    stagger: 0.4,
                    duration: 1.5,
                    ease: "back.out(1.7)",
                }, "-=0.4");
        }, card);

        return () => ctx.revert();
    }, []);


    const style = {
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    return( 
        <div 
            ref={cardRef}
            style={style} 
            className="relative flex items-center m-2 sm:m-6 md:m-10 h-96 justify-around flex-col w-[304px] sm:w-[360px] rounded"
        >
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>
            <div className="z-50 h-36 flex flex-col items-center justify-around">
                <div className="flex items-center justify-center font-bold">
                    <h1 className="treatment-title w-fit p-1 text-center before:rounded-2xl text-white text-xl sm:text-2xl md:text-3xl">
                        {title}
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="department-title text-white z-50 text-base sm:text-lg font-light">
                        {department}
                    </h1>
                </div>
                <div className="flex items-center justify-center mt-2">
                    <Link
                        href={`/departments/${department.replace(/\s+/g, '-').toLowerCase()}/` + `#${title.replace(/\s+/g, '-').toLowerCase()}`}
                    >
                        <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="arrow-icon text-4xl text-white z-50"
                        />
                    </Link>
                </div>
            </div>
        </div>
    )
}