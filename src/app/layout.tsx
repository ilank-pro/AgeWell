import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BiometricScannerCursor from "@/components/BiometricScannerCursor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.SITE_URL || "https://agewell.com";

export const metadata: Metadata = {
  title: {
    default: "AgeWell — Science-First Anti-Aging Products",
    template: "%s | AgeWell",
  },
  description:
    "Curated anti-aging supplements, devices, and biological age testing — every recommendation backed by peer-reviewed research. Measure your age, then optimize it.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "AgeWell",
    title: "AgeWell — Science-First Anti-Aging Products",
    description:
      "Curated anti-aging supplements, devices, and biological age testing — every recommendation backed by peer-reviewed research.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgeWell — Science-First Anti-Aging Products",
    description:
      "Curated anti-aging supplements, devices, and biological age testing — every recommendation backed by peer-reviewed research.",
  },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-white">
        <BiometricScannerCursor />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
