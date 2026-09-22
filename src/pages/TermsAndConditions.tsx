import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';
import TermsConditions from '@/components/TermsConditions';

export default function TermsAndConditionsPage() {
    return (
        <>
            <Helmet>
                <title>Terms & Conditions - Next Ventures</title>
                <meta name="description" content="Terms and Conditions governing the use of services provided by Next Ventures Education And Consultancy Services." />
                <link rel="canonical" href="https://nextventures.in/terms-conditions" />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="Terms & Conditions - Next Ventures" />
                <meta property="og:description" content="Terms & Conditions for Next Ventures Education And Consultancy Services." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nextventures.in/terms-conditions" />
                <meta property="og:image" content="https://nextventures.in/og-image.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Terms & Conditions - Next Ventures" />
                <meta name="twitter:description" content="Terms & Conditions for Next Ventures Education And Consultancy Services." />
            </Helmet>

            <Header />

            <main className="min-h-screen bg-gray-50">
                <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
                    <TermsConditions />
                </div>
            </main>
            <Footer />
        </>
    );
}
