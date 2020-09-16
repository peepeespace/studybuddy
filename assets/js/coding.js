import "../css/style.css";
import "../css/modal.css";
import "../css/header.css";
import "../css/service.css";
import "../css/message.css";
import "../css/footer.css";
import "../css/coding.css";

const logo = document.getElementsByClassName("logo")[0];

logo.addEventListener("click", (e) => {
  window.location = "/";
});

const modal = document.getElementsByClassName("class-modal")[0];
const modalClose = document.getElementById("modal-close");

// btn.onclick = function() {
//   modal.style.display = "block";
// }

modalClose.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const lectureCards = document.getElementsByClassName("lecture-card");

for (var card of lectureCards) {
  card.addEventListener("click", (e) => {
    modal.style.display = "block";
  });
}
