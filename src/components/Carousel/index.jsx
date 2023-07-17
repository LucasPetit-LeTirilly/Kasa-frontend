import React, { useState } from "react";
import flechePrecedente from "../../assets/logos/fleche-precedent.svg";
import flecheSuivant from "../../assets/logos/fleche-suivant.svg";

const Carousel = (props) => {
  const [index, setIndex] = useState(0);
  const longueur = props.longueur;

  const precedent = () => {
    const nouvelIndex = index - 1;
    setIndex(nouvelIndex < 0 ? longueur - 1 : nouvelIndex);
  };

  const suivant = () => {
    const nouvelIndex = index + 1;
    setIndex(nouvelIndex >= longueur ? 0 : nouvelIndex);
  };

  return (
    <div className="carousel">
      {
        <div className="container-image">
          <img
            className="image-carousel"
            src={props.images?.[index]}
            alt={`Photographie numéro ${index}`}
            key={props.images?.[index]}
          />
          {longueur === 1 ? null : (
            <React.Fragment>
              <button
                onClick={precedent}
                className="fleche-carousel fleche-precedente"
              >
                <img
                  src={flechePrecedente}
                  alt="Fleche photographie précédente"
                />
              </button>
              <button
                onClick={suivant}
                className="fleche-carousel fleche-suivante"
              >
                <img src={flecheSuivant} alt="Fleche photographie suivante" />
              </button>
            </React.Fragment>
          )}
          {longueur === 1 ? null : (
            <p className="index">{`${index + 1}/${longueur}`}</p>
          )}
        </div>
      }
    </div>
  );
};

export default Carousel;
