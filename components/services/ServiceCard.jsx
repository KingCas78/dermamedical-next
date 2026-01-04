export default function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all">
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

      <p className="text-gray-600 mt-2">{description}</p>

      <div className="mt-6">
        <a
          href="#contacto"
          className="text-blue-600 font-semibold hover:underline"
        >
          Agendar consulta →
        </a>
      </div>
    </div>
  );
}
