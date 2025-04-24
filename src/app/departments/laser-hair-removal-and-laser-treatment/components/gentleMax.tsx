"use client";
import { useState } from "react";

export const GentleMaxPro = () => {
    const [isShow, setIsShow] = useState(false);
    const items = [
        "IDUal Wavelength: alexandrite (755 nm) & Nd:YAG (1064 nm) for all skin types",
        "Hair Removal:Targets coarse and fine (vellus) hair efficiently",
        "Pigmentation & Rejuvenation: Treats sun damage, pigmentation, vascular lesions, and skin tightening",
        "Comfort & Safety: Dynamic Cooling Device (DCD) minimizes discomfort",
    ];

    return(
        <div className="my-6">
            <h1 className="text-lg sm:text-xl lg:text-2xl text-main-color">
                &bull; GentleMax Pro
            </h1>
            <h3 className="ps-4 text-white text-md sm:text-lg lg:text-xl">
                GentleMax Pro by Candela is a dual-wavelength laser platform that combines a 755nm Alexandrite laser and a 1064nm Nd:YAG laser, enabling safe and effective treatments across all skin types.
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