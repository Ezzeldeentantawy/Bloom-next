import Image from "next/image";

export const Header = () => {
    return (
        <header className="px-2 sm:px-6 md:px-10 text-black">
            <div className="flex flex-col items-center text-center mt-6">
                <Image
                    src="/departments-section/SAWLP.jpeg"
                    alt="Laser and hair removal service"
                    className="rounded-2xl mb-4"
                    width={500}
                    height={500}
                    priority
                />
                <h1 className="text-xl sm:text-2xl lg:text-3xl text-[#ee2424] max-w-4xl">
                    Safe and effective laser hair removal for all skin types. Enjoy smooth, hair-free skin with long-lasting results.
                    <br className="hidden sm:block" />
                    <span className="font-semibold"> Book your consultation today!</span>
                </h1>
            </div>
        </header>
    );
};
