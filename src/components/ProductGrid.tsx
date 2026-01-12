import ProductCard from "@/components/products/ProductCard";
import { products } from "@/data/products";

export default function ProductGrid() {
  return (
    <section className="w-full bg-white py-20" id="productos">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

      </div>
    </section>
  );
}
