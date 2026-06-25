import type { Metadata } from "next";
import { Inter, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { LenisProvider } from "@/components/common/LenisProvider";
import { ScrollToTop } from "@/components/common/ScrollToTop";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"]
});

const hankenGrotesk = Hanken_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-hanken-grotesk",
  weight: ["400", "600", "700", "800"]
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["500"]
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://corestack.ph';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "CoreStack | AI & Web Development Agency Philippines",
    template: "%s | Corestack Technologies",
  },
  description: "Top web development and AI agency in Philippines. We build AI agents, custom software, SaaS platforms, and automation solutions for growing businesses.",
  keywords: [
    "web development Philippines", "website development", "AI agency",
    "AI agents", "software development", "SaaS platform development",
    "business automation", "CoreStack", "Corestack Technologies",
    "Philippines tech company", "custom software", "AI solutions",
    "digital transformation", "web design Philippines"
  ],
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: "Corestack Technologies",
    title: "CoreStack | AI & Web Development Agency Philippines",
    description: "Top web development and AI agency in Philippines. We build AI agents, custom software, SaaS platforms, and automation solutions.",
    url: siteUrl,
    images: [{ url: `${siteUrl}/images/Corestack_Logo.png`, width: 1200, height: 630, alt: "CoreStack Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoreStack | AI & Web Development Agency Philippines",
    description: "Top web development and AI agency in Philippines. We build AI agents, custom software, SaaS platforms, and automation solutions.",
    images: [`${siteUrl}/images/Corestack_Logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: "/images/Corestack_Logo.png",
    apple: "/images/Corestack_Logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${inter.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
        <JsonLd />
        <LenisProvider>
          <Navigation />
          <ScrollToTop />
          <main className="flex flex-col min-h-screen">
            {children}
          </main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
