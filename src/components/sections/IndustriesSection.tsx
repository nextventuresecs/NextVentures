import { motion, useInView } from "framer-motion";
import { useRef } from "react";  // Add this import
import IndustryChip from "@/components/IndustryChip";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Sprout,
  GraduationCap,
  Store,
  Building2,
  ArrowRight,
} from "lucide-react";

const IndustriesSection = () => {
  const industries = [
    { icon: Heart, label: "NGOs & Trusts", description: "Supporting social impact organizations with compliance and strategy." },
    { icon: Sprout, label: "Farmer Producer Organizations (FPOs)", description: "Empowering agricultural communities with sustainable solutions." },
    { icon: GraduationCap, label: "Educational Institutions", description: "Enhancing learning environments with digital and operational tools." },
    { icon: Store, label: "MSMEs & Startups", description: "Fueling growth for small businesses and innovative ventures." },
    { icon: Building2, label: "Corporates & Professionals", description: "Delivering enterprise-level consultancy for established firms." },
  ];

  // Framer Motion variants for animations
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

  const hoverVariants = {
    hover: { scale: 1.05, rotate: 2, transition: { duration: 0.2 } },
  };

  // Fixed: Create ref separately and use useInView correctly
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });  // Returns boolean

  return (
    <section 
      id="industries" 
      className="relative py-20 lg:py-28 bg-gradient-to-b from-background via-ocean-pale/10 to-background overflow-hidden"
      aria-labelledby="industries-heading"
      ref={ref}  // Attach ref here
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}  // Use boolean here
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-ocean-lightest shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            <span className="text-foreground/80 text-sm font-medium uppercase tracking-wider">Industries We Serve</span>
          </div>
          <h2 
            id="industries-heading"
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            Expertise Across{" "}
            <span className="bg-gradient-to-r from-primary via-ocean-medium to-primary-light bg-clip-text text-transparent">
              Diverse Sectors
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            From social enterprises to corporates, we bring domain-specific expertise 
            to every partnership. Discover how we serve your industry.
          </p>
        </motion.div>

        {/* Industries Chips */}
        <motion.div 
          className="flex flex-wrap justify-center gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}  // Use boolean here
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.label}
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
            >
              <IndustryChip 
                icon={industry.icon} 
                label={industry.label} 
                
              />
              {/* Tooltip on hover */}
              <motion.div 
                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-4 py-2 bg-card/90 backdrop-blur-sm rounded-lg shadow-lg text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap"
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
              >
                {industry.description}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-card/90"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesSection;