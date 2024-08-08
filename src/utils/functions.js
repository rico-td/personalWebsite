export function handleTopnavAccessibility() {
  const openBtn = document.querySelector("#openBtn");
  const closeBtn = document.querySelector("#closeBtn");

  function openMobileMenu() {
    openBtn.setAttribute("aria-expanded", "true");
  }

  function closeMobileMenu() {
    openBtn.setAttribute("aria-expanded", "false");
  }

  openBtn.addEventListener("click", openMobileMenu);
  closeBtn.addEventListener("click", closeMobileMenu);
}
