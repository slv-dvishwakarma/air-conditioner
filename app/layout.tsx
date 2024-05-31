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
  description: "Amazing Offer! Get a ₹70000 AC for just ₹30000! Hurry, don't miss this chance - Contact us now!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/fav.png" sizes="any" />
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
