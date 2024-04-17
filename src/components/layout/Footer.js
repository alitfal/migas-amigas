import React from "react";
// import { useTranslation } from "react-i18next";

const Footer = () => {
  // const { t } = useTranslation();
  return (
    <div className="footer">
      {/* <h1>{t("titleFooter")}</h1> */}
      <div className="footer-content">
        <span>Dir - C/ Palmas Verdes, 42</span>
        <span>Tel - +12 345 6789</span>
        <span>
          Email: <a href="mailto:info@islasdelsueno.com" className="email-link" aria-label="Enviar correo electrónico a info@islasdelsueno.com">info@islasdelsueno.com</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
