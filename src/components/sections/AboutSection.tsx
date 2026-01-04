import { Building2, Users, Award, Globe, CheckCircle2, Target, Heart, Zap } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Building2, value: "July 2022", label: "Established", color: "primary" },
    { icon: Award, value: "15+", label: "Years IT Expertise", color: "ocean-medium" },
    { icon: Users, value: "12+", label: "Years Social Sector", color: "primary-light" },
    { icon: Globe, value: "Pan-India", label: "Service Reach", color: "accent" },
  ];

  const values = [
    { icon: CheckCircle2, title: "Integrity", description: "We uphold the highest ethical standards" },
    { icon: Heart, title: "Client-Centric", description: "Your success is our priority" },
    { icon: Target, title: "Result-Driven", description: "Focused on measurable outcomes" },
    { icon: Zap, title: "Innovation", description: "Modern solutions for modern challenges" },
  ];

  // Helper for consistent color classes
  const getColorClasses = (color) => {
    const base = {
      primary: { bg: 'from-primary/20 to-primary/5', text: 'text-primary' },
      'ocean-medium': { bg: 'from-ocean-medium/20 to-ocean-medium/5', text: 'text-ocean-medium' },
      'primary-light': { bg: 'from-primary-light/20 to-primary-light/5', text: 'text-primary-light' },
      accent: { bg: 'from-accent/20 to-accent/5', text: 'text-accent' },
    };
    return base[color] || base.primary;
  };

  return (
    <section 
      id="about" 
      className="relative py-20 lg:py-32 bg-gradient-to-b from-background via-ocean-pale/10 to-background overflow-hidden"
      aria-labelledby="about-heading"  // Accessibility: Main heading association
    >
      {/* Background decoration - Simplified for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-2xl will-change-transform" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-2xl will-change-transform" />
      </div>

      <div className="container relative z-10">
        {/* Section Header - Enhanced hierarchy */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-ocean-lightest shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            <span className="text-foreground/80 text-sm font-medium uppercase tracking-wider">About Us</span>
          </div>
          <h2 
            id="about-heading"
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            Your Trusted Partner for{" "}
            <span className="bg-gradient-to-r from-primary via-ocean-medium to-primary-light bg-clip-text text-transparent">
              Sustainable Growth
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Combining deep IT expertise with social entrepreneurship experience to deliver 
            comprehensive business solutions across India.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column - Story & Stats - Improved spacing and readability */}
          <div className="space-y-10 animate-fade-up delay-100">  {/* Increased space-y for better flow */}
            {/* Story Card - More scannable */}
            <div 
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-ocean-lightest/50 shadow-sm hover:shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50"
              tabIndex={0}  // Accessibility: Focusable
              aria-labelledby="story-title"
            >
              <h3 id="story-title" className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                Who We Are
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">Next Ventures Education And Consultancy Services</strong> is a 
                  proprietorship firm based in Ujjain, Madhya Pradesh, providing comprehensive business development 
                  and professional services.
                </p>
                <p>
                  Founded in <strong className="text-primary">July 2022</strong>, we bring together{" "}
                  <strong className="text-foreground">15+ years of IT industry experience</strong> (since 2009) and{" "}
                  <strong className="text-foreground">12+ years in social entrepreneurship</strong> (since 2013).
                </p>
                <p>
                  We collaborate with NGOs, FPOs, educational institutions, startups, MSMEs, and enterprises, 
                  delivering strategic, operational, and compliance-driven solutions that create lasting impact.
                </p>
              </div>
            </div>

            {/* Stats Grid - More interactive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((item, index) => {
                const Icon = item.icon;
                const colors = getColorClasses(item.color);
                return (
                  <div
                    key={item.label}
                    className="group bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-ocean-lightest/50 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300 animate-scale-in focus-within:ring-2 focus-within:ring-primary/50"
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                    tabIndex={0}
                    aria-label={`${item.value} ${item.label}`}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} aria-hidden="true" />
                    </div>
                    <div className="text-2xl font-bold text-foreground mb-1">{item.value}</div>
                    <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Vision, Mission & Values - Better mobile stacking */}
          <div className="space-y-8 animate-fade-up delay-200">  {/* Adjusted spacing */}
            {/* Vision Card - Enhanced focus */}
            <div 
              className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent rounded-2xl p-8 border border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50"
              tabIndex={0}
              aria-labelledby="vision-title"
            >
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-primary/10 rounded-full blur-2xl will-change-transform" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <h3 id="vision-title" className="font-heading text-xl font-bold text-foreground">Our Vision</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  To become a trusted growth partner for businesses and social institutions across India, 
                  empowering them with innovative, ethical, and sustainable solutions.
                </p>
              </div>
            </div>

            {/* Mission Card - Consistent styling */}
            <div 
              className="relative bg-gradient-to-br from-accent/10 via-accent/5 to-transparent rounded-2xl p-8 border border-accent/20 shadow-sm hover:shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50"
              tabIndex={0}
              aria-labelledby="mission-title"
            >
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-accent/10 rounded-full blur-2xl will-change-transform" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/30 to-accent/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <h3 id="mission-title" className="font-heading text-xl font-bold text-foreground">Our Mission</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  To provide ethical, affordable, and scalable consultancy solutions that create long-term 
                  impact while maintaining transparency and client-centricity at our core.
                </p>
              </div>
            </div>

            {/* Values Grid - More compact and accessible */}
            <div 
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-ocean-lightest/50 shadow-sm"
              aria-labelledby="values-title"
            >
              <h3 id="values-title" className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-ocean-medium/20 to-ocean-medium/5 flex items-center justify-center">
                  <Heart className="w-5 h-5 text-ocean-medium" aria-hidden="true" />
                </div>
                Our Values
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={value.title}
                      className="flex gap-4 p-4 rounded-xl hover:bg-ocean-pale/20 transition-colors duration-300 animate-fade-up focus-within:ring-2 focus-within:ring-primary/50"
                      style={{ animationDelay: `${(index + 6) * 100}ms` }}
                      tabIndex={0}
                      aria-label={`${value.title}: ${value.description}`}
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-base mb-2">{value.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;