import "../css/style.css";
import "../css/modal.css";
import "../css/header.css";
import "../css/service.css";
import "../css/message.css";
import "../css/footer.css";
import "../css/english.css";

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

    if (id == "english1") {
      openNotion("https://www.notion.so/ad8afcc410db4fa5bf6ebd370ef24807");
    } else if (id == "english2") {
      openNotion("https://www.notion.so/9475ffd63ef54a698975cbea788af25a");
    } else if (id == "english3") {
      openNotion("https://www.notion.so/41faf62fbac24d73986917735e8dcf45");
    } else if (id == "english4") {
      openNotion(
        "https://www.notion.so/TOEIC-Speaking-fc851ee0c7eb4b69ae503f17e22ddb90"
      );
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
