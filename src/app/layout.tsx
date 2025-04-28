import { Metadata } from "next";
import { Noto_Serif, Montserrat } from "next/font/google";
import "./globals.css";

const noto = Noto_Serif({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-noto',
  fallback: ['serif'], // Add fallback
  preload: true
});

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-montserrat',
  fallback: ['sans-serif'], // Add fallback
  preload: true
});

export const metadata: Metadata = {
  title: 'Best Medical Center in Ras-Elkhaima | Skin, Laser, Botox & More',
  description: 'Top-rated beauty clinic & medical center in UAE offering laser hair removal, hydrafacial, skin rejuvenation, botox,filler and more. book you consultation today!',
  keywords: 'Medical center, Medical center in UAE, Medical center in Ras-Elkhaima, beauty clinic, skin care',
  openGraph: {
    title: 'Best Medical Center in Ras-Elkhaima',
    description: 'Top rated beauty clinic in Ras-Elkhaima. Book an appointment today.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${noto.variable} ${montserrat.variable} text-black font-sans ocbg antialiased`}
      >
          <main>{children}</main>
      </body>
    </html>
  );
}
