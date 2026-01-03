export default function WhatsAppFloating() {
  const phoneNumber = "521000000000"; // cambia al número real

  const message = encodeURIComponent(
    "Hola, me gustaría recibir información sobre los medicamentos dermatológicos y consultas disponibles."
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contactar por WhatsApp"
    >
      💬
    </a>
  );
}
