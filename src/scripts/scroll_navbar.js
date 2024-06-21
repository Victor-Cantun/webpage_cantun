document.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;

  // Obtener todas las secciones
  var sections = document.querySelectorAll("section");

  // Iterar sobre las secciones para verificar su posición
  sections.forEach(function (section) {
    var top = section.offsetTop;
    var height = section.offsetHeight;

    if (scrollPosition >= top && scrollPosition < top + height) {
      var id = section.getAttribute("id");

      // Remover la clase 'active' de todos los enlaces
      document.querySelectorAll("nav ul li a").forEach(function (link) {
        link.classList.remove("active");
      });

      // Agregar la clase 'active' al enlace correspondiente
      document.querySelector('nav ul li a[href="#' + id + '"]').classList.add("active");
    }
  });
});
