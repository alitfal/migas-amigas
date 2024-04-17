import React from 'react';
import { useTranslation } from 'react-i18next';
import { LANGUAGES } from './../../constants/Langs.ts';
import { NavLink } from 'react-router-dom';

const HeaderNav = () => {
    const { i18n, t } = useTranslation();
    const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const lang_code = e.target.value;
        i18n.changeLanguage(lang_code);
    };

    return (
        
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <h2>{t("translation.welcomeMessage")}</h2>
                </div>
                <ul className="nav-links"> {/* Contenedor para los enlaces */}
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
                        <NavLink to="/pasteleriabolleria">{t("translation.pastryButton")}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto">{t("translation.contactButton")}</NavLink>
                    </li>
                </ul>
                <div className="language-select-container">
                    <label htmlFor="language-select">{t("translation.languageSelection")}</label>
                    <select id="language-select" defaultValue={i18n.language} onChange={onChangeLang} aria-label={t("translation.languageSelection")}>
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
