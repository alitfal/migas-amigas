import React from "react";
import { useTranslation } from "react-i18next";

const Contacto = () => {
  const { t } = useTranslation();

  return (
    <div className="contacto-background">
      <h1>{t("translation.titleBodyUbicacion")}</h1>
      <div className="info-container">
        <address>
            <p><strong>{t("translation.titleAddress")}</strong></p>
          <p>C/ Duque de Osuna, 131</p>
          <p>Arinaga, CP 35118</p>
          <p>
            <strong>{t("translation.email")}:</strong> info@migasamigas.com
          </p>
          <p>
            <strong>{t("translation.phone")}:</strong> +12 345 6789
          </p>
        </address>
        <iframe
          title="Ubicación de la Panadería"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7054.704351614292!2d-15.3980221!3d27.8604501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40a1db0087d637%3A0xd8c32c33fa17db0c!2sPanaderia%20El%20Artesano!5e0!3m2!1ses!2ses!4v1714412641978!5m2!1ses!2ses"
          width="600"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;
