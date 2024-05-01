import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Principal = () => {
  const { t } = useTranslation();
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 5000); // Duración del mensaje en milisegundos (en este caso, 5 segundos)

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
  }, []);

  return (
    <div className="principal-background">
      <p></p>
      <section className="landing-text">
        <h1>{t("translation.titlePrincipal")}</h1>
        {showWelcomeMessage && <h2>{t("translation.entryMessage")}</h2>}
        <p>{t("translation.bodyMessage")}</p>
      </section>
      <section className="our-products">
        <h2>{t("translation.titleFooterHeader")}</h2>
        <p>{t("translation.titleFooterMessage")}</p>
      </section>
    </div>
  );
};

export default Principal;
