import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#3B2FE0",
          light: "#5B4FF5",
          dark: "#241C9E",
        },
        ink: "#0B0B12",
        muted: "#6B7280",
        surface: "#F6F6FB",
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
        "brand-gradient": "linear-gradient(135deg, #4338F5 0%, #6C5CE7 50%, #2E1FC7 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, #EEF0FF 0%, #E2E0FF 100%)",
      },
      boxShadow: {
        "3d": "0 1px 0 rgba(255,255,255,0.6) inset, 0 -6px 14px rgba(59,47,224,0.15) inset, 0 20px 35px -12px rgba(59,47,224,0.35)",
        "card": "0 10px 30px -12px rgba(20,20,50,0.12)",
        "card-hover": "0 20px 45px -15px rgba(59,47,224,0.30)",
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
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        floatSlow: "floatSlow 5s ease-in-out infinite",
        spinSlow: "spinSlow 14s linear infinite",
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
