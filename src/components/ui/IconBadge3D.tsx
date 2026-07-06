import type { ReactNode } from "react";

interface IconBadge3DProps {
  icon: ReactNode;
  gradient?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { wrap: "h-11 w-11" },
  md: { wrap: "h-14 w-14" },
  lg: { wrap: "h-16 w-16" },
};

export default function IconBadge3D({ icon, gradient = "from-primary to-secondary", size = "md" }: IconBadge3DProps) {
  const s = sizes[size];

  return (
    <div className="icon-3d-wrap">
      <div
        className={`icon-3d ${s.wrap} flex items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-3d text-white`}
      >
        {icon}
      </div>
    </div>
  );
}
