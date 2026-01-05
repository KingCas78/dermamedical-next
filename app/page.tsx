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

      {/* ============== PRODUCTOS ============== */}
      <section className="products">
        <h2>Productos dermatológicos</h2>
        <p className="products-intro">
          Productos seleccionados y recomendados por la Dra. Erika Ramírez
          como apoyo al tratamiento dermatológico.
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
