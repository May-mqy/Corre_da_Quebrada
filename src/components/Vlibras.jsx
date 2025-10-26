import { useEffect } from "react";

export default function VLibras() {
  useEffect(() => {
    // Garante que nunca inicialize duas vezes ao trocar de página
    if (window._vlibrasLoaded) return;
    window._vlibrasLoaded = true;

    const script = document.createElement("script");
    script.src = "https://vlibras.gov.br/app/vlibras-plugin.js";
    script.async = true;

    script.onload = () => {
      const init = () => {
        if (window.VLibras) {
          new window.VLibras.Widget("https://vlibras.gov.br/app");
        }
      };

      // Dá um pequeno tempo para garantir DOM COMPLETA
      setTimeout(init, 600);
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div vw="true" className="enabled">
      <div vw-access-button="true" className="active"></div>
      <div vw-plugin-wrapper="true">
        <div className="vw-plugin-top-wrapper"></div>
      </div>
    </div>
  );
}


