import type { Metadata } from "next";
import SupportPage from "@/components/support/SupportPage";
import { termsCards } from "@/data/supportPages";
export const metadata: Metadata = { title: "Terms & Conditions | Techrytham", description: "Terms and conditions for Techrytham services." };
export default function TermsPage() { return <SupportPage eyebrow="Terms & Conditions" kind="terms" title={<>Terms & <span className="text-primary">Conditions</span></>} description="By accessing or using Techrytham's website or services, you agree to the following terms." cards={termsCards} />; }
