import React, { useState } from "react";

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
      {longueur === 1 ? null : (
        <React.Fragment>
          <button onClick={precedent}>Previous</button>
          <button onClick={suivant}>Next</button>
        </React.Fragment>
      )}
      {
        <img
          src={props.images?.[index]}
          alt={`Photographie numéro ${index}`}
          key={props.images?.[index]}
        />
      }
      {longueur === 1 ? null : <p>{`${index + 1}/${longueur}`}</p>}
    </div>
  );
};

export default Carousel;
