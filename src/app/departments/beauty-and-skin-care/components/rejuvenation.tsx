"use client";
import { useState } from "react";

export const RejuvenationFacial = () => {
    const [isShow, setIsShow] = useState(false);
    const items = [
        "Nimue Facial",
        "DMK Facial",
        "DMK Facial",
        "BIO Medical Facial",
        "DMK Enzyme Therapy Facial",
        "PCA Skin",
        "Vitamin Facial",
    ];

    return(
        <div className="my-6">
            <h1 className="text-lg sm:text-xl lg:text-2xl text-main-color">
                &bull; Rejuvenation Facial
            </h1>
            <h3 className="ps-4 text-white text-md sm:text-lg lg:text-xl">
                Our signature Rejuvenation Facial is your ultimate anti-aging solution, designed to combat fine lines, dullness, and loss of elasticity.
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