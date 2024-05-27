import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import jsonData from "./jsonData.json";
import { FloatingIcon } from "@/components/FloatingIcon";
import { AppProvider } from "@/components/AppProvider";
import { ContactModal } from "@/components/ContactModal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bareilly Deals",
  description: "",
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
          <Header data={jsonData.header} />
          {children}
          <Footer data={jsonData.footer} />
          <FloatingIcon number={jsonData.whatsapp.number} />
          <ContactModal />
        </AppProvider>
      </body>
    </html>
  );
}
