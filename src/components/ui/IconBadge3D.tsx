import Image from "next/image";

interface IconBadge3DProps {
  icon: string;
  gradient: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { wrap: "h-11 w-11", icon: 18 },
  md: { wrap: "h-14 w-14", icon: 24 },
  lg: { wrap: "h-16 w-16", icon: 28 },
};

export default function IconBadge3D({ icon, gradient, size = "md" }: IconBadge3DProps) {
  const s = sizes[size];
  return (
    <div className="icon-3d-wrap">
      <div
        className={`icon-3d ${s.wrap} flex items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} shadow-3d relative overflow-hidden`}
      >
        <Image
          src={icon}
          alt="icon"
          fill
          className="object-cover drop-shadow-sm"
        />
      </div>
    </div>
  );
}
