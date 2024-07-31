import React from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

import "./LoadingScreen.css";

const LoadingScreen = () => {
  const welcomeTexts = [
    "hallo.",
    "hola.",
    "नमस्ते",
    "ciao.",
    "hej.",
    "witaj.",
    "你好",
    "hello.",
  ];

  useGSAP(() => {
    const spanElements = document.querySelectorAll(".loading-screen span");

    const LoadingTL = gsap.timeline({});
    const lastIndex = spanElements.length - 1;

    welcomeTexts.forEach((text, i) => {
      LoadingTL.to(spanElements[i], {
        opacity: 1,
        fontWeight: "lighter",
        duration: 0.2,
        ease: "easeOut",
        onComplete: () => {
          if (i < welcomeTexts.length - 1) {
            gsap.to(spanElements[i], {
              opacity: 0,
              duration: 0,
            });
          }
        },
      });
    });

    gsap.to(".span-World", {
      opacity: 0.5,
      duration: 1,
      text: "World.",
    });
    LoadingTL.to(".loader-wrapper", {
      y: "-120%",
      rotate: 3.5,
      duration: 1.2,
      ease: "expo.inOut",
    });
  }, []);

  const welcomeSpanElements = [];

  welcomeTexts.forEach((text, i) => {
    welcomeSpanElements.push(
      <span key={i} className="opacity-0 absolute justify-center items-center">
        {text}
      </span>
    );
  });

  return (
    <div className="loader-wrapper h-[100%] w-[120%] absolute top-0 left-0 z-999 overflow-hidden pointer-events-none bg-[var(--background-light)]">
      <div className="loading-screen h-[110vh] w-[110vw] flex justify-center items-center gap-[4rem] md:gap-[2rem] lg:gap-[1rem]">
        <h1 className="flex justify-center items-center text-4xl tracking-widest relative text-[var(--text-dark)] transform -translate-x-[5vw] -translate-y-[5vh]">
          {welcomeSpanElements}
        </h1>
        <span className="span-World text-4xl transform -translate-y-[5vh] opacity-0"></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
