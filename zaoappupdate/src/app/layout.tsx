// app/layout.tsx

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";
import ContactInfoSection from "@/components/section/ContactInfoSection"; 
import GetInTouchSection from "@/components/section/GetInTouchSection";
import FormspreeProviderWrapper from "@/providers/FormspreeProviderWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zao Bora Website",
  description: "Empowering Farmers to enhance their livelihoods",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FormspreeProviderWrapper >
          <Header />
          <main className="min-h-screen">{children}</main>
          <ContactInfoSection />
          <GetInTouchSection />
          <Footer />
        </FormspreeProviderWrapper>
      </body>
    </html>
  );
}
