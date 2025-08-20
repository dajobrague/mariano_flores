import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Mariano Flores - Atención Dental Profesional",
  description: "Servicios dentales profesionales con tecnología avanzada. Atención dental integral para toda la familia en un ambiente cómodo y moderno.",
  keywords: "dentista, cuidado dental, blanqueamiento dental, implantes dentales, salud bucal, dentista familiar",
  authors: [{ name: "Dr. Mariano Flores" }],
  openGraph: {
    title: "Dr. Mariano Flores - Atención Dental Profesional",
    description: "Servicios dentales profesionales con tecnología avanzada",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
