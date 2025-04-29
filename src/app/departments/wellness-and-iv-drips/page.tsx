import { Navbar } from "@/app/components/nav"
import { Categories } from "./categories/categories"
import { Header } from "./components/header"
import { Departments } from "./components/otherDepartments"
import { PrecisionDignosticsLab } from "./components/precisionPart"
import { DBookNowCard } from "@/app/components/dBook"

export const metadata = {
    title: {
        absolute: 'Premium IV Drip Therapy | Boost Energy, Hydration & Wellness'
    },
    description: "Revitalize your body with our medical-grade IV drip therapy! Combat fatigue, enhance immunity & accelerate recovery. Certified clinicians | Book now!",
}

export default function DermatologyAndAesthetics() {
    return(
        <>
        <Navbar/>
        <div className="px-2 pt-12 sm:px-6 pb-6 md:px-10">
            <Header />
            <div className="text-center">
                <span className="px-24 sm:px32 md:px-48 lg:px-64 border-b border-black"></span>
            </div>
            <Categories/>
            <PrecisionDignosticsLab/>
            <Departments/>
            <DBookNowCard/>
        </div>
        </>
    )
}