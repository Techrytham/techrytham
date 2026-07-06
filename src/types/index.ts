export interface ServiceItem {
  title: string;
  description: string;
  spriteCol: number;
  spriteRow?: number;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconSrc: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  iconSrc: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  tag: string;
  image: string;
  size: "large" | "small";
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

export interface AboutCard {
  title: string;
  description: string;
  iconSrc: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export interface ContactInfoItem {
  title: string;
  value: string;
  iconSrc: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconSrc: string;
}
