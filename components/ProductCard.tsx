type Product = {
  name: string;
  price: number;
  description: string;
  image: string;
};

import Image from "next/image";

export default function ProductCard({
  name,
  price,
  description,
  image,
}: Product) {
  return (
    <div className="product-card">
      <Image src={image} alt={name} width={300} height={160} className="site-image site-image--sm" />
      <h3>{name}</h3>
      <p>{description}</p>
      <strong>${price}</strong>

      <a
        href="https://wa.me/521000000000"
        target="_blank"
        className="buy-btn"
      >
        Comprar por WhatsApp
      </a>
    </div>
  );
}
