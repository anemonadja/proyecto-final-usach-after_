import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
metadataBase: new URL('https://cinemateca.vercel.app'),
title: 'Plantilla e-commerce para creativos',
description: 'Generado por Anemona Lab & Wabi - Estudio Creativo',
openGraph: {
  title: 'Plantilla e-commerce para creativos',
  description: 'Generado por Anemona Lab & Wabi - Estudio Creativo',
  images: ['/og-image.png'],
  locale: 'es_CL',
  type: 'website',
  url: 'https://cinemateca.vercel.app',
  siteName: 'Plantilla e-commerce para creativos', 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={inter.className}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        {children}
        
        <Footer />
      </body>
    </html>
  );
}
