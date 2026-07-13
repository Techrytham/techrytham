import type { Metadata } from "next";
import SupportPage from "@/components/support/SupportPage";
import { supportCards } from "@/data/supportPages";
export const metadata: Metadata = { title: "Support Center | Techrytham", description: "Get help from the Techrytham support team." };
export default function SupportCenterPage() { return <SupportPage eyebrow="Support Center" kind="support" title={<>How Can We Help<br /><span className="text-primary">You?</span></>} description="Need assistance? Our support team is here to help." cards={supportCards} />; }
