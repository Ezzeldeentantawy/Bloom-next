import Link from "next/link"
import Image from "next/image"
export const PrecisionDignosticsLab = () => {
    return(
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between my-4">
            <p className="text-md sm:text-lg md:text-xl text-black">
                Your journey to beauty starts with precision - after selecting your desired 
                treatment, you&#39;ll first visit our {" "}
                <Link
                className="text-blue-500"
                href="/departments/precision-diagnostics-lab/"
                >
                Precision Dignostics Lab
                </Link>
                , where we conduct
                a detailed analysis to create a personalized treatment plan just for you
            </p>
            <Image
            src="/departments-section/PDL.jpeg"
            alt="precision diagnostics lab"
            className="rounded-2xl"
            width={400}
            height={400}
            />
        </div>
    )
}