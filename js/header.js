const header = document.querySelector(".header");
const headerBurger = document.querySelector(".header__controls-button_burger");
const mainMenu = document.querySelector(".main-menu");

headerBurger.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("active");
  header.classList.toggle("active");
  mainMenu.classList.toggle("active");
});


window.addEventListener('scroll', (event ) => {
  if (window.scrollY > 180) {
    header.classList.add("scrolled")
  } else {
    header.classList.remove("scrolled")
  }
})