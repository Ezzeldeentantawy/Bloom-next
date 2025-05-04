"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faYoutube, faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Navbar } from "./nav";
import Link from "next/link";

export const Header = () => {
    const router = useRouter();
    const titleRef = useRef<HTMLHeadingElement>(null);
    const descRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        gsap.fromTo(
            titleRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.1 }
        );
        gsap.fromTo(
            descRef.current,
            { y: -30, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.4 }
        );
        gsap.fromTo(
            buttonRef.current,
            { y: -20, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.7 }
        );
    }, []);

    return (
        <div className="relative flex flex-col h-screen sm:h-screen md:h-[600px] lg:h-[700px] text-white">

            <Navbar />
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
            >
                <source src="/header/header.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#fac06a] to-transparent opacity-60 z-0" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-60 z-0" />
            <div className="flex flex-col items-center justify-center text-center my-auto px-4 z-0">
                <button
                    ref={buttonRef}
                    onClick={() => router.push("/book-now")}
                    className="text-base sm:text-lg mt-6 border-2 border-[#ee2424] text-white font-bold py-2 px-6 rounded shadow-lg hover:shadow-2xl hover:text-black transition-all duration-300"
                >
                    Book Now
                </button>
                <div className="flex items-center gap-4 mt-16">
                    <Link
                            className="hover:text-red-600 text-[20px] sm:text-[22px] md:text-[24px] transition duration-300"
                            href="tel:+010000000">
                            <FontAwesomeIcon icon={faPhone}/>
                    </Link>
                    <Link
                            className="hover:text-red-600 text-[20px] sm:text-[22px] md:text-[24px] ps-2 transition duration-300"
                            href="mailto:eldeene103@gmail.com"
                            target="_blank">
                            <FontAwesomeIcon icon={faEnvelope} />
                    </Link>
                    <Link
                    href="https://www.youtube.com"
                    target="_blank"
                    >
                        <i aria-label="our youtube channel">
                            <FontAwesomeIcon icon={faYoutube} className="hover:text-red-600 text-[20px] sm:text-[22px] md:text-[24px] transition duration-300" />
                        </i>
                    </Link>
                    <Link
                    href="https://www.facebook.com"
                    target="_blank"
                    >
                        <i aria-label="our facebook page">
                            <FontAwesomeIcon icon={faFacebookF} className="hover:text-blue-600 text-[20px] sm:text-[22px] md:text-[24px] transition duration-300" />
                        </i>
                    </Link>
                    <Link
                    href="https://www.instagram.com"
                    target="_blank"
                    >
                        <i aria-label="our instagram page">
                            <FontAwesomeIcon icon={faInstagram} className="hover:text-orange-500 text-[20px] sm:text-[22px] md:text-[24px] transition duration-300" />
                        </i>
                    </Link>
                </div>
            </div>
            <Link
                href="https://wa.me/201284124174"
                target="_blank"
                aria-label="Chat on WhatsApp"
                className="fixed z-30 bottom-4 right-4 flex items-center justify-center size-16 bg-[#c8c8c8] rounded-full shadow-md hover:shadow-xl transition-transform hover:scale-110"
            >
                <span className="absolute rounded-full top-0 left-0 size-5 bg-green-500"></span>
                <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-4xl" />
            </Link>
        </div>
    );
};
