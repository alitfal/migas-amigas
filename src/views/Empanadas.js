import React from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";

const pieProducts = [
  {
    id: 1,
    name: "empanadaGallega",
    ingredients: "empanadaGallega",
    description: "empanadaGallega",
    imageUrl: "/images/empanadas/empanada_gallega.jpg",
  },
  {
    id: 2,
    name: "empanadaArgentina",
    ingredients: "empanadaArgentina",
    description: "empanadaArgentina",
    imageUrl: "/images/empanadas/empanada_argentina.jpg",
  },
  {
    id: 3,
    name: "empanadaEspaniola",
    ingredients: "empanadaEspaniola",
    description: "empanadaEspaniola",
    imageUrl: "/images/empanadas/empanada_espaniola.jpg",
  },
  {
    id: 4,
    name: "empanadaPollo",
    ingredients: "empanadaPollo",
    description: "empanadaPollo",
    imageUrl: "/images/empanadas/empanada_pollo.jpg",
  },
];


const Empanadas = () => {
  const { t } = useTranslation();

  return (
    <div className="empanadas-background">
      <h1>{t("translation.pieProducts")}</h1>
      <div className="row">
        {pieProducts.map((product) => (
          <div className="custom-col mb-4" key={product.id}>
            <div className="card card-zoom-effect">
              <img
                src={product.imageUrl}
                className="card-img-top"
                alt={t(`productAltNamesEmpanada.${product.name}`)}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {t(`productNamesEmpanada.${product.name}`)}
                </h5>
                <p className="card-text">
                  {t(`productDescriptionsEmpanada.${product.description}`)}
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                  <strong>{t("translation.titleIngredients")}:</strong>
                    {t(`productIngredientsEmpanada.${product.ingredients}`)}
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

export default Empanadas;