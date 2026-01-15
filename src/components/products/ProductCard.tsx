type Product = {
  name: string;
  price: number;
  description: string;
  image: string;
  mpLink: string;
};

import Image from "next/image";

export default function ProductCard({
  name,
  price,
  description,
  image,
  mpLink,
}: Product) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all border border-gray-100 flex flex-col h-full min-h-[500px]">
      
      {/* Imagen */}
      <Image
        src={image}
        alt={name}
        width={300}
        height={160}
        loading="lazy"
        className="rounded-xl object-cover w-full h-40 mb-6"
      />

      {/* Nombre */}
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>

      {/* Descripción - con altura limitada y scroll si es necesario */}
      <p className="text-gray-600 mt-2 leading-relaxed flex-grow line-clamp-4">{description}</p>

      {/* Precio */}
      <strong className="text-blue-600 text-lg mt-4">${price}</strong>

      {/* CTA */}
      <a href={mpLink} target="_blank" className="mt-4 inline-block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl text-center transition-all shadow-md hover:shadow-lg" >
        Comprar con Mercado Pago
      </a>
    </div>
  );
}
