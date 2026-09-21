const backToTopButton = document.querySelector(".back-to-top");

document.querySelectorAll(".site-header a").forEach((link) => {
  const label = link.textContent.trim();

  link.textContent = "";
  link.setAttribute("aria-label", link.getAttribute("aria-label") || label);

  [...label].forEach((character, index) => {
    const letter = document.createElement("span");
    letter.className = "header-letter";
    letter.setAttribute("aria-hidden", "true");
    letter.style.setProperty("--letter-index", index);
    letter.textContent = character === " " ? "\u00a0" : character;
    link.appendChild(letter);
  });
});

const updateBackToTop = () => {
  backToTopButton?.classList.toggle("is-visible", window.scrollY > 320);
};

if (backToTopButton) {
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", updateBackToTop, { passive: true });
  updateBackToTop();
}
