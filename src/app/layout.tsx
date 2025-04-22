import { Noto_Serif } from "next/font/google";
import "./globals.css";

const noto = Noto_Serif({
  weight: '400',
  subsets: ['latin'],
})



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
          <main>{children}</main>
      </body>
    </html>
  );
}
