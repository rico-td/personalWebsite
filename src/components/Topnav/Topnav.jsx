// react imports
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// GSAP imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

// sass and functions imports
import style from "./Topnav.module.sass";
import { personalInfo } from "../../utils/constants.js";
import { handleTopnavAccessibility } from "../../utils/functions.js";
import { mouseEffektAnimation } from "../../utils/animations.js";

// assets imports
import closeImg from "../../../public/assets/icons/icons8-close.svg";
import menuImg from "../../../public/assets/icons/icons8-menu.svg";

const Topnav = () => {
  //
  useEffect(() => {
    handleTopnavAccessibility();
    mouseEffektAnimation();
  }, []);

  return (
    <header className={style.topnav}>
      <Link to="/">{personalInfo.name}</Link>
      <nav>
        {/* context for screenreaders */}
        <span id="nav-label" hidden>
          Navigation
        </span>
        {/* aria-expanded to indicate the menu is closed*/}
        <button
          id="openBtn"
          className={style.topnav__open}
          aria-expanded="false"
          aria-labelledby="nav-label"
        >
          menu
        </button>
        {/* role for additional content on the website */}
        <div
          className={`${style.topnav__menu} topnav__menu`}
          role="dialog"
          aria-labelledby="nav-label"
        >
          <button
            id="closeBtn"
            className={style.topnav__close}
            aria-label="close"
          >
            <svg
              className="svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="2.5rem"
              fill="white"
            >
              "
              <path d="M 4.2382812 2.9882812 A 1.250125 1.250125 0 0 0 3.3671875 5.1347656 L 10.232422 12 L 3.3613281 18.869141 A 1.2512475 1.2512475 0 1 0 5.1308594 20.638672 L 12 13.767578 L 18.865234 20.632812 A 1.250125 1.250125 0 1 0 20.632812 18.865234 L 13.767578 12 L 20.625 5.1425781 A 1.250125 1.250125 0 1 0 18.857422 3.375 L 12 10.232422 L 5.1347656 3.3671875 A 1.250125 1.250125 0 0 0 4.2382812 2.9882812 z" />
            </svg>
          </button>
          <ul className={style.topnav__links}>
            <li className={style.topnav__item}>
              <Link className={style.topnav__link} to="/">
                Home
              </Link>
            </li>
            <li className={style.topnav__item}>
              <Link className={style.topnav__link} to="/work">
                Work
              </Link>
            </li>
            <li className={style.topnav__item}>
              <Link className="topnav__link" to="/about">
                About
              </Link>
            </li>
            <li className={style.topnav__item}>
              <Link className={style.topnav__link} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="js-mouseEffekt fixed top-0 left-0 w-5 h-5 rounded-full bg-white pointer-events-none"></div>
    </header>
  );
};

export default Topnav;

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
