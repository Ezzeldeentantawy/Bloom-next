"use client";
import { useState, useEffect } from "react";
import data from "./categories.json"
import { SlashSvg } from "@/app/components/slashSvg";
import { Svg } from "@/app/components/svg";

export const Categories = () => {
    const [visible, setVisible] = useState<boolean[]>(() => data.map(() => false));
    const [activeItem, setActiveItem] = useState<string>('');

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');

        if (hash) {
            const categoryIndex = data.findIndex((category) => {
                const categoryMatch = category.title.toLowerCase().replace(/\s+/g, '-') === hash;
                const itemMatch = category.items.some(
                    item => item.toLowerCase().replace(/\s+/g, '-') === hash
                );
                return categoryMatch || itemMatch;
            });

            if (categoryIndex !== -1) {
                setVisible(prev => prev.map((_, i) => i === categoryIndex ? true : false));
                setActiveItem(hash);

                // Add delay to ensure content is rendered
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        const elementPosition = element.getBoundingClientRect().top;
                        const offset = window.innerHeight / 2;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 300); // Increased timeout to ensure content is fully expanded
            }
        }
    }, []);

    const toggleIndex = (index: number) => {
        setVisible((prev) =>
            prev.map((value, i) => (i === index ? !value : value))
        );
    };

    return (
        <div className="my-6">
            {data.map((category, index) => (
                <div key={index}>
                    <div className="relative inline-block">
                        <h1 className="text-lg sm:text-xl lg:text-2xl text-[#ee2424] scroll-mt-[30vh] relative z-10 p-2"
                            id={`${category.title.replace(/\s+/g, '-').toLowerCase()}`}>
                            &bull; {category.title}
                        </h1>
                    </div>
                    <h3 className="ps-4 text-black text-md sm:text-lg lg:text-xl">
                        {category.description}
                    </h3>
                    <div className="text-center">
                        <button
                            onClick={() => toggleIndex(index)}
                            className="p-2 ms-4 my-2 text-[26px] sm:text-[30px] md:text-[32px]">
                            {visible[index] ? <SlashSvg /> : <Svg />}
                        </button>
                    </div>
                    <div className={`transition-all duration-500 overflow-hidden ${visible[index] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}>
                        <div className="w-full max-w-2xl rounded-2xl">
                            <ol className="list-decimal list-inside space-y-2 text-black text-base sm:text-lg">
                                {category.items.map((item, itemIndex) => {
                                    const itemId = item.replace(/\s+/g, '-').toLowerCase();
                                    return (
                                        <li
                                            className="scroll-mt-[50vh] relative p-2"
                                            key={itemIndex}
                                            id={itemId}
                                        >
                                            <span className="relative z-10">{item}</span>
                                            {activeItem === itemId && (
                                                <div className="absolute inset-0 border-2 border-[#ee2424] rounded-md transform"></div>
                                            )}
                                        </li>
                                    );
                                })}
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