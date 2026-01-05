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
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all border border-gray-100 flex flex-col">
      
      {/* Imagen */}
      <Image
        src={image}
        alt={name}
        width={300}
        height={160}
        className="rounded-xl object-cover w-full h-40 mb-6"
      />

      {/* Nombre */}
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>

      {/* Descripción */}
      <p className="text-gray-600 mt-2 leading-relaxed">{description}</p>

      {/* Precio */}
      <strong className="text-blue-600 text-lg mt-4">${price}</strong>

      {/* CTA */}
      <a
        href="https://wa.me/521000000000"
        target="_blank"
        className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl text-center transition-all shadow-md hover:shadow-lg"
      >
        Comprar por WhatsApp
      </a>
    </div>
  );
}
