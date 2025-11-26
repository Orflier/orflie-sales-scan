const MobileStickyCTA = () => {
  const handleClick = () => {
    const section = document.getElementById("diagnostico-express");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-between items-center px-4 py-3 bg-primary-dark text-white z-50 md:hidden shadow-large">
      <span className="text-sm font-medium">Diagnóstico express em 5 min</span>
      <button
        onClick={handleClick}
        className="bg-accent hover:bg-accent-hover text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300"
      >
        Responder diagnóstico
      </button>
    </div>
  );
};

export default MobileStickyCTA;
