import TechIcon from "@/components/ui/TechIcon";
import { technologies } from "@/data/siteData";

export default function Technologies() {
  const loop = [...technologies, ...technologies];

  return (
    <section className="border-y border-black/5 bg-surface py-10">
      <p className="mb-6 text-center text-sm font-semibold tracking-wide text-brand">
        TECHNOLOGIES WE WORK WITH
      </p>
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {loop.map((tech, i) => (
            <div key={`${tech.name}-${i}`} className="flex items-center gap-2 whitespace-nowrap">
              <TechIcon name={tech.icon} />
              <span className="text-lg font-semibold text-ink/80">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
