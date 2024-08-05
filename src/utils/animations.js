// handle loader animation

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

import { welcomeTexts } from "./constants";

export default function loadingScreenAnimation() {
  const spanElements = document.querySelectorAll(".loader span");
  const loadingScreenTimeline = gsap.timeline({});
  const lastIndex = spanElements.length - 1;

  welcomeTexts.forEach((_, i) => {
    // animation group-text "hello"
    loadingScreenTimeline.to(spanElements[i], {
      opacity: 1,
      duration: 0.15,
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

  //   animation backgorund
  loadingScreenTimeline.to(".loader-wrapper", {
    start: "top",
    y: "-100%",
    duration: 1,
    ease: "easeIn",
  });

  //   animation text "World"
  gsap.fromTo(
    ".world-text",
    { opacity: 0 },
    { opacity: 1, text: "World.", duration: 1.2, ease: "easeIn" }
  );
}

export function bannerAnimation() {
  const banner = document.querySelector(".banner-wrapper");
  const bannerContent = banner.firstChild;
  if (!banner || !bannerContent || banner.childElementCount > 1) {
    return;
  }
  const bannerContentClone = bannerContent.cloneNode(true);
  banner.appendChild(bannerContentClone);
}

// const tlBanner = gsap.timeline({ repeat: -1, yoyo: true });
// gsap.to(".banner-wrapper", {
//   x: "-150%",
//   duration: 16,
//   ease: "easeInOut",
//   delay: 1.3,
// });
