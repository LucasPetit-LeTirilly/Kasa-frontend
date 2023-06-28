import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function PageLogement() {
  const location = useLocation();
  const logement = location.state.logement;
  return (
    <React.Fragment>
      <Header />
      <article>
        <p>{logement.title}</p>
        <img src={logement.pictures[0]} />
      </article>
      <Footer />
    </React.Fragment>
  );
}

export default PageLogement;
