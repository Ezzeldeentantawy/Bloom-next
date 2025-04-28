import { Categories } from "./categories/categories"
import { Header } from "./components/header"
import { Departments } from "./components/otherDepartments"
import { PrecisionDignosticsLab } from "./components/precisionPart"

export const metadata = {
    title: {
        absolute: 'Effective Slimming & Weight Loss Program | Get Fit & Healthy Fast!'
    },
    description: "Transform your body with our proven slimming & weight loss program! Burn fat, boost metabolism, and achieve lasting results. Start your journey today!",
}

export default function DermatologyAndAesthetics() {
    return(
        <div className="px-2 sm:px-6 md:px-10">
            <Header />
            <div className="text-center">
                <span className="px-24 sm:px32 md:px-48 lg:px-64 border-b border-black"></span>
            </div>
            <Categories/>
            <PrecisionDignosticsLab/>
            <Departments/>
        </div>
    )
}