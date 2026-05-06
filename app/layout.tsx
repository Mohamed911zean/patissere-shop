import type { Metadata, Viewport } from "next";
import { Jost, Cormorant_Garamond, Great_Vibes } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import { LocationProvider } from "@/context/LocationContext";
import { Navbar } from "@/components/layout/Navbar";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { LocationModal } from "@/components/layout/LocationModal";
import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lenza Patisserie | French Pastries & Special Cakes",
  description: "Experience the finest French patisserie and custom cakes in Egypt. Crafted with passion for over 25 years.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b0501",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${cormorant.variable} ${greatVibes.variable}`}>
      <body className="antialiased bg-bg-base text-text-primary selection:bg-gold/30 selection:text-gold-light">
        <LanguageProvider>
          <LocationProvider>
            <CartProvider>
              <Navbar />
              <CartDrawer />
              <LocationModal />
              <main>
                {children}
              </main>
            </CartProvider>
          </LocationProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
