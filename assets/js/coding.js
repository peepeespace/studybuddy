import "../css/style.css";
import "../css/modal.css";
import "../css/header.css";
import "../css/service.css";
import "../css/message.css";
import "../css/footer.css";
import "../css/coding.css";

import axios from "axios";

const logo = document.getElementsByClassName("logo")[0];

logo.addEventListener("click", (e) => {
  window.location = "/";
});

// const modal = document.getElementsByClassName("class-modal")[0];
// const modalClose = document.getElementById("modal-close");

// // btn.onclick = function() {
// //   modal.style.display = "block";
// // }

// modalClose.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

const openNotion = (url) => {
  const win = window.open(url, "_blank");
  win.focus();
};

const lectureCards = document.getElementsByClassName("lecture-card");

for (let card of lectureCards) {
  card.addEventListener("click", (e) => {
    // modal.style.display = "block";
    const id = card.getAttribute("id");

    if (id == "coding1") {
      openNotion("https://www.notion.so/1-1-b15fa1459ca6475a97db11624ea9677e");
    } else if (id == "coding2") {
      openNotion(
        "https://www.notion.so/2-A-to-Z-46c129405c244b6b95a4d4f2809297e1"
      );
    } else if (id == "coding3") {
      openNotion("https://www.notion.so/3-3e65d04289d240bfbe658016e03334c1");
    }
  });
}

const messageAPI = "https://api.studybuddy.kr/core/message/";

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

  location.reload();
});
