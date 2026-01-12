export default function CtaConsult() {
  return (
    <section className="w-full bg-blue-50 py-24 text-center">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          ¿Necesitas orientación médica?
        </h2>

        <p className="text-gray-700 mt-5 text-lg">
          Agenda una consulta telefónica y recibe atención personalizada
          para la salud de la piel de tu hijo.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

          <a
            href="tel:+5255XXXXXXXX"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            Llamar ahora
          </a>

          <a
            href="https://wa.me/52XXXXXXXXXX"
            target="_blank"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
          >
            WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}
