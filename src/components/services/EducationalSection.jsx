import Image from "next/image";

export default function EducationalSection() {
  const items = [
    "Brotes recurrentes o irritaciones persistentes",
    "Alergias o reacciones en la piel",
    "Infecciones en piel, uñas o cuero cabelludo",
    "Lunares que cambian de forma o color",
    "Problemas de piel que afectan su calidad de vida",
  ];

  return (
    <section className="w-full bg-blue-50 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">

        {/* Texto */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            ¿Cuándo llevar a tu hijo al dermatólogo pediatra?
          </h2>

          <ul className="mt-8 space-y-4 text-gray-700 text-lg">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="text-blue-600 text-2xl leading-none">•</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Imagen */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/dermapedia-educacion.jpg"
            alt="Educación dermatológica"
            width={600}
            height={450}
            className="w-full max-w-md rounded-xl shadow-xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}
