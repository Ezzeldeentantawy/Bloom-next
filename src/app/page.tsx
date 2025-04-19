import { Departments } from "./components/departments";
import { Header } from "./components/header";
import WhyUs from "./components/whyUs";
export const metadata ={
  title: {
    absolute: 'Best Beauty Clinic in Ras-Elkhaima | Skin, Laser, Botox & More'
  },
  description: "Top-rated beauty clinic in UAE offering laser hair removal, hydrafacial, skin rejuvenation, botox, fillers, and more. Book your consultation today!",
}
export default function Home() {
  return (
      <div className="text-center">
        <Header />
        <span className="border-b border-black px-24 sm:px-32 md:px-48 lg:px-64 text-center"></span>
        <WhyUs/>
        <span className="border-b border-black px-24 sm:px-32 md:px-48 lg:px-64 text-center"></span>
        <Departments/>
      </div>
  );
}
