import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Dermamédical – Dra. Erika Ramírez",
  description: "Dermatología pediátrica y cuidado profesional de la piel.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-white text-gray-900">

        {/* HEADER GLOBAL */}
        <Header />

        {/* CONTENIDO DE CADA PÁGINA */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* FOOTER GLOBAL */}
        <Footer />

      </body>
    </html>
  );
}
