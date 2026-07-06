import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline";
  icon?: ReactNode;
  className?: string;
}

export default function Button({
  href = "#",
  children,
  variant = "primary",
  icon,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out";

  const styles =
  variant === "primary"
    ? "bg-[linear-gradient(90deg,#8E8EDC_0%,#0000FF_100%)] text-white shadow-[0_10px_25px_-8px_rgba(0,0,255,0.45)] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-8px_rgba(0,0,255,0.55)]"
    : "border border-primary text-primary bg-white hover:bg-primary hover:text-white hover:shadow-[0_10px_25px_-8px_rgba(59,67,255,0.12)]";
  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {icon}
    </Link>
  );
}
