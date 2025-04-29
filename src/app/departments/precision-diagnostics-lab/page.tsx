import { Navbar } from "@/app/components/nav"
import { Header } from "./components/header"
import { Tests } from "./components/tests"
import { DBookNowCard } from "@/app/components/dBook"

export const metadata = {
    title: {
        absolute: 'Precision Diagnostics Lab | PreCare SmartPlan Diagnostics – Smart pre-diagnostics for an optimal treatment plan.'
    },
    description: "At Precision Diagnostics Lab, we utilize cutting-edge AI technology and advanced medical equipment to provide comprehensive diagnostics and accurate assessments, helping design personalized treatment plans* tailored to each individual’s unique health needs.",
}
export default function PrecisionDiagnosticsLab() {
    return(
        <>
        <Navbar/>
        <div className="pb-6 pt-12">
            <Header />
            <div className="text-center my-4">
                <span className="border-b border-black px-24 sm:px-32 md:px-48 lg:px-64"></span>
            </div>
            <Tests />
            <DBookNowCard/>
        </div>
        </>
    )
}