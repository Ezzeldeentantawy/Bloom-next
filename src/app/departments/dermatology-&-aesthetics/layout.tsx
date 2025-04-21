import { Noto_Serif } from "next/font/google";
import "../../globals.css";

const noto = Noto_Serif({
    weight: '400',
    subsets: ['latin'],
})

    export const metadata = {
    title: {
            absolute: 'Dermatology & Aesthetics Department | Enhancing Skin Health and Beauty with Expert Care'
    },
        description: "Expert dermatology and aesthetic care including acne treatment, anti-aging, laser therapy, and skincare solutions to help you look and feel your best.",
    generator: 'Next.js',
    applicationName: 'Bloom Beauty Clinic',
    referrer: 'origin-when-cross-origin',
        keywords: ["dermatology", 
            "aesthetics", 
            "skincare", 
            "laser treatment", 
            "acne", 
            "anti - aging", 
            "hair care", 
            "skin clinic", 
            "cosmetic procedures",
            "beauty",],
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

export default function DermatologyAndAesthetics({
    children,
    }: Readonly<{
    children: React.ReactNode;
    }>) {
    return (
        <html lang="en">
        <body
            className={`${noto.className} ocbg antialiased`}
        >
            {children}
        </body>
        </html>
    );
    }
