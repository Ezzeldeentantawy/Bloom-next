import Image from "next/image"

export const Header = () => {
    return(
        <header className="flex flex-col items-center justify-center text-white px-2 sm:px-6 md:px-10">
            <div className="flex flex-col items-center justify-center mt-4">
                <Image 
                    src="/departments-section/ASTAH.jpeg"
                    alt="Dermatology & Aesthetics"
                    className="rounded-2xl mb-4"
                    width={500}
                    height={500}
                />
                <h1 className="text-xl sm:text-2xl lg:text-3xl text-main-color text-start sm:text-center">
                    Revitalize your health with ActiveStride Therapy & Hijama cupping! Natural pain relief, improved circulation & detox. Book your session today for holistic healing!
                </h1>
            </div>
        </header>
    )
}