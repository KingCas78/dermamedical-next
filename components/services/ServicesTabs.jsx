export default function ServicesTabs({ active, onChange }) {
  const tabs = [
    { id: "pediatrica", label: "Dermatología pediátrica" },
    { id: "procedimientos", label: "Procedimientos" },
    { id: "asesorias", label: "Asesorías" },
  ];

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-wrap gap-4">

        {tabs.map((tab) => {
          const isActive = active === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`
                px-8 py-3 rounded-full text-sm md:text-base font-semibold transition-all
                ${isActive
                  ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
              `}
            >
              {tab.label}
            </button>
          );
        })}

      </div>
    </div>
  );
}
