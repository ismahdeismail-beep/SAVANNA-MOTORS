import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { BottomCta } from "@/components/bottom-cta";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });

export const metadata: Metadata = {
  title: "Savanna Motors — Import · Finance · Drive",
  description:
    "Import quality cars from Japan, the UK and Dubai to East Africa. KEBS-inspected, transparent landed cost, M-Pesa deposits and bank financing. Delivered to your door.",
  metadataBase: new URL("https://savannamotors.co.ke"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col pb-[4.75rem] md:pb-0">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <BottomCta />
      </body>
    </html>
  );
}
