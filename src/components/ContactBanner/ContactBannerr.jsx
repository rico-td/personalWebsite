import React from "react";

// GSAP imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

import "./ContactBanner.css";

const ContactBannerr = () => {
   useGSAP(() => {
      // infinite move animation for the contact banner
      const tlBanner = gsap.timeline({ repeat: -1, yoyo: true });

      tlBanner.to(".name-banner", {
         x: "-100%",
         duration: 20,
         ease: "none",
      });
   }, []);

   return (
      <>
         <div className="name-banner absolute bottom-[8vh] left-0 w-[100%] pointer-events-none">
            <h1 className="flex relative w-[100%] text-white text">
               *** RS -&nbsp;<span> Riccardo Schroeder</span>&nbsp;- RS -&nbsp;
               <span>Riccardo Schroeder</span>&nbsp;-&nbsp;RS ***
            </h1>
         </div>
      </>
   );
};

export default ContactBannerr;
