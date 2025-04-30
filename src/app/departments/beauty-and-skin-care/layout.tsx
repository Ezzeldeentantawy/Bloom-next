import "../../globals.css";

    export const metadata = {
    title: {
            absolute: 'Beauty & Skin care Department | Facials & Skin Treatments – Customized for your skin type, including hydrating, brightening, and anti-aging solutions.'
    },
        description: "Beauty and skincare involve practices and products to enhance skin health and appearance, including cleansing, moisturizing, and protecting from environmental damage.",
    generator: 'Next.js',
    applicationName: 'Bloom Beauty Clinic',
    referrer: 'origin-when-cross-origin',
        keywords: ["Skincare routine", 
            "Healthy skin",
            "Beauty products",
            "Glowing skin",
            "Anti-aging skincare",
            "Moisturizer for skin",
            "Skincare tips",
            "Natural beauty",
            "Sun protection",
            "Clear complexion",],
    authors: [{ name: 'Ezzeldeen' }, { name: 'Ezzeldeen', url: 'https://www.linkedin.com/in/ezzeldeen-tantawy-8a0393344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' }],
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    }

export default function BeautyAndSkinCare({
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
