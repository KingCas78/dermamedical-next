"use client";

import { useState } from "react";
import HeroServices from "@/components/services/HeroServices";
import ServicesTabs from "@/components/services/ServicesTabs";
import ServicesGrid from "@/components/services/ServicesGrid";
import EducationalSection from "@/components/services/EducationalSection";
import CTASection from "@/components/services/CTASection";

export default function ServiciosPage() {
  // Ejemplo de servicios por categoría
  const servicesData = {
    pediatrica: [
      { icon: "🧴", title: "Dermatitis atópica", description: "Tratamiento personalizado para controlar brotes y mejorar la calidad de vida." },
      { icon: "🌡️", title: "Alergias cutáneas", description: "Diagnóstico y manejo de reacciones en la piel." },
      { icon: "🦠", title: "Infecciones", description: "Atención para infecciones bacterianas, virales y fúngicas." },
    ],
    procedimientos: [
      { icon: "❄️", title: "Crioterapia", description: "Eliminación segura de lesiones benignas." },
      { icon: "🔬", title: "Dermatoscopía", description: "Evaluación detallada de lunares y lesiones." },
    ],
    asesorias: [
      { icon: "👶", title: "Cuidado de la piel del bebé", description: "Rutinas y recomendaciones personalizadas." },
      { icon: "🧼", title: "Rutinas dermatológicas", description: "Guía para piel sensible, seca o con tendencia atópica." },
    ],
  };

  const [active, setActive] = useState("pediatrica");

  return (
    <>
      <HeroServices />
      <ServicesTabs active={active} onChange={setActive} />
      <ServicesGrid services={servicesData[active]} />
      <EducationalSection />
      <CTASection />
    </>
  );
}
