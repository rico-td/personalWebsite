// react imports
import React, { useState, useEffect } from "react";

// gsap imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

// css imports
import "./LoadingScreen.css";

// import constants and utils
import { welcomeTexts } from "../../utils/constants.js";

// import animation
import handleAnimation from "../../utils/loaderAnimation.js";

// Component starts here
// ---------------------------------------------------------------------
const LoadingScreen = () => {
  // render HTML text

  const welcomeSpanElements = [];

  welcomeTexts.forEach((text, i) => {
    welcomeSpanElements.push(
      <span key={i} className="hello-text-single">
        {text}
      </span>
    );
  });

  // handle state for loading
  const [isLoading, setisLoading] = useState(false);

  useGSAP(handleAnimation, []);

  return (
    <div className="loader-wrapper">
      <div className="loader">
        <div className="hello-text-group">{welcomeSpanElements}</div>
        <span className="world-text"></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
