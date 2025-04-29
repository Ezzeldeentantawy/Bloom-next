import Image from "next/image"

export const Header = () => {
    return(
        <header className="flex flex-col items-center justify-center text-black px-2 sm:px-6 md:px-10">
            <div className="flex flex-col items-center justify-center mt-4">
                <Image 
                    src="/departments-section/SAWLP.jpeg"
                    alt="Laser and hair removale"
                    className="rounded-2xl mb-4"
                    width={500}
                    height={500}
                />
                <h1 className="text-xl sm:text-2xl lg:text-3xl text-[#ee2424] text-start sm:text-center">
                    Safe and effective laser hair removal for all skin types. Enjoy smooth, hair-free skin with long-lasting results. Book your consultation today!
                </h1>
            </div>
        </header>
    )
}