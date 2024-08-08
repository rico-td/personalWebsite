// react imports
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// GSAP imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

// sass and functions imports
import "./Navbar.sass";
import { personalInfo } from "../../utils/constants";
import { handleTopnavAccessibility } from "../../utils/functions.js";
import { mouseEffektAnimation } from "../../utils/animations.js";

// assets imports
import closeImg from "../../../public/assets/icons/icons8-close.svg";
import menuImg from "../../../public/assets/icons/icons8-menu.svg";

const Navbar = () => {
  //
  useEffect(() => {
    handleTopnavAccessibility();
  }, []);

  useGSAP(() => {
    mouseEffektAnimation();
  }, []);

  return (
    <header className="topnav wrapper">
      <Link to="/">{personalInfo.name}</Link>
      <nav>
        {/* context for screenreaders */}
        <span id="nav-label" hidden>
          Navigation
        </span>
        {/* aria-expanded to indicate the menu is closed*/}
        <button
          id="openBtn"
          className="topnav__open"
          aria-expanded="false"
          aria-labelledby="nav-label"
        >
          menu
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="2.5rem"
            fill="white"
          >
            <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z" />
          </svg> */}
        </button>
        {/* role for additional content on the website */}
        <div className="topnav__menu" role="dialog" aria-labelledby="nav-label">
          <button id="closeBtn" className="topnav__close" aria-label="close">
            <svg
              class="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="2.5rem"
              fill="white"
            >
              "
              <path d="M 4.2382812 2.9882812 A 1.250125 1.250125 0 0 0 3.3671875 5.1347656 L 10.232422 12 L 3.3613281 18.869141 A 1.2512475 1.2512475 0 1 0 5.1308594 20.638672 L 12 13.767578 L 18.865234 20.632812 A 1.250125 1.250125 0 1 0 20.632812 18.865234 L 13.767578 12 L 20.625 5.1425781 A 1.250125 1.250125 0 1 0 18.857422 3.375 L 12 10.232422 L 5.1347656 3.3671875 A 1.250125 1.250125 0 0 0 4.2382812 2.9882812 z" />
            </svg>
          </button>
          <ul className="topnav__links">
            <li className="topnav__item">
              <Link className="topnav__link" to="/">
                Home
              </Link>
            </li>
            <li className="topnav__item">
              <Link className="topnav__link" to="/work">
                Work
              </Link>
            </li>
            <li className="topnav__item">
              <Link className="topnav__link" to="/about">
                About
              </Link>
            </li>
            <li className="topnav__item">
              <Link className="topnav__link" to="/contact">
                Contact
              </Link>
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
