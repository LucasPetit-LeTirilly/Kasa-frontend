import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Erreur404() {
  return (
    <React.Fragment>
      <Header />
      <main className="main-erreur404">
        <section>
          <div className="erreur404">404</div>
          <p className="texte-erreur">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <Link to="/" className="lien-souligne lien-erreur">
            Retourner sur la page d’accueil
          </Link>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default Erreur404;
