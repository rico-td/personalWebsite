import React from "react";
import "./Hero.css";
import { IoArrowRedoOutline } from "react-icons/io5";

import bg from "../../../public/assets/images/bg.png";

import ContactBanner from "../ContactBanner/ContactBanner";

const Hero = () => {
  return (
    <main className="hero-wrapper">
      <div className="container-heading">
      <IoArrowRedoOutline size={35}  style = {{transform: 'rotate(50deg)' }}/>
      <h1 className="hero-heading"><span>Frontend Developer</span></h1>
      </div>
     
      {/* <div className="img-wrapper">
        <img className="hero-img" src={bg} alt="" />
      </div> */}
    </main>
  );
};

export default Hero;
