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

const messageAPI = "https://api.studybuddy.kr/core/message";

const messageForm = document.getElementById("message-form");
const nameInput = document.getElementById("name-input");
const phoneInput = document.getElementById("phone-input");
const emailInput = document.getElementById("email-input");
const contentInput = document.getElementById("content-input");

messageForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = nameInput.value;
  const phone = phoneInput.value;
  const email = emailInput.value;
  const content = contentInput.value;

  await axios.post(messageAPI, {
    name,
    phone,
    email,
    content,
  });
});
