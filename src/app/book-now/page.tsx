'use client';

import { Navbar } from '../components/nav';

const serviceSlots: Record<string, string[]> = {
    'Facial Treatment': ['10:00 AM', '12:00 PM', '2:00 PM'],
    'Hair Styling': ['11:00 AM', '1:00 PM', '3:00 PM'],
    'Manicure & Pedicure': ['9:00 AM', '1:30 PM', '4:00 PM'],
    'Makeup': ['10:30 AM', '2:30 PM', '5:00 PM'],
};

export default function BookingPage() {

    return (
        <>
        <Navbar/>
        <section
            className="min-h-screen bg-[#fac06a] py-16 px-4 flex flex-col items-center text-[#ee2424]"
        >
            <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-2xl space-y-8">
                <h1 className="text-3xl font-bold text-center text-[#ee2424]">Book Your Appointment</h1>

                <form className="grid gap-6">
                    <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="border-2 border-[#fac06a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ee2424]"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="border-2 border-[#fac06a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ee2424]"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        required
                        className="border-2 border-[#fac06a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ee2424]"
                    />

                    <select
                        required
                        className="border-2 border-[#fac06a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ee2424]"
                    >
                        <option value="">Select a Service</option>
                        {Object.keys(serviceSlots).map((srv) => (
                            <option key={srv}>{srv}</option>
                        ))}
                    </select>

                    <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        required
                        className="border-2 border-[#fac06a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ee2424]"
                    />

                    <select
                        required
                        className="border-2 border-[#fac06a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ee2424]"
                    >
                    </select>

                    <button
                        type="submit"
                        className="bg-[#ee2424] hover:bg-[#c61e1e] text-white py-3 rounded-lg font-semibold transition-all"
                    >
                        Confirm Booking
                    </button>
                </form>

            </div>
        </section>
        </>
    );
}
