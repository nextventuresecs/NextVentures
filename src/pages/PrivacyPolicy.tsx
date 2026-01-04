import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';
import Privacy from '@/components/Privacy';

export default function PrivacyPolicyPage() {
    return (
        <>
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