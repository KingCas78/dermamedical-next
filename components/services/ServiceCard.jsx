export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-8 hover:shadow-xl transition-all border border-gray-100">
      
      {/* Ícono */}
      <div className="text-5xl mb-6 text-blue-600">
        {icon}
      </div>

      {/* Título */}
      <h3 className="text-xl font-semibold text-gray-900">
        {title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 mt-3 leading-relaxed">
        {description}
      </p>

      {/* CTA */}
      <div className="mt-8">
        <a
          href="#contacto"
          className="text-blue-600 font-semibold hover:text-blue-700 transition"
        >
          Agendar consulta →
        </a>
      </div>
    </div>
  );
}
