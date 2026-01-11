// Navegación entre secciones
document.querySelectorAll(".tab").forEach(tab => {
  tab.onclick = () => {
    document.querySelectorAll("section")
      .forEach(s => s.classList.remove("active"));

    document.getElementById(tab.dataset.tab)
      .classList.add("active");

    document.querySelectorAll("nav li")
      .forEach(l => l.classList.remove("active"));

    tab.classList.add("active");
  };
});
