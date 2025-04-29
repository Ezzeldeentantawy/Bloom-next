import Image from "next/image"

export const Header = () => {
    return(
        <header className="flex flex-col items-center justify-center text-black px-2 sm:px-6 md:px-10">
            <div className="flex flex-col items-center justify-center mt-4">
                <Image 
                    src="/departments-section/LAHR.jpeg"
                    alt="Laser and hair removale"
                    className="rounded-2xl mb-4"
                    width={500}
                    height={500}
                />
                <h1 className="text-xl sm:text-2xl lg:text-3xl text-[#ee2424] text-start sm:text-center">
                    Say goodbye to unwanted hair for good. Discover our top-rated laser hair removal services with proven results and flexible packages.
                </h1>
            </div>
        </header>
    )
}