import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TrustCard from "@/components/TrustCard";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Award,
  Shield,
  Users,
  Globe,
  Target,
  ArrowRight,
} from "lucide-react";

const WhyUsSection = () => {
  const trustPoints = [
    {
      icon: CheckCircle2,
      title: "One-Stop Solution",
      description: "All business services under one roof — from strategy to execution.",
    },
    {
      icon: Award,
      title: "Domain Expertise",
      description: "Deep understanding of NGO, FPO, education, and corporate sectors.",
    },
    {
      icon: Shield,
      title: "Compliance-First Approach",
      description: "We ensure your business stays compliant with all statutory requirements.",
    },
    {
      icon: Users,
      title: "Transparency & Ethics",
      description: "Clear communication, honest pricing, and ethical business practices.",
    },
    {
      icon: Globe,
      title: "Pan-India Network",
      description: "Strong network of professionals and partners across India.",
    },
    {
      icon: Target,
      title: "Impact-Driven Results",
      description: "Focused on creating measurable, long-term value for your organization.",
    },
  ];

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Scroll trigger
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section 
      id="why-us" 
      className="relative py-20 lg:py-28 bg-gradient-to-b from-background via-ocean-pale/10 to-background overflow-hidden"
      aria-labelledby="why-us-heading"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl will-change-transform" />
        <div className="absolute bottom-1/3 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl will-change-transform" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content - Enhanced with Framer Motion */}
          <motion.div 
            className="animate-fade-up"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-ocean-lightest shadow-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              <span className="text-foreground/80 text-sm font-medium uppercase tracking-wider">Why Choose Us</span>
            </div>
            <h2 
              id="why-us-heading"
              className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
            >
              Built on Trust,{" "}
              <span className="bg-gradient-to-r from-primary via-ocean-medium to-primary-light bg-clip-text text-transparent">
                Driven by Results
              </span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              We don't just offer services — we become your long-term growth partner, 
              committed to your success through integrity, expertise, and accountability.
            </p>

          </motion.div>

          {/* Trust Cards Grid - With Framer Motion */}
          <motion.div 
            className="grid sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {trustPoints.map((point, index) => (
              <motion.div
                key={point.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="group"
              >
                <TrustCard 
                  Icon={point.icon} 
                  title={point.title} 
                  description={point.description} 
                  className="h-full group-hover:shadow-lg group-hover:border-primary/30 transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;