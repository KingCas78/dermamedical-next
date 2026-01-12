"use client";

import { usePathname } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductSlider() {
  const pathname = usePathname();

  // Mostrar solo en Home
  if (pathname !== "/") return null;

  // Solo los primeros 3 productos
  const featuredProducts = products.slice(0, 3);


  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            Productos recomendados
          </h2>

          <a
            href="/productos"
            className="hidden md:inline-block text-blue-600 font-semibold hover:underline"
          >
            Ver todos los productos →
          </a>
        </div>

        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
            }}
            loop={true}
            className="product-swiper"
          >
            {featuredProducts.map((product) => (
              <SwiperSlide key={product.id} className="flex items-center justify-center">
                <div className="w-full h-full">
                  <ProductCard {...product} />
                </div>
              </SwiperSlide>
            ))}

            <div className="swiper-button-prev hidden md:flex"></div>
            <div className="swiper-button-next hidden md:flex"></div>
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>

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
        .swiper-container {
          position: relative;
        }

        .product-swiper {
          padding: 20px 0 60px 0;
        }

        .swiper-button-prev,
        .swiper-button-next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 48px;
          height: 48px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          background: #f3f4f6;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        }

        .swiper-button-prev {
          left: -24px;
        }

        .swiper-button-next {
          right: -24px;
        }

        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 24px;
          color: #374151;
          font-weight: bold;
        }

        .swiper-pagination {
          display: flex;
          justify-content: center;
          gap: 8px;
          position: absolute;
          bottom: 0;
          width: 100%;
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          border-radius: 50%;
          opacity: 1;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .swiper-pagination-bullet-active {
          background: #2563eb;
          transform: scale(1.25);
        }

        @media (max-width: 768px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
          }

          .product-swiper {
            padding: 20px 0 40px 0;
          }
        }
      `}</style>
    </section>
  );
}
