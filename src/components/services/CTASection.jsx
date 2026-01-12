export default function CTASection() {
  return (
    <section className="w-full bg-white py-24 text-center">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Agenda una consulta con la Dra. Erika Ramírez
        </h2>

        <p className="text-gray-600 mt-5 text-lg">
          Recibe atención especializada y un diagnóstico preciso para el cuidado de la piel de tu hijo.
        </p>

        <div className="mt-10">
          <a
            href="#contacto"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            Agendar consulta
          </a>
        </div>

      </div>
    </section>
  );
}
