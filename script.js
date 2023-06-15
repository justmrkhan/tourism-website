"use strict";

const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.hero-section, .packages-plan, .about-us, .about-us-real, .testimonial, .news-and-contact, .footer`,
  {
    delay: 50,
  }
);

// Mobile Navigation

const navOpenBtn = document.querySelector(".nav-open-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");
const header = document.querySelector(".header");
const main = document.querySelector("main");

navOpenBtn.addEventListener("click", () => {
  header.classList.add("nav-open");
  main.classList.add("nav-open");
});

navCloseBtn.addEventListener("click", () => {
  header.classList.remove("nav-open");
  main.classList.remove("nav-open");
});
