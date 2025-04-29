import Image from "next/image"

export const Header = () => {
    return(
        <div className="flex flex-col items-center justify-center text-black px-2 sm:px-6 md:px-10">
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
                <h1 className="text-xl sm:text-2xl lg:text-3xl text-[#ee2424] text-start sm:text-center">
                    PreCare SmartPlan Diagnostics – Smart pre-diagnostics
                    for an optimal treatment plan.
                </h1>
                <ul className="text-md sm:text-lg md:text-xl mt-4 ps-1 text-start">
                    <li>&bull; Precision Diagnostics Lab - Smart Diagnostic Room.</li>
                    <li>&bull; Precision in Diagnosis, Confidence in Treatment.</li>
                </ul>
                <p className="text-md sm:text-lg md:text-xl mt-4 px-2 sm:px-4 md:px-6 lg:px-10">
                    <span className="text-main-color">At Precision Diagnostics Lab</span>, we utilize cutting-edge <span className="underline decoration-1">
                        AI technology and advanced medical
                        equipment</span> to provide comprehensive diagnostics and accurate assessments,
                    helping design personalized treatment plans* tailored to each individual&#39;s unique health needs.
                </p>
                <div>
                    <h2 className="text-xl sm:text-2xl lg:text-3xl text-[#ee2424] text-start">
                        &bull; What does Precision Diagnostics Lab Offer?
                    </h2>
                    <ul>
                        <li className="flex items-center text-lg sm:text-xl md:text-2xl">
                            <p className="me-4">&bull; Comprehensive medical analysis</p>
                        </li>
                        <li className="flex items-center text-lg sm:text-xl md:text-2xl">
                            <p className="me-4">&bull; Using globally recognized devices
                                such as <span className="text-main-color">Visia</span>  <span className="underline decoration-1">(USA-Made)</span>,
                                <span className="text-main-color">Foto finder</span> <span className="underline decoration-1">(Germany-Made)</span>,
                                and <span className="text-main-color">Oligoscan</span> <span className="underline decoration-1">(France-Made)</span>.</p>
                        </li>
                        <li className="flex items-center text-lg sm:text-xl md:text-2xl">
                            <p className="me-4">&bull; Personalized treatment plans based on precise test
                                results for optimal health outcomes.</p>
                        </li>
                        <li className="flex items-center text-lg sm:text-xl md:text-2xl">
                            <p className="me-4">&bull; <span className="text-main-color">Unmatched accuracy</span> in diagnostics through AI-powered health assessment.</p>
                        </li>
                        <li className="flex items-center text-lg sm:text-xl md:text-2xl">
                            <p className="me-4">&bull; Scientifically-backed medical recommendations to enhance
                                well-being and overall health.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}