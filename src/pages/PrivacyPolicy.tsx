import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';
import Privacy from '@/components/Privacy';

export default function PrivacyPolicyPage() {
    return (
        <>
            <Helmet>
                <title>Privacy Policy - Next Ventures</title>
                <meta name="description" content="Read the Privacy Policy for Next Ventures Education And Consultancy Services to understand how we collect, protect, and use your data." />
                <link rel="canonical" href="https://nextventures.in/privacy-policy" />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="Privacy Policy - Next Ventures" />
                <meta property="og:description" content="Privacy Policy for Next Ventures Education And Consultancy Services." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nextventures.in/privacy-policy" />
                <meta property="og:image" content="https://nextventures.in/og-image.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Privacy Policy - Next Ventures" />
                <meta name="twitter:description" content="Privacy Policy for Next Ventures Education And Consultancy Services." />
            </Helmet>

            <Header />

            <main className="min-h-screen bg-gray-50">
                <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
                    <Privacy />
                </div>
            </main>
            <Footer />
        </>
    );
}
