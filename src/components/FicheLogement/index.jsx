import React from "react";
import { useFetchById } from "../../utils/hooks";
import Carousel from "../Carousel";
import TexteDeroulant from "../TexteDeroulant";
import star from "../../assets/logos/star.svg";
import "../../utils/style/css/style-fiche-logement.css";

function FicheLogement() {
  const { dataLogement } = useFetchById();
  const images = dataLogement.pictures;
  const nbEtoile = parseInt(dataLogement.rating);
  const etoilesPleines = Array.from({ length: nbEtoile }, (_, index) => {
    return (
      <img
        src={star}
        key={`etoile pleine${index}`}
        className="etoile-pleine"
        alt="etoile pleine"
      />
    );
  });
  const etoilesVides = Array.from({ length: 5 - nbEtoile }, (_, index) => {
    return (
      <img
        src={star}
        key={`etoile vides${index}`}
        className="etoile-vide"
        alt="etoile vide"
      />
    );
  });

  return (
    <section className="fiche-logement">
      <Carousel
        longueur={images?.length}
        images={images}
        className="carousel"
      />
      <div className="titre-et-tags">
        <p>{dataLogement.title}</p>
        <p>{dataLogement.location}</p>
        <div className="tags">
          {dataLogement.tags?.map((item) => (
            <p key={item} className="tag">
              {item}
            </p>
          ))}
        </div>
      </div>
      <div className="etoiles">
        {etoilesPleines}
        {etoilesVides}
      </div>
      <TexteDeroulant
        texteAffiche="Description"
        texteCache={dataLogement.description}
      />
      <TexteDeroulant
        texteAffiche="Équipements"
        texteCache={dataLogement.equipments}
      />
    </section>
  );
}

export default FicheLogement;
