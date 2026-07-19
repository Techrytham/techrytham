import type {
  ServiceItem,
  WhyChooseItem,
  ProcessStep,
  PortfolioItem,
  Testimonial,
  AboutCard,
  TechItem,
  ContactInfoItem,
  SocialLink,
} from "@/types";

export const technologies: TechItem[] = [
  { name: "React", icon: "react" },
  { name: "Next.js", icon: "nextjs" },
  { name: "TypeScript", icon: "typescript" },
  { name: "Node.js", icon: "nodejs" },
  { name: "Python", icon: "python" },
  { name: "Flutter", icon: "flutter" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "PostgreSQL", icon: "postgresql" },
  { name: "Firebase", icon: "firebase" },
  { name: "GraphQL", icon: "graphql" },
  { name: "Docker", icon: "docker" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "AWS", icon: "aws" },
  { name: "Git", icon: "git" },
];

export const services: ServiceItem[] = [
  {
    title: "Website Development",
    description:
      "Fast, responsive, and SEO-friendly websites built using modern technologies.",
     icon: "/assets/services/1.png"
    
  },
  {
    title: "App Development",
    description:
      "Native and cross-platform Android & iOS applications with premium user experience.",
     icon: "/assets/services/2.png"
  },
  {
    title: "Digital Marketing",
    description:
      "Performance-driven marketing strategies to increase traffic, leads, and revenue.",
     icon: "/assets/services/3.png"
  },
  {
    title: "Graphics Designing",
    description:
      "Beautiful, user-centered interfaces that improve engagement and conversions.",
     icon: "/assets/services/4.png"
  },
];

export const whyChooseUs: WhyChooseItem[] = [
  {
    title: "Affordable Pricing",
    description:
      "We offer competitive pricing without compromising on quality, ensuring the best value for your investment.",
    iconSrc: "/assets/why-choose/affordable pricing.png",
  },
  {
    title: "Fast Delivery",
    description:
      "We value your time and ensure on-time project delivery without compromising on quality.",
    iconSrc: "/assets/why-choose/fast dilevery.png",
  },
  {
    title: "Latest Technologies",
    description:
      "We use the latest tools and technologies to build modern, scalable, and future-ready solutions.",
    iconSrc: "/assets/why-choose/latest technology.png",
  },
  {
    title: "Secure Solutions",
    description:
      "Security is our priority. We build robust and secure solutions to protect your data and business.",
    iconSrc: "/assets/why-choose/secure solutions.png",
  },
  {
    title: "24/7 Support",
    description:
      "Our support team is available round the clock to assist you whenever you need help.",
    iconSrc: "/assets/why-choose/supprt.png",
  },
  {
    title: "Dedicated Team",
    description:
      "Our passionate team is committed to delivering high-quality digital solutions with creativity, attention to detail, and a client-first approach.",
    iconSrc: "/assets/why-choose/team.png",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, goals, target audience, and project requirements to build a strong foundation for success.",
    iconSrc: "/assets/process/chat-bubble_17722301.png",
  },
  {
    number: "02",
    title: "Plan",
    description:
      "We analyze your requirements, create a clear strategy, define the project roadmap, and set realistic timelines for smooth execution.",
    iconSrc: "/assets/process/list_4458168.png",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our designers create modern, user-friendly, and visually engaging interfaces that reflect your brand identity and provide an excellent user experience.",
    iconSrc: "/assets/process/pen-tool_10336315.png",
  },
  {
    number: "04",
    title: "Develop",
    description:
      "We transform designs into powerful digital products using the latest technologies, clean coding standards, and scalable architecture.",
    iconSrc: "/assets/process/coding_156675.png",
  },
  {
    number: "05",
    title: "Test",
    description:
      "Every feature is carefully tested to ensure high performance, security, responsiveness, and a bug-free experience before launch.",
    iconSrc: "/assets/process/file_4914109.png",
  },
  {
    number: "06",
    title: "Launch & Support",
    description:
      "We deliver long-term support to ensure your product launches successfully and continues to grow after deployment.",
    iconSrc: "/assets/process/project-launch_10934009.png",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    title: "EduVision",
    category: "Web Development",
    description:
      "A modern e-learning platform with interactive courses and student dashboard.",
    tag: "Unlock your learning potential",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
    size: "large",
  },
  {
    title: "Medicare+",
    category: "Mobile App",
    description: "Healthcare app for booking appointments and managing health records.",
    tag: "The Heroines of health care",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    size: "small",
  },
  {
    title: "Brandcraft",
    category: "UI/UX Design",
    description: "Creative agency website designed for a modern and bold brand identity.",
    tag: "Build Your Company",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
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
    iconSrc: "/assets/about/our mission.png",
  },
  {
    title: "Our Vision",
    description: "To be a global leader in digital transformation and technology innovation.",
    iconSrc: "/assets/about/our vision.png",
  },
  {
    title: "Our Values",
    description:
      "We value integrity, creativity, collaboration and delivering excellence in everything we do.",
    iconSrc: "/assets/about/our values.png",
  },
  {
    title: "Our Approach",
    description:
      "We listen, we plan, we build and we grow together with your business.",
    iconSrc: "/assets/about/our approach.png",
  },
];

export const contactInfo: ContactInfoItem[] = [
  {
    title: "Email",
    value: "techrytham.com@gmail.com",
    iconSrc: "/assets/contact/send-mail_10505676 1.png",
  },
  {
    title: "Call us",
    value: "+91-6260324715 / +91-9039135773",
    iconSrc: "/assets/contact/call_3575348 1.png",
  },
  {
    title: "Location",
    value: "Nagpur, Maharashtra (M.H) India",
    iconSrc: "/assets/contact/technical-support_11683681 1.png",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "#",
    iconSrc: "/assets/social/1377213 1.png",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/techrytham?igsh=MmRiM3VkN3I2Z29o",
    iconSrc: "/assets/social/instagram_2626270 (3) 1.png",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/14VRv34r1CM/",
    iconSrc: "/assets/social/communication_15047435 (1) 1.png",
  },
  {
    label: "Twitter",
    href: "https://x.com/techrythamX",
    iconSrc: "/assets/social/twitter_5968830 2.png",
  },
];

export const stats = [
  { label: "Project Delivered", value: "40+" },
  { label: "Technologies Used", value: "15+" },
  { label: "Client Satisfaction", value: "95%" },
];

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/#about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Our Work", href: "/#portfolio" },
];

export const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/#about" },
  { label: "Our Work", href: "/#portfolio" },
  { label: "Contact Us", href: "/#contact" },
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
