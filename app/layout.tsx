import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import WhatsAppFloating from "@/components/WhatsAppFloating";


/* SEO Metadata configuration for the website */
export const metadata: Metadata = {
  title: "DermaMedical | Dermatología pediátrica en CDMX",
  description:
    "Consulta de dermatología pediátrica y venta de medicamentos dermatológicos. Atención profesional y responsable.",
  keywords: [
    "dermatología pediátrica",
    "medicamentos dermatológicos",
    "dermatólogo infantil",
    "piel infantil",
  ],
  authors: [{ name: "DermaMedical" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloating />
      </body>
    </html>
  );
}
