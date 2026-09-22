export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    category: "Services",
    question: "What consultancy services does Next Ventures provide?",
    answer: "Next Ventures provides comprehensive, end-to-end consultancy covering business development, HR management, statutory compliance, accounting & finance, digital marketing, IT & digital solutions, and dedicated advisory for NGOs, FPOs, and MSMEs across India.",
  },
  {
    category: "NGO & FPO",
    question: "How does Next Ventures assist NGOs and FPOs in India?",
    answer: "We support Non-Governmental Organizations (NGOs) and Farmer Producer Organizations (FPOs) with 12A/80G registration, CSR funding documentation, FCRA compliance, project management, financial auditing, and institutional capacity development to ensure sustainable growth.",
  },
  {
    category: "MSME & Enterprise",
    question: "What compliance and registration support is available for MSMEs?",
    answer: "We offer complete support for MSME/Udyam registration, GST filing, trademark registration, ISO certifications, company formation, government scheme advisory, and financial structuring designed to accelerate enterprise development.",
  },
  {
    category: "Location & Consultation",
    question: "Where is Next Ventures located and how can I get a consultation?",
    answer: "Next Ventures is headquartered in Indore, Madhya Pradesh, India, with services delivered nationwide. You can request a free consultation by reaching out via our contact form, calling +91 88188 87785, or emailing contact@nextventures.in.",
  },
  {
    category: "Digital Solutions",
    question: "What digital and marketing solutions do you offer for businesses?",
    answer: "Our digital suite includes web design and software development, CRM and ERP setup, search engine optimization (SEO), performance digital marketing, brand identity creation, and social media management customized for high ROI.",
  },
  {
    category: "Engagement",
    question: "How quickly can Next Ventures initiate a business engagement?",
    answer: "Once you contact us, our expert consultants respond within 24 hours to schedule an initial discovery call. Upon understanding your scope, we provide a structured strategic roadmap within 2-3 business days.",
  },
];
