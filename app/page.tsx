import Image from "next/image";
import ProductSlider from "@/components/sections/ProductSlider";

export default function Home() {
  return (
    <main className="w-full">

      {/* ================= HERO ================= */}
      <section className="w-full bg-gradient-to-br from-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Dermatología pediátrica<br />
              con atención profesional y humana
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Dra. Erika Ramírez · Dermamédical<br />
              Diagnóstico, tratamiento y cuidado integral de la piel
            </p>

            <a
              href="#contacto"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Agendar consulta
            </a>
          </div>

          {/* Imagen */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/dermapedia-portada.png"
              alt="Dermatología pediátrica"
              width={480}
              height={380}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ============ BANNER FULL-WIDTH ============ */}
      <section className="relative w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 py-6 md:py-10">
        <Image
          src="/images/dermapedia-banner.png"
          alt="Banner Dermamédical"
          width={900}
          height={500}
          className="w-full max-w-4xl h-auto object-cover rounded-lg"
          priority
        />
      </section>

      {/* ============ BLOQUE CONFIANZA ============ */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Atención dermatológica de confianza
        </h2>

        <p className="text-xl text-gray-700 max-w-2xl mx-auto">
          Atención basada en evidencia médica, con un enfoque personalizado para cada paciente.
        </p>

        <ul className="mt-8 space-y-3 text-gray-700 text-lg">
          <li>✔ Diagnóstico profesional</li>
          <li>✔ Tratamientos dermatológicos seguros para tus hijos</li>
          <li>✔ Acompañamiento médico continuo</li>
        </ul>
      </section>

      {/* ============== SERVICIOS ============== */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Servicios dermatológicos
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white shadow-md rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Dermatología clínica
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Acné</li>
                <li>• Dermatitis</li>
                <li>• Rosácea</li>
                <li>• Enfermedades de la piel</li>
              </ul>
            </div>

            <div className="bg-white shadow-md rounded-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Dermatología estética
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Cuidado facial</li>
                <li>• Tratamientos de rejuvenecimiento</li>
                <li>• Asesoría dermatológica personalizada</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============== Sobre la Dra. ============== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">

          {/* Texto */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sobre la Dra. Erika Ramírez Cortés
            </h2>

            <p className="text-lg text-gray-700 mb-6">
              Dermatóloga pediatra con más de 20 años de experiencia
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>• Médica Cirujana por la Universidad La Salle</li>
              <li>• Pediatra por el Hospital Pediátrico de Sinaloa</li>
              <li>• Dermatóloga Pediatra del Hospital Infantil de México</li>
              <li>• Adscrita a Dermatología del Hospital Infantil Privado Star Médica</li>
              <li>• Profesor asociado en Star Médica</li>
              <li>• Maestría en Ciencias Médicas</li>
              <li>• Miembro activo de la Academia Mexicana de Dermatología</li>
              <li>• Tesorera del Colegio Mexicano de Dermatología Pediátrica</li>
            </ul>

            <a
              href="/sobre"
              className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
            >
              Ver más sobre la doctora →
            </a>
          </div>

          {/* Imagen */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/dermapedia-dra-erika-ramirez.png"
              alt="Dra. Erika Ramírez"
              width={360}
              height={480}
              className="rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ============== PRODUCTOS ============== */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Productos dermatológicos
          </h2>

          <p className="text-gray-700 mb-10">
            Productos para el apoyo al tratamiento dermatológico.
          </p>

          <ProductSlider />
        </div>
      </section>

      {/* ============== CTA FINAL ============== */}
      <section className="py-24 bg-white text-center border-t border-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Cada piel es diferente
        </h2>

        <p className="text-gray-700 mt-4 max-w-xl mx-auto">
          Recibe orientación profesional y atención personalizada
          para el cuidado de tu piel.
        </p>

        <a
          href="#contacto"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
        >
          Agendar consulta
        </a>
      </section>

    </main>
  );
}
