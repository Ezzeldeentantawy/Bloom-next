import "../../globals.css";

    export const metadata = {
    title: {
            absolute: 'Precision Diagnostics Lab | PreCare SmartPlan Diagnostics – Smart pre-diagnostics for an optimal treatment plan.'
    },
        description: "At Precision Diagnostics Lab, we utilize cutting-edge AI technology and advanced medical equipment to provide comprehensive diagnostics and accurate assessments, helping design personalized treatment plans* tailored to each individual’s unique health needs.",
    generator: 'Next.js',
    applicationName: 'Bloom Beauty Clinic',
    referrer: 'origin-when-cross-origin',
        keywords: ["AI-powered diagnostics",

"Personalized treatment plans",

"Comprehensive medical analysis",

"Skin and hair analysis",

"Body composition testing",

"Health assessment technology",

"Vitamin and mineral analysis",

"Precision diagnostics",

"Advanced medical equipment",

"Fitness and nutrition planning"],
        icons: {
        icon: '/favicon.ico',
        },
    authors: [{ name: 'Ezzeldeen' }, { name: 'Ezzeldeen', url: 'https://www.linkedin.com/in/ezzeldeen-tantawy-8a0393344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }],
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    }

    export default function PrecisionDiagnosticsLabLayout({
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
