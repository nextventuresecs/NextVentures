import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Star, Quote } from "lucide-react";

const CTASection = () => {


  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Scroll trigger
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section 
      className="relative py-20 lg:py-32 bg-gradient-to-br from-primary via-ocean-medium to-accent overflow-hidden"
      aria-labelledby="cta-heading"
      ref={ref}
    >
      {/* Unique Background: Animated particles and waves */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-80 h-80 bg-primary-foreground/10 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Floating particles for uniqueness */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/60 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
        {/* Wave overlay for depth */}
        <svg
          className="absolute bottom-0 left-0 w-full h-20"
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L48 100C96 80 192 40 288 30C384 20 480 40 576 50C672 60 768 60 864 50C960 40 1056 20 1152 10C1248 0 1344 0 1392 0L1440 0V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z"
            fill="rgba(255,255,255,0.1)"
          />
        </svg>
      </div>

      <div className="container relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >

          {/* Main CTA Content */}
          <motion.h2 
            id="cta-heading"
            className="font-heading text-3xl md:text-4xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight"
            variants={itemVariants}
          >
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-accent to-primary-light bg-clip-text text-transparent">
              Growth Story?
            </span>
          </motion.h2>
          <motion.p 
            className="text-primary-foreground/90 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Let's discuss how we can help your business thrive. Schedule a free consultation 
            with our experts today.
          </motion.p>

          {/* Unique CTA Buttons with Hover Effects */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            variants={itemVariants}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-10 py-6 text-lg font-semibold shadow-2xl hover:shadow-accent/50 transition-all duration-1000 group animate-bounce"
                asChild
              >
                <a href="#contact" className="flex items-center gap-3" aria-label="Schedule a free consultation">
                  Get Free Consultation
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </a>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                variant="outline"
                size="lg"
                className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-10 py-6 text-lg font-semibold transition-all duration-300 group"
                asChild
              >
                <a href="tel:+918818887785" className="flex items-center gap-3" aria-label="Call us now">
                  <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Call Now
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Urgency Element */}
          <motion.p 
            className="text-primary-foreground/70 text-sm mt-8"
            variants={itemVariants}
          >
            Let’s Build Your Growth Story Together. Contact us today!
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;