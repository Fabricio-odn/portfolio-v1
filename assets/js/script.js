window.sr = ScrollReveal({ reset: true });

sr.reveal(".intro", {
  origin: "bottom",
  distance: "50px",
  duration: 2000,
});
sr.reveal(".about", {
  origin: "top",
  distance: "50px",
  duration: 2000,
});
sr.reveal(".project", { origin: "right", distance: "200px", duration: 2000 });
