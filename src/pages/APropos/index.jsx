import React from "react";
import Header from "../../components/Header";
import Banner from "../../components/BannerApropos";
import imageBanner from "../../assets/images/image-banner-2.png";
import Footer from "../../components/Footer";

function APropos() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Banner image={imageBanner} />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default APropos;
