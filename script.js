// =========================================================
// OBARA — FADE-IN EFFECT
// This makes text and cards gently fade in as you scroll down.
// You don't need to change anything in this file.
// =========================================================

// 1. Pick every block we want to fade in
var blocks = document.querySelectorAll(".hero > *, section h2, section > p, .divider, .card, .story > *, section .button, .contact-form");

// 2. Watch the screen: when a block comes into view, add "show" so it fades in
var watcher = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      watcher.unobserve(entry.target);   // only fade in once
    }
  });
}, { threshold: 0.15 });

// 3. Start each block hidden, with a tiny delay between neighbours
blocks.forEach(function (block, i) {
  block.classList.add("fade");
  block.style.transitionDelay = (i % 3) * 0.12 + "s";
  watcher.observe(block);
});
