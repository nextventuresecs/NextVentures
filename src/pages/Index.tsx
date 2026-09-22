import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import { FAQ_DATA } from "@/data/faqData";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/sections/Footer";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";

const Index = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://nextventures.in/#organization",
        "name": "Next Ventures Education And Consultancy Services",
        "alternateName": "Next Ventures",
        "url": "https://nextventures.in",
        "logo": "https://nextventures.in/nvces-logo.svg",
        "image": "https://nextventures.in/og-image.jpg",
        "description": "Professional consultancy firm providing comprehensive business development, compliance, finance, HR, marketing, and digital solutions for NGOs, FPOs, MSMEs, and enterprises across India.",
        "telephone": "+918818887785",
        "email": "contact@nextventures.in",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Indore",
          "addressRegion": "Madhya Pradesh",
          "addressCountry": "IN"
        },
        "priceRange": "$$",
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "18:00"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://nextventures.in/#website",
        "url": "https://nextventures.in",
        "name": "Next Ventures",
        "publisher": {
          "@id": "https://nextventures.in/#organization"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://nextventures.in/#faq",
        "mainEntity": FAQ_DATA.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Next Ventures - Business Development & Consultancy Services</title>
        <meta 
          name="description" 
          content="Next Ventures offers end-to-end business development, compliance, finance, HR, marketing, and digital solutions for NGOs, FPOs, MSMEs, and enterprises across India." 
        />
        <meta name="keywords" content="business consultancy, NGO consultancy, FPO consultancy, MSME solutions, compliance services, HR solutions, digital marketing, Indore, India" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://nextventures.in" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Next Ventures - Business Development & Consultancy Services" />
        <meta property="og:description" content="End-to-end business development, compliance, finance, HR, marketing, and digital solutions — under one roof." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextventures.in" />
        <meta property="og:image" content="https://nextventures.in/og-image.jpg" />
        <meta property="og:site_name" content="Next Ventures" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Next Ventures - Business Development & Consultancy Services" />
        <meta name="twitter:description" content="End-to-end business development, compliance, finance, HR, marketing, and digital solutions — under one roof." />
        <meta name="twitter:image" content="https://nextventures.in/og-image.jpg" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <IndustriesSection />
          <WhyUsSection />
          <CaseStudiesSection />
          <FAQSection />
          <CTASection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
