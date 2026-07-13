import type { SupportCard } from "@/components/support/SupportPage";

export const privacyCards: SupportCard[] = [
  { title: "Information We Collect", content: <>Name{"\n"}Email Address{"\n"}Phone Number{"\n"}Company Information{"\n"}Project Requirements</> },
  { title: "How We Use Your Information", content: <>To provide our services{"\n"}To communicate regarding projects{"\n"}To improve our website and services{"\n"}To send important updates</> },
  { title: "Data Protection", content: "We use industry-standard security measures to protect your personal data from unauthorized access." },
  { title: "Cookies", content: "Our website may use cookies to improve user experience and analyze website traffic." },
  { title: "Third-Party Services", content: "We may use trusted third-party tools such as Google Analytics and payment gateways to improve our services." },
  { title: "Your Rights", content: "You can request to access, update, or delete your personal information at any time by contacting us." },
];

export const termsCards: SupportCard[] = [
  { title: "Terms of Use", content: "By accessing or using Techrytham's website or services, you agree to the following terms." },
  { title: "Services", content: "We provide digital services including website development, application development, branding, AI solutions, and digital marketing." },
  { title: "Payments", content: "Projects begin only after the agreed advance payment has been received." },
  { title: "Intellectual Property", content: "All custom designs, source code, and digital assets remain the property of Techrytham until full payment is completed." },
  { title: "Limitation of Liability", content: "Techrytham shall not be liable for indirect or consequential damages arising from the use of our services." },
  { title: "Client Responsibilities", content: "Clients are responsible for providing accurate content, project requirements, and timely feedback." },
  { title: "Changes", content: "We reserve the right to update these terms at any time without prior notice." },
];

export const refundCards: SupportCard[] = [
  { title: "Eligible Refunds", content: "Refunds may be considered only if work has not started after payment." },
  { title: "Non-Refundable", content: <>The following payments are non-refundable:{"\n\n"}Domain Registration{"\n"}Hosting Services{"\n"}Third-party Licenses{"\n"}Completed Design or Development Work{"\n"}Digital Marketing Campaign Costs</> },
  { title: "Cancellation", content: "Clients may cancel their project before development begins. Refund eligibility will be reviewed accordingly." },
  { title: "Processing Time", content: "Approved refunds are processed within 7–10 business days." },
];

export const supportCards: SupportCard[] = [
  { title: "Technical Support", content: "Report bugs, technical issues, or website errors." },
  { title: "Project Support", content: "Get updates regarding your ongoing project." },
  { title: "Maintenance Requests", content: "Request website updates, feature additions, or improvements." },
  { title: "Billing Support", content: "Need help with invoices or payments? Contact our billing team." },
];
