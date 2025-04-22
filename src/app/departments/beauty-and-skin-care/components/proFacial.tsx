"use client";
import { useState } from "react";

export const ProfessionalFacials = () => {
    const [isShow, setIsShow] = useState(false);
    const items = [
        "HydraFacial MD",
        "AquaGold Facial",
        "OxyGeneo Facial",
        "AnteAGE Exosomes Facial",
        "Stem Cell Infusion Facial",
        "Fire and Ice Facial",
    ];

    return(
        <div className="my-6">
            <h1 className="text-lg sm:text-xl lg:text-2xl text-main-color">
                &bull; Professional Facials
            </h1>
            <h3 className="ps-4 text-white text-md sm:text-lg lg:text-xl">
                Experience customized skincare with 
                our Professional Facials, designed by licensed estheticians to target your unique concerns.
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