import { Categories } from "./categories/categories"
import { Header } from "./components/header"
import { Departments } from "./components/otherDepartments"
import { PrecisionDignosticsLab } from "./components/precisionPart"

export const metadata = {
    title: {
        absolute: 'Best Dental Care & Treatments | Expert Dentists Near You'
    },
    description: "Get top-quality dental care! Our expert dentists offer teeth whitening, implants, braces & pain-free treatments. Book your appointment today for a brighter smile!",
}

export default function DermatologyAndAesthetics() {
    return(
        <div className="px-2 sm:px-6 md:px-10">
            <Header />
            <div className="text-center">
                <span className="px-24 sm:px32 md:px-48 lg:px-64 border-b border-white"></span>
            </div>
            <Categories/>
            <PrecisionDignosticsLab/>
            <Departments/>
        </div>
    )
}