import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Entrora Systems, Legal Engineering",
  description:
    "Entrora Systems is a legal engineering practice: regulated AI and software built with the legal reasoning and the technical reasoning in the same pass. AI document systems, legal-tech development, compliant AI products, and AI governance frameworks in Nairobi, Kenya. Publisher of the Lex & Latte newsletter.",
  keywords: [
    "legal engineering",
    "Entrora Systems",
    "regulated AI engineering Kenya",
    "legal tech development Africa",
    "AI governance frameworks Kenya",
    "compliant AI products",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="author" content="Entrora Systems" />
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Nairobi" />
      </head>
      <body>{children}</body>
    </html>
  );
}
