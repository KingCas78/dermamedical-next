"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ProductCard from "./ProductCard";
import { products } from "@/data/products";

export default function ProductSlider() {
  const pathname = usePathname();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [speedFactor, setSpeedFactor] = useState(1); // velocidad variable

  // Mostrar solo en Home
  if (pathname !== "/") return null;

  // Duplicamos productos para loop “infinito”
  const loopProducts = [...products, ...products, ...products];

  const scrollStep = 320; // px aproximados de una tarjeta
  const baseInterval = 3000;

  // Autoplay + pausa al hover + velocidad variable
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    if (isHovering) return;

    const interval = setInterval(() => {
      if (!slider) return;

      slider.scrollLeft += scrollStep;

      // Si llegamos al tercio (colección original * 2) reseteamos
      if (slider.scrollLeft >= slider.scrollWidth / 3) {
        slider.scrollLeft = 0;
      }

      const index =
        Math.round(slider.scrollLeft / scrollStep) % products.length;
      setActiveIndex(index);
    }, baseInterval / speedFactor); // velocidad variable

    return () => clearInterval(interval);
  }, [isHovering, speedFactor]);

  const handleManualScroll = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const delta = direction === "left" ? -scrollStep : scrollStep;
    slider.scrollLeft += delta;

    const index =
      Math.round(slider.scrollLeft / scrollStep) % products.length;
    setActiveIndex(index);

    // Al interactuar, aceleramos un poco el autoplay durante un rato
    setSpeedFactor(1.6);
    setTimeout(() => setSpeedFactor(1), 8000);
  };

  const scrollLeft = () => handleManualScroll("left");
  const scrollRight = () => handleManualScroll("right");

  // Actualizar activeIndex cuando el usuario hace scroll manual (snap + 3D)
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const index =
      Math.round(slider.scrollLeft / scrollStep) % products.length;
    setActiveIndex(index);
  };

  return (
    <section className="w-full bg-white py-20 relative fade-in">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Productos recomendados
          </h2>

          {/* Botón ver todos los productos */}
          <a
            href="/productos"
            className="hidden md:inline-block text-blue-600 font-semibold hover:underline"
          >
            Ver todos los productos →
          </a>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >

          {/* Flecha izquierda */}
          <button
            onClick={scrollLeft}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-12 h-12 rounded-full items-center justify-center hover:bg-gray-100 transition-all"
          >
            <span className="text-2xl text-gray-700">‹</span>
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
            style={{ height: 'auto', minHeight: '420px' }}
          >
            <div className="flex gap-6 min-w-max pb-4">
              {loopProducts.map((product, i) => {
                const logicalIndex = i % products.length;
                const isActive = logicalIndex === activeIndex;

                return (
                  <div
                    key={i}
                    className={`snap-center transition-all duration-300 min-w-[280px] max-w-[280px] ${
                        isActive
                          ? "scale-105 md:scale-110 z-10 shadow-xl"
                          : "scale-95 opacity-80"
                      }`}
                    style={{
                      transformOrigin: "center center",
                    }}
                  >
                    <ProductCard {...product} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Flecha derecha */}
          <button
            onClick={scrollRight}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-12 h-12 rounded-full items-center justify-center hover:bg-gray-100 transition-all"
          >
            <span className="text-2xl text-gray-700">›</span>
          </button>
        </div>

        {/* INDICADORES */}
        <div className="flex justify-center mt-6 gap-3">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const slider = sliderRef.current;
                if (!slider) return;
                slider.scrollLeft = scrollStep * i;
                setActiveIndex(i);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                activeIndex === i
                  ? "bg-blue-600 scale-125"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Botón ver todos (mobile) */}
        <div className="mt-8 md:hidden text-center">
          <a
            href="/productos"
            className="inline-block text-blue-600 font-semibold hover:underline"
          >
            Ver todos los productos →
          </a>
        </div>

      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
