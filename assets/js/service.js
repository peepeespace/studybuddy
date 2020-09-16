import "../css/style.css";
import "../css/header.css";
import "../css/service.css";
import "../css/message.css";
import "../css/footer.css";

const logo = document.getElementsByClassName("logo")[0];

logo.addEventListener("click", (e) => {
  window.location = "/";
});
