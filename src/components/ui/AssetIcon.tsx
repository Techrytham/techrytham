import Image from "next/image";

interface AssetIconProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
  with3D?: boolean;
  className?: string;
}

const sizeMap = {
  sm: "h-11 w-11",
  md: "h-14 w-14",
  lg: "h-16 w-16",
  xl: "h-20 w-20",
};

export default function AssetIcon({
  src,
  alt,
  size = "md",
  with3D = true,
  className = "",
}: AssetIconProps) {
  return (
    <div className={with3D ? "icon-3d-wrap" : ""}>
      <div
        className={`relative ${sizeMap[size]} ${with3D ? "icon-3d" : ""} ${className}`}
      >
        <Image src={src} alt={alt} fill className="object-contain" sizes="80px" />
      </div>
    </div>
  );
}
