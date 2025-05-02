"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlashSvg } from "@/app/components/slashSvg";
import { Svg } from "@/app/components/svg";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center text-black mt-[91.06px] lg:mt-0">
            <div className="precision flex items-center bg-[100%] sm:bg-[80%] md:bg-[50%] lg:bg-center justify-center w-full h-[500px]">
                <div className="treatment-title w-[90%] sm:w-2/4 px-2 sm:px-6 md:px-10 lg:px-14">
                    <h1 className="text-[22px] sm:text-[26px] md:text-[30px] text-[#ee2424] mt-4 text-center w-full">
                        PreCare SmartPlan Diagnostics
                    </h1>
                    <h1 className="text-[20px] sm:text-[22px] md:text-[26px] w-[90%] ps-1 sm:ps-2 md:ps-4 text-white text-center">
                        Smart pre-diagnostics
                        for an optimal treatment plan.
                    </h1>
                    <ul className="text-[16px] sm:text-[18px] md:text-[20px] mt-4 mb-14 ps-2 sm:ps-4 md:ps-8 lg:ps-12 text-start w-full rounded">
                        <li>&bull; Precision Diagnostics Lab - Smart Diagnostic Room.</li>
                        <li>&bull; Precision in Diagnosis, Confidence in Treatment.</li>
                    </ul>
                </div>
            </div>
            <div className="flex items-start flex-col">

                <p className="text-[16px] sm:text-[18px] md:text-[20px] mt-4 px-2 sm:px-4 md:px-6 lg:px-10">
                    <span className="text-primary-color">At Precision Diagnostics Lab</span>, we utilize cutting-edge <span className="underline decoration-1">
                        AI technology and advanced medical equipment</span> to provide comprehensive diagnostics and accurate assessments,
                    helping design personalized treatment plans* tailored to each individual&#39;s unique health needs.
                </p>

                <div className="mt-6 w-full">
                    <div className="flex items-center justify-center flex-col">
                        <h2 className="text-[22px] sm:text-[24px] md:text-[26px] text-[#ee2424]">
                            &bull; What does Precision Diagnostics Lab Offer?
                        </h2>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen
                                ? <SlashSvg/>
                                : <Svg/>}
                        </button>
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.5 }}
                                className="overflow-hidden text-[16px] sm:text-[18px] md:text-[20px]"
                            >
                                <li className="flex items-center">
                                    <p className="me-4">&bull; Comprehensive medical analysis</p>
                                </li>
                                <li className="flex items-center">
                                    <p className="me-4">
                                        &bull; Using globally recognized devices such as
                                        <span className="text-primary-color"> Visia </span>
                                        <span className="underline decoration-1">(USA-Made)</span>,
                                        <span className="text-primary-color"> Foto finder </span>
                                        <span className="underline decoration-1">(Germany-Made)</span>, and
                                        <span className="text-primary-color"> Oligoscan </span>
                                        <span className="underline decoration-1">(France-Made)</span>.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <p className="me-4">
                                        &bull; Personalized treatment plans based on precise test
                                        results for optimal health outcomes.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <p className="me-4">
                                        &bull; <span className="text-primary-color">Unmatched accuracy</span> in diagnostics through AI-powered health assessment.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <p className="me-4">
                                        &bull; Scientifically-backed medical recommendations to enhance well-being and overall health.
                                    </p>
                                </li>
                            </motion.ul>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
