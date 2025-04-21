"use client";
import { useState } from "react";

export const MedicalDermatology = () => {
    const [isShow, setIsShow] = useState(false);
    const items = [
        "Skin Tag Removal",
        "Wart Removal",
        "BENIGN VASCULAR LESIONS",
        "Mole Removal",
        "Tattoo Removal",
        "Naturapeel",
        "Pseudo folliculitis Barbae (BFB)",
        "Elimination of epidermal pigmentations",
        "Vascular anomalies",
        "Removal of age spots and freckles",
        "Removal of facial and leg veins",
        "Hemangioma",
        "Rosacea",
        "Skin tightening and wrinklereducation",
        "Superficial pigmented lesions",
        "Active Acne",
        "SPIDER ANGIOMA",
        "sun and age spots",
        "Skin ablation",
        "Full skin resurfacin",
    ];

    return(
        <div className="my-6">
            <h1 className="text-lg sm:text-xl lg:text-2xl text-main-color">
                &bull; Medical Dermatology(Clinical Skinderm)& Aesthetic
            </h1>
            <h3 className="ps-4 text-white text-md sm:text-lg lg:text-xl">
                Skin Rejuvenation treatments are designed to restore 
                a youthful, radiant appearance by targeting various signs of aging and skin damage.
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