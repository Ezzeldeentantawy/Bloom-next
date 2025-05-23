import { Navbar } from "@/app/components/nav"
import { Categories } from "./categories/categories"
import { Header } from "./components/header"
import { Departments } from "./components/otherDepartments"
import { PrecisionDignosticsLab } from "./components/precisionPart"
import { DBookNowCard } from "@/app/components/dBook"

export const metadata = {
    title: {
        absolute: 'Laser hair removal and laser treatment Department | Expert Laser Hair Removal – Fast, Painless, and Effective Results'
    },
    description: "Safe and effective laser hair removal for all skin types. Enjoy smooth, hair-free skin with long-lasting results. Book your consultation today!",
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