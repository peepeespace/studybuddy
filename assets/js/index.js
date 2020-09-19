import "../css/style.css";
import "../css/header.css";
import "../css/layout.css";
import "../css/message.css";
import "../css/footer.css";

import axios from "axios";

const logo = document.getElementsByClassName("logo")[0];

logo.addEventListener("click", (e) => {
  window.location = "/";
});

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
});
