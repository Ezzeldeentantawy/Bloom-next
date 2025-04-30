import "../../globals.css";


export const metadata = {
    title: {
        absolute: 'Effective Slimming & Weight Loss Program | Get Fit & Healthy Fast!'
    },
    description: "Transform your body with our proven slimming & weight loss program! Burn fat, boost metabolism, and achieve lasting results. Start your journey today!",
    generator: 'Next.js',
    applicationName: 'Bloom Medical center',
    referrer: 'origin-when-cross-origin',
    keywords: ["Weight loss program",
        "Slimming treatment",
        "Fat burning",
        "Metabolism boost",
        "Body transformation",
        "Healthy weight loss",
        "Diet plan",
        "Fitness program",],
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
