import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CarteLogement from "../../components/CarteLogement";

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
  const navigate = useNavigate();
  const versPageLogement = (logement) => {
    navigate(`/PageLogement/${logement.id}`, { state: { logement } });
  };

  return (
    <React.Fragment>
      <Header />
      <main>
        <section className="background-gris">
          {logementsAffiche.map((logement) => (
            <a
              onClick={() => {
                versPageLogement(logement);
              }}
              href={`/PageLogement/${logement.id}`}
              key={logement.id}
            >
              <article>
                <CarteLogement logement={logement} />
              </article>
            </a>
          ))}
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Home;
