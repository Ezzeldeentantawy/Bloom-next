'use client';
import { Mail, PhoneCall, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';

export const Contact = () => {
    const router = useRouter();
    return (
        <div className="max-w-md my-4 mx-auto p-8 rounded-2xl shadow-2xl bg-[#fac06a] text-[#ee2424] space-y-6">
            <div className="text-center">
                <h2 className="text-3xl font-bold">Get In Touch</h2>
                <p className="text-lg mt-2 text-[#ee2424]/80">We'd love to hear from you!</p>
            </div>

            <div className="space-y-4">
                <div className="flex items-center space-x-4">
                    <PhoneCall className="w-6 h-6 text-[#ee2424]" />
                    <span className="text-md font-medium">+123 456 7890</span>
                </div>
                <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-[#ee2424]" />
                    <span className="text-md font-medium">hello@beautyclinic.com</span>
                </div>
                <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-[#ee2424]" />
                    <span className="text-md font-medium">123 Beauty St, City, Country</span>
                </div>
            </div>

            <button 
            onClick={() => router.push('/contact-us')}
            className="w-full mt-6 bg-[#ee2424] hover:bg-[#d91f1f] text-white py-3 rounded-full text-lg font-semibold transition-all duration-300">
                Contact Us
            </button>
        </div>
    );
}
