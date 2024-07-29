import React from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

const Navbar = () => {
   useGSAP(() => {
      const onHover = () => {
         gsap.to(".homeButton", {
            backgroundColor: "var(--background-light)",
            color: "var(--text-dark)",
         });
      };

      const onLeave = () => {
         gsap.to(".homeButton", {
            backgroundColor: "var(--background-dark)",
            color: "var(--text-light)",
         });
      };

      const homeButtonElement = document.querySelector(".homeButton");
      homeButtonElement.addEventListener("mouseenter", () => {
         onHover();
      });

      homeButtonElement.addEventListener("mouseleave", () => {
         onLeave();
      });

      gsap.set(".homeButton", { x: 0, y: 0 });
      let xTo = gsap.quickTo(".homeButton", "x", {
            duration: 1.5,
            ease: "easeInOut",
         }),
         yTo = gsap.quickTo(".homeButton", "y", {
            duration: 0.8,
            ease: "elastic",
         });

      window.addEventListener("mousemove", (e) => {
         xTo(e.pageX - 10);
         yTo(e.pageY + 20);

         console.log(xTo, e.clientY);
      });
   }, []);

   return (
      <header className="h-[80px] w-full flex justify-between items-center text-white">
         <div className="homeButton flex flex-shrink-0 justify-center items-center ml-[80px] border-white border-2 rounded-full h-[50px] w-[50px]">
            <a className="button text-xl" href="/">
               RS
            </a>
         </div>

         <ul className="flex gap-20 mr-10 uppercase">
            <li>
               <a href="/">Home</a>
            </li>
            <li>
               <a href="/">Portfolio</a>
            </li>
            <li>
               <a href="/">Contact</a>
            </li>
         </ul>
      </header>
   );
};

export default Navbar;
