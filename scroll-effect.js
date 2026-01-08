// Archivo: scroll-effect.js

let lastScrollTop = 0; // Posición del scroll anterior

window.addEventListener("scroll", function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Si el scroll es hacia abajo, ocultamos la barra
    document.querySelector("header").style.top = "-70px";  // -70px oculta la barra (igual a la altura de la barra)
  } else {
    // Si el scroll es hacia arriba, mostramos la barra
    document.querySelector("header").style.top = "0";  // Muestra la barra en la parte superior
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Evita valores negativos de scroll
});
