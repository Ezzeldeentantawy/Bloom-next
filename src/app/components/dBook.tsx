import { CalendarCheck } from 'lucide-react';
import Link from 'next/link';

export function DBookNowCard() {
    return (
        <div className="bg-white rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto border-2 border-[#ee2424]">
            <div className="flex items-center gap-4">
                <CalendarCheck className="w-10 h-10 text-[#ee2424]" />
                <div>
                    <h2 className="text-xl font-bold text-[#ee2424]">Ready to glow?</h2>
                    <p className="text-gray-600">Book your beauty appointment now and let us pamper you!</p>
                </div>
            </div>
            <Link href="/book-now" scroll={true}>
                <button className="bg-[#ee2424] hover:bg-[#c61e1e] text-white px-6 py-3 rounded-lg font-semibold transition-all">
                    Book Now
                </button>
            </Link>
        </div>
    );
}
