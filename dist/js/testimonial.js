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
