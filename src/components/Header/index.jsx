import { Link } from "react-router-dom";
import "../../utils/style/css/style-header.css";
import logo from "../../assets/logos/logo-kasa.svg";

function Header() {
  // Recuperation de l'url et en fonction ajout ou non de la classe css de soulignement
  const pathname = window.location.pathname;
  let souligneAccueil = "";
  let souligneApropos = "";
  if (pathname === "/") {
    souligneAccueil = "lien-souligne";
  } else if (pathname === "/apropos") {
    souligneApropos = "lien-souligne";
  }

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Logo de Kasa"></img>
      </Link>
      <nav>
        <Link to="/" className={souligneAccueil}>
          Accueil
        </Link>
        <Link to="/apropos" className={souligneApropos}>
          À propos
        </Link>
      </nav>
    </header>
  );
}

export default Header;
