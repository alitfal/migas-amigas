import React, { useRef } from "react";
import { useTranslation } from "react-i18next";

const Contacto = () => {
  const { t } = useTranslation();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  // Función para manejar el envío del formulario de contacto
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;
    // Aquí puedes añadir la lógica para enviar el formulario
    console.log("Nombre:", name);
    console.log("Correo electrónico:", email);
    console.log("Mensaje:", message);
  };

  return (
    <div>
      <h1>{t("translation.titleBodyContacto")}</h1>
      <table className="contact-table">
        <tbody>
          <tr>
            <td>
              <div className="form-container">
                {/* Formulario de contacto */}
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name">{t("translation.formName")}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder={t("translation.formNamePlaceholder")}
                      ref={nameRef}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">{t("translation.formEmail")}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder={t("translation.formEmailPlaceholder")}
                      ref={emailRef}
                    />
                  </div>
                  <div>
                    <label htmlFor="message">{t("translation.formMsg")}</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      placeholder={t("translation.formMsgPlaceholder")}
                      ref={messageRef}
                    ></textarea>
                  </div>
                  <button type="submit" className="contact-submit-button">{t("translation.formSubmit")}</button>
                </form>
              </div>

              <address>
                <p>C/ Palmas Verdes, 42</p>
                <p>Islas del Sueño, CP 12345</p>
                <p>Ver Mapa</p>
                <p>
                  <strong>{t("translation.email")}:</strong>{" "}
                  info@migasamigas.com
                </p>
                <p>
                  <strong>{t("translation.phone")}:</strong> +12 345 6789
                </p>
                <p>
                  <strong>{t("translation.mobile")}:</strong> +98 765 4532
                </p>
                <p>
                  <strong>{t("translation.hours")}:</strong> Lunes – Viernes:
                  8:00 – 18:00
                </p>
              </address>
            </td>
            <td className="croquis">
              <img src="/images/localizacion.png" alt="Croquis" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contacto;
