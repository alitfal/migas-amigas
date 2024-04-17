import React from "react";
import { useTranslation } from "react-i18next";

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
    <div>
      <h1>{t("translation.pieProducts")}</h1>
      <table>
        {/* <caption>{t("translation.pieProducts")}</caption> */}
        <thead>
          <tr>
            <th scope="col">{t("translation.titleProduct")}</th>
            <th scope="col">{t("translation.titleIngredients")}</th>
            <th scope="col">{t("translation.titleDescription")}</th>
            <th scope="col">{t("translation.titleImage")}</th>
          </tr>
        </thead>
        <tbody>
          {pieProducts.map((product) => (
            <tr key={product.id} className="table-row">
              <th scope="row">{t(`productNamesEmpanada.${product.name}`)}</th>{" "}
              <td>{t(`productIngredientsEmpanada.${product.ingredients}`)}</td>{" "}
              <td>{t(`productDescriptionsEmpanada.${product.description}`)}</td>{" "}
              <td>
                <img
                  src={product.imageUrl}
                  alt={t(`productAltNamesEmpanada.${product.name}`)}
                  title={t(`productNamesEmpanada.${product.name}`)} // Agregar title para mostrar la ayuda
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

export default Empanadas;