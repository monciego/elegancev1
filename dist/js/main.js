// nav bar
window.addEventListener("scroll", function () {
  const header = document.querySelector(".nav-bar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// // loading

// window.addEventListener("load", () => {
//   const preload = document.querySelector(".loading");
//   preload.classList.add("preload-finish");
// });

// menu mobile
const menuBtn = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  links.classList.toggle("nav-active");

  menuBtn.classList.toggle("exit");
  document.querySelector("body").classList.toggle("hidden");
});

//javascript for reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}
