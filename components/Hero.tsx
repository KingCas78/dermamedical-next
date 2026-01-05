export default function Hero() {
  return (
    <section className="w-full bg-blue-50 py-24" id="contacto">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Medicamentos dermatológicos pediátricos
          <span className="block text-blue-600 mt-2">
            con respaldo médico
          </span>
        </h1>

        {/* Descripción */}
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
          Atención especializada para el cuidado de la piel infantil.
          Medicamentos confiables y orientación profesional.
        </p>

        {/* Acciones */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="#productos"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            Ver medicamentos
          </a>

          <a
            href="tel:+5255XXXXXXXX"
            className="bg-white border border-blue-600 text-blue-600 font-semibold px-10 py-4 rounded-xl hover:bg-blue-50 transition-all"
          >
            Agenda consulta por teléfono
          </a>

        </div>

      </div>
    </section>
  );
}
