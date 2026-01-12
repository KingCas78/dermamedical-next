"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

export default function ProductSlider() {
  const pathname = usePathname();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [speedFactor, setSpeedFactor] = useState(1); // velocidad variable

  // Mostrar solo en Home
  if (pathname !== "/") return null;

  // Solo los primeros 3 productos
  const featuredProducts = products.slice(0, 3);
  const loopProducts = [...featuredProducts, ...featuredProducts, ...featuredProducts];

  const scrollStep = 300;
  const baseInterval = 3000;
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);

  const getActiveIndex = (scrollLeft: number): number => {
    return Math.floor((scrollLeft + scrollStep / 2) / scrollStep) % featuredProducts.length;
  };

  // Autoplay mejorado
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider || isHovering || isDragging) return;

    const interval = setInterval(() => {
      if (!slider) return;

      const currentScroll = slider.scrollLeft;
      const nextScroll = currentScroll + scrollStep;
      
      slider.scrollLeft = nextScroll;

      if (Math.floor(nextScroll / scrollStep) >= featuredProducts.length) {
        slider.scrollLeft = 0;
      }

      setActiveIndex(getActiveIndex(slider.scrollLeft));
    }, baseInterval / speedFactor);

    return () => clearInterval(interval);
  }, [isHovering, speedFactor, isDragging]);

  const handleManualScroll = (direction: "left" | "right") => {
    const slider = sliderRef.current;
    if (!slider) return;

    const delta = direction === "left" ? -scrollStep : scrollStep;
    const newScroll = slider.scrollLeft + delta;
    
    slider.scrollLeft = newScroll;

    if (newScroll <= 0) {
      slider.scrollLeft = featuredProducts.length * scrollStep;
    }

    setActiveIndex(getActiveIndex(slider.scrollLeft));
    
    setSpeedFactor(1.5);
    setTimeout(() => setSpeedFactor(1), 6000);
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;
    setActiveIndex(getActiveIndex(slider.scrollLeft));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    setIsDragging(true);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dragEndX = e.clientX;
    const diff = dragStartX.current - dragEndX;

    if (Math.abs(diff) > 50) {
      handleManualScroll(diff > 0 ? "right" : "left");
    }
    setIsDragging(false);
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

          {/* Botón izquierda */}
          <button
            onClick={() => handleManualScroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-12 h-12 rounded-full items-center justify-center hover:bg-gray-100 transition-all"
          >
            <span className="text-2xl text-gray-700">‹</span>
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className={`overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory transition-all slider-container ${
              isDragging ? 'slider-auto' : 'slider-smooth'
            }`}
          >
            <div className="flex gap-6 min-w-max pb-4">
              {loopProducts.map((product, i) => {
                const logicalIndex = i % featuredProducts.length;
                const isActive = logicalIndex === activeIndex;

                return (
                  <div
                    key={i}
                    className={`snap-center transition-all duration-300 min-w-[calc(100%/3-0.75rem)] max-w-[calc(100%/3-0.75rem)] select-none [transform-origin:center_center] ${
                      isActive
                        ? "scale-105 md:scale-110 z-10 shadow-xl"
                        : "scale-95 opacity-80"
                    }`}
                  >
                    <ProductCard {...product} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Botón derecha */}
          <button
            onClick={() => handleManualScroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg w-12 h-12 rounded-full items-center justify-center hover:bg-gray-100 transition-all"
          >
            <span className="text-2xl text-gray-700">›</span>
          </button>
        </div>

        {/* INDICADORES */}
        <div className="flex justify-center mt-6 gap-3">
          {featuredProducts.map((_, i) => (
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
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to product ${i + 1}`}
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

      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.8s ease-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .slider-container {
          height: auto;
          min-height: 420px;
          scroll-behavior: smooth;
        }
        .slider-auto {
          scroll-behavior: auto;
        }
        .slider-smooth {
          scroll-behavior: smooth;
        }
      `}</style>
    </section>
  );
}
