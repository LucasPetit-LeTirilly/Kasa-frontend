import React, { useState } from "react";
import flechePrecedente from "../../assets/logos/fleche-precedent.svg";
import flecheSuivant from "../../assets/logos/fleche-suivant.svg";
import "../../utils/style/css/style-carousel.css";

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
        <img
          src={props.images?.[index]}
          alt={`Photographie numéro ${index}`}
          key={props.images?.[index]}
        />
      }
      {longueur === 1 ? null : (
        <React.Fragment>
          <button onClick={precedent} className="fleche-carousel">
            <img src={flechePrecedente} alt="Fleche photographie précédente" />
          </button>
          <button onClick={suivant} className="fleche-carousel">
            <img src={flecheSuivant} alt="Fleche photographie suivante" />
          </button>
        </React.Fragment>
      )}
      {longueur === 1 ? null : <p>{`${index + 1}/${longueur}`}</p>}
    </div>
  );
};

export default Carousel;
