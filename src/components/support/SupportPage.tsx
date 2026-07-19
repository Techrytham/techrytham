import Image from "next/image";
import type { ReactNode } from "react";
import { HandHeart } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/ui/Eyebrow";
import HelpIllustration from "@/components/support/HelpIllustration";

export type SupportCard = { title: string; content: ReactNode };
type IllustrationKind = "faq" | "privacy" | "terms" | "refund" | "support";

interface SupportPageProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
  kind: IllustrationKind;
  cards: SupportCard[];
}

export function SupportCardItem({ title, content }: SupportCard) {
  return (
    <article className="group flex gap-5 rounded-[20px] border border-[#ECECFF] bg-white px-6 py-6 shadow-[0_8px_17px_rgba(20,20,40,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_28px_rgba(59,67,255,0.15)] sm:items-start sm:px-12">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center text-[#247DEB] ">
        <Image
          src="/assets/icon.png"
          alt=""
          width={29}
          height={29}
          className="object-contain"
        />
      </div>
      <div className="min-w-0 pt-0.5">
        <h2 className="text-2xl font-semibold tracking-tight text-heading sm:text-[28px]">{title}</h2>
        <div className="mt-2 whitespace-pre-line text-[15px] leading-relaxed text-[#4C4C57] sm:text-[17px]">{content}</div>
      </div>
    </article>
  );
}

export default function SupportPage({ eyebrow, title, description, kind, cards }: SupportPageProps) {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden bg-white pt-[72px]">
        <section className="mx-auto grid max-w-7xl items-center gap-4 px-6 pb-12 pt-14 sm:px-10 lg:grid-cols-[1.1fr_.9fr] lg:pb-16 lg:pt-16">
          <div className="max-w-[650px]">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-6 text-[42px] font-bold leading-[1.07] tracking-[-0.04em] text-black sm:text-5xl lg:text-[56px]">{title}</h1>
            <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-[#272730] sm:text-lg">{description}</p>
          </div>
          <HelpIllustration kind={kind} />
        </section>
        <section className="px-6 pb-10 sm:px-10 lg:pb-16" aria-label={`${eyebrow} details`}>
          <div className="mx-auto flex max-w-[1000px] flex-col gap-5 sm:gap-7">
            {cards.map((card) => <SupportCardItem key={card.title} {...card} />)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
