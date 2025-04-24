import { FaceContouring } from "./components/faceContouring"
import { Header } from "./components/header"
import { Injectables } from "./components/injectables"
import { MedicalDermatology } from "./components/medicalDermatology"
import { Departments } from "./components/otherDepartments"
import { PrecisionDignosticsLab } from "./components/precisionPart"
import { SkinRejuventation } from "./components/skinRejuvenation"

export const metadata = {
    title: {
        absolute: 'Dermatology & Aesthetics Department | Enhancing Skin Health and Beauty with Expert Care'
    },
    description: "Expert dermatology and aesthetic care including acne treatment, anti-aging, laser therapy, and skincare solutions to help you look and feel your best.",
}

export default function DermatologyAndAesthetics() {
    return(
        <div className="px-2 sm:px-6 md:px-10">
            <Header />
            <div className="text-center">
                <span className="px-24 sm:px32 md:px-48 lg:px-64 border-b border-white"></span>
            </div>
            <Injectables />
            <SkinRejuventation/>
            <FaceContouring/>
            <MedicalDermatology />
            <PrecisionDignosticsLab/>
            <Departments/>
        </div>
    )
}