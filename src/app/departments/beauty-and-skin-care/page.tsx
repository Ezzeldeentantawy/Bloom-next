import { Cleansing } from "./components/cleansing"
import { Header } from "./components/header"
import { ProfessionalFacials } from "./components/proFacial"
import { SpecializedTreatments } from "./components/SpecializedTreatments"

export const metadata = {
    title: {
        absolute: 'Beauty & Skin care Department | Facials & Skin Treatments – Customized for your skin type, including hydrating, brightening, and anti-aging solutions.'
    },
    description: "Beauty and skincare involve practices and products to enhance skin health and appearance, including cleansing, moisturizing, and protecting from environmental damage.",
}

export default function DermatologyAndAesthetics() {
    return(
        <div className="px-2 sm:px-6 md:px-10">
            <Header/>
            <SpecializedTreatments/>
            <Cleansing/>
            <ProfessionalFacials/>
        </div>
    )
}