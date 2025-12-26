import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { Header } from "../app/_ui/header/header";
import{Footer}from"../app/_ui/footer/page"
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Ans-BTP",
  description: "Ans-BTP est une Entreprise spécialisé dans le BTP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={spaceGrotesk.variable}>
      <body className={spaceGrotesk.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
