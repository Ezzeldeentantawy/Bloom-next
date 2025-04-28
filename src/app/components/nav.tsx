'use client';
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export const Navbar = () => {
    const [open, setOpen] = useState(false); 
    const nav = useRef<HTMLDivElement>(null);
    const mobileNav = useRef<HTMLUListElement>(null);

    useEffect(() => {
        gsap.fromTo(
            nav.current,
            {y:-100, opacity:0},
            {y:0, opacity:1, duration:1}
        );
        const tl = gsap.timeline();
        if(open === true){
            gsap.fromTo(
                mobileNav.current,
                {y:-100, opacity:0},
                {y:0, opacity:1, duration:1},
            );
            tl.fromTo("#element1", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: .5, ease: "back.in" })
                .fromTo("#element2", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: .02, ease: "back.in" })
                .fromTo("#element3", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: .02, ease: "back.in" })
                .fromTo("#element4", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: .02, ease: "back.in" })
                .fromTo("#element5", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: .02, ease: "back.in" })
                .fromTo("#element6", { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, delay: .02, ease: "back.in" })
        }else{
            gsap.fromTo(
                mobileNav.current,
                { x: 0, opacity: 1 },
                { x: 100, opacity: 0, duration: 1 },
            )
        }
    })

    const pathname = usePathname();
    return(
    <>
        <nav ref={nav} className="block nav-blurry-bg text-white z-10">
            <div className="hidden lg:flex flex-col justify-end pe-4 items-center py-0 lg:py-6">
                <ul className="hidden lg:flex justify-between items-center z-10 pe-5">
                    <li className="relative flex gap-8">
                        <Link href="#" className="text-md hover:text-red-500">Home</Link>
                        <Link href="/#Whyus" className="text-md hover:text-red-500">Why us?</Link>
                        <Link
                        href="/#departments" 
                        className="text-md hover:text-red-500">
                            Departments
                        </Link>
                        <Link href="#" className="text-md hover:text-red-500">Contact</Link>
                        <Link href="#" className="text-md hover:text-red-500">Book now</Link>
                    </li>
                </ul>
                <div className="text-2xl font-bold py-4">
                    <Image src="/header/nav/logo.png" alt="our logo"
                    width={180}
                    height={180}
                    />
                </div>
                <div className="flex items-center justify-center gap-10">
                    <div className="flex items-center text-sm p-1 ps-2">
                        <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                        <Link
                            className="hover:text-red-600 ps-2 transition duration-300"
                            href="tel:+010000000">
                        </Link>
                    </div>
                    <div className="flex items-center justify-center text-md ps-2">
                        <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                        <Link
                            className="hover:text-red-600 ps-2 transition duration-300"
                            href="example@test.com">
                        </Link>
                    </div>
                    <i aria-label="our youtube channel">
                        <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 hover:text-red-600 transition duration-300" />
                    </i>
                    <i aria-label="our facebook page">
                        <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5 hover:text-blue-600 transition duration-300" />
                    </i>
                    <i aria-label="our instagram page">
                        <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 hover:text-orange-500 transition duration-300" />
                    </i>
                </div>
            </div>
            <div className="lg:hidden flex items-center justify-between p-4">
                <div>
                    <FontAwesomeIcon icon={faPhone} className="w-6 h-6" />
                    <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
                </div>
                <div className="flex items-center justify-center gap-4">
                    <Image src="/header/nav/logo.png" alt="our logo"
                    width={120}
                    height={100}
                    />
                </div>
                <button 
                onClick={(e) => {
                    e.preventDefault();
                    setOpen(!open);
                }
                }
                className="flex items-center justify-center gap-4">
                    <FontAwesomeIcon icon={faBars} className="w-10 h-10 text-2xl" />
                </button>
            </div>
        </nav>
            {open && 
            <ul ref={mobileNav} className="h-full text-white mobile-nav-blurry-bg inset-0 flex flex-col lg:hidden z-30">
                <button
                className="text-4xl sm:text-6xl text-start m-4"
                onClick={(e) => {
                    e.preventDefault();
                    setOpen(false);
                }}
                >
                        ×
                </button>
                <li className="relative flex flex-col justify-around w-full h-full my-4">
                    <Link id="element1" 
                    href="#" 
                    className={`${pathname === "/" ? "mcbg" : "" } mx-28 py-2 rounded-2xl text-md flex items-center justify-center hover:text-red-500`}>
                    <Image 
                    src="/header/nav/home.png"
                    alt="home page"
                    className="me-2"
                    width={32}
                    height={32}
                    />
                    Home
                    </Link>
                    <span className="border-b border-white py-3"></span>
                        <Link id="element2" href="/#Whyus" className=" flex items-center justify-center text-md hover:text-red-500">
                    <Image
                        src="/header/nav/help.png"
                        alt="home page"
                        className="me-2"
                        width={32}
                        height={32}
                    />
                    Why us?
                    </Link>
                    <span className="border-b border-white py-3"></span>
                    <Link id="element3"
                        href="/#departments"
                            className="text-md flex items-center justify-center hover:text-red-500">
                            <Image
                                src="/header/nav/structure.png"
                                alt="home page"
                                className="me-2"
                                width={32}
                                height={32}
                            />
                        Departments
                    </Link>
                        <span className="border-b border-white py-3"></span>
                        <Link id="element5" href="#" className="text-md flex items-center justify-center hover:text-red-500">
                            <Image
                                src="/header/nav/contact.png"
                                alt="home page"
                                className="me-2"
                                width={32}
                                height={32}
                            />
                    Contact
                    </Link>
                    <span className="border-b  border-white py-3"></span>
                        <Link id="element6" href="#" className="text-md flex items-center justify-center hover:text-red-500">
                            <Image
                                src="/header/nav/booking.png"
                                alt="home page"
                                className="me-2"
                                width={32}
                                height={32}
                            />
                    Book now
                    </Link>
                </li>
            </ul>
            }
    </>
    )
}
{/* <div className="fixed bottom-0 left-2 right-2 flex items-center justify-between text-black">
    <button className="mcbg rounded-2xl text-white font-bold py-2 px-4 mt-4 mb-2">
        <Link href={"/book-now"}>
            Book Now
        </Link>
    </button>
    <div className="flex items-center justify-center pe-5 gap-4 text-white">
        <i aria-label="our youtube channel">
            <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 hover:text-red-600 transition duration-300" />
        </i>
        <span className="py-4"></span>
        <i aria-label="our facebook page">
            <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5 hover:text-blue-600 transition duration-300" />
        </i>
        <span className="py-4"></span>
        <i aria-label="our instagram page">
            <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 hover:text-orange-500 transition duration-300" />
        </i>
    </div>
</div> */}