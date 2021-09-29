// accordion
document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("accord-active");
  });
});
