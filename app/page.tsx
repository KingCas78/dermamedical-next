import Image from "next/image"
import ProductSlider from "@/components/ProductSlider"


export default function Home() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="w-full bg-gradient-to-br from-blue-50 to-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda: Texto y CTA */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Dermatología pediátrica<br />
              con atención profesional y humana
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Dra. Erika Ramírez · Dermamédical<br />
              Diagnóstico, tratamiento y cuidado integral de la piel
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#contacto"
                className="btn btn-primary"
              >
                Agendar consulta
              </a>
            </div>
          </div>

          {/* Columna derecha: Imagen */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/dermapedia-portada.jpg"
              alt="Dermatología pediátrica"
              width={480}
              height={380}
              className="site-image"
            />
          </div>
        </div>
      </section>

      {/* ============ BANNER FULL-WIDTH ============ */}
      <section className="full-bleed">
        <div className="banner-wrapper">
            <Image
              src="/images/dermapedia-banner.png"
            alt="Banner Dermamédical"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* ============ BLOQUE CONFIANZA ============ */}
      <section className="trust">
        <p>
          Atención dermatológica basada en evidencia médica,
          con un enfoque personalizado para cada paciente.
        </p>

        <ul className="trust-list">
          <li>✔ Diagnóstico profesional</li>
          <li>✔ Tratamientos dermatológicos seguros para tus hijos</li>
          <li>✔ Acompañamiento médico continuo</li>
        </ul>
      </section>

      {/* ============== SERVICIOS ============== */}
      <section className="services">
        <h2>Servicios dermatológicos</h2>

        <div className="services-grid">
          <div className="service-card">
            <h3>Dermatología clínica</h3>
            <ul>
              <li>Acné</li>
              <li>Dermatitis</li>
              <li>Rosácea</li>
              <li>Enfermedades de la piel</li>
            </ul>
          </div>

          <div className="service-card">
            <h3>Dermatología estética</h3>
            <ul>
              <li>Cuidado facial</li>
              <li>Tratamientos de rejuvenecimiento</li>
              <li>Asesoría dermatológica personalizada</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============== NOSOTROS ============== */}
      <section className="about-section">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <h2 className="about-title">Sobre la Dra. Erika Ramírez</h2>
          
          <div className="about-content">
            <p className="about-intro">
              Médica Cirujana por la Universidad La Salle
            </p>

            <ul className="about-list">
              <li>Pediatra por el Hospital Pediátrico de Sinaloa Dr. Rigoberto Aguilar Pico</li>
              <li>Dermatóloga Pediatra egresada del Hospital Infantil de México Federico Gómez</li>
              <li>Adscrita a Dermatología del Hospital Infantil Privado Star Médica</li>
              <li>Profesor asociado al Curso de especialización en pediatría del Hospital Infantil Privado Star Médica</li>
              <li>Maestría en Ciencias Médicas</li>
              <li>Socio Activo de la Academia Mexicana de Dermatología y de la Sociedad Mexicana de Dermatología</li>
              <li>Tesorera del Colegio Mexicano de Dermatología Pediátrica</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ============== PRODUCTOS ============== */}
      <section className="products">
        <h2>Productos dermatológicos</h2>
        <p className="products-intro">
          Productos para el apoyo al tratamiento dermatológico.
        </p>

        <ProductSlider />
      </section>

      {/* ============== CTA FINAL ============== */}
      <section className="cta-final">
        <h2>Cada piel es diferente</h2>
        <p>
          Recibe orientación profesional y atención personalizada
          para el cuidado de tu piel.
        </p>

        <div className="mt-8">
            <a
              href="#contacto"
              className="btn btn-primary"
            >
              Agendar consulta
            </a>
        </div>
      </section>

    </main>
  )
}
