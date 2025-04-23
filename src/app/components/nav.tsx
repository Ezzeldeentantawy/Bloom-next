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
import { useState } from "react";
import { usePathname } from "next/navigation";

export const Navbar = () => {
    const [open, setOpen] = useState(false); 
    const pathname = usePathname();
    return(
        <nav className="relative nav-blurry-bg text-white z-10">
            <div className="hidden lg:flex justify-between items-center border-b border-white">
                <div className="flex items-center justify-center gap-4">
                    <div className="flex items-center text-sm p-1 ps-2">
                        <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                        <Link
                            className="hover:text-red-600 ps-2 transition duration-300"
                            href="tel:+010000000">
                            +971010000000
                        </Link>
                    </div>
                    <span className="border-r border-white py-4"></span>
                    <div className="flex items-center text-md p-1">
                        <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                        <Link
                            className="hover:text-red-600 ps-2 transition duration-300"
                            href="example@test.com">
                            example@test.com
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center pe-5 gap-4">
                    <i aria-label="our youtube channel">
                        <FontAwesomeIcon icon={faYoutube} className="w-6 h-6 hover:text-red-600 transition duration-300" />
                    </i>
                    <span className="border-r border-white py-4"></span>
                    <i aria-label="our facebook page">
                        <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5 hover:text-blue-600 transition duration-300" />
                    </i>
                    <span className="border-r border-white py-4"></span>
                    <i aria-label="our instagram page">
                        <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 hover:text-orange-500 transition duration-300" />
                    </i>
                </div>
            </div>
            <ul className="hidden lg:flex justify-between items-center z-10 pe-5">
                <li className="text-2xl font-bold ms-5">
                    <Image src="/header/nav/logo.png" alt="our logo"
                    width={120}
                    height={100}
                    />
                </li>
                <li className="relative flex gap-4">
                    <Link href="#" className="text-md hover:text-red-500">Home</Link>
                    <span className="border-r border-white py-3"></span>
                    <Link href="/#Whyus" className="text-md hover:text-red-500">Why us?</Link>
                    <span className="border-r border-white py-3"></span>
                    <Link
                    href="/#departments" 
                    className="text-md hover:text-red-500">
                        Departments
                    </Link>
                    <span className="border-r border-white py-3"></span>
                    <Link href="#" className="text-md hover:text-red-500">Experts</Link>
                    <span className="border-r border-white py-3"></span>
                    <Link href="#" className="text-md hover:text-red-500">Contact</Link>
                    <span className="border-r border-white py-3"></span>
                    <Link href="#" className="text-md hover:text-red-500">Book now</Link>
                </li>
            </ul>
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
                onClick={() => setOpen(!open)}
                className="flex items-center justify-center gap-4">
                    <FontAwesomeIcon icon={faBars} className="w-10 h-10 text-2xl" />
                </button>
            </div>
            {open && 
            <ul className="fixed h-screen mobile-nav-blurry-bg inset-0 flex flex-col lg:hidden py-5">
                <button
                className="text-4xl sm:text-6xl text-start m-4"
                onClick={() => setOpen(false)}
                >
                        ×
                </button>
                <li className="relative flex flex-col justify-around w-full h-full my-4">
                    <Link 
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
                        <Link href="/#Whyus" className=" flex items-center justify-center text-md hover:text-red-500">
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
                    <Link
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
                        <Link href="#" className="text-md flex items-center justify-center hover:text-red-500">
                            <Image
                                src="/header/nav/experts.png"
                                alt="home page"
                                className="me-2"
                                width={32}
                                height={32}
                            />
                    Experts
                    </Link>
                        <span className="border-b border-white py-3"></span>
                        <Link href="#" className="text-md flex items-center justify-center hover:text-red-500">
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
                        <Link href="#" className="text-md flex items-center justify-center hover:text-red-500">
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
        </nav>
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