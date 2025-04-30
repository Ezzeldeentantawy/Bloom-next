import "../../globals.css";


export const metadata = {
    title: {
        absolute: 'ActiveStride Therapy & Hijama Cupping | Pain Relief & Detox'
    },
    description: "Revitalize your health with ActiveStride Therapy & Hijama cupping! Natural pain relief, improved circulation & detox. Book your session today for holistic healing!",
    generator: 'Next.js',
    applicationName: 'Bloom Beauty Clinic',
    referrer: 'origin-when-cross-origin',
    keywords: ["ActiveStride Therapy ",
        "Hijama cupping near me",
        "Dry needling for pain relief",
        "Wet cupping therapy",
        "Natural back pain treatment",
        "Sports injury recovery",
        "Detoxification therapy",
        "Non-surgical pain management",],
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
        className="owbg"
        >{children}</section>
    );
}
