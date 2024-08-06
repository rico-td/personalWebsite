import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";

import { personalInfo } from "../../utils/constants";

const Footer = () => {
  return (
    <section className="footer-wrapper">
      <div className="footer">
        <h2 className="text-5xl">let's get in touch. </h2>
        <button className="contact-me-btn w-[150px] aspect-square rounded-[50%]">
          <Link to="/contact">contact me</Link>
        </button>
        <a href={`mailto:${personalInfo.email}`}>
          <button className="get-in-touch-btn">{personalInfo.email}</button>
        </a>

        <div className="wrapper-social-logos w-[90%] flex justify-center items-center gap-[3rem] p-[2rem] text-sm">
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
