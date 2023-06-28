import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
  const [logementsData, setLogementsData] = useState({});
  useEffect(() => {
    fetch("logements.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setLogementsData(data));
  }, []);

  // reduire l'objet logementsData aux six premier appartements
  const logementsAffiche = Array.from(logementsData).slice(0, 6);

  return (
    <React.Fragment>
      <Header />
      <main>
        <section className="background-gris">
          {logementsAffiche.map((logement) => (
            <Link to={`/FicheLogement/${logement.id}`} key={logement.id}>
              <article>{logement.title}</article>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
