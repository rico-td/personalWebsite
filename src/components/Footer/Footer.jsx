import React from "react";
import "./Footer.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import { personalInfo } from "../../utils/constants";

const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="footer">
        <h2 className="text-5xl">lets get in touch. </h2>
        <a href="mailto:your-email@example.com">
          <button className="get-in-touch-btn">{personalInfo.email}</button>
        </a>

        <div className="w-full h-full flex justify-center items-center gap-[3rem] p-[3rem] text-sm border-t-2 border-[var(--text-light)]">
          <div className="flex flex-col justify-center gap-[.5rem] items-center">
            <a id="link" href="https://www.google.de/?hl=en">
              <FaGithub size={"2.5rem"} />
            </a>
            <p>GitHub</p>
          </div>
          <div className="flex flex-col justify-center gap-[.5rem] items-center">
            <a id="link" href="https://www.google.de/?hl=en">
              <FaLinkedin size={"2.5rem"} />
            </a>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
