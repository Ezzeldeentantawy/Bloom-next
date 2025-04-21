"use client";
import { useState } from "react";

export const Injectables = () => {
    const [isShow, setIsShow] = useState(false);
    const items = [
        "Botox",
        "Lip Filler",
        "Chin Fillers",
        "Jawline Fillers",
        "Nose Fillers",
        "Cheek Fillers",
        "Sculptra Fillers",
        "Profhilo Bioremodelling",
        "PRF For Hair",
        "PRF For Face",
        "Exosome For Face",
        "Exosomes For Hair",
        "Skin Boosters",
        "Bio Revitalisation",
        "Mesotherapy",
        "Hyper Pigmentation Injectables",
        "Acne Scars Injectables",
        "Collagen Skin Injectables",
        "Mesotherapy For Hair",
        "Growth Factor",
        "Hair Stem Cycle",
        "Fat-Dissolving Injections",
        "Threadlift Nose",
        "Threadlift Face",
        "Threadlift Eyes"
    ];

    return(
        <div className="my-6">
            <h1 className="text-lg sm:text-xl lg:text-2xl text-main-color">
                &bull; Injectables
            </h1>
            <h3 className="ps-4 text-white text-md sm:text-lg lg:text-xl">
                There are different kinds of cosmetic injectables, such as dermal fillers for adding 
                volume and smoothing wrinkles,
                and Botox for relaxing facial muscles to reduce the appearance of fine lines.
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