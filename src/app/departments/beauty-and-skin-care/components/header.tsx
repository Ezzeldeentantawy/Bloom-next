import Image from "next/image"

export const Header = () => {
    return(
        <header className="flex flex-col items-center justify-center text-white px-2 sm:px-6 md:px-10">
            <div className="flex flex-col items-center justify-center mt-4">
                <Image 
                    src="/departments-section/BASC.jpeg"
                    alt="Beauty and skin care"
                    className="rounded-2xl mb-4"
                    width={500}
                    height={500}
                />
                <h1 className="text-xl sm:text-2xl lg:text-3xl text-main-color text-start sm:text-center">
                    Welcome to our Beauty & Skin Care Department, where radiant, healthy skin is our passion! 
                    We offer personalized treatments to rejuvenate, nourish, and enhance your 
                    natural glow using the latest advancements in skincare science and luxury beauty therapies.
                </h1>
            </div>
        </header>
    )
}