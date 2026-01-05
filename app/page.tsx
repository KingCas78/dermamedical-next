import ProductSlider from "@/components/ProductSlider"


export default function Home() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-content">
          <h1>
            Dermatología pediátrica<br />
            con atención profesional y humana
          </h1>

          <p className="hero-subtitle">
            Dra. Erika Ramírez · Dermamédical<br />
            Diagnóstico, tratamiento y cuidado integral de la piel
          </p>

          <div className="mt-8">
            <a
              href="#contacto"
              className="btn btn-primary"
            >
              Agendar consulta
            </a>
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
