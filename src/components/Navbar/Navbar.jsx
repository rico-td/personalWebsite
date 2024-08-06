import React from "react";
import { Link } from "react-router-dom";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

import "./Navbar.css";
import { personalInfo } from "../../utils/constants";

const Navbar = () => {
  useGSAP(() => {
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
    <header>
      <nav className="nav-bar">
        <Link to="/">{personalInfo.name}</Link>

        <div className="nav-menu-right-wrap">
          <ul>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mouseEffekt fixed top-0 left-0 w-5 h-5 rounded-full bg-white pointer-events-none"></div>
    </header>
  );
};

export default Navbar;

// const onEnter = () => {
//   gsap.to(".wrapper", {
//     backgroundColor: "var(--background-dark)",
//     color: "var(--text-light)",
//     backdropFilter
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
