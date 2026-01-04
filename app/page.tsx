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

          <div className="hero-cta">
            <a href="tel:5555555555" className="btn-primary">
              📞 Agenda tu consulta
            </a>
            <a
              href="https://wa.me/525555555555"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              💬 WhatsApp
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

        <div className="cta-buttons">
          <a
            href="https://wa.me/525555555555"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            💬 Escríbenos por WhatsApp
          </a>
          <a href="tel:5555555555" className="btn-secondary">
            📞 Llamar ahora
          </a>
        </div>
      </section>

    </main>
  )
}
