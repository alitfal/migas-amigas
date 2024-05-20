import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "./../../constants/Langs.ts";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../../images/header/Migas_Amigas_128x128_removebg.png";
import ModificadoAudio from "../../sounds/Modificado.mp3";

const HeaderNav = () => {
  const { i18n, t } = useTranslation();
  const location = useLocation();

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  // Función para cambiar el idioma
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
    setSelectedLanguage(lang_code); // Actualizar el estado del idioma seleccionado
    localStorage.setItem("selectedLanguage", lang_code); // Almacenar el idioma seleccionado
  };

  useEffect(() => {
    // Verificar si hay un idioma almacenado y establecerlo al cargar la aplicación
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      setSelectedLanguage(storedLanguage); // Actualizar el estado del idioma seleccionado
    }
  }, [i18n]);

  useEffect(() => {
    // Actualizar el idioma cuando cambia la ubicación (navegación)
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
      setSelectedLanguage(storedLanguage); // Actualizar el estado del idioma seleccionado
    }
  }, [i18n, location]);

  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <div className="audio-container">
          <audio controls>
            <source src={ModificadoAudio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
        </div>
        <ul className="nav-links">
          <li>
            <NavLink to="/">{t("translation.homeButton")}</NavLink>
          </li>
          <li>
            <NavLink to="/panaderia">{t("translation.bakeryButton")}</NavLink>
          </li>
          <li>
            <NavLink to="/empanadas">{t("translation.pieButton")}</NavLink>
          </li>
          <li>
            <NavLink to="/pasteleriabolleria">
              {t("translation.pastryButton")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contacto">{t("translation.contactButton")}</NavLink>
          </li>
          <li>
            <NavLink to="/ubicacion">{t("translation.locationButton")}</NavLink>
          </li>
        </ul>
        <div className="language-select-container">
          <label htmlFor="language-select">
            {t("translation.languageSelection")}
          </label>
          <select
            id="language-select"
            value={selectedLanguage} // Establecer el valor del selector según el estado actual del idioma seleccionado
            onChange={onChangeLang}
            aria-label={t("translation.languageSelection")}
          >
            {LANGUAGES.map(({ code, label }) => (
              <option key={code} value={code}>
                {label}
              </option>
            ))}
          </select>
        </div>

      </nav>
    </header>
  );
};

export default HeaderNav;
