import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import APropos from "../../pages/APropos";
import FicheLogement from "../../pages/FicheLogement";
import Erreur404 from "../../pages/Erreur404";

function Navigation() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/ficheLogement/:logementId" element={<FicheLogement />} />
        <Route path="*" element={<Erreur404 />} />
      </Routes>
    </Router>
  );
}

export default Navigation;
