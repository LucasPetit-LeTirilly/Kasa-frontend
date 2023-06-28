function FicheLogement(props) {
  const logement = props.logement;
  return (
    <section>
      <p>{logement.title}</p>
      <img src={logement.pictures[0]} />
    </section>
  );
}

export default FicheLogement;
