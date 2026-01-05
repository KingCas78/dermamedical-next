import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Dra. Erika Ramírez</h1>
          <span>Dermatóloga peditra</span>
        </div>
{/*navegación*/}
        <nav className="nav">
          <Link href="/">Inicio</Link>
          <Link href="/productos">Medicamentos</Link>
          <Link href="/Servicios">Servicios</Link>
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
