import { Navbar } from "./nav"

export const Header = () => {
    return(
        <div className="flex flex-col bg-[url('/header/bloom.jpeg')] bg-cover bg-center h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
            <Navbar />
            <div className="flex items-center justify-center my-auto">
            </div>
        </div>
    )
}