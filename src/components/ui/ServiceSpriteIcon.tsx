const SPRITE =
  "/assets/services/ChatGPT Image Jul 2, 2026, 10_43_31 AM.png";

interface ServiceSpriteIconProps {
  col: number;
  row?: number;
  alt: string;
}

export default function ServiceSpriteIcon({
  col,
  row = 0,
  alt,
}: ServiceSpriteIconProps) {
  const x = col === 0 ? 0 : (col / 4) * 100;
  const y = row === 0 ? 0 : 100;

  return (
    <div className="icon-3d-wrap">
      <div
        className="icon-3d h-16 w-16 rounded-2xl bg-no-repeat"
        style={{
          backgroundImage: `url("${SPRITE}")`,
          backgroundSize: "500% 200%",
          backgroundPosition: `${x}% ${y}%`,
        }}
        role="img"
        aria-label={alt}
      />
    </div>
  );
}
