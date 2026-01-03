import Hero from "@/components/Hero"
import ProductSlider from "@/components/ProductSlider"
import ProductGrid from "@/components/ProductGrid"
import CtaConsult from "@/components/CtaConsult"

export default function Home() {
  return (
    <main>
      <Hero />

      {/* 1️⃣ Slider primero */}
      <section style={{ background: "red", minHeight: 200 }}></section>
      <ProductSlider />

      {/* 2️⃣ Grid completo */}
      <ProductGrid />

      <CtaConsult />
    </main>
  )
}
