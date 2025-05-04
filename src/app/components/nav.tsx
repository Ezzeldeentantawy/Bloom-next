'use client';
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useRouter } from "next/navigation";

export const Navbar = () => {
    const [open, setOpen] = useState(false); 
    const nav = useRef<HTMLDivElement>(null);
    const mobileNav = useRef<HTMLUListElement>(null);
    const router = useRouter();

    useEffect(() => {
        const tl = gsap.timeline();
        if(open === true){
            gsap.fromTo(
                mobileNav.current,
                {x:-200, opacity:0},
                {x:0, opacity:1, duration:1},
            );
            tl.fromTo("#element1", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.35, delay: .15, ease: "back.in" })
                .fromTo("#element2", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.35, delay: .15, ease: "back.in" })
                .fromTo("#element3", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.35, delay: .15, ease: "back.in" })
                .fromTo("#element5", { x: 100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.35, delay: .15, ease: "back.in" })
                .fromTo("#element6", { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 0.35, delay: .15, ease: "back.in" })
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
            <nav ref={nav} className="nav-blurry-bg text-white z-10">
            <div className="hidden lg:flex flex-col justify-end pe-4 items-center py-0 lg:py-2">
                <div className="flex items-center justify-between w-full">
                    <div className="py-4">
                        <Image src="/header/nav/logo.png" alt="our logo"
                        width={170}
                        height={120}
                        />
                    </div>
                    <ul className="hidden lg:flex text-[18px] justify-between items-center z-10 pe-5">
                        <li className="relative flex gap-8">
                            <Link href="/" className="text-md hover:text-red-500">Home</Link>
                            <Link href="/#Whyus" className="text-md hover:text-red-500">Why us?</Link>
                            <Link
                                href="/#departments"
                                className="text-md hover:text-red-500">
                                Departments
                            </Link>
                            <Link href="/contact-us" className="text-md hover:text-red-500">Contact</Link>
                            <Link href="/book-now" className="text-md hover:text-red-500">Book now</Link>
                        </li>
                    </ul>
                </div>
            </div>
                <div className="lg:hidden fixed top-0 left-0 right-0 w-full h-[91.06px] lg:h-[131px] backdrop-blur-none bg-[#00000099] z-50 flex items-center justify-between p-4">
                    <div 
                    onClick={() => router.push("/book-now")}
                    className="flex items-center justify-center gap-4">
                        <Image
                            src="/header/nav/logo.png"
                            alt="our logo"
                            width={120}
                            height={100}
                        />
                    </div>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                setOpen(!open);
                            }}
                            className="flex items-center justify-center gap-4"
                        >
                            <FontAwesomeIcon icon={faBars} className="w-10 h-10 text-2xl" />
                        </button>
                </div>
            
        </nav>
                        {open &&
                            <ul ref={mobileNav} className="ms-auto bg-white shadow-2xl w-[180px] sm:w-[220px] text-black mobile-nav-blurry-bg flex flex-col lg:hidden z-1000">
                                <button
                                    className="text-2xl sm:text-4xl text-start ms-4"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setOpen(false);
                                    }}
                                >
                                    ×
                                </button>
                                <li className="flex flex-col justify-around gap-5 w-full">
                                    <Link id="element1"
                                        onClick={() => setOpen(false)}
                                        href="/#"
                                        className={`py-2 rounded-2xl text-md flex items-center justify-center hover:text-red-500`}>
                                        Home
                                    </Link>
                                    <Link
                                        onClick={() => setOpen(false)}
                                        id="element2" href="/#Whyus" className="flex items-center justify-center text-md hover:text-red-500">
                                        Why us?
                                    </Link>
                                    <Link id="element3"
                                        onClick={() => setOpen(false)}
                                        href="/#departments"
                                        className="text-md flex items-center justify-center hover:text-red-500">
                                        Departments
                                    </Link>
                                    <Link id="element5" href="/contact-us" className={`rounded-2xl py-2 text-md flex items-center justify-center hover:text-red-500`}>
                                        Contact
                                    </Link>
                                    <Link id="element6" href="/book-now" className={`rounded-2xl py-2 text-md flex items-center justify-center hover:text-red-500`}>
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