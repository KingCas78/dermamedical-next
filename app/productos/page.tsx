"use client";

import ProductGrid from "@/components/ProductGrid";

export default function ProductosPage() {
  return (
    <main className="w-full">

      <section className="w-full bg-blue-50 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Medicamentos disponibles
        </h1>
        <p className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto">
          Productos dermatológicos pediátricos con respaldo médico.
        </p>
      </section>

      <ProductGrid />
    </main>
  );
}
