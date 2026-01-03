export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          Derma<span>Medical</span>
        </div>

        <nav className="nav">
          <a href="#productos">Medicamentos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <a href="tel:+521000000000" className="header-cta">
          Llamar
        </a>
      </div>
    </header>
  );
}
