import React from "react";

// GSAP imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

// import styles
import "./ContactBanner.css";

// import modules
import { personalInfo } from "../../utils/constants.js";
import { bannerAnimation } from "../../utils/animations.js";

const ContactBanner = () => {
  useGSAP(bannerAnimation, []);

  return (
    <div className="banner-wrapper">
      <div className="banner-content">
        <span className="">{personalInfo.name}</span>
        {/* <span className="separator">-</span>
        <span>Frontend Developer</span>
        <span className="separator">-</span>
        <span>{personalInfo.email}</span>
        <span className="separator">-</span>
        <span>{personalInfo.skills[2]} </span> */}
      </div>
    </div>
  );
};

export default ContactBanner;
