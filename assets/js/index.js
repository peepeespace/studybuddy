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

const opicPopup = document.getElementById("opic-popup");
const opicClose = document.getElementById("opic-close");
const opicEvent = document.getElementById("opic-event");
const webPopup = document.getElementById("web-popup");
const webClose = document.getElementById("web-close");
const webEvent = document.getElementById("web-event");

opicClose.addEventListener("click", (e) => {
  opicPopup.style.display = "none";
});

opicEvent.addEventListener("click", (e) => {
  window.location = "/main-english";
});

webClose.addEventListener("click", (e) => {
  webPopup.style.display = "none";
});

webEvent.addEventListener("click", (e) => {
  window.location = "/main-coding";
});

const anne = document.getElementsByClassName("anne")[0];
const phillip = document.getElementsByClassName("phillip")[0];

anne.addEventListener("click", (e) => {
  window.location = "/english";
});

phillip.addEventListener("click", (e) => {
  window.location = "/coding";
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

  location.reload();
});
