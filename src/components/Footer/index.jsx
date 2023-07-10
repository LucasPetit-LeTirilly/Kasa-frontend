import "../../utils/style/css/style-footer.css";
import logo from "../../assets/logos/logo-kasa-noir.svg";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo de Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
