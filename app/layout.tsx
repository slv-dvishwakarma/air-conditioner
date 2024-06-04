import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingIcon } from "@/components/FloatingIcon";
import { AppProvider } from "@/components/AppProvider";
import { ContactModal } from "@/components/ContactModal";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bareilly Deals",
  description: "Discover the best deals and offers in Bareilly on various products and services. Save big and enjoy exclusive discounts with Bareilly Deals. Get the world's most trusted brand, O General, at just ₹45,000, down from ₹85,000. Limited stock, so hurry! Contact us at 98989898898 or visit us at 133 Civil Line, Bareilly.",
  keywords: "Bareilly deals, discounts, offers, Bareilly shopping, local deals, Bareilly services, best prices, Bareilly discounts, O General AC, special offers, limited stock, energy efficient, high quality",
  authors: [{ name: "Bareilly Deals Solutions Ltd." }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav-icon.png" sizes="any" />
      </head>
      <body className={inter.className}>
      
        <AppProvider>
          <Header />
          {children}
          <Footer />
          <FloatingIcon  />
          <ContactModal />
        </AppProvider>
      </body>
      <GoogleAnalytics gaId="G-W23ZJGN3HE" />
    </html>
  );
}
