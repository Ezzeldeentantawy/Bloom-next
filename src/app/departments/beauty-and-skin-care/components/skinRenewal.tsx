"use client";
import { useState } from "react";

export const SkinRenewal = () => {
    const [isShow, setIsShow] = useState(false);
    const items = [
        "Microneedling Therapies",
        "Mesotherapy",
        "Microneedling",
        "Oxyneedling",
        "BB Glow",
        "Dermapen Mesofacial",
        "Exion RF Microneedling",
        "4 plus RF Microneedling",
        "4 plus fractional RF Microneedling",
    ];

    return(
        <div className="my-6">
            <h1 className="text-lg sm:text-xl lg:text-2xl text-main-color">
                &bull; Skin Renewal & Microneedling Treatments
            </h1>
            <h3 className="ps-4 text-white text-md sm:text-lg lg:text-xl">
                Experience revolutionary skin transformation with our Skin Renewal & Microneedling Treatments! This collagen-inducing therapy uses ultra-fine needles to create micro-channels, triggering your skin's natural healing process for dramatic rejuvenation.
            </h3>
            <button 
            onClick={() => setIsShow(!isShow)}
            className="mcbg rounded-2xl p-2 ms-4 my-2">
                {isShow ? "Hide" : "Show All"}
            </button>
            <div className={`transition-all duration-500 overflow-hidden ${isShow ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}>
                    <div className="w-full max-w-2xl rounded-2xl">
                        <ol className="list-decimal list-inside space-y-2 text-white text-base sm:text-lg">
                            {items.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            <div className="text-center my-4">
                <span className="border-b border-white px-24 sm:px-32 md:px-48 lg:px-64"></span>
            </div>
        </div>
    )
}