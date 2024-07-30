import React from "react";

// GSAP imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

import "./ContactBanner.css";

const ContactBanner = () => {
  useGSAP(() => {
    // infinite move animation for the contact banner
    const tlBanner = gsap.timeline({ repeat: -1, yoyo: true });

    tlBanner.to(".name-banner", {
      x: "-100%",
      duration: 20,
      ease: "easeInOut",
    });
  }, []);

  return (
    <>
      <div className="name-banner absolute z-99 bottom-[4vh] left-0 w-[100%] pointer-events-none">
        <h1 className="flex relative w-[100%] text-[var(--text-light)]">
          <span>Riccardo Schroeder</span>
          &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
          <span>Riccardo Schroeder</span>
          &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
          <span>Riccardo Schroeder</span>
          &nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;
          <span>Riccardo Schroeder</span>
        </h1>
      </div>
    </>
  );
};

export default ContactBanner;
