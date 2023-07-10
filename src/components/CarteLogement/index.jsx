import "../../utils/style/css/style-carte-logement.css";

function CarteLogement(props) {
  const logement = props.logement;
  return (
    <article
      className="carte-logement"
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <p>{logement.title}</p>
    </article>
  );
}

export default CarteLogement;
