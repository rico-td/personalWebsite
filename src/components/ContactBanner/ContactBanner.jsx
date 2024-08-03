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

const ContactBanner = () => {
  useGSAP(() => {
    // infinite move animation for the contact banner
    const tlBanner = gsap.timeline({ repeat: -1, yoyo: true });

    tlBanner.to(".name-banner-wrapper", {
      x: "-150%",
      duration: 16,
      ease: "easeInOut",
    });
  }, []);

  return (
    <div className="name-banner-wrapper">
      <p>
        <span> {personalInfo.name}</span>
        <span className="separator">-</span>
        <span>{personalInfo.email}</span>
        <span className="separator">-</span>
        <span>{personalInfo.skills[2]}</span>
      </p>
    </div>
  );
};

export default ContactBanner;
