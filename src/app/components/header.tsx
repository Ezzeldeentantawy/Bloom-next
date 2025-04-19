import { Navbar } from "./nav"
import Image from "next/image"

export const Header = () => {
    return(
        <div>
            <Navbar />
            <div className="flex items-center justify-between mx-4 my-4">
                <div>
                    <h1 className="text-lg sm:text-2xl md:mdtext-3xl lg:text-5xl font-bold text-orange-500 mt-10">
                        Welcome to Our Beauty Clinic
                    </h1>
                    <p className="text-sm sm:text-md md:text-lg mt-4">
                        Your journey to beauty and wellness starts here.
                    </p>
                </div>
                <div>
                    <Image 
                    src="/header/bloom.jpeg"
                    className="rounded-2xl w-32 h-32 sm:w-48 sm:h-48"
                    alt="header image"
                    width={400}
                    height={500}
                    />
                </div>
            </div>
        </div>
    )
}