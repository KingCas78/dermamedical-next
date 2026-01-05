// components/services/HeroServices.jsx

export default function HeroServices() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">

        {/* Columna izquierda */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Servicios dermatológicos pediátricos
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-lg">
            Atención especializada para bebés, niños y adolescentes, con un enfoque humano y basado en evidencia.
          </p>

          <div className="mt-8">
            <a
              href="#contacto"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all"
            >
              Agendar consulta
            </a>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/dermapedia-hero.jpg"
            alt="Dermatología pediátrica"
            className="w-full max-w-md object-contain"
          />
        </div>

      </div>
    </section>
  );
}
