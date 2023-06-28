import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import FicheLogement from "../../components/FicheLogement";

function PageLogement() {
  const location = useLocation();
  const logement = location.state.logement;
  return (
    <React.Fragment>
      <Header />
      <FicheLogement logement={logement} />
      <Footer />
    </React.Fragment>
  );
}

export default PageLogement;
