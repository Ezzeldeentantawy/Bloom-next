// app/contact/layout.tsx
import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact Us | The best medical center in Ras-Alkhaima',
    description: 'Get in touch with Bloom today! Book your consultation, ask a question, or learn more about our beauty treatments.',
    keywords: ['Beauty Clinic Contact', 'Beauty Consultation', 'Skincare Help', 'Facial Appointment'],
    openGraph: {
        title: 'Contact Beauty Clinic',
        description: 'Reach out to Beauty Clinic for expert beauty services and consultations.',
        url: 'https://bloom.com/contact',
        type: 'website',
    },
    robots: 'index, follow',
};

export default function ContactLayout({ children }: { children: ReactNode }) {
    return (
            <section className="antialiased">
                {children}
            </section>
    );
}
