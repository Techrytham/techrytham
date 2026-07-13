import type { Metadata } from "next";
import SupportPage from "@/components/support/SupportPage";
import { refundCards } from "@/data/supportPages";
export const metadata: Metadata = { title: "Refund Policy | Techrytham", description: "Techrytham refund policy and payment guidelines." };
export default function RefundPage() { return <SupportPage eyebrow="Refund Policy" kind="refund" title={<>Refund <span className="text-primary">Policy</span></>} description="Customer satisfaction is important to us. However, refunds are subject to the following conditions." cards={refundCards} />; }
