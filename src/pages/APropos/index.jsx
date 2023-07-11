import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/BannerApropos";
import imageBanner from "../../assets/images/image-banner-2.png";
import TexteDeroulant from "../../components/TexteDeroulant";
import Footer from "../../components/Footer";
import "../../utils/style/css/style-apropos.css";

function APropos() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Banner image={imageBanner} />
        <section className="container-textes-deroulants">
          <TexteDeroulant
            texteAffiche="Fiabilité"
            texteCache="Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
          <TexteDeroulant
            texteAffiche="Respect"
            texteCache="La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <TexteDeroulant
            texteAffiche="Service"
            texteCache="La bienveillance fait partie des valeurs fondatrices de Kasa. 
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <TexteDeroulant
            texteAffiche="Sécurité"
            texteCache="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
            chaque logement correspond aux critères de sécurité établis par nos services. 
            En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes 
            de vérifier que les standards sont bien respectés. 
            Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default APropos;
