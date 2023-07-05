import React, { useEffect } from "react";
import { useFetchById } from "../../utils/hooks";
import Carousel from "../Carousel";

function FicheLogement() {
  const { dataLogement } = useFetchById();
  const images = dataLogement.pictures;

  return (
    <section>
      <p>{dataLogement.title}</p>
      <Carousel longueur={images?.length} images={images} />
    </section>
  );
}

export default FicheLogement;
