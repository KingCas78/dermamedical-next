// components/Hero.tsx
export default function Hero() {
  return (
    <section className="hero" id="contacto">
      <div className="hero-content">
        <h1>
          Medicamentos dermatológicos pediátricos
          <span>con respaldo médico</span>
        </h1>

        <p>
          Atención especializada para el cuidado de la piel infantil.
          Medicamentos confiables y orientación profesional.
        </p>

        <div className="hero-actions">
          <a href="#productos" className="btn btn-primary">
            Ver medicamentos
          </a>

          <a href="tel:+5255XXXXXXXX" className="btn btn-secondary">
            Agenda consulta por teléfono
          </a>
        </div>
      </div>
    </section>
  )
}
