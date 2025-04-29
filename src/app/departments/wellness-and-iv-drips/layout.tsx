import "../../globals.css";


export const metadata = {
    title: {
        absolute: 'Premium IV Drip Therapy | Boost Energy, Hydration & Wellness'
    },
    description: "Revitalize your body with our medical-grade IV drip therapy! Combat fatigue, enhance immunity & accelerate recovery. Certified clinicians | Book now!",
    generator: 'Next.js',
    applicationName: 'Bloom Beauty Clinic',
    referrer: 'origin-when-cross-origin',
    keywords: ["IV vitamin therapy",
        "Hydration IV near me",
        "Myers cocktail drip",
        "Energy boost IV",
        "IV therapy for immunity",
        "Mobile IV drip service",
        "Athlete recovery IV",
        "NAD+ therapy",],
    authors: [{ name: 'Ezzeldeen' }, { name: 'Ezzeldeen', url: 'https://www.linkedin.com/in/ezzeldeen-tantawy-8a0393344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }],
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
}

export default function DermatologyAndAesthetics({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <section
            className="bg-[#fac06a]"
        >{children}</section>
    );
}
