import "../../utils/style/css/style-banner-home.css";

function Banner(props) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <p>{props.texte}</p>
      <div className="color-overlay" />
    </div>
  );
}

export default Banner;
