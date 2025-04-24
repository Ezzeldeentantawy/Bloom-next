"use client";
import { useState } from "react";

export const FaceAndNeckTightening = () => {
    const [isShow, setIsShow] = useState(false);
    const items = [
        "EMFACE",
        "plus RF Fractional",
        "Exion RF Face Contouring",
        "Eximia face",
        "HEBE Face",
    ];

    return(
        <div className="my-6">
            <h1 className="text-lg sm:text-xl lg:text-2xl text-main-color">
                &bull; Face and Neck Tightening
            </h1>
            <h3 className="ps-4 text-white text-md sm:text-lg lg:text-xl">
                Say goodbye to sagging skin with our advanced Face & Neck Tightening treatments! Using cutting-edge technologies like radiofrequency, microcurrent, or ultrasound therapy, we stimulate collagen production to naturally lift and contour your jawline, cheeks, and neck.
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