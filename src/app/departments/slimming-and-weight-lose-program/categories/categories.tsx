"use client";
import { useState } from "react";
import data from "./categories.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const Categories = () => {
    const [visible, setVisible] = useState<boolean[]>(() => data.map(() => false));

    const toggleIndex = (index: number) => {
        setVisible((prev) =>
            prev.map((value, i) => (i === index ? !value : value))
        );
    };

    return(
        <div className="my-6">
            {data.map((category, index) => (
                <div key={index}>
                    <h1 className="text-lg sm:text-xl lg:text-2xl text-[#ee2424]">
                        &bull; {category.title}
                    </h1>
                    <h3 className="ps-4 text-black text-md sm:text-lg lg:text-xl">
                        {category.description}
                    </h3>
                    <button
                        onClick={() => toggleIndex(index)}
                        className="p-2 ms-4 my-2 text-[22px] sm:text-[24px] md:text-[26px]">
                        {visible[index] ? <FontAwesomeIcon icon={faEyeSlash} className="text-black hover:text-[#ee2424]" />
                            :
                            <FontAwesomeIcon icon={faEye} className="text-black hover:text-[#ee2424]" />}
                    </button>
                    <div className={`transition-all duration-500 overflow-hidden ${visible[index] ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                            <div className="w-full max-w-2xl rounded-2xl">
                                <ol className="list-decimal list-inside space-y-2 text-black  text-base sm:text-lg">
                                    {category.items.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    <div className="text-center my-4">
                        <span className="border-b border-black px-24 sm:px-32 md:px-48 lg:px-64"></span>
                    </div>
                </div>
            ))}
        </div>
    )
}