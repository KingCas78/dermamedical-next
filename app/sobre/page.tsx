import Image from "next/image";

export default function SobrePage() {
  const items = [
    "Médica Cirujana por la Universidad La Salle",
    "Pediatra por el Hospital Pediátrico de Sinaloa",
    "Dermatóloga Pediatra del Hospital Infantil de México",
    "Adscrita a Dermatología del Hospital Infantil Privado Star Médica",
    "Profesor asociado en Star Médica",
    "Maestría en Ciencias Médicas",
    "Miembro activo de la Academia Mexicana de Dermatología",
    "Tesorera del Colegio Mexicano de Dermatología Pediátrica",
  ];

  return (
    <main className="w-full">

      {/* ================= HERO ================= */}
      <section className="w-full bg-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Sobre la Dra. Erika Ramírez Cortés
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-lg">
              Dermatóloga pediatra con más de 20 años de experiencia en el cuidado de la piel de bebés, niños y adolescentes.
            </p>
          </div>

          {/* Imagen */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/dermapedia-dra-erika-ramirez.png"
              alt="Dra. Erika Ramírez"
              width={420}
              height={520}
              className="rounded-xl shadow-xl object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= BIOGRAFÍA ================= */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16 items-start">

          {/* Lista de credenciales */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Formación y trayectoria profesional
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

          {/* Imagen secundaria opcional */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/dermapedia-dra-erika-ramirez-2.png"
              alt="Dra. Erika Ramírez"
              width={420}
              height={520}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="w-full bg-blue-50 py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Agenda una consulta con la Dra. Erika Ramírez
          </h2>

          <p className="text-gray-700 mt-5 text-lg">
            Atención especializada, humana y basada en evidencia para el cuidado de la piel de tus hijos.
          </p>

          <div className="mt-10">
            <a
              href="/contacto"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Agendar consulta
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
