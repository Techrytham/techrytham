import { CircleHelp, Headphones, ReceiptIndianRupee, Scale, ShieldCheck } from "lucide-react";

type IllustrationKind = "faq" | "privacy" | "terms" | "refund" | "support";

const illustrations = {
  faq: { label: "FAQ", icon: CircleHelp },
  privacy: { label: "PRIVACY\nPOLICY", icon: ShieldCheck },
  terms: { label: "TERMS &\nCONDITIONS", icon: Scale },
  refund: { label: "REFUND\nPOLICY", icon: ReceiptIndianRupee },
  support: { label: "SUPPORT\nCENTER", icon: Headphones },
} satisfies Record<IllustrationKind, { label: string; icon: typeof CircleHelp }>;

export default function HelpIllustration({ kind }: { kind: IllustrationKind }) {
  const { label, icon: Icon } = illustrations[kind];

  return (
    <div aria-hidden="true" className="relative mx-auto flex h-[260px] w-full max-w-[370px] items-center justify-center sm:h-[300px]">
      <div className="absolute h-[205px] w-[205px] rounded-full border border-[#BFC5FF] bg-[radial-gradient(circle_at_38%_30%,#fff_0%,#F4F5FF_48%,#E3E6FF_100%)] shadow-[0_25px_55px_rgba(59,67,255,0.14)]" />
      <div className="absolute h-[246px] w-[246px] rounded-full border border-dashed border-[#B8BEFF] opacity-80" />
      <div className="relative z-10 w-[174px] -rotate-3 rounded-[22px] border border-white/90 bg-white px-5 py-6 text-center shadow-[0_20px_36px_rgba(52,61,202,0.2)]">
        <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#9197FF] to-[#1728EB] text-white shadow-lg">
          <Icon size={24} strokeWidth={2.4} />
        </div>
        <p className="whitespace-pre-line text-base font-extrabold leading-tight tracking-tight text-[#17205B]">{label}</p>
        <span className="mx-auto mt-3 block h-1 w-20 rounded-full bg-[#B8BEFF]" />
        <span className="mx-auto mt-2 block h-1 w-14 rounded-full bg-[#DCE0FF]" />
      </div>
      <div className="absolute bottom-7 left-7 z-20 flex h-12 w-12 items-center justify-center rounded-2xl border border-white bg-white text-[#3B43FF] shadow-lg"><Icon size={23} /></div>
      <div className="absolute right-6 top-8 z-20 h-8 w-8 rounded-full bg-[#6269FF] shadow-[0_8px_18px_rgba(59,67,255,.3)]" />
    </div>
  );
}
