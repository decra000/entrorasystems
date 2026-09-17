import type { Metadata } from "next";
import Script from "next/script";
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="author" content="Entrora Systems" />
        <meta name="geo.region" content="KE" />
        <meta name="geo.placename" content="Nairobi" />
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();` }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
