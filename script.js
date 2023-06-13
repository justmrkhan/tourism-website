"use strict";

const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `header, .hero-section, .packages-plan, .about-us, .testimonial, .newsletter-signup, .footer`,
  {
    delay: 50,
  }
);
