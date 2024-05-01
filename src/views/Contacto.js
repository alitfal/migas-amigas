import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Contacto = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado correctamente");
    // Aquí añadirías la lógica para enviar los datos al servidor...
    setFormData({ name: "", email: "", subject: "", message: "" }); // Limpia los campos
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="contacto-background">
      <h1>{t("translation.titleBodyContacto")}</h1>
      <div className="contact-content d-flex justify-content-around">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">{t("translation.formName")}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={t("translation.formNamePlaceholder")}
              />
            </div>
            <div>
              <label htmlFor="email">{t("translation.formEmail")}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={t("translation.formEmailPlaceholder")}
              />
            </div>
            <div>
              <label htmlFor="subject">{t("translation.formSubject")}</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder={t("translation.formSubjectPlaceholder")}
              />
            </div>
            <div>
              <label htmlFor="message">{t("translation.formMsg")}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder={t("translation.formMsgPlaceholder")}
                style={{ height: "200px" }} // Ajustar la altura del textarea
              />
            </div>
            <button type="submit" className="contact-submit-button">
              {t("translation.formSubmit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
