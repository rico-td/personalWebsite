// handle loader animation

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

import { welcomeTexts } from "./constants";

export default function handleAnimation() {
  const spanElements = document.querySelectorAll(".loader span");
  const LoadingTL = gsap.timeline({});
  const lastIndex = spanElements.length - 1;

  welcomeTexts.forEach((_, i) => {
    // animation group-text "hello"
    LoadingTL.to(spanElements[i], {
      opacity: 1,
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

  //   animation text "World"
  gsap.fromTo(
    ".world-text",
    { opacity: 0 },
    { opacity: 1, text: "World.", duration: 1.2, ease: "easeIn" }
  );

  //   animation backgorund
  LoadingTL.to(".loader-wrapper", {
    start: "top",
    y: "-100%",
    duration: 1.2,
    ease: "easeIn",
  });
}
