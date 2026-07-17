const backToTopButton = document.querySelector(".back-to-top");

const updateBackToTop = () => {
  backToTopButton.classList.toggle("is-visible", window.scrollY > 320);
};

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", updateBackToTop, { passive: true });
updateBackToTop();
