"use client";

import { usePathname } from "next/navigation";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductSlider() {
  const pathname = usePathname();

  // Mostrar solo en Home
  if (pathname !== "/") return null;

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Productos recomendados
        </h2>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 min-w-max pb-4">
            {products.map((product) => (
              <div key={product.id} className="min-w-[280px] max-w-[280px]">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
