import "../css/style.css";
import "../css/header.css";
import "../css/main_lecture.css";
import "../css/main_english.css";
import "../css/footer.css";

const logo = document.getElementsByClassName("logo")[0];

logo.addEventListener("click", (e) => {
  window.location = "/";
});

let modal = document.getElementById("credit-modal");

let btn = document.getElementById("credit-modal-btn");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
