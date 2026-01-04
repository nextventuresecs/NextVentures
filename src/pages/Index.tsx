import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Next Ventures - Business Development & Consultancy Services</title>
        <meta 
          name="description" 
          content="Next Ventures offers end-to-end business development, compliance, finance, HR, marketing, and digital solutions for NGOs, FPOs, MSMEs, and enterprises across India." 
        />
        <meta name="keywords" content="business consultancy, NGO consultancy, FPO consultancy, MSME solutions, compliance services, HR solutions, digital marketing, India" />
        <link rel="canonical" href="https://nextventures.in" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Next Ventures - Business Development & Consultancy Services" />
        <meta property="og:description" content="End-to-end business development, compliance, finance, HR, marketing, and digital solutions — under one roof." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextventures.in" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Next Ventures - Business Development & Consultancy Services" />
        <meta name="twitter:description" content="End-to-end business development, compliance, finance, HR, marketing, and digital solutions — under one roof." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <IndustriesSection />
          <WhyUsSection />
          <CTASection />
          <CaseStudiesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
