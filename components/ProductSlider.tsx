"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { products } from "@/data/products"
import ProductCard from "./ProductCard"

export default function ProductSlider() {
  return (
    <section>
      <h2>Productos destacados</h2>

      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
