export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 pt-16 pb-8 mt-20">
      
      {/* CONTENEDOR PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <p className="text-white font-semibold text-lg leading-relaxed">
            Dra. Erika Ramírez<br />
            Especialidad en Dermatología pediátrica<br />
            Hospital Star Médica HIP
          </p>

          <p className="text-gray-400 text-sm mt-4">
            La información de este sitio no sustituye una consulta médica.
          </p>
        </div>

        {/* CONTACTO */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contacto</h3>

          <p>📍 Hospital Star Médica HIP – Hospital Infantil Privado</p>
          <p>Nueva York 7, Torre de consultorios, Piso 2, Consultorio 202</p>
          <p>📞 Tel: 5511078058</p>
          <p>✉️ contacto@dermapedia.mx</p>
        </div>

        {/* LEGAL */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Aviso importante</h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            La información contenida en este sitio no sustituye una consulta
            médica profesional. El uso de medicamentos debe ser indicado por un
            especialista.
          </p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-500 text-sm mt-12 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Dra. Erika Ramírez. Todos los derechos reservados.
      </div>
    </footer>
  );
}
