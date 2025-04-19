export default function WhyUs() {
    return (
        <section className="bg-white py-12 px-6 md:px-20 my-5" id="Whyus">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800">Why Choose Us?</h2>
                <p className="text-gray-600 mt-2">Discover what sets our beauty clinic apart</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
                {/* Expertise */}
                <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-pink-400 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.75a12.083 12.083 0 01-6.16-11.172L12 14z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-800">Expert Team</h3>
                    <p className="text-gray-600 mt-2">Certified professionals dedicated to your skincare and beauty goals.</p>
                </div>

                {/* Technology */}
                <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-pink-400 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M9.75 3v1.5M14.25 3v1.5M3 6.75h18M4.5 6.75v12A2.25 2.25 0 006.75 21h10.5A2.25 2.25 0 0019.5 18.75v-12" />
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-800">Advanced Technology</h3>
                    <p className="text-gray-600 mt-2">We use the latest equipment to deliver safe, effective treatments.</p>
                </div>

                {/* Personalized Care */}
                <div className="flex flex-col items-center">
                    <svg className="w-12 h-12 text-pink-400 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path d="M12 4.5c2.485 0 4.5 2.015 4.5 4.5S14.485 13.5 12 13.5 7.5 11.485 7.5 9 9.515 4.5 12 4.5z" />
                        <path d="M12 13.5c-3.314 0-6 2.686-6 6v.75h12V19.5c0-3.314-2.686-6-6-6z" />
                    </svg>
                    <h3 className="text-lg font-semibold text-gray-800">Personalized Treatments</h3>
                    <p className="text-gray-600 mt-2">Tailored skincare plans that suit your unique skin type and needs.</p>
                </div>
            </div>
        </section>
    );
}
