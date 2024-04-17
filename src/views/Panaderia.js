import React from "react";
import { useTranslation } from "react-i18next";

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
    id: 2,
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
    <div>
      <h1>{t("translation.bakeryProducts")}</h1>
      <table>
        {/* <caption>{t("translation.bakeryProducts")}</caption> */}
        <thead>
          <tr>
            <th scope="col">{t("translation.titleProduct")}</th>
            <th scope="col">{t("translation.titleIngredients")}</th>
            <th scope="col">{t("translation.titleDescription")}</th>
            <th scope="col">{t("translation.titleImage")}</th>
          </tr>
        </thead>
        <tbody>
          {bakeryProducts.map((product) => (
            <tr key={product.id} className="table-row">
              <th scope="row">{t(`productNamesPanaderia.${product.name}`)}</th>{" "}
              <td>{t(`productIngredientsPanaderia.${product.ingredients}`)}</td>{" "}
              <td>{t(`productDescriptionsPanaderia.${product.description}`)}</td>{" "}
              <td>
                <img
                  src={product.imageUrl}
                  alt={t(`productAltNamesPanaderia.${product.name}`)}
                  title={t(`productNamesPanaderia.${product.name}`)} // Agregar title para mostrar la ayuda
                  style={{ width: "100px" }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Panaderia; 