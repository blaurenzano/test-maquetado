const acc = document.querySelectorAll(".accordion");
console.log(acc);
for (let i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", () => {
    console.log("Click")
    acc[i].classList.toggle("active");

    var panel = acc[i].nextElementSibling;
    // Alterna la visibilidad del panel de filtros
    panel.style.display === "block" ? panel.style.display = "none" : panel.style.display = "block";
  });
}