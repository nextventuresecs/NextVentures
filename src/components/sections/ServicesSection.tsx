import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";  // Assuming you have this from nav
import {
  Briefcase,
  Users,
  Calculator,
  Megaphone,
  Monitor,
  Printer,
  Building,
  Star,
  ArrowRight,
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Business Development & Strategy",
      description: "Business planning, DPRs, market research, feasibility studies, and scaling strategies.",
    },
    {
      icon: Users,
      title: "HR & Compliance Solutions",
      description: "HR policy drafting, recruitment, payroll management, PF, ESIC, and labour law compliance.",
    },
    {
      icon: Calculator,
      title: "Finance, Audit & Accounting",
      description: "Bookkeeping, GST registration, tax advisory, internal audits, and financial planning.",
    },
    {
      icon: Megaphone,
      title: "Marketing & Branding",
      description: "Brand identity design, digital marketing, content strategy, and social media management.",
    },
    {
      icon: Monitor,
      title: "Digital Solutions & IT",
      description: "Website development, app solutions, ERP implementation, and IT infrastructure setup.",
    },
    {
      icon: Printer,
      title: "Printing & Media Solutions",
      description: "Brochures, banners, corporate kits, and comprehensive media production services.",
    },
    {
      icon: Building,
      title: "NGO, FPO & Institutional Consultancy",
      description: "Registration, compliance, FCRA, CSR proposals, and institutional capacity building.",
    },
    {
      icon: Star,
      title: "Astrological & Vastu Consultancy",
      description: "Expert guidance for personal and business decisions through ancient wisdom sciences.",
    },
  ];

  return (
    <section 
      id="services" 
      className="relative py-20 lg:py-28 bg-gradient-to-b from-background via-ocean-pale/10 to-background overflow-hidden"
      aria-labelledby="services-heading"  // Accessibility: Main heading association
    >
      {/* Background decoration - Subtle for impact without distraction */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl will-change-transform" />
        <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl will-change-transform" />
      </div>

      <div className="container relative z-10">
        {/* Section Header - Enhanced for hierarchy and engagement */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-ocean-lightest shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            <span className="text-foreground/80 text-sm font-medium uppercase tracking-wider">Our Services</span>
          </div>
          <h2 
            id="services-heading"
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            Comprehensive Solutions for{" "}
            <span className="bg-gradient-to-r from-primary via-ocean-medium to-primary-light bg-clip-text text-transparent">
              Every Business Need
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Integrated solutions designed for growth, compliance, and sustainability — 
            all under one roof. From strategy to execution, we've got you covered.
          </p>
        </div>

        {/* Services Grid - More responsive and interactive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"> 
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-fade-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-full group-hover:scale-105 group-hover:shadow-lg transition-all duration-300">  {/* Ensure full height for consistent alignment */}
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Added for impact and conversions */}
        <div className="text-center mt-16 animate-fade-up delay-500">
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to transform your business? Let's discuss your needs.
          </p>
          <Button 
            size="lg"
            className="gradient-cta text-accent-foreground rounded-full px-8 py-6 text-base font-semibold shadow-gold hover:shadow-cta hover:scale-105 transition-all duration-300 group"
            asChild
          >
            <a href="#contact" className="flex items-center gap-2" aria-label="Get started with our services">
              Explore All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;