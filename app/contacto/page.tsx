import Image from "next/image";

export default function ContactoPage() {
  return (
    <main className="w-full">

      {/* ================= HERO ================= */}
      <section className="w-full bg-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Contacto
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
            Agenda una consulta o solicita información sobre los servicios dermatológicos pediátricos.
          </p>
        </div>
      </section>

      {/* ================= FORMULARIO + INFO ================= */}
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-16">

          {/* FORMULARIO */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Envíanos un mensaje
            </h2>

            <form className="space-y-6">

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="tucorreo@ejemplo.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={5}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                Enviar mensaje
              </button>

            </form>
          </div>

          {/* INFORMACIÓN DE CONTACTO */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Información de contacto
            </h2>

            <div className="space-y-4 text-gray-700 text-lg">
              <p>📍 <strong>Hospital Star Médica HIP</strong></p>
              <p>Nueva York 7, Torre de consultorios</p>
              <p>Piso 2, Consultorio 202</p>

              <p className="mt-6">📞 <strong>Tel: 5511078058</strong></p>
              <p>✉️ contacto@dermamedical.mx</p>
            </div>

            {/* MAPA */}
            <div className="mt-10 w-full h-64 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.078... (tu iframe aquí)"
                width="100%"
                height="100%"
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="w-full bg-blue-50 py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            ¿Necesitas una consulta dermatológica?
          </h2>

          <p className="text-gray-700 mt-5 text-lg">
            La Dra. Erika Ramírez está lista para ayudarte con el cuidado de la piel de tus hijos.
          </p>

          <div className="mt-10">
            <a
              href="tel:5511078058"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl transition-all shadow-md hover:shadow-lg"
            >
              Llamar ahora
            </a>
          </div>

        </div>
      </section>

    </main>
  );
}
