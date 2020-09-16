import "../css/common.css";
import "../css/navigation.css";
import "../css/lecture.css";
import "../css/footer.css";
import ScrollReveal from "scrollreveal";

// navigation bar hamburger menu toggle
const toggleMenu = (e) => {
  let x = navMenu;
  if (x.style.display == "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
};

let navMenu = document.getElementsByClassName("nav-menu")[0];
let navMenuBtn = document.getElementsByClassName("nav-menu-btn")[0];

navMenuBtn.addEventListener("click", toggleMenu);

window.addEventListener("resize", (e) => {
  console.log(document.body.offsetWidth);
  let width = document.body.offsetWidth;
  if (width > 960) {
    navMenu.style.display = "flex";
  } else if (width <= 960) {
    navMenu.style.display = "none";
  }
});
