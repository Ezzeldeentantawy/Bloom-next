import { Noto_Serif } from "next/font/google";
import "./globals.css";

const noto = Noto_Serif({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: {
    absolute: 'Best Beauty Clinic in Ras-Elkhaima | Skin, Laser, Botox & More'
  },
  description: "Top-rated beauty clinic in UAE offering laser hair removal, hydrafacial, skin rejuvenation, botox, fillers, and more. Book your consultation today!",
  generator: 'Next.js',
  applicationName: 'Bloom Beauty Clinic',
  referrer: 'origin-when-cross-origin',
  keywords: ["beauty clinic Dubai",
    "laser hair removal UAE",
    "hydrafacial Abu Dhabi",
    "botox treatment", "fillers in Dubai", "skin care clinic UAE, aesthetic clinic"],
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

export default function RootLayout({
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
