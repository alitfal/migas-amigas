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
      <header>
        {showWelcomeMessage && <h2>{t("translation.entryMessage")}</h2>}
        <h1>{t("translation.titlePrincipal")}</h1>
      </header>
      <main>
        <p>{t("translation.bodyMessage")}</p>
      </main>
    </div>
  );
};

export default Principal;
