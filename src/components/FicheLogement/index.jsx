import React from "react";
import { useFetchById } from "../../utils/hooks";

function FicheLogement() {
  const { dataFicheLogement } = useFetchById();
  const logement = dataFicheLogement;

  return (
    <section>
      {logement ? (
        <React.Fragment>
          <p>{logement.title}</p> <img src={logement.pictures?.[0]} />
        </React.Fragment>
      ) : null}
    </section>
  );
}

export default FicheLogement;
