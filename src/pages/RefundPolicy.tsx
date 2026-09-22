import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';
import Refund from '@/components/RefundPolicy';

export default function RefundPolicyPage() {
    return (
        <>
            <Helmet>
                <title>Refund Policy - Next Ventures</title>
                <meta name="description" content="Read the Refund Policy for Next Ventures Education And Consultancy Services detailing terms for refunds and cancellations." />
                <link rel="canonical" href="https://nextventures.in/refund-policy" />
                <meta name="robots" content="index, follow" />

                <meta property="og:title" content="Refund Policy - Next Ventures" />
                <meta property="og:description" content="Refund Policy for Next Ventures Education And Consultancy Services." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://nextventures.in/refund-policy" />
                <meta property="og:image" content="https://nextventures.in/og-image.jpg" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Refund Policy - Next Ventures" />
                <meta name="twitter:description" content="Refund Policy for Next Ventures Education And Consultancy Services." />
            </Helmet>

            <Header />

            <main className="min-h-screen bg-gray-50">
                <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
                    <Refund />
                </div>
            </main>
            <Footer />
        </>
    );
}
