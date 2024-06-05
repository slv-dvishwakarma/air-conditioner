import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingIcon } from "@/components/FloatingIcon";
import { AppProvider } from "@/components/AppProvider";
import { ContactModal } from "@/components/ContactModal";
import { GoogleAnalytics } from '@next/third-parties/google';

// Declare global dataLayer and gtag variables
declare global {
  interface Window {
    dataLayer?: Object[];
    gtag: (...args: any[]) => void;
  }
}

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bareilly Deals",
  description: "Discover the best deals and offers in Bareilly on various products and services. Save big and enjoy exclusive discounts with Bareilly Deals. Get the world's most trusted brand, O General, at just ₹45,000, down from ₹85,000. Limited stock, so hurry! Contact us at 98989898898 or visit us at 133 Civil Line, Bareilly.",
  keywords: "Bareilly deals, discounts, offers, Bareilly shopping, local deals, Bareilly services, best prices, Bareilly discounts, O General AC, special offers, limited stock, energy efficient, high quality",
  authors: [{ name: "Bareilly Deals Solutions Ltd." }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
      console.log('Window loaded');
      if (!window.gtag) {
        console.error("Google Analytics is not loaded.");
        return;
      }
  
      console.log("Google Analytics is loaded. Adding event listeners...");

      // Link Click Tracking
      document.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          console.log(`Link clicked: ${link.href}`);
          window.gtag('event', 'link_click', {
            'event_category': 'engagement',
            'event_label': link.href
          });
        });
      });

      // Form Interaction Tracking
      const form = document.querySelector('form') as HTMLFormElement | null;
      if (form) {
        const formFields = form.querySelectorAll('input, textarea');

        formFields.forEach(field => {
          field.addEventListener('focus', () => {
            console.log(`Form field focused:`);
            window.gtag('event', 'form_interaction', {
              'event_category': 'engagement',
              'event_label': 'form_focus'
            });
          });
        });

        form.addEventListener('submit', () => {
          console.log('Form submitted');
          window.gtag('event', 'form_submission', {
            'event_category': 'engagement',
            'event_label': 'form_submitted'
          });
        });
      }

      // Language Change Tracking
      let languageChangeCount = 0;
      const language = document.querySelector('#Language') as HTMLSelectElement | null;
      if (language) {
        language.addEventListener('change', () => {
          languageChangeCount++;
          console.log(`Language changed to: ${language.value}`);
          window.gtag('event', 'language_change', {
            'event_category': 'engagement',
            'event_label': language.value,
            'value': languageChangeCount
          });
        });
      }

      // Contact Modal Tracking
      const contactModal = document.querySelector('#contact-modal');
      const contactButton = document.querySelector('#contact-button');
      if (contactButton && contactModal) {
        contactButton.addEventListener('click', () => {
          console.log('Contact modal opened');
          window.gtag('event', 'contact_modal_open', {
            'event_category': 'engagement',
            'event_label': 'contact_modal_opened'
          });
        });

        const formInModal = contactModal.querySelector('form') as HTMLFormElement | null;
        if (formInModal) {
          formInModal.addEventListener('submit', () => {
            console.log('Contact form in modal submitted');
            window.gtag('event', 'contact_form_submitted', {
              'event_category': 'engagement',
              'event_label': 'contact_form_submitted'
            });
          });
        }
      }
    });
  }

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
          <FloatingIcon />
          <ContactModal />
        </AppProvider>
      </body>
      <GoogleAnalytics gaId="G-W23ZJGN3HE" />
    </html>
  );
}
