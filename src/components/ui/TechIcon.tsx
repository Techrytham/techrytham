interface TechIconProps {
  name: string;
}

const techIcons: Record<string, { svg: React.ReactNode; label: string }> = {
  react: {
    label: "React",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#61DAFB" strokeWidth="3" fill="none"/>
        <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#61DAFB" strokeWidth="3" fill="none" transform="rotate(60 50 50)"/>
        <ellipse cx="50" cy="50" rx="45" ry="18" stroke="#61DAFB" strokeWidth="3" fill="none" transform="rotate(120 50 50)"/>
        <circle cx="50" cy="50" r="7" fill="#61DAFB"/>
      </svg>
    ),
  },
  nodejs: {
    label: "Node.js",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" fill="#339933" opacity="0.12"/>
        <polygon points="50,6 88,28 88,72 50,94 12,72 12,28" stroke="#339933" strokeWidth="3" fill="none"/>
        <text x="50" y="62" textAnchor="middle" fontSize="32" fill="#339933" fontFamily="Inter, sans-serif" fontWeight="700">N</text>
      </svg>
    ),
  },
  python: {
    label: "Python",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <path d="M50 8 C30 8 20 18 20 34 L20 44 L50 44 L50 48 L16 48 C8 48 6 56 6 64 C6 76 14 82 30 82 L36 82 L36 72 C36 62 42 56 50 56 L70 56 C76 56 80 52 80 46 L80 34 C80 18 70 8 50 8 Z" fill="#3776AB"/>
        <path d="M50 92 C70 92 80 82 80 66 L80 56 L50 56 L50 52 L84 52 C92 52 94 44 94 36 C94 24 86 18 70 18 L64 18 L64 28 C64 38 58 44 50 44 L30 44 C24 44 20 48 20 54 L20 66 C20 82 30 92 50 92 Z" fill="#FFD43B"/>
        <circle cx="40" cy="28" r="4" fill="white"/>
        <circle cx="60" cy="72" r="4" fill="white"/>
      </svg>
    ),
  },
  flutter: {
    label: "Flutter",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <polygon points="18,40 38,20 78,20 58,40" fill="#54C5F8"/>
        <polygon points="18,40 38,60 58,40 78,20" fill="#01579B" opacity="0.85"/>
        <polygon points="38,60 58,80 78,60 58,40" fill="#29B6F6"/>
        <polygon points="38,60 48,70 58,60 48,50" fill="#01579B" opacity="0.55"/>
      </svg>
    ),
  },
  mongodb: {
    label: "MongoDB",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <path d="M50 6 C50 6 74 28 74 56 C74 72 63 84 50 90 C37 84 26 72 26 56 C26 28 50 6 50 6 Z" fill="#4DB33D"/>
        <rect x="48" y="76" width="4" height="18" rx="2" fill="#3A8F2D"/>
      </svg>
    ),
  },
  firebase: {
    label: "Firebase",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <path d="M22 78 L38 20 L53 46 L61 8 L78 78 Z" fill="#FFCA28"/>
        <path d="M22 78 L53 46 L78 78 Z" fill="#F57C00"/>
        <path d="M53 46 L61 8 L78 78 Z" fill="#FF8F00"/>
        <path d="M38 20 L53 46 L22 78 Z" fill="#FFA000"/>
      </svg>
    ),
  },
  aws: {
    label: "AWS",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <path d="M26 56 C16 56 10 48 10 40 C10 32 16 26 24 25 C24 14 32 6 46 6 C55 6 62 10 66 17 C68 15 72 13 76 13 C84 13 90 19 90 27 C90 35 84 41 76 41 L26 41 Z" fill="#FF9900" opacity="0.18"/>
        <path d="M26 56 C16 56 10 48 10 40 C10 32 16 26 24 25 C24 14 32 6 46 6 C55 6 62 10 66 17 C68 15 72 13 76 13 C84 13 90 19 90 27 C90 35 84 41 76 41 L26 41 Z" stroke="#FF9900" strokeWidth="2.5" fill="none"/>
        <path d="M26 70 Q50 84 74 70" stroke="#FF9900" strokeWidth="3" fill="none" strokeLinecap="round"/>
        <polygon points="74,66 80,70 74,74" fill="#FF9900"/>
        <text x="50" y="62" textAnchor="middle" fontSize="14" fill="#FF9900" fontFamily="Inter, sans-serif" fontWeight="700">AWS</text>
      </svg>
    ),
  },

  // ── New technologies ──────────────────────────────────────────
  typescript: {
    label: "TypeScript",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <rect x="6" y="6" width="88" height="88" rx="10" fill="#3178C6"/>
        <text x="50" y="66" textAnchor="middle" fontSize="42" fill="white" fontFamily="Inter, sans-serif" fontWeight="800">TS</text>
      </svg>
    ),
  },
  nextjs: {
    label: "Next.js",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <circle cx="50" cy="50" r="44" fill="#000000"/>
        {/* N letterform */}
        <path d="M30 68 L30 32 L70 68 L70 32" stroke="white" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      </svg>
    ),
  },
  graphql: {
    label: "GraphQL",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        {/* Hexagon skeleton */}
        <polygon points="50,8 86,29 86,71 50,92 14,71 14,29" stroke="#E535AB" strokeWidth="3" fill="none"/>
        {/* Diagonals */}
        <line x1="50" y1="8"  x2="86" y2="71" stroke="#E535AB" strokeWidth="2"/>
        <line x1="50" y1="8"  x2="14" y2="71" stroke="#E535AB" strokeWidth="2"/>
        <line x1="14" y1="29" x2="86" y2="29" stroke="#E535AB" strokeWidth="2"/>
        <line x1="14" y1="71" x2="86" y2="71" stroke="#E535AB" strokeWidth="2"/>
        <line x1="14" y1="29" x2="86" y2="71" stroke="#E535AB" strokeWidth="2"/>
        <line x1="86" y1="29" x2="14" y2="71" stroke="#E535AB" strokeWidth="2"/>
        {/* Vertices */}
        {[
          [50, 8], [86, 29], [86, 71], [50, 92], [14, 71], [14, 29],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="5" fill="#E535AB"/>
        ))}
      </svg>
    ),
  },
  docker: {
    label: "Docker",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        {/* Whale body */}
        <path d="M10 58 C10 46 20 38 34 38 C36 30 44 24 54 24 C66 24 76 32 76 44 C82 44 90 48 90 58 Z" fill="#2496ED" opacity="0.2"/>
        <path d="M10 58 C10 46 20 38 34 38 C36 30 44 24 54 24 C66 24 76 32 76 44 C82 44 90 48 90 58 Z" stroke="#2496ED" strokeWidth="2.5" fill="none"/>
        {/* Container boxes */}
        <rect x="22" y="44" width="12" height="10" rx="2" fill="#2496ED"/>
        <rect x="36" y="44" width="12" height="10" rx="2" fill="#2496ED"/>
        <rect x="50" y="44" width="12" height="10" rx="2" fill="#2496ED"/>
        <rect x="36" y="32" width="12" height="10" rx="2" fill="#2496ED"/>
        <rect x="50" y="32" width="12" height="10" rx="2" fill="#2496ED"/>
        <rect x="64" y="44" width="12" height="10" rx="2" fill="#2496ED"/>
      </svg>
    ),
  },
  tailwind: {
    label: "Tailwind",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        {/* Two swoosh waves */}
        <path d="M10 40 C20 20 40 20 50 40 C60 60 80 60 90 40" stroke="#06B6D4" strokeWidth="8" strokeLinecap="round" fill="none"/>
        <path d="M10 60 C20 40 40 40 50 60 C60 80 80 80 90 60" stroke="#06B6D4" strokeWidth="8" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  postgresql: {
    label: "PostgreSQL",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        {/* Elephant silhouette simplified */}
        <ellipse cx="50" cy="52" rx="32" ry="30" fill="#336791" opacity="0.15"/>
        <ellipse cx="50" cy="52" rx="32" ry="30" stroke="#336791" strokeWidth="3" fill="none"/>
        {/* Trunk */}
        <path d="M18 52 C10 52 8 60 10 68 C12 76 18 78 20 72" stroke="#336791" strokeWidth="3" fill="none" strokeLinecap="round"/>
        {/* Ear */}
        <ellipse cx="68" cy="36" rx="10" ry="14" fill="#336791" opacity="0.25"/>
        <ellipse cx="68" cy="36" rx="10" ry="14" stroke="#336791" strokeWidth="2.5" fill="none"/>
        {/* Eyes */}
        <circle cx="44" cy="42" r="3" fill="#336791"/>
        <circle cx="56" cy="42" r="3" fill="#336791"/>
        {/* Tusk lines */}
        <path d="M38 62 L30 74" stroke="#336791" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M46 64 L42 76" stroke="#336791" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  git: {
    label: "Git",
    svg: (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        {/* Git branch diamond logo */}
        <path d="M90 46 L54 10 C52 8 48 8 46 10 L10 46 C8 48 8 52 10 54 L46 90 C48 92 52 92 54 90 L90 54 C92 52 92 48 90 46 Z" fill="#F05032" opacity="0.12"/>
        <path d="M90 46 L54 10 C52 8 48 8 46 10 L10 46 C8 48 8 52 10 54 L46 90 C48 92 52 92 54 90 L90 54 C92 52 92 48 90 46 Z" stroke="#F05032" strokeWidth="2.5" fill="none"/>
        {/* Circles at nodes */}
        <circle cx="50" cy="32" r="7" fill="#F05032"/>
        <circle cx="32" cy="60" r="7" fill="#F05032"/>
        <circle cx="68" cy="60" r="7" fill="#F05032"/>
        {/* Lines */}
        <line x1="50" y1="39" x2="50" y2="53" stroke="#F05032" strokeWidth="3"/>
        <line x1="50" y1="53" x2="32" y2="53" stroke="#F05032" strokeWidth="3"/>
        <line x1="50" y1="53" x2="68" y2="53" stroke="#F05032" strokeWidth="3"/>
        <line x1="32" y1="53" x2="32" y2="53" stroke="#F05032" strokeWidth="3"/>
        <circle cx="50" cy="53" r="4" fill="#F05032"/>
      </svg>
    ),
  },
};

export default function TechIcon({ name }: TechIconProps) {
  const tech = techIcons[name.toLowerCase()];
  if (!tech) return null;

  return (
    <div className="flex flex-col items-center gap-2 group">
      <div
        style={{ width: "64px", height: "64px" }}
        className="flex items-center justify-center transition-transform duration-300 group-hover:scale-110 drop-shadow-sm"
      >
        {tech.svg}
      </div>
      <span className="text-xs font-medium text-muted group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
        {tech.label}
      </span>
    </div>
  );
}
