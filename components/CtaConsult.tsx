// components/CtaConsult.tsx
export default function CtaConsult() {
  return (
    <section className="cta-consult">
      <h2>¿Necesitas orientación médica?</h2>

      <p>
        Agenda una consulta telefónica y recibe atención personalizada
        para la salud de la piel de tu hijo.
      </p>

      <div className="cta-actions">
        <a href="tel:+5255XXXXXXXX" className="btn btn-primary">
          Llamar ahora
        </a>

        <a
          href="https://wa.me/52XXXXXXXXXX"
          target="_blank"
          className="btn btn-secondary"
        >
          WhatsApp
        </a>
      </div>
    </section>
  )
}
