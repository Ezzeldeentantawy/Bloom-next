'use client';

import { useState, useEffect } from 'react';
import { Navbar } from '../components/nav';

const serviceSlots: Record<string, string[]> = {
    'Facial Treatment': ['10:00 AM', '12:00 PM', '2:00 PM'],
    'Hair Styling': ['11:00 AM', '1:00 PM', '3:00 PM'],
    'Manicure & Pedicure': ['9:00 AM', '1:30 PM', '4:00 PM'],
    'Makeup': ['10:30 AM', '2:30 PM', '5:00 PM'],
};

export default function BookingPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [availableTimes, setAvailableTimes] = useState<string[]>([]);

    useEffect(() => {
        setAvailableTimes(serviceSlots[service] || []);
        setTime(''); // reset time when service changes
    }, [service]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = { name, email, phone, service, date, time };

        try {
            const res = await fetch('https://your-laravel-api.com/api/book', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            alert(data.message || 'Booking request sent!');
        } catch (err) {
            alert('Failed to submit. Please try again.');
        }
    };

    return (
        <>
        <Navbar/>
        <section
            className="min-h-screen bg-[#fac06a] py-16 px-4 flex flex-col items-center text-[#ee2424]"
        >
            <div className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-2xl space-y-8">
                <h1 className="text-3xl font-bold text-center text-[#ee2424]">Book Your Appointment</h1>

                <form onSubmit={handleSubmit} className="grid gap-6">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="border-2 border-[#fac06a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ee2424]"
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="border-2 border-[#fac06a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ee2424]"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="border-2 border-[#fac06a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ee2424]"
                    />

                    <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
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
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        min={new Date().toISOString().split('T')[0]}
                        required
                        className="border-2 border-[#fac06a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ee2424]"
                    />

                    <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        className="border-2 border-[#fac06a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ee2424]"
                    >
                        <option value="">Select Time</option>
                        {availableTimes.map((t) => (
                            <option key={t}>{t}</option>
                        ))}
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
