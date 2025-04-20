import { Navbar } from "./nav"

export const Header = () => {
    return(
        <div className="flex flex-col mcbg h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
            <Navbar />
            <div className="flex items-center justify-center my-auto">
                <button className="border-2 border-white text-white font-bold py-2 px-4 rounded shadow-lg hover:shadow-2xl">
                    Book now
                </button>
            </div>
        </div>
    )
}