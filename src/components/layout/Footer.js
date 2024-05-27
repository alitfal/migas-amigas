import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom"; // Importa NavLink de react-router-dom

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="footer-content">
        <span>Dir - C/ Duque de Osuna, 131</span>
        <span>Tel - +12 345 6789</span>
        <span>
          Email: <a href="mailto:info@islasdelsueno.com" className="email-link" aria-label="Enviar correo electrónico a info@islasdelsueno.com">info@islasdelsueno.com</a>
        </span>
        <NavLink to="/ubicacion" className="footer-link">{t("translation.locationButton")}</NavLink>
      </div>
    </div>
  );
};

export default Footer;
