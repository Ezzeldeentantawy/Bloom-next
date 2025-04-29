'use client';

import { Mail, PhoneCall, MapPin } from 'lucide-react';
import { Navbar } from '../components/nav';

export default function ContactPage() {
    return (
        <section
            className="min-h-screen bg-[#fac06a] py-2 flex flex-col items-center text-[#ee2424]"
        >
            <div className='w-full'>
            <Navbar/>
            </div>
            <div className="max-w-4xl w-full text-center mt-4 space-y-6">
                {/* Header */}
                <h1 className="text-4xl font-bold">Contact Beauty Clinic</h1>
                <p className="text-lg text-[#ee2424]/80">
                    Have questions? Ready to book your beauty consultation? We would love to hear from you.
                </p>

                {/* Contact Info */}
                <div className="mt-10 grid gap-8">
                    <div className="flex items-center justify-center gap-4">
                        <PhoneCall className="w-6 h-6" />
                        <span className="text-lg font-semibold">+123 456 7890</span>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <Mail className="w-6 h-6" />
                        <span className="text-lg font-semibold">hello@beautyclinic.com</span>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <MapPin className="w-6 h-6" />
                        <span className="text-lg font-semibold">123 Beauty St, City, Country</span>
                    </div>
                </div>

                {/* Google Map */}
                <div className="mt-12 w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                    <iframe
                        title="Beauty Clinic Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019411309097!2d-122.41941528468177!3d37.77492977975965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5e2b5d61%3A0x3ba1ef57e2f69e8e!2sBeauty%20Clinic!5e0!3m2!1sen!2sus!4v1714453594876!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Contact Form */}
                <div className="mt-16 bg-white p-8 rounded-2xl shadow-2xl text-gray-800">
                    <h2 className="text-2xl font-bold mb-6 text-[#ee2424]">Send Us a Message</h2>
                    <form className="grid grid-cols-1 gap-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border-2 border-[#fac06a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ee2424] transition-all"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border-2 border-[#fac06a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ee2424] transition-all"
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Your Phone | optional"
                            className="border-2 border-[#fac06a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ee2424] transition-all"
                        />
                        <input
                            type="text"
                            placeholder="Subject | optional"
                            className="border-2 border-[#fac06a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ee2424] transition-all"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={5}
                            className="border-2 border-[#fac06a] rounded-lg px-4 py-3 focus:outline-none focus:border-[#ee2424] transition-all resize-none"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-[#ee2424] text-white py-3 rounded-lg font-semibold hover:bg-[#c61e1e] transition-all"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
