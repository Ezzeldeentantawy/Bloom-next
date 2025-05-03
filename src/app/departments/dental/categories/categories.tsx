"use client";
import { useState, useEffect } from "react";
import data from "./categories.json";
import { SlashSvg } from "@/app/components/slashSvg";
import { Svg } from "@/app/components/svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

interface Item {
    name: string;
    description: string;
}

interface Category {
    title: string;
    description: string;
    items: (Item | string)[];
}

export const Categories = () => {
    const [visible, setVisible] = useState<boolean[]>(() => data.map(() => false));
    const [activeItem, setActiveItem] = useState<string>("");
    const [visibleDescription, setVisibleDescription] = useState<string | null>(null);

    useEffect(() => {
        const hash = window.location.hash.replace("#", "");

        if (hash) {
            const categoryIndex = data.findIndex((category) => {
                const categoryMatch = category.title.toLowerCase().replace(/\s+/g, "-") === hash;
                const itemMatch = category.items.some((item) => {
                    const itemName = typeof item === "string" ? item : item.name;
                    return itemName.toLowerCase().replace(/\s+/g, "-") === hash;
                });
                return categoryMatch || itemMatch;
            });

            if (categoryIndex !== -1) {
                setVisible((prev) => prev.map((_, i) => (i === categoryIndex ? true : false)));
                setActiveItem(hash);

                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        const elementPosition = element.getBoundingClientRect().top;
                        const offset = window.innerHeight / 2;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                        });
                    }
                }, 300);
            }
        }
    }, []);

    const toggleIndex = (index: number) => {
        setVisible((prev) => prev.map((value, i) => (i === index ? !value : value)));
    };

    const toggleDescription = (itemId: string) => {
        setVisibleDescription(visibleDescription === itemId ? null : itemId);
    };

    return (
        <div className="my-6">
            {data.map((category, index) => (
                <div key={index}>
                    <div className="relative inline-block">
                        <h1
                            className="text-lg sm:text-xl lg:text-2xl text-[#ee2424] scroll-mt-[30vh] relative z-10 p-2"
                            id={`${category.title.replace(/\s+/g, "-").toLowerCase()}`}
                        >
                            • {category.title}
                        </h1>
                    </div>
                    <h3 className="ps-4 text-black text-md sm:text-lg lg:text-xl">
                        {category.description}
                    </h3>
                    <div className="text-center">
                        <button
                            onClick={() => toggleIndex(index)}
                            className="p-2 ms-4 my-2 text-[26px] sm:text-[30px] md:text-[32px]"
                        >
                            {visible[index] ? <SlashSvg /> : <Svg />}
                        </button>
                    </div>
                    <div
                        className={`transition-all duration-500 overflow-hidden ${visible[index] ? "max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <div className="w-full max-w-2xl rounded-2xl">
                            <ol className="list-decimal list-inside space-y-2 text-black text-base sm:text-lg">
                                {category.items.map((item, itemIndex) => {
                                    const isStringItem = typeof item === "string";
                                    const itemName = isStringItem ? item : item.name;
                                    const itemId = itemName.replace(/\s+/g, "-").toLowerCase();
                                    const itemDescription = isStringItem ? "" : item.description;

                                    return (
                                        <li
                                            className="scroll-mt-[50vh] flex flex-col items-start relative p-2"
                                            key={itemIndex}
                                            id={itemId}
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="relative z-10">{itemIndex + 1}- {itemName}</span>
                                                {!isStringItem &&
                                                    itemDescription &&
                                                    itemDescription.trim() !== "" && (
                                                        <button
                                                            className="ml-4 px-3 py-1 text-black"
                                                            onClick={() => toggleDescription(itemId)}
                                                        >
                                                            {visibleDescription === itemId
                                                                ? <FontAwesomeIcon icon={faAngleUp} />
                                                                : <FontAwesomeIcon icon={faAngleDown}/>}{" "}
                                                        </button>
                                                    )}
                                            </div>
                                            {!isStringItem &&
                                                visibleDescription === itemId &&
                                                itemDescription &&
                                                itemDescription.trim() !== "" && (
                                                    <div className="mt-2 p-2 bg-gray-100 rounded-md text-gray-800">
                                                        {itemDescription}
                                                    </div>
                                                )}
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
    );
};