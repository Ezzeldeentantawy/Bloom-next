import { Departments } from "./components/departments";
import { Header } from "./components/header";
import Head from "next/head";
import WhyUs from "./components/whyUs";
export default function Home() {
  return (
      <>
        <Head>
          <title>Best Beauty Clinic in Ras-Elkhaima | Skin, Laser, Botox & More</title>
          <meta name="description" content="Top-rated beauty clinic in UAE offering laser hair removal, hydrafacial, skin rejuvenation, botox, fillers, and more. Book your consultation today!" />
          <meta name="keywords" content="beauty clinic Dubai, laser hair removal UAE,
          hydrafacial Abu Dhabi, botox treatment, fillers in Dubai, skin care clinic UAE, aesthetic clinic" />
        </Head>
        <div className="text-center font-merriweather">
          <Header />
          <span className="border-b border-white px-24 sm:px-32 md:px-48 lg:px-64 text-center"></span>
          <WhyUs/>
          <span className="border-b border-white px-24 sm:px-32 md:px-48 lg:px-64 text-center"></span>
          <Departments/>
        </div>
      </>
  );
}
