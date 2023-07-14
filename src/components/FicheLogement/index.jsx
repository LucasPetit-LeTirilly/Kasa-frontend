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
  const separationNom = dataLogement.host?.name.split(" ");
  const prenom = separationNom?.[0];
  const nomFamille = separationNom?.[1];

  return (
    <section className="fiche-logement">
      <Carousel
        longueur={images?.length}
        images={images}
        className="carousel"
      />
      <div className="infos-logement">
        <div className="titre-et-tags">
          <p className="titre">{dataLogement.title}</p>
          <p className="lieu">{dataLogement.location}</p>
          <div className="tags">
            {dataLogement.tags?.map((item) => (
              <div key={item} className="tag">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="profil-et-etoiles">
          <div className="profil-loueur">
            <p>
              {prenom}
              <br />
              {nomFamille}
            </p>
            <div className="image-profil-container">
              <img
                src={dataLogement.host?.picture}
                alt="Portrait du propriétaire"
              />
            </div>
          </div>
          <div className="etoiles">
            {etoilesPleines}
            {etoilesVides}
          </div>
        </div>
      </div>
      <div className="textes-deroulants">
        <TexteDeroulant
          texteAffiche="Description"
          texteCache={dataLogement.description}
        />
        <TexteDeroulant
          texteAffiche="Équipements"
          texteCache={dataLogement.equipments}
        />
      </div>
    </section>
  );
}

export default FicheLogement;
