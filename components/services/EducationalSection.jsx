export default function EducationalSection() {
  const items = [
    "Brotes recurrentes o irritaciones persistentes",
    "Alergias o reacciones en la piel",
    "Infecciones en piel, uñas o cuero cabelludo",
    "Lunares que cambian de forma o color",
    "Problemas de piel que afectan su calidad de vida",
  ];

  return (
    <section className="w-full bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            ¿Cuándo llevar a tu hijo al dermatólogo pediatra?
          </h2>

          <ul className="mt-6 space-y-4 text-gray-700">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-blue-600 text-xl">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/dermapedia-educacion.jpg"
            alt="Educación dermatológica"
            className="w-full max-w-sm object-contain rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
