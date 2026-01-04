import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Dra. Erika Ramírez</h1>
          <span>Dermamédical</span>
        </div>
{/*navegación*/}
        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#productos">Medicamentos</a>
          <a  href="#servicios">Servicios</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
          <a href="#blog">Blog</a>
        </nav>

        <a href="tel:+521000000000" className="header-cta">
          Llamar
        </a>
      </div>
    </header>
  );
}
