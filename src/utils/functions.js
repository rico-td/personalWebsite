export function handleTopnavAccessibility() {
  const openBtn = document.querySelector("#openBtn");
  const closeBtn = document.querySelector("#closeBtn");

  const media = window.matchMedia("width < 40em");
  // const navElement = document.querySelector(".topnav__menu");

  if (media.matches) {
    console.log("mobile");
  } else {
    console.log("desktop");
  }

  function openMobileMenu() {
    openBtn.setAttribute("aria-expanded", "true");
  }

  function closeMobileMenu() {
    openBtn.setAttribute("aria-expanded", "false");
  }

  openBtn.addEventListener("click", openMobileMenu);
  closeBtn.addEventListener("click", closeMobileMenu);
}
