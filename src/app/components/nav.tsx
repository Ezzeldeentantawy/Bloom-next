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

export const Navbar = () => {
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
                    <Image src="/nav/logo.png" alt="our logo"
                    width={120}
                    height={100}
                    />
                </div>
                <div className="flex items-center justify-center gap-4">
                    <FontAwesomeIcon icon={faBars} className="w-10 h-10 text-2xl" />
                </div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between text-black">
                <button className="bg-orange-400 rounded-2xl hover:bg-orange-500 text-white font-bold py-2 px-4 mt-4 mb-2">
                    <Link href={"/book-now"}>
                        book now
                    </Link>
                </button>
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
        </nav>
    )
}