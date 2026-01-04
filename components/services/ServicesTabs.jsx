export default function ServicesTabs({ active, onChange }) {
  const tabs = [
    { id: "pediatrica", label: "Dermatología pediátrica" },
    { id: "procedimientos", label: "Procedimientos" },
    { id: "asesorias", label: "Asesorías" },
  ];

  return (
    <div className="w-full bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex gap-4 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
              active === tab.id
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
