import Image from "next/image";

interface TechIconProps {
  name: string;
  className?: string;
}

const techIcons: Record<string, string> = {
  react: "/assets/technologies/react-logo-png-react-js-logo-history-design-history-and-evolution-5500x3094.png",
  nodejs: "/assets/technologies/nodejs-logo.png",
  python: "/assets/technologies/Python-Logo.png",
  flutter: "/assets/technologies/Flutter_logo_text.png",
  mongodb: "/assets/technologies/Mongodb-PNG-Free-Image.png",
  firebase: "/assets/technologies/firebase-logo-600x173.png",
  aws: "/assets/technologies/Amazon-Web-Services-AWS-Logo-Transparent-PNG.png",
};

export default function TechIcon({ name, className = "h-9 w-9" }: TechIconProps) {
  const iconPath = techIcons[name.toLowerCase()];

  if (!iconPath) {
    return null;
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={iconPath}
        alt={name}
        fill
        className="object-contain"
      />
    </div>
  );
}
