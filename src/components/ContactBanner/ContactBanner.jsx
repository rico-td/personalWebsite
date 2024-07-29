import React from "react";

// GSAP imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

import "./ContactBanner.css";

const ContactBanner = () => {
   useGSAP(() => {
      // infinite move animation for the contact banner
      const tlBanner = gsap.timeline({ repeat: -1 });

      tlBanner.to(".contact-mover", {
         x: "-100%",
         duration: 10,
         ease: "none",
         repeat: -1,
      });

      const contactBannerHoverIn = () => {
         tlBanner.pause();

         gsap.to(".contact-banner", {
            color: "var(--background-dark)",
            backgroundColor: "var(--background-light)",
            transition: "all .3s ease-in",
         });
      };

      const contactBannerHoverOut = () => {
         tlBanner.resume();

         gsap.to(".contact-banner", {
            color: "var(--background-light)",
            backgroundColor: "var(--background-dark)",
            transition: "all .3s ease-out",
         });
      };

      // hover animation for the contact banner
      const bannerHTMLElement = document.querySelector(".contact-banner");
      bannerHTMLElement.addEventListener("mouseenter", () => {
         contactBannerHoverIn();
      });
      bannerHTMLElement.addEventListener("mouseleave", () => {
         contactBannerHoverOut();
      });
   }, []);

   // create 5 elements for the contact banner
   const elements = [];
   for (let i = 0; i < 5; i++) {
      elements.push(
         <div key={i} className="contact-mover pr-[75px] inline-flex">
            <span id="textElementContact">exampleMailForTest@gmail.com</span>
         </div>
      );
   }

   return (
      <>
         <button
            onClick={() => {
               const contactAdress = document.querySelector(
                  "#textElementContact"
               ).innerHTML;
               console.log(contactAdress);
            }}
            className="contact-copy-button absolute top-0 left-0 uppercase font-light text-2xl"
         >
            <div
               className="contact-banner w-[100vh] h-[50px] fixed top-0 left-0 flex items-center whitespace-nowrap
            overflow-hidden py-2 cursor-pointer z-99"
            >
               <div>{elements}</div>
            </div>
         </button>
      </>
   );
};

export default ContactBanner;

// transform-origin: left top;
// transform: translateZ(0) rotate(-90deg) translateX(-100%);
// background-color: var(--background-dark);
// z-index: 99;
// cursor: pointer;
