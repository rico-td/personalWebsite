// react imports
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// GSAP imports
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

// sass and functions imports
import style from "./TopnavMobile.module.sass";
import { handleTopnavAccessibility } from "../../utils/functions.js";

// assets imports
import closeImg from "../../../public/assets/icons/icons8-close.svg";
import menuImg from "../../../public/assets/icons/icons8-menu.svg";

const TopnavMobile = () => {
  useEffect(() => {
    handleTopnavAccessibility();
  }, []);

  return (
    <header className={style.topnav}>
      <nav>
        {/* context for screenreaders */}
        <span id="nav-label" hidden>
          Navigation
        </span>
        {/* aria-expanded to indicate the menu is closed*/}

        {/* role for additional content on the website */}
        <div
          className={style.topnav__menu}
          role="dialog"
          aria-labelledby="nav-label"
        >
          <button
            id="closeBtn"
            className={style.topnav__close}
            aria-label="close"
          >
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
    </header>
  );
};

export default TopnavMobile;
