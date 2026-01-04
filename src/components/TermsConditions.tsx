import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowLeft, FileText } from "lucide-react";

const TermsConditions = () => {
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
              <FileText className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="text-foreground/80 text-sm font-medium">Terms & Conditions</span>
            </div>
            <h1 className={`font-heading font-bold text-foreground mb-6 leading-tight ${isMobile ? 'text-2xl' : 'text-3xl md:text-4xl'}`}>
              Terms and Conditions for{" "}
              <span className="bg-gradient-to-r from-primary to-ocean-medium bg-clip-text text-transparent">
                Next Ventures
              </span>
            </h1>
            <p className="text-muted-foreground text-lg">Effective Date: January 1, 2026</p>
          </motion.div>

          {/* Content */}
          <motion.div variants={itemVariants} className="prose prose-lg max-w-none text-foreground/80">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By using our services, you agree to these Terms and Conditions. If you disagree, please do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Services</h2>
              <p>
                We provide consultancy services including business development, compliance, finance, HR, marketing, and digital solutions. 
                Services are delivered as agreed in contracts.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate information for service delivery.</li>
                <li>Comply with applicable laws and regulations.</li>
                <li>Use our services ethically and legally.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Payment and Fees</h2>
              <p>
                Fees are as per agreed terms. Payments are due as invoiced. Late payments may incur penalties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
              <p>
                We are not liable for indirect damages. Our liability is limited to the service fees paid.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Termination</h2>
              <p>
                Either party may terminate services with notice. Fees for completed work remain due.
              </p>
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

export default TermsConditions;