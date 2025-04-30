"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex flex-col items-center justify-center text-black px-1 sm:px-6 md:px-10">
            <div className="flex items-center justify-center">
                <Image
                    src="/departments-section/PDL.jpeg"
                    alt="Precision Diagnostics Lab"
                    className="rounded-2xl mb-4"
                    width={500}
                    height={500}
                />
            </div>
            <div className="flex items-start flex-col">
                <div className="flex flex-col items-center justify-center w-full">
                    <h1 className="text-[28px] sm:text-[30px] md:text-[34px] text-[#ee2424] text-center w-full">
                        PreCare SmartPlan Diagnostics
                    </h1>
                    <div className="flex items-center justify-center">
                        <Image
                            src="/departments-section/diagnostic.png"
                            alt="giagnostic"
                            className="flex items-center justify-center"
                            width={64}
                            height={64}
                        />
                    </div>
                    <h1 className="text-[22px] sm:text-[26px] md:text-[30px] text-[#ee2424] text-center w-full">
                        Smart pre-diagnostics
                        for an optimal treatment plan.
                    </h1>
                </div>

                <ul className="text-[22px] sm:text-[24px] md:text-[26px] mt-4 ps-1 text-center w-full rounded border border-white">
                    <li>Precision Diagnostics Lab - Smart Diagnostic Room.</li>
                    <li>Precision in Diagnosis, Confidence in Treatment.</li>
                </ul>

                <p className="text-[16px] sm:text-[18px] md:text-[20px] mt-4 px-2 sm:px-4 md:px-6 lg:px-10">
                    <span className="text-primary-color">At Precision Diagnostics Lab</span>, we utilize cutting-edge <span className="underline decoration-1">
                        AI technology and advanced medical equipment</span> to provide comprehensive diagnostics and accurate assessments,
                    helping design personalized treatment plans* tailored to each individual&#39;s unique health needs.
                </p>

                <div className="mt-6 w-full">
                    <div className="flex items-center">
                        <h2 className="text-[22px] sm:text-[24px] md:text-[26px] text-[#ee2424]">
                            &bull; What does Precision Diagnostics Lab Offer?
                        </h2>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen
                                ? <FontAwesomeIcon icon={faEyeSlash} className="ms-4 text-black hover:text-inherit text-[22px] sm:text-[24px] md:text-[26px]" />
                                : <FontAwesomeIcon icon={faEye} className="ms-4 text-black hover:text-inherit text-[22px] sm:text-[24px] md:text-[26px]" />}
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
