import ProductGrid from "@/components/ProductGrid"
import ProductSlider from "@/components/ProductSlider"

export default function ProductosPage() {
  return (
    <main>
      <h1>Medicamentos disponibles</h1>

      {/* Slider destacado */}
      <ProductSlider />

      {/* Grid completo */}
      <ProductGrid />
    </main>
  )
}
