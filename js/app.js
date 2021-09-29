// nav bar
window.addEventListener("scroll", function () {
  const header = document.querySelector(".nav-bar");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// loading

window.addEventListener("load", () => {
  const preload = document.querySelector(".loading");
  preload.classList.add("preload-finish");
});

// menu mobile
const menuBtn = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  links.classList.toggle("nav-active");

  menuBtn.classList.toggle("exit");
  document.querySelector("body").classList.toggle("hidden");
});

// accordion
document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("accord-active");
  });
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

// testimonial
// https://www.w3schools.com/howto/howto_js_active_element.asp

const btnContainer = document.getElementById("navigation-manual");
const btns = btnContainer.getElementsByClassName("manual-btn");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("manual-btn-active");
    current[0].className = current[0].className.replace(
      " manual-btn-active",
      ""
    );
    this.className += " manual-btn-active";
  });
}
