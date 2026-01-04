type Product = {
  name: string;
  price: number;
  description: string;
  image: string;
};

export default function ProductCard({
  name,
  price,
  description,
  image,
}: Product) {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
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
