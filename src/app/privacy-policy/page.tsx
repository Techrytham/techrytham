import type { Metadata } from "next";
import SupportPage from "@/components/support/SupportPage";
import { privacyCards } from "@/data/supportPages";
export const metadata: Metadata = { title: "Privacy Policy | Techrytham", description: "Learn how Techrytham protects your information." };
export default function PrivacyPolicyPage() { return <SupportPage eyebrow="Privacy Policy" kind="privacy" title={<>Your Privacy<br /><span className="text-primary">Matters</span></>} description="At Techrytham, we value your privacy and are committed to protecting your personal information." cards={privacyCards} />; }
