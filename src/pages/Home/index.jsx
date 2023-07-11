import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CarteLogement from "../../components/CarteLogement";
import { useFetch } from "../../utils/hooks";
import imageBanner from "../../assets/images/image-banner-1.png";
import Banner from "../../components/BannerHome";
import "../../utils/style/css/style-home.css";

function Home() {
  const { tousLogementsData } = useFetch();
  return (
    <React.Fragment>
      <Header />
      <main>
        <Banner image={imageBanner} texte="Chez vous, partout et ailleurs" />
        <section className="section-carte">
          {tousLogementsData.map((logement) => (
            <CarteLogement
              logement={logement}
              image={logement.cover}
              key={logement.id}
            />
          ))}
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
