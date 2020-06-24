const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const social = document.querySelector(".social");
const header = document.querySelector(".header");
hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  hamburger.classList.toggle("hamburger__active");
  nav.classList.toggle("nav__active");
});

window.onscroll = function () {
  let pageScroll = window.pageYOffset;
  let hidePos = 400;
  if (pageScroll > hidePos) {
    social.classList.add("social--active");
    header.classList.add("header--active");
  } else {
    social.classList.remove("social--active");
    header.classList.remove("header--active");
  }
};
