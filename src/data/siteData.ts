import type {
  ServiceItem,
  WhyChooseItem,
  ProcessStep,
  PortfolioItem,
  Testimonial,
  AboutCard,
  TechItem,
} from "@/types";

export const technologies: TechItem[] = [
  { name: "React", icon: "react" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Python", icon: "python" },
  { name: "Flutter", icon: "flutter" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "Firebase", icon: "firebase" },
];

export const services: ServiceItem[] = [
  {
    title: "Website Development",
    description:
      "Fast, responsive, and SEO-friendly websites built using modern technologies.",
    icon: "/assets/services/ChatGPT Image Jul 2, 2026, 10_43_31 AM.png",
    gradient: "from-[#8B7CF6] to-[#5B4FF5]",
  },
  {
    title: "App Development",
    description:
      "Native and cross-platform Android & iOS applications with premium user experience.",
    icon: "/assets/services/ChatGPT Image Jul 2, 2026, 10_43_31 AM.png",
    gradient: "from-[#22C1DC] to-[#1B8FD1]",
  },
  {
    title: "Digital Marketing",
    description:
      "Performance-driven marketing strategies to increase traffic, leads, and revenue.",
    icon: "/assets/services/ChatGPT Image Jul 2, 2026, 10_43_31 AM.png",
    gradient: "from-[#FDBB2D] to-[#F58529]",
  },
  {
    title: "Graphics Designing",
    description:
      "Beautiful, user-centered interfaces that improve engagement and conversions.",
    icon: "/assets/services/ChatGPT Image Jul 2, 2026, 10_43_31 AM.png",
    gradient: "from-[#F35CA0] to-[#C13584]",
  },
];

export const whyChooseUs: WhyChooseItem[] = [
  {
    title: "Affordable Pricing",
    description:
      "We offer competitive pricing without compromising on quality, ensuring the best value for your investment.",
    icon: "/assets/why-choose/affordable pricing.png",
    gradient: "from-[#34D399] to-[#059669]",
  },
  {
    title: "Fast Delivery",
    description:
      "We value your time and ensure on-time project delivery without compromising on quality.",
    icon: "/assets/why-choose/fast dilevery.png",
    gradient: "from-[#FB7185] to-[#E11D48]",
  },
  {
    title: "Latest Technologies",
    description:
      "We use the latest tools and technologies to build modern, scalable, and future-ready solutions.",
    icon: "/assets/why-choose/latest technology.png",
    gradient: "from-[#60A5FA] to-[#2563EB]",
  },
  {
    title: "Secure Solutions",
    description:
      "Security is our priority. We build robust and secure solutions to protect your data and business.",
    icon: "/assets/why-choose/secure solutions.png",
    gradient: "from-[#A78BFA] to-[#7C3AED]",
  },
  {
    title: "24/7 Support",
    description:
      "Our support team is available round the clock to assist you whenever you need help.",
    icon: "/assets/why-choose/supprt.png",
    gradient: "from-[#38BDF8] to-[#0284C7]",
  },
  {
    title: "Dedicated Team",
    description:
      "Our passionate team is committed to delivering high-quality digital solutions with creativity, attention to detail, and a client-first approach.",
    icon: "/assets/why-choose/team.png",
    gradient: "from-[#FBBF24] to-[#D97706]",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, goals, target audience, and project requirements to build a strong foundation for success.",
    icon: "/assets/process/chat-bubble_17722301.png",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We analyze your requirements, create a clear strategy, define the project roadmap, and set realistic timelines for smooth execution.",
    icon: "/assets/process/list_4458168.png",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our designers create modern, user-friendly, and visually engaging interfaces that reflect your brand identity and provide an excellent user experience.",
    icon: "/assets/process/pen-tool_10336315.png",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We transform designs into powerful digital products using the latest technologies, clean coding standards, and scalable architecture.",
    icon: "/assets/process/coding_156675.png",
  },
  {
    number: "05",
    title: "Test",
    description:
      "Every feature is carefully tested to ensure high performance, security, responsiveness, and a bug-free experience before launch.",
    icon: "/assets/process/file_4914109.png",
  },
  {
    number: "06",
    title: "Launch & Support",
    description:
      "We understand your business, goals, target audience, and project requirements to build a strong foundation for success.",
    icon: "/assets/process/project-launch_10934009.png",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "EduVision",
    category: "Web Development",
    description:
      "A modern e-learning platform with interactive courses and student dashboard.",
    tag: "Unlock your learning potential",
    image: "/images/portfolio-eduvision.svg",
    size: "large",
  },
  {
    title: "Medicare+",
    category: "Mobile App",
    description: "Healthcare app for booking appointments and managing health records.",
    tag: "The Heroines of health care",
    image: "/images/portfolio-medicare.svg",
    size: "small",
  },
  {
    title: "Brandcraft",
    category: "UI/UX Design",
    description: "Creative agency website designed for a modern and bold brand identity.",
    tag: "Build Your Company",
    image: "/images/portfolio-brandcraft.svg",
    size: "small",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Ajay Thakur",
    role: "CEO, EduVision",
    quote:
      "Techrytham transformed our idea into a powerful digital solution. Their team is highly professional and reliable.",
    avatar: "/images/avatar-ajay.svg",
  },
  {
    name: "Priya Verma",
    role: "Founder, Shopzy",
    quote:
      "Excellent communication, on-time delivery, and amazing support throughout the project. Highly recommended!",
    avatar: "/images/avatar-priya.svg",
  },
  {
    name: "Rohan Mehta",
    role: "Founder, Brandcraft",
    quote:
      "Working with Techrytham felt like having an in-house team. Fast delivery and thoughtful design at every step.",
    avatar: "/images/avatar-rohan.svg",
  },
];

export const aboutCards: AboutCard[] = [
  {
    title: "Our Mission",
    description:
      "To empower businesses with innovative digital solutions that drive growth and success.",
    icon: "/assets/about/our mission.png",
    gradient: "from-[#FB7185] to-[#E11D48]",
  },
  {
    title: "Our Vision",
    description: "To be a global leader in digital transformation and technology innovation.",
    icon: "/assets/about/our vision.png",
    gradient: "from-[#FBBF24] to-[#D97706]",
  },
  {
    title: "Our Values",
    description:
      "We value integrity, creativity, collaboration and delivering excellence in everything we do.",
    icon: "/assets/about/our values.png",
    gradient: "from-[#F472B6] to-[#DB2777]",
  },
  {
    title: "Our Approach",
    description:
      "We listen, we plan, we build and we grow together with your business.",
    icon: "/assets/about/our approach.png",
    gradient: "from-[#60A5FA] to-[#2563EB]",
  },
];

export const stats = [
  { label: "Project Delivered", value: "40+" },
  { label: "Technologies Used", value: "15+" },
  { label: "Client Satisfaction", value: "95%" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Blogs", href: "#blogs" },
  { label: "Our Work", href: "#portfolio" },
];

export const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Our Work", href: "#portfolio" },
  { label: "Contact Us", href: "#contact" },
];

export const footerServices = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "Digital Marketing",
  "Branding",
];

export const supportLinks = [
  "FAQ",
  "Privacy Policy",
  "Terms & Conditions",
  "Refund Policy",
  "Support Center",
];
