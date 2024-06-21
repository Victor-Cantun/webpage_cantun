window.addEventListener("scroll", function () {
  var header = document.getElementById("header");
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 50) {
    //header.style.backgroundColor = "#181e2c2f"; // Cambiar color de fondo al hacer scroll
  } else {
    // header.style.backgroundColor = "green"; // Volver al color original
  }
});
