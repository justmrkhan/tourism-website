"use strict";

const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(`header, .hero-section, .about-us, .packages-plan, .about-us`, {
  delay: 50,
});
