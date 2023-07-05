import React from "react";
import { useFetchById } from "../../utils/hooks";
import Carousel from "../Carousel";
import MenuDeroulant from "../MenuDeroulant";

function FicheLogement() {
  const { dataLogement } = useFetchById();
  const images = dataLogement.pictures;

  return (
    <section>
      <p>{dataLogement.title}</p>
      <Carousel longueur={images?.length} images={images} />
      <MenuDeroulant
        texteAffiche="texte visible"
        texteCache="texte cachéhuoihsfdhsakhjsfdkhjsfdjkhajdsa
      ajshdbfhjsagdhfjgdsahjfdgfjsagjhfdsgahjgdjasdfjas
      sdakjfhaksjhfkjsahfjkhdskjfhsjdkhfa
      sajkfkjshdsdffasfdffsagdfsffffagsdjaklffffsafdfsafdlkjdalkjdfkjasffsafffgsadgasfff
      sdfsfasfddsafdsafsafdasfdfsdfsafdsafdasdfsafsdlkjfksdjfikjsdkfhjkshajfd
      sdakjfhsjahfjksaklfjksahfjkshjfhjshfjhsajh"
      />
    </section>
  );
}

export default FicheLogement;
