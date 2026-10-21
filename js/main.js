/* Baber Tyres Corporation — Shared site behaviour */

document.addEventListener("DOMContentLoaded", () => {
  /* Mobile nav toggle */
  const navToggle = document.querySelector(".nav-toggle");
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      document.body.classList.toggle("menu-open");
    });
  }

  /* Close mobile menu when a link is clicked */
  document.querySelectorAll(".mobile-menu a").forEach((a) => {
    a.addEventListener("click", () => document.body.classList.remove("menu-open"));
  });

  /* Scroll reveal animations */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("in"));
  }

  /* Contact form (static demo — opens WhatsApp with the message) */
  const contactForm = document.getElementById("contact-form");
  if (contactForm && typeof waLink === "function") {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("cf-name").value.trim();
      const phone = document.getElementById("cf-phone").value.trim();
      const message = document.getElementById("cf-message").value.trim();
      const text = `Hello Baber Tyres Corporation, my name is ${name} (${phone}). ${message}`;
      window.open(waLink(text), "_blank");
    });
  }
});
