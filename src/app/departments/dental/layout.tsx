import "../../globals.css";


export const metadata = {
    title: {
        absolute: 'Best Dental Care & Treatments | Expert Dentists Near You'
    },
    description: "Get top-quality dental care! Our expert dentists offer teeth whitening, implants, braces & pain-free treatments. Book your appointment today for a brighter smile!",
    generator: 'Next.js',
    applicationName: 'Bloom Beauty Clinic',
    referrer: 'origin-when-cross-origin',
    keywords: ["Dental clinic near me",
        "Teeth whitening",
        "Dental implants",
        "Painless tooth extraction",
        "Emergency dentist",
        "Invisalign braces",
        "Root canal treatment",
        "Affordable dental care",],
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
