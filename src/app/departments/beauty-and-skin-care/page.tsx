import { ChemicalPeels } from "./components/chemicalPeels";
import { Cleansing } from "./components/cleansing";
import { FaceAndNeckTightening } from "./components/face&neckTightening";
import { Header } from "./components/header";
import { Departments } from "./components/otherDepartments";
import { PrecisionDignosticsLab } from "./components/precisionPart";
import { ProfessionalFacials } from "./components/proFacial";
import { RejuvenationFacial } from "./components/rejuvenation";
import { SkinBrightening } from "./components/skinBrightening";
import { SkinRenewal } from "./components/skinRenewal";
import { SpecializedTreatments } from "./components/SpecializedTreatments";
import { SpecialPeels } from "./components/specialPeels";
import { SpecialTreatments } from "./components/specialTreatments";

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
            <RejuvenationFacial/>
            <FaceAndNeckTightening/>
            <SpecialTreatments/>
            <SkinRenewal/>
            <ChemicalPeels/>
            <SkinBrightening/>
            <SpecialPeels/>
            <PrecisionDignosticsLab/>
            <Departments/>
        </div>
    )
}