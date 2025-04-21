"use client";
import { useState } from "react";

export const FaceContouring = () => {
    const [isShow, setIsShow] = useState(false);
    const items = [
        "Exion Face RF",
        "4 plus",
        "Advalight",
        "Eximia Face",
        "HEBE Face",
        "M shape",
    ];

    return(
        <div className="my-6">
            <h1 className="text-lg sm:text-xl lg:text-2xl text-main-color">
                &bull; Face Contouring
            </h1>
            <h3 className="ps-4 text-white text-md sm:text-lg lg:text-xl">
                Welcome to our Face Contouring Department, where precision meets artistry to enhance your 
                natural beauty! Our expert team specializes in advanced facial sculpting techniques, using non-surgical 
                and minimally invasive procedures to define, reshape, and rejuvenate your facial features.
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