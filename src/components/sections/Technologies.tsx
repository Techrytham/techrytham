"use client";

import TechIcon from "@/components/ui/TechIcon";
import { technologies } from "@/data/siteData";

export default function Technologies() {
  // Double the array for a seamless infinite loop
  const loop = [...technologies, ...technologies];

  return (
    <section className="border-y bg-white py-12">
      <p className="mb-8 text-center text-sm font-semibold tracking-widest text-primary uppercase">
        Technologies We Work With
      </p>
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        }}
      >
        <div className="flex w-max animate-marquee gap-10 px-6 hover:[animation-play-state:paused]">
          {loop.map((tech, i) => (
            <div
              key={`${tech.name}-${i}`}
              className="flex items-center justify-center"
            >
              <TechIcon name={tech.icon} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
