import React from "react";
import { useTranslation } from "react-i18next";
import "bootstrap/dist/css/bootstrap.min.css";

const bakeryProducts = [
  {
    id: 1,
    name: "baguette",
    ingredients: "baguette",
    description: "baguette",
    imageUrl: "/images/panaderia/baguette.png",
  },
  {
    id: 2,
    name: "panDeMolde",
    ingredients: "panDeMolde",
    description: "panDeMolde",
    imageUrl: "/images/panaderia/pan_de_molde.jpg",
  },
  {
    id: 3,
    name: "ciabatta",
    ingredients: "ciabatta",
    description: "ciabatta",
    imageUrl: "/images/panaderia/ciabatta.jpg",
  },
  {
    id: 4,
    name: "panDeCenteno",
    ingredients: "panDeCenteno",
    description: "panDeCenteno",
    imageUrl: "/images/panaderia/pan_de_centeno.jpg",
  },
  {
    id: 5,
    name: "panMasaMadre",
    ingredients: "panMasaMadre",
    description: "panMasaMadre",
    imageUrl: "/images/panaderia/pan_masa_madre.jpg",
  },
  {
    id: 6,
    name: "brioche",
    ingredients: "brioche",
    description: "brioche",
    imageUrl: "/images/panaderia/pan_brioche.jpg",
  },
  {
    id: 7,
    name: "panIntegral",
    ingredients: "panIntegral",
    description: "panIntegral",
    imageUrl: "/images/panaderia/pan_integral.jpg",
  },
  {
    id: 8,
    name: "panAjo",
    ingredients: "panAjo",
    description: "panAjo",
    imageUrl: "/images/panaderia/pan_ajo.jpg",
  },
  {
    id: 9,
    name: "panMaiz",
    ingredients: "panMaiz",
    description: "panMaiz",
    imageUrl: "/images/panaderia/pan_maiz.jpg",
  },
  {
    id: 10,
    name: "panEspelta",
    ingredients: "panEspelta",
    description: "panEspelta",
    imageUrl: "/images/panaderia/pan_masa_madre.jpg",
  },
];

const Panaderia = () => {
  const { t } = useTranslation();

  return (
    <div className="panaderia-background">
      <h1>{t("translation.bakeryProducts")}</h1>
      <div className="row">
        {bakeryProducts.map((product) => (
          <div className="custom-col mb-4" key={product.id}>
            <div className="card card-zoom-effect">
              <img
                src={product.imageUrl}
                className="card-img-top"
                alt={t(`productAltNamesPanaderia.${product.name}`)}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {t(`productNamesPanaderia.${product.name}`)}
                </h5>
                <p className="card-text">
                  {t(`productDescriptionsPanaderia.${product.description}`)}
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                  <strong>{t("translation.titleIngredients")}:</strong>
                    {t(`productIngredientsPanaderia.${product.ingredients}`)}
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

export default Panaderia;
