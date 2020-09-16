let navMenu = document.getElementsByClassName("nav-menu")[0];

const openMenu = (e) => {
  if (navMenu.style.display == "none") {
    navMenu.style.display = "flex";
  }
};

const closeMenu = (e) => {
  if (e.target != navMenu) {
    navMenu.style.display = "none";
  }
};

module.exports = {
  openMenu,
  closeMenu,
};
