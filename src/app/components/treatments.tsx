import { Treatment } from "./treatment"

export const Treatments = () => {
    return(
        <div className="flex flex-wrap items-center justify-center py-6 bg-[#2c2929]">
            <Treatment
            src="/treatments/laser.jpeg"
            title="Laser Hair Bleaching"
            department="Laser hair removal and laser Treatment"
            />
            <Treatment
                src="/treatments/hebe.jpeg"
                title="HEBE Face"
                department="Dermatology & Aesthetics"
            />
            <Treatment
                src="/treatments/fire-facial.jpeg"
                title="Fire and Ice Facial"
                department="Beauty and Skin care"
            />
        </div>
    )
}