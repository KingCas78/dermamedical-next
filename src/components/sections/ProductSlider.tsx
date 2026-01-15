"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { products } from "@/data/products"
import ProductCard from "@/components/products/ProductCard"

export default function ProductSlider() {
  const featuredProducts = products.filter(p => p.featured)

  return (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Productos destacados</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1.2}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="!pb-16"
        >
          {featuredProducts.map((product) => (
            <SwiperSlide key={product.id} className="!h-auto">
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        :global(.swiper) {
          padding-bottom: 60px;
        }

        :global(.swiper-slide) {
          height: auto;
          display: flex;
          align-items: stretch;
          padding: 0 !important;
        }

        :global(.swiper-slide > div) {
          width: 100%;
        }

        :global(.swiper-button-prev),
        :global(.swiper-button-next) {
          background: white;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          width: 44px;
          height: 44px;
          top: 50%;
          transform: translateY(-50%);
        }

        :global(.swiper-button-prev:hover),
        :global(.swiper-button-next:hover) {
          background: #f0f0f0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        :global(.swiper-button-prev::after),
        :global(.swiper-button-next::after) {
          color: #333;
          font-size: 18px;
        }

        :global(.swiper-pagination) {
          bottom: 0;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        :global(.swiper-pagination-bullet) {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
        }

        :global(.swiper-pagination-bullet-active) {
          background: #2563eb;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  )
}
