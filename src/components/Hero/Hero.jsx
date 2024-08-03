import React from "react";
import "./Hero.css";

import bg from "../../../public/assets/images/bg.png";

import ContactBanner from "../ContactBanner/ContactBanner";

const Hero = () => {
  return (
    <main className="hero-wrapper">
      <div className="img-wrapper">
        <img className="hero-img" src={bg} alt="" />
      </div>
      <ContactBanner />
    </main>
  );
};

export default Hero;
