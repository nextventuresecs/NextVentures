import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";  // Import the provided hook
import { useToast } from "@/hooks/use-toast";  // Import the provided hook
import { ArrowRight, TrendingUp, Users, Calendar, Share2 } from "lucide-react";
import { ENDPOINTS } from "@/config/api";

const DEFAULT_CASE_STUDIES = [
  {
    id: 1,
    title: "NGO Digital Transformation",
    description: "Helped a local NGO streamline operations with custom ERP, increasing efficiency by 40%.",
    image: "/case-study-1.jpg",
    metrics: { growth: "40% Efficiency", clients: "500+ Beneficiaries", duration: "6 Months" },
    link: ENDPOINTS.CASE_STUDIES_PAGE,
  },
  {
    id: 2,
    title: "MSME Compliance & Growth",
    description: "Provided end-to-end compliance solutions for a startup, securing funding and scaling to 200 employees.",
    image: "/case-study-2.jpg",
    metrics: { growth: "300% Revenue", clients: "200 Employees", duration: "1 Year" },
    link: ENDPOINTS.CASE_STUDIES_PAGE,
  },
  {
    id: 3,
    title: "Educational Institution Consultancy",
    description: "Optimized HR and digital tools for a college, improving student enrollment by 25%.",
    image: "/case-study-3.jpg",
    metrics: { growth: "25% Enrollment", clients: "1000+ Students", duration: "8 Months" },
    link: ENDPOINTS.CASE_STUDIES_PAGE,
  },
];

const CaseStudiesSection = () => {
  const { toast } = useToast();
  const isMobile = useIsMobile();
  const [caseStudies, setCaseStudies] = useState(DEFAULT_CASE_STUDIES);

  useEffect(() => {
    const fetchCaseStudies = async () => {
      try {
        const response = await fetch(ENDPOINTS.CASE_STUDIES);
        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data) && data.length > 0) {
            setCaseStudies(data);
          } else if (data.data && Array.isArray(data.data) && data.data.length > 0) {
            setCaseStudies(data.data);
          }
        }
      } catch {
        // Fall back to default static items if API is unavailable
      }
    };

    fetchCaseStudies();
  }, []);

  // Framer Motion variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Scroll trigger
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const handleReadMore = (title: string, link: string) => {
    toast({
      title: "Case Study Details",
      description: `Redirecting to ${title}...`,  // Simulate navigation
      action: (
        <Button variant="outline" size="sm" asChild>
          <a href={link}>View Now</a>
        </Button>
      ),
    });
  };

  const handleShare = (title: string) => {
    toast({
      title: "Shared!",
      description: `${title} case study has been shared.`,  // Simulate sharing
    });
  };

  return (
    <section 
      id="case-studies" 
      className="relative py-20 lg:py-32 bg-gradient-to-b from-background via-ocean-pale/10 to-background overflow-hidden"
      aria-labelledby="case-studies-heading"
      ref={ref}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl will-change-transform" />
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl will-change-transform" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full border border-ocean-lightest shadow-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            <span className="text-foreground/80 text-sm font-medium uppercase tracking-wider">Case Studies</span>
          </div>
          <h2 
            id="case-studies-heading"
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight"
          >
            Real Results, Real Impact{" "}
            <span className="bg-gradient-to-r from-primary via-ocean-medium to-primary-light bg-clip-text text-transparent">
              Stories
            </span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Discover how we've transformed businesses and organizations across industries. 
            These success stories showcase our expertise in action.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div 
          className={`grid gap-8 ${isMobile ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}  // Use useIsMobile for responsive grid
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-ocean-lightest/50 shadow-sm hover:shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-primary/50"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-ocean-light/20 to-primary/10 flex items-center justify-center">
                <div className="text-4xl text-ocean-medium">📊</div>  {/* Placeholder emoji; replace with <img> */}
                <div className="absolute top-4 right-4 bg-accent/90 text-accent-foreground px-2 py-1 rounded-full text-xs font-semibold">
                  Case Study
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {study.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <TrendingUp className="w-5 h-5 text-accent mx-auto mb-1" aria-hidden="true" />
                    <div className="text-sm font-semibold text-foreground">{study.metrics.growth}</div>
                    <div className="text-xs text-muted-foreground">Growth</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-5 h-5 text-ocean-medium mx-auto mb-1" aria-hidden="true" />
                    <div className="text-sm font-semibold text-foreground">{study.metrics.clients}</div>
                    <div className="text-xs text-muted-foreground">Impact</div>
                  </div>
                  <div className="text-center">
                    <Calendar className="w-5 h-5 text-primary mx-auto mb-1" aria-hidden="true" />
                    <div className="text-sm font-semibold text-foreground">{study.metrics.duration}</div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="flex-1 gradient-cta text-accent-foreground hover:scale-105 transition-transform"
                    onClick={() => handleReadMore(study.title, study.link)}  // Use useToast for notification
                  >
                    Read More
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="hover:bg-ocean-pale/20"
                    onClick={() => handleShare(study.title)}  // Use useToast for sharing
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Want to see more success stories? Explore our full portfolio.
          </p>
          <Button 
            size="lg"
            className="gradient-cta text-accent-foreground rounded-full px-8 py-6 text-base font-semibold shadow-gold hover:shadow-cta hover:scale-105 transition-all duration-300 group"
            asChild
          >
            <a href={ENDPOINTS.CASE_STUDIES_PAGE} className="flex items-center gap-2" aria-label="View all case studies">
              View All Case Studies
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;