"use client";
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "./nav"

export const Header = () => {
    const button = useRef<HTMLButtonElement>(null);
    useEffect(() => {
        gsap.fromTo(
            button.current,
            {y:-100, opacity:0},
            {y:0, opacity:1, duration:1}
        );
    },[])
    return(
        <div className="flex flex-col mcbg h-screen sm:h-[500px] md:h-[600px] lg:h-[700px]">
            <Navbar />
            <div className="flex items-center justify-center my-auto">
                <button ref={button} className="border-2 border-white text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-2xl">
                    Book now
                </button>
            </div>
            <div className="fixed z-30 bottom-4 right-4 flex items-center justify-center size-16 bg-[#c8c8c8] rounded-full">
                <span className="absolute rounded-full top-0 left-0 size-5 bg-green-500"></span>
                <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-4xl" />
            </div>
        </div>
    )
}