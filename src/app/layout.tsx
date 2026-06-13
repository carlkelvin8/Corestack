import type { Metadata } from "next";
import { Inter, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import { LenisProvider } from "@/components/LenisProvider";
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

export const metadata: Metadata = {
  title: "CoreStack | Smart AI & Technology Solutions",
  description: "Accelerate your digital transformation with CoreStack's AI, cloud architectures, and modern digital workflows.",
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
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
