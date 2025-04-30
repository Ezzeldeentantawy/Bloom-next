"use client";
import { motion } from "framer-motion";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
    }),
};

export const Tests = () => {
    const tests = [
        {
            title: "Visia AI Skin Analysis",
            paragraphs: [
                "AI-powered facial imaging to assess wrinkles, pigmentation, pores, and hydration levels.",
                "Helps determine the best skincare treatments, such as chemical peels and laser therapy.",
            ],
        },
        {
            title: "Foto Finder AI Hair Analysis",
            paragraphs: [
                "High-precision scan of hair density, follicle health, sebum production, and growth cycle.",
                "Provides treatment recommendations like PRP therapy, Mesotherapy, and nutrient-rich oils to restore hair health.",
            ],
        },
        {
            title: "InBody Body Composition Analysis.",
            paragraphs: [
                "Measures body fat percentage, muscle mass, and water levels using bioelectrical impedance technology (BIA).",
                "Helps design customized fitness and nutrition programs based on individual health needs.",
            ],
        },
        {
            title:
                "Oligoscan & FDA-Approved Vitamin Deficiency Test - Mineral & Vitamin Analysis",
            paragraphs: [
                `This combined test utilizes advanced medical technology to assess essential mineral and 
        vitamin levels, detecting any nutritional deficiencies or toxic accumulation affecting overall health. 💊 
        Oligoscan uses spectral scanning to identify mineral imbalances such as magnesium, calcium, iron, and zinc,
        as well as heavy metal toxicity from mercury and lead, guiding nutritional corrections and detoxification therapies. 💉 
        FDA-Approved Vitamin Deficiency Test is a laboratory blood analysis certified by the FDA, measuring Vitamin D, B12, Iron, 
        Magnesium, Calcium, and Folic Acid levels to determine precise supplementation and IV therapy solutions such as 
        Vitamin B12 Drip for energy support or Mineral Balance Drip for nutritional restoration.`,
            ],
        },
        {
            title: "Blood Pressure & Glucose Test.",
            paragraphs: [
                "A rapid test to monitor vital health indicators, ensuring stable glucose and blood pressure levels for overall well-being.",
            ],
        },
        {
            title: "3D Digital Dental Scan",
            paragraphs: [
                "High-resolution laser and infrared imaging create a precise digital model of the teeth and jaw. Helps in planning treatments like orthodontics, teeth whitening, and dental implants for perfect results.",
            ],
        },
        {
            title: "Functional Consultations & Health Tests",
            paragraphs: [
                "Comprehensive health evaluations to determine weak points and personalized treatment plans, ensuring targeted healthcare interventions.",
            ],
        },
        {
            title: "DNA Genetic Analysis",
            paragraphs: [
                "Genetic profiling reveals predisposition to diseases, metabolic efficiency, and nutrient absorption.",
                "Helps design a tailored lifestyle plan based on genetic markers, optimizing preventive healthcare and nutrition strategies.",
            ],
        },
        {
            title: "Food Allergy Test",
            paragraphs: [
                "Detects food sensitivities and intolerances, guiding customized dietary adjustments to minimize inflammation and digestive issues.",
            ],
        },
    ];

    return (
        <div className="px-2 mb-4 sm:px-6 md:px-10 text-black">
            <h1 className="text-[#ee2424] text-center text-xl sm:text-2xl lg:text-3xl mb-6">
                Medical Tests available in the Lab
            </h1>
            <ul className="space-y-6">
                {tests.map((test, i) => (
                    <motion.li
                        key={i}
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        className="bg-white hover:scale-105 duration-300 p-4 rounded-xl shadow-sm"
                    >
                        <h3 className="text-lg sm:text-xl lg:text-2xl text-[#ee2424] mb-2">
                            &bull; {test.title}
                        </h3>
                        {test.paragraphs.map((para, j) => (
                            <p
                                key={j}
                                className="ps-4 text-md sm:text-lg md:text-xl leading-relaxed"
                            >
                                {para}
                            </p>
                        ))}
                    </motion.li>
                ))}
            </ul>
        </div>
    );
};
