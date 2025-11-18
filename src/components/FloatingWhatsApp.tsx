import whatsappIcon from "@/assets/whatsapp.png";

const FloatingWhatsApp = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5515981103458&text=Ol%C3%A1%2C%20vim%20pela%20LP%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20da%20Orflie%20Audit";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 overflow-hidden"
      aria-label="Contato via WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-full h-full object-cover" />
    </a>
  );
};

export default FloatingWhatsApp;
