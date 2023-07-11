import "../../utils/style/css/style-carte-logement.css";
import { Link } from "react-router-dom";

function CarteLogement(props) {
  const logement = props.logement;
  return (
    <Link to={`logement/${logement.id}`} className="container-carte-logement">
      <article
        className="carte-logement"
        style={{
          backgroundImage: `url(${props.image})`,
        }}
      >
        <p>{logement.title}</p>
      </article>
    </Link>
  );
}

export default CarteLogement;

// faire linear gradient fondu noir en css
