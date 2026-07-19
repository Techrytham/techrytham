import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#3B43FF",
        primary: {
          DEFAULT: "#3B43FF",
          dark: "#272EFF",
          light: "#5C63FF",
        },
        secondary: "#7D7BFF",
        accent: "#B9BEFF",
        background: "#FFFFFF",
        backgroundLight: "#F8F9FF",
        surface: "#F8F9FF",
        border: "#E8EAFF",
        heading: "#1B1B1F",
        paragraph: "#6B7280",
        ink: "#1B1B1F",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg,#3B43FF,#4B4FFF,#6165FF)",
        "brand-gradient-soft": "linear-gradient(135deg, #EEF0FF 0%, #F8F9FF 100%)",
        "hero": "linear-gradient(135deg,#FFFFFF,#F6F7FF,#ECEEFF)",
        "hero-illustration": "linear-gradient(135deg,#8D90FF,#575CFF,#343CFF,#2028F8)",
      },
      boxShadow: {
        "3d": "0 1px 0 rgba(255,255,255,0.6) inset, 0 -6px 14px rgba(59,67,255,0.15) inset, 0 20px 35px -12px rgba(59,67,255,0.35)",
        "card": "0 10px 25px rgba(0,0,0,0.05)",
        "card-hover": "0 18px 30px rgba(59,67,255,0.15)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(3deg)" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        spinSlow: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 5s ease-in-out infinite",
        spinSlow: "spinSlow 14s linear infinite",
        marquee: "marquee 35s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
