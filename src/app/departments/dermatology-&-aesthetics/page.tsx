import { Navbar } from "@/app/components/nav"
import { Categories } from "./categories/categories"
import { Header } from "./components/header"
import { Departments } from "./components/otherDepartments"
import { PrecisionDignosticsLab } from "./components/precisionPart"
import { DBookNowCard } from "@/app/components/dBook"

export const metadata = {
    title: {
        absolute: 'Dermatology & Aesthetics Department | Enhancing Skin Health and Beauty with Expert Care'
    },
    description: "Expert dermatology and aesthetic care including acne treatment, anti-aging, laser therapy, and skincare solutions to help you look and feel your best.",
}

export default function DermatologyAndAesthetics() {
    return(
        <>
        <Navbar/>
        <div className="px-2 pt-12 sm:px-6 pb-6 md:px-10">
            <Header />
            <div className="text-center">
                <span className="px-24 sm:px32 md:px-48 lg:px-64 border-b border-white"></span>
            </div>
            <Categories/>
            <PrecisionDignosticsLab/>
            <Departments/>
            <DBookNowCard/>
        </div>
        </>
    )
}