import "../../utils/style/css/style-banner-apropos.css";

function Banner(props) {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${props.image})`,
      }}
    >
      <div className="color-overlay" />
    </div>
  );
}

export default Banner;
