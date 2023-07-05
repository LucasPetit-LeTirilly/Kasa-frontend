import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CarteLogement from "../../components/CarteLogement";
import { useFetch } from "../../utils/hooks";

function Home() {
  const { tousLogementsData } = useFetch();
  return (
    <React.Fragment>
      <Header />
      <main>
        <section className="background-gris">
          {tousLogementsData.map((logement) => (
            <Link to={`pagelogement/${logement.id}`} key={logement.id}>
              <article>
                <CarteLogement logement={logement} />
              </article>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
