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
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out";

  const styles =
    variant === "primary"
      ? "bg-brand-gradient text-white shadow-[0_10px_25px_-8px_rgba(59,47,224,0.55)] hover:-translate-y-0.5 hover:shadow-[0_16px_32px_-8px_rgba(59,47,224,0.65)]"
      : "border-2 border-brand text-brand hover:bg-brand hover:text-white hover:-translate-y-0.5";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
      {icon}
    </Link>
  );
}
