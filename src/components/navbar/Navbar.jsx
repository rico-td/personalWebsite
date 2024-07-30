import React from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

import "./Navbar.css";

const Navbar = () => {
  useGSAP(() => {
    const onHover = () => {
      gsap.to(".homeButton", {
        backgroundColor: "var(--background-light)",
        color: "var(--text-dark)",
        backdropFilter: "blur(20px)",
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

    gsap.set(".mouseEffekt", { xPercent: -50, yPercent: -50 });
    let xTo = gsap.quickTo(".mouseEffekt", "x", {
        duration: 3,
        ease: "power4",
      }),
      yTo = gsap.quickTo(".mouseEffekt", "y", {
        duration: 3,
        ease: "power4",
      });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });
  }, []);

  return (
    <header className="h-[80px] w-full flex justify-between items-center text-white">
      <div className="homeButton flex flex-shrink-0 justify-center items-center ml-10 border-white border-2 rounded-full h-[60px] w-[60px]">
        <a
          className="button text-[2rem] flex justify-center items-center aspect-square"
          href="/"
        >
          RS
        </a>
      </div>

      <ul className="flex gap-10 mr-10 tracking-widest text-3xl">
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
      <div className="mouseEffekt fixed top-0 left-0 w-10 h-10 rounded-full bg-white pointer-events-none"></div>
    </header>
  );
};

export default Navbar;
