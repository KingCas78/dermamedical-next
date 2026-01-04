"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { products } from "@/data/products"
import ProductCard from "./ProductCard"

export default function ProductSlider() {
  const featuredProducts = products.filter(p => p.featured)

  return (
    <section className="product-slider">
      <h2>Productos destacados</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        navigation
        pagination={{ clickable: true }}
        slidesPerView={1.2}
        loop={true}   // 👈 habilita el loop infinito
        autoplay={{
          delay: 3000,                // tiempo entre cada slide (3 segundos)
          disableOnInteraction: false, // sigue el autoplay aunque el usuario interactúe
          pauseOnMouseEnter: true,     // 👈 se pausa al pasar el mouse encima
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {featuredProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
