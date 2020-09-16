import "../css/common.css";
import "../css/navigation.css";
import "../css/footer.css";
import "../css/main.css";
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

// scroll reveal effect
const sb = document.getElementsByClassName("sb-main")[0];
const nodeList = document.querySelectorAll(".word-area");

window.sr = ScrollReveal({
  reset: true,
  delay: 100,
  duration: 400,
  origin: "top",
  distance: "50px",
  easing: "ease-out",
  scale: 0.8,
});
console.log(window.sr);
sr.reveal(sb, { reset: false });
sr.reveal(nodeList);


window.addEventListener('resize', (e) => {
  console.log(window.innerWidth);
});

// function setupTypewriter(t) {
//   var HTML = t.innerHTML;

//   t.innerHTML = "";

//   var cursorPosition = 0,
//     tag = "",
//     writingTag = false,
//     tagOpen = false,
//     typeSpeed = 50,
//     tempTypeSpeed = 0;

//   var type = function () {
//     if (writingTag === true) {
//       tag += HTML[cursorPosition];
//     }

//     if (HTML[cursorPosition] === "<") {
//       tempTypeSpeed = 0;
//       if (tagOpen) {
//         tagOpen = false;
//         writingTag = true;
//       } else {
//         tag = "";
//         tagOpen = true;
//         writingTag = true;
//         tag += HTML[cursorPosition];
//       }
//     }
//     if (!writingTag && tagOpen) {
//       tag.innerHTML += HTML[cursorPosition];
//     }
//     if (!writingTag && !tagOpen) {
//       if (HTML[cursorPosition] === " ") {
//         tempTypeSpeed = 0;
//       } else {
//         tempTypeSpeed = Math.random() * typeSpeed + 50;
//       }
//       t.innerHTML += HTML[cursorPosition];
//     }
//     if (writingTag === true && HTML[cursorPosition] === ">") {
//       tempTypeSpeed = Math.random() * typeSpeed + 50;
//       writingTag = false;
//       if (tagOpen) {
//         var newSpan = document.createElement("span");
//         t.appendChild(newSpan);
//         newSpan.innerHTML = tag;
//         tag = newSpan.firstChild;
//       }
//     }

//     cursorPosition += 1;
//     if (cursorPosition < HTML.length - 1) {
//       setTimeout(type, tempTypeSpeed);
//     }
//   };

//   return {
//     type: type,
//   };
// }

// var typer = document.getElementById("typewriter");

// var typewriter = setupTypewriter(typer);

// typewriter.type();
