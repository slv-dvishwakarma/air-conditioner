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
  description: "Bareilly Deals, we take pride in bringing you the best and most trusted brands at unbeatable prices. This time, we have a special offer for you. The world's most trusted brand, O General, is now available at just ₹45,000, while its market price is ₹65,000. This is a limited stock offer, so hurry up and book your AC now. Features of O General: High quality and long-lasting performance Energy efficient and power saving Excellent cooling capacity Contact Us: 98989898898 133 Civil Line, Bareilly At Bareilly Deals, we have many more offers and deals that you'll love. So, follow us and keep visiting our website for more updates.",
  keywords: "#Bareilly +Deals #Bareilly's Deals #Electronics #Bareilly's Best Deals #Bareilly Bargains #Bareilly's Exclusive Discounts #Explore Bareilly's Offers #Savings in Bareilly #Bareilly's Premier Shopping Destination #Unlock Bareilly's Savings #Shop Smart in Bareilly #Bareilly's Trusted Marketplace",
  authors: [{ name: "Bareilly Deals" }],
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
