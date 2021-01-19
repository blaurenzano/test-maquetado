/* ---- Selectores ---- */

// Responsive Menu
const menu = document.querySelector(".header__nav");
const burgerButton = document.querySelector(".header__burgerbutton");

// Insertar Productos
const productosContenedor = document.querySelector(".main__productos");

// Filtro
const atributoFiltro = document.querySelectorAll(".filtro__atributo");

// Accordion
const accordionButton = document.querySelectorAll(".main__aside--button");

/* ---- Listeners ---- */

// Responsive Menu
burgerButton.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menu.addEventListener("click", function () {
  menu.classList.remove("active");
});

// Insertar Productos
document.addEventListener("DOMContentLoaded", () => {
  obtenerListaProductos();
});

// Filtro
atributoFiltro.forEach((atributo) => {
  atributo.addEventListener("click", filtrarProductos);
});

// Accordion
accordionButton.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(button);
    button.classList.toggle("main__aside--button--active");

    const accordionContenido = button.nextElementSibling;
    if (button.classList.contains("main__aside--button--active")) {
      accordionContenido.style.maxHeight =
        accordionContenido.scrollHeight + "px";
    } else {
      accordionContenido.style.maxHeight = 0;
    }
  });
});

/* ---- Funciones ---- */

// Insertar Productos
function obtenerListaProductos() {
  fetch("./app/stock.json")
    .then((ans) => ans.json())
    .then((productos) => {
      cargarListaProductos(productos);
    });
}

function cargarListaProductos(productos) {
  limpiarProductos();

  productos.forEach((producto) => {
    const { img, modelo, precio } = producto;
    productosContenedor.innerHTML += `
    <div class="main__productos--card">
      <a href="#"><img src="${img}"></a>
      <p> ${modelo}</p>
      <h4>$${precio}</h4>
    </div>
    `;
  });
}

function filtrarProductos(e) {
  e.preventDefault();

  const atributo = e.target.textContent.toLocaleLowerCase();

  fetch("./app/stock.json")
    .then((ans) => ans.json())
    .then((productos) => {
      const resultado = productos.filter(
        (producto) =>
          producto.categoria.toLocaleLowerCase().includes(atributo) ||
          producto.color.toLocaleLowerCase().includes(atributo) ||
          producto.talle.toLocaleLowerCase().includes(atributo)
      );

      console.log(resultado);
      // console.log(producto);

      if (resultado != 0) {
        limpiarProductos();
        cargarListaProductos(resultado);
      } else {
        productosContenedor.innerHTML = `
        <p> No se encontraron productos relacionados a su busqueda </p>
        `;
      }
    });
}

function limpiarProductos() {
  productosContenedor.innerHTML = "";
}
