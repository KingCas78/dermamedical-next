import ServiceCard from "./ServiceCard";

export default function ServicesGrid({ services }) {
  return (
    <section className="w-full py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}
