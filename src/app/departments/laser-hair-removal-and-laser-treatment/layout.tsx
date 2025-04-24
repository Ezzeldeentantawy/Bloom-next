import "../../globals.css";


export const metadata = {
    title: {
        absolute: 'Laser hair removal and laser treatment Department | Expert Laser Hair Removal – Fast, Painless, and Effective Results'
    },
    description: "Safe and effective laser hair removal for all skin types. Enjoy smooth, hair-free skin with long-lasting results. Book your consultation today!",
    generator: 'Next.js',
    applicationName: 'Bloom Medical center',
    referrer: 'origin-when-cross-origin',
    keywords: ["laser hair removal in Ras-alkhaima",
        "permanent hair removal in Dubai",
        "hair removal treatment in UAE",
        "laser treatment",
        "smooth skin",
        "painless hair removal",
        "hair reduction",
        "professional laser services",],
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
        <section>{children}</section>
    );
}
