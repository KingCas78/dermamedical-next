export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>DermaMedical</h3>
          <p>Dermatología pediátrica especializada</p>
        </div>

        <div className="footer-contact">
          <p>📍 Ciudad de México</p>
          <p>📞 Tel: +52 1 000 000 0000</p>
          <p>✉️ contacto@dermamedical.mx</p>
        </div>

        <div className="footer-legal">
          <p>
            La información contenida en este sitio no sustituye una consulta
            médica profesional. El uso de medicamentos debe ser indicado por un
            especialista.
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} DermaMedical. Todos los derechos reservados.
      </div>
    </footer>
  );
}
