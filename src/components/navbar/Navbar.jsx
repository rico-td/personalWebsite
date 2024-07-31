import React from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

import "./Navbar.css";

const Navbar = () => {
  useGSAP(() => {
    // const onHover = () => {
    //   gsap.to(".wrapper", {
    //     backgroundColor: "var(--background-light)",
    //     color: "var(--text-dark)",
    //     backdropFilter: "blur(20px)",
    //   });
    // };

    // const onLeave = () => {
    //   gsap.to(".homeButton", {
    //     backgroundColor: "var(--background-dark)",
    //     color: "var(--text-light)",
    //   });
    // };

    // const homeButtonElement = document.querySelector(".wrapper-btn");
    // homeButtonElement.addEventListener("mouseenter", () => {
    //   onHover();
    // });

    // homeButtonElement.addEventListener("mouseleave", () => {
    //   onLeave();
    // });

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
    <header className="h-[80px] w-[110vw] flex justify-between items-center text-[var(--text-dark)] bg-[var(--background-light)] transform -rotate-[1deg]">
      <ul className="flex gap-5 ml-10 tracking-widest text-l font-bold sm:text-2xl sm:font-normal lg:text-3xl">
        <li>
          <a className="" href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <div className="wrapper-btn flex justify-center items-center mr-[3rem]">
        <a
          className="btn text-2xl flex justify-center items-center transform -translate-x-[10vw] "
          href="/"
        >
          RS
        </a>
      </div>

      <div className="mouseEffekt fixed top-0 left-0 w-10 h-10 rounded-full bg-white pointer-events-none"></div>
    </header>
  );
};

export default Navbar;
