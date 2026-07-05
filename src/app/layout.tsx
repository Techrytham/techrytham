import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Techrytham | Empowering Your Digital Journey",
  description:
    "Techrytham builds modern websites, scalable web applications, mobile apps, and custom software solutions that help businesses grow faster and smarter.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased overflow-x-hidden">{children}</body>
    </html>
  );
}
