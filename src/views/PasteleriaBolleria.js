import React from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";

const pastryProducts = [
  {
    id: 1,
    name: "croissant",
    ingredients: "croissant",
    description: "croissant",
    imageUrl: "/images/pasteleria/croissant.jpg",
  },
  {
    id: 2,
    name: "napolitanaChocolate",
    ingredients: "napolitanaChocolate",
    description: "napolitanaChocolate",
    imageUrl: "/images/pasteleria/napolitana_chocolate.jpg",
  },
  {
    id: 3,
    name: "donut",
    ingredients: "donut",
    description: "donut",
    imageUrl: "/images/pasteleria/donut.jpg",
  },
  {
    id: 4,
    name: "muffin",
    ingredients: "muffin",
    description: "muffin",
    imageUrl: "/images/pasteleria/muffin.jpg",
  },
  {
    id: 5,
    name: "ensaimada",
    ingredients: "ensaimada",
    description: "ensaimada",
    imageUrl: "/images/pasteleria/ensaimada.jpg",
  },
  {
    id: 6,
    name: "palmeraHojaldre",
    ingredients: "palmeraHojaldre",
    description: "palmeraHojaldre",
    imageUrl: "/images/pasteleria/palmera_hojaldre.jpg",
  },
  {
    id: 7,
    name: "trenzaChocolate",
    ingredients: "trenzaChocolate",
    description: "trenzaChocolate",
    imageUrl: "/images/pasteleria/trenza_chocolate.jpg",
  },
  {
    id: 8,
    name: "berlinesas",
    ingredients: "berlinesas",
    description: "berlinesas",
    imageUrl: "/images/pasteleria/berlinesas.jpg",
  },
];

const PasteleriaBolleria = () => {
  const { t } = useTranslation();

  return (
    <div className="past_boll-background">
      <h1>{t("translation.pastryProducts")}</h1>
      <div className="row">
        {pastryProducts.map((product) => (
          <div className="custom-col mb-4" key={product.id}>
            <div className="card card-zoom-effect">
              <img
                src={product.imageUrl}
                className="card-img-top"
                alt={t(`productAltNamesBolleria.${product.name}`)}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {t(`productNamesBolleria.${product.name}`)}
                </h5>
                <p className="card-text">
                  {t(`productDescriptionsBolleria.${product.description}`)}
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                  <strong>{t("translation.titleIngredients")}:</strong>
                    {t(`productIngredientsBolleria.${product.ingredients}`)}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PasteleriaBolleria;
