import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Users, Shield, Briefcase, Building2, Target, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  const capabilities = [
    { icon: Briefcase, label: "Business Development", color: "text-primary" },
    { icon: Shield, label: "HR & Compliance", color: "text-ocean-medium" },
    { icon: Building2, label: "NGO Consultancy", color: "text-primary-light" },
    { icon: Target, label: "Digital Solutions", color: "text-accent" }
  ];

  return (
    <section 
      className="relative min-h-screen bg-gradient-to-br from-background via-ocean-pale/20 to-background overflow-hidden"
      aria-labelledby="hero-heading"  // Accessibility: Associate with main heading
    >
      {/* Background decorative elements - Optimized for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-primary/20 to-ocean-light/10 blur-3xl animate-float will-change-transform" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-ocean-medium/10 to-primary-light/5 blur-3xl animate-float delay-700 will-change-transform" />
        <div className="absolute top-1/4 right-1/4 w-3 h-3 rounded-full bg-accent/60 animate-float will-change-transform" />
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 rounded-full bg-primary/40 animate-float delay-300 will-change-transform" />
        {/* Grid pattern for subtle texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="container relative z-10 pt-40 pb-20 lg:pt-48 lg:pb-32">  
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
         
          <div className="text-center lg:text-left space-y-8">
            {/* Badge - Kept engaging but accessible */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-ocean-lightest shadow-sm animate-fade-up">
              <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="text-foreground/80 text-sm font-medium">Your Trusted Growth Partner</span>
            </div>

            {/* Heading - Improved scaling and contrast */}
            <h1 
              id="hero-heading"  // Accessibility: ID for aria-labelledby
              className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] animate-fade-up delay-100"
            >
              Complete Business Solutions{" "}
              <span className="bg-gradient-to-r from-primary via-ocean-medium to-primary-light bg-clip-text text-transparent">
                Under One Roof
              </span>
            </h1>

            {/* Subheading - Better line height for readability */}
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto lg:mx-0 animate-fade-up delay-200">
              From business development to compliance, finance to digital solutions — we deliver integrated consultancy services tailored for startups, MSMEs, NGOs, and FPOs.
            </p>

            {/* Value Props - More scannable with icons */}
            <div className="flex flex-col gap-3 max-w-xl mx-auto lg:mx-0 animate-fade-up delay-300">
              <div className="flex items-start gap-3 text-sm sm:text-base text-foreground/80">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>15+ years IT expertise with 12+ years in social entrepreneurship</span>
              </div>
              <div className="flex items-start gap-3 text-sm sm:text-base text-foreground/80">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Pan-India service delivery with ethical & transparent practices</span>
              </div>
              <div className="flex items-start gap-3 text-sm sm:text-base text-foreground/80">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>One-stop solution for compliance, strategy, and growth</span>
              </div>
            </div>

            {/* CTA Buttons - More prominent for conversions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up delay-400">
              <Button 
                size="lg"
                className="gradient-cta text-accent-foreground rounded-full px-8 py-6 text-base font-semibold shadow-gold hover:shadow-cta hover:scale-105 transition-all duration-300 group focus:ring-2 focus:ring-primary/50"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2" aria-label="Get a free consultation">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </a>
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-6 text-base font-semibold border-2 border-primary/20 hover:border-primary hover:bg-ocean-pale/30 transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                asChild
              >
                <a href="#services" aria-label="Explore our services">Explore Services</a>
              </Button>
            </div>

            {/* Trust Indicators - Cleaner layout */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4 text-sm text-muted-foreground animate-fade-up delay-500">
              <div className="flex items-center gap-2" aria-label="Compliance-first approach">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-primary" aria-hidden="true" />
                </div>
                <span>Compliance-First</span>
              </div>
              <div className="flex items-center gap-2" aria-label="Client-centric services">
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users className="w-4 h-4 text-accent" aria-hidden="true" />
                </div>
                <span>Client-Centric</span>
              </div>
              <div className="flex items-center gap-2" aria-label="Result-oriented solutions">
                <div className="w-8 h-8 rounded-full bg-ocean-medium/10 flex items-center justify-center">
                  <Target className="w-4 h-4 text-ocean-medium" aria-hidden="true" />
                </div>
                <span>Result-Oriented</span>
              </div>
            </div>
          </div>

          {/* Capabilities Grid - More compact and responsive */}
          <div className="relative animate-fade-in delay-600">
            <div className="relative max-w-lg mx-auto">
              {/* Main capabilities grid - Better mobile stacking */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {capabilities.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={item.label}
                      className="group bg-card/80 backdrop-blur-sm rounded-2xl p-6 border border-ocean-lightest/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 animate-scale-in focus-within:ring-2 focus-within:ring-primary/50"
                      style={{ animationDelay: `${(index + 1) * 100}ms` }}
                      tabIndex={0}  // Accessibility: Make focusable
                      aria-label={`${item.label} service`}
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
                        item.color === 'text-primary' ? 'from-primary/20 to-primary/5' :
                        item.color === 'text-ocean-medium' ? 'from-ocean-medium/20 to-ocean-medium/5' :
                        item.color === 'text-primary-light' ? 'from-primary-light/20 to-primary-light/5' :
                        'from-accent/20 to-accent/5'
                      } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className={`w-6 h-6 ${item.color}`} aria-hidden="true" />
                      </div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">{item.label}</h3>
                      <p className="text-xs text-muted-foreground">Expert solutions</p>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Feature Cards - Consistent with nav theme */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div className="bg-gradient-to-br from-primary/10 to-ocean-light/5 backdrop-blur-sm rounded-2xl p-6 border border-primary/30 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in delay-500" aria-label="15+ years of IT experience">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-ocean-medium bg-clip-text text-transparent mb-2">
                    15+
                  </div>
                  <p className="text-xs text-foreground/70 font-medium">Years IT Experience</p>
                </div>
                <div className="bg-gradient-to-br from-accent/10 to-accent/5 backdrop-blur-sm rounded-2xl p-6 border border-accent/30 shadow-sm hover:shadow-md transition-all duration-300 animate-scale-in delay-600" aria-label="Pan India service coverage">
                  <div className="text-2xl font-bold text-accent mb-2">
                    Pan India
                  </div>
                  <p className="text-xs text-foreground/70 font-medium">Service Coverage</p>
                </div>
              </div>

              {/* Floating badge - Subtle and accessible */}
              <div className="absolute -top-4 -right-4 bg-accent/90 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full shadow-gold text-sm font-semibold animate-float" aria-label="New venture highlight">
                ✨ New Venture
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration - Semantic and accessible */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg 
          viewBox="0 0 1440 120" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-auto"
          preserveAspectRatio="none"
          aria-label="Decorative wave separator"
        >
          <path
            d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;