import React from "react";
import "./Hero.sass";
import { IoArrowRedoOutline } from "react-icons/io5";

import bg from "../../../public/assets/images/bg.png";

import ContactBanner from "../ContactBanner/ContactBanner";

const Hero = () => {
  return (
    <main className="hero-wrap">
      <div className="hero-heading-wrap">
        <IoArrowRedoOutline size={35} style={{ transform: "rotate(50deg)" }} />
        <h1>
          <span>Frontend</span>
          <span>Developer</span>
        </h1>
      </div>

      {/* <div className="img-wrapper">
        <img className="hero-img" src={bg} alt="" />
      </div> */}
    </main>
  );
};

export default Hero;
