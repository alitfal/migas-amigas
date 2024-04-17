import React from "react";
import { useTranslation } from "react-i18next";

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
    <div>
      <h1>{t("translation.pastryProducts")}</h1>
      <table>
        {/* <caption>{t("translation.pastryProducts")}</caption> */}
        <thead>
          <tr>
            <th scope="col">{t("translation.titleProduct")}</th>
            <th scope="col">{t("translation.titleIngredients")}</th>
            <th scope="col">{t("translation.titleDescription")}</th>
            <th scope="col">{t("translation.titleImage")}</th>
          </tr>
        </thead>
        <tbody>
          {pastryProducts.map((product) => (
            <tr key={product.id} className="table-row">
              <th scope="row">{t(`productNamesBolleria.${product.name}`)}</th>{" "}
              <td>{t(`productIngredientsBolleria.${product.ingredients}`)}</td>{" "}
              <td>{t(`productDescriptionsBolleria.${product.description}`)}</td>{" "}
              <td>
                <img
                  src={product.imageUrl}
                  alt={t(`productAltNamesBolleria.${product.name}`)}
                  title={t(`productNamesBolleria.${product.name}`)} // Agregar title para mostrar la ayuda
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

export default PasteleriaBolleria;
