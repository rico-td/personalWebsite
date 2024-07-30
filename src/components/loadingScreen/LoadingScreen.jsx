import React from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

// import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";
// gsap.registerPlugin(ScrambleTextPlugin);

import "./LoadingScreen.css";

const LoadingScreen = () => {
  const welcomeTexts = [
    "willkommen.",
    "welcome.",
    "स्वागत",
    "bienvenido.",
    "benvenuto.",
    "witaj.",
    "欢迎",
  ];

  useGSAP(() => {
    const spanElements = document.querySelectorAll(".loading-screen span");

    const LoadingTL = gsap.timeline({ stagger: 0.5 });

    welcomeTexts.forEach((text, i) => {
      LoadingTL.to(spanElements[i], {
        opacity: 1,
        duration: 0.5,
        ease: "power4",
        text: text,
        // scrambleText: text,
        onComplete: () => {
          gsap.to(spanElements[i], {
            opacity: 0,
            duration: 0,
          });
        },
      });
    });
    LoadingTL.to(".loader-wrapper", {
      y: "-120%",
      rotate: -3.5,
      duration: 1,
      ease: "easeInOut",
    });
  }, []);

  const welcomeSpanElements = [];

  welcomeTexts.forEach((text, i) => {
    welcomeSpanElements.push(
      <span
        key={i}
        className="opacity-0 absolute justify-center items-center"
      ></span>
    );
  });

  return (
    <div className="loader-wrapper h-[100%] w-[100%] absolute top-0 left-0 z-999 overflow-hidden pointer-events-none bg-[var(--background-light)]">
      <div className="loading-screen h-[110vh] w-[110vw] flex justify-center items-center pointer-events-none">
        <h1 className="flex justify-center items-center text-4xl tracking-widest relative text-[var(--text-dark)] transform -translate-x-[5vw] -translate-y-[5vh]">
          {welcomeSpanElements}
        </h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
