import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowLeft, Shield } from "lucide-react";

const PrivacyPolicy = () => {
  const isMobile = useIsMobile();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-ocean-pale/10 to-background">
      <div className="container py-20 lg:py-32" ref={ref}>
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-ocean-lightest shadow-sm mb-6">
              <Shield className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="text-foreground/80 text-sm font-medium">Privacy Policy</span>
            </div>
            <h1 className={`font-heading font-bold text-foreground mb-6 leading-tight ${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'}`}>
              Privacy Policy for{" "}
              <span className="bg-gradient-to-r from-primary to-ocean-medium bg-clip-text text-transparent">
                Next Ventures
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">Effective Date: January 1, 2026</p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="prose prose-lg max-w-none text-foreground/80">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p>
                At Next Ventures Education And Consultancy Services, we are committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, and safeguard your information when you use our website or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email, phone, and business details provided via forms or consultations.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, and pages visited for analytics.</li>
                <li><strong>Cookies:</strong> We use cookies to enhance your experience and track site performance.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide and improve our consultancy services.</li>
                <li>To communicate updates, newsletters, or service-related information.</li>
                <li>To comply with legal obligations and ensure security.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Sharing and Security</h2>
              <p>
                We do not sell your data. Information may be shared with trusted partners for service delivery. 
                We use encryption and secure servers to protect your data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Your Rights</h2>
              <p>You have the right to access, update, or delete your data. Contact us at privacy@nextventures.com.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Changes to This Policy</h2>
              <p>We may update this policy. Changes will be posted here with an updated effective date.</p>
            </section>
          </motion.div>

          {/* Back Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="hover:bg-ocean-pale/20"
              asChild
            >
              <a href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-5 h-5" />
                Back to Home
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;