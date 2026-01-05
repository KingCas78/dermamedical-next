"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductSlider() {
  const pathname = usePathname();
  const sliderRef = useRef<HTMLDivElement>(null);

  // Autoplay
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const scrollStep = 300; // pixels
    const scrollInterval = 3000; // milliseconds

    const interval = setInterval(() => {
      if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
        slider.scrollLeft = 0; // Reiniciar desde el inicio
      } else {
        slider.scrollLeft += scrollStep;
      }
    }, scrollInterval);

    return () => clearInterval(interval);
  }, []);

  // Mostrar solo en Home
  if (pathname !== "/") return null;

  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Productos recomendados
        </h2>

        <div ref={sliderRef} className="overflow-x-auto scrollbar-hide">
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
