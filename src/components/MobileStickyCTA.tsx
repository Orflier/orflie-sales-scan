import whatsappIcon from "@/assets/whatsapp.png";

const MobileStickyCTA = () => {
  const handleFormClick = () => {
    const section = document.getElementById("diagnostico-express");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappLink = "https://api.whatsapp.com/send?phone=5515981103458&text=Ol%C3%A1%2C%20vim%20pela%20LP%20e%20quero%20mais%20informa%C3%A7%C3%B5es%20da%20Orflie%20Audit";

  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2 bg-primary-dark text-white z-50 md:hidden shadow-large gap-2">
      <button
        onClick={handleFormClick}
        className="flex-1 bg-accent hover:bg-accent-hover text-white px-3 py-2.5 rounded-full font-semibold text-xs transition-all duration-300 whitespace-nowrap"
      >
        Responder diagnóstico
      </button>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-[#25D366] hover:bg-[#20bd5a] text-white px-3 py-2.5 rounded-full font-semibold text-xs transition-all duration-300 gap-1.5 whitespace-nowrap"
        aria-label="Contato via WhatsApp"
      >
        <img src={whatsappIcon} alt="" className="w-4 h-4" />
        WhatsApp
      </a>
    </div>
  );
};

export default MobileStickyCTA;
