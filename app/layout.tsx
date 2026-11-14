import type { Metadata } from "next";
import { Red_Hat_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const heading = Red_Hat_Display({ variable: "--font-heading", subsets: ["latin"], weight: ["600", "700", "800"] });
const body = Source_Sans_3({ variable: "--font-body", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  title: "TranZen Transmission & Auto Repair | Transmission Shop in Sacramento, CA",
  description:
    "Sacramento transmission specialist on Albatross Way since 2010. Transmission repair and rebuilds, full-service auto and truck repair, and maintenance. Ask for Tony. Call (916) 927-7500.",
  openGraph: {
    title: "TranZen Transmission & Auto Repair | Sacramento",
    description: "Honest transmission repair and rebuilds at 2349 Albatross Way, Sacramento. Locally owned since 2010. Call (916) 927-7500.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
