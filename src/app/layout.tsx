import type { Metadata, Viewport } from "next";
import { Anton, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const display = Anton({ variable: "--font-display", subsets: ["latin"], weight: "400" });
const sans = Plus_Jakarta_Sans({ variable: "--font-sans", subsets: ["latin"] });
const hand = Caveat({ variable: "--font-hand", subsets: ["latin"], weight: ["500", "600"] });

export const metadata: Metadata = {
  title: "SKIN.LAB · Dermatology & Skin Health Clinic",
  description: "Kulitmu punya cerita. Analisis kulit dengan teknologi skin analysis dan dokter berpengalaman, perawatan personal dan aman.",
  robots: { index: false },
};
export const viewport: Viewport = { themeColor: "#ffffff", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${display.variable} ${sans.variable} ${hand.variable}`}>
      <body className="min-h-dvh antialiased">
        <Header />
        <main className="mx-auto max-w-[1440px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
