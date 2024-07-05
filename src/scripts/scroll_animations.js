ScrollReveal().reveal(".title", {
  reset: true,
  duration: 200,
  distance: "100px",
  origin: "bottom",
});
ScrollReveal().reveal(".header", {
  duration: 200,
  distance: "100px",
  origin: "top",
});
ScrollReveal().reveal(".text-2", {
  duration: 2000,
  scale: 0.5,
});
/* ScrollReveal().reveal(".text-1", { delay: 500, duration: 1000 });
ScrollReveal().reveal(".text-3", { delay: 500, duration: 3000 }); */
ScrollReveal().reveal(".text-1", {
  delay: 500,
  easing: "steps(5)",
});
ScrollReveal().reveal(".text-3", {
  delay: 1500,
  easing: "steps(10)",
});
ScrollReveal().reveal(".widget", {
  reset: true,
  interval: 200,
  origin: "right",
  /* distance: "500px", */
});
ScrollReveal().reveal(".card_figure", {
  reset: true,
  duration: 1500,
  distance: "100px",
  origin: "left",
});
ScrollReveal().reveal(".about_right", {
  reset: true,
  duration: 2000,
  distance: "100px",
  origin: "right",
});
ScrollReveal().reveal(".items", {
  reset: true,
  interval: 200,
  origin: "right",
});
ScrollReveal().reveal(".about_right .items", { container: ".about_right" });
