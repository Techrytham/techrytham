import type { LucideIcon } from "lucide-react";

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
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
  icon: string;
  gradient: string;
}

export interface TechItem {
  name: string;
  icon: string;
}
