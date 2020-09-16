async function getProducts() {
  var request = await fetch("https://run.mocky.io/v3/86889022-aa12-4640-891f-ee12757bcf00");
  var result = await request.json();
  return result;
}
var menuIsOpen = false;
var GlobaProducts = [];
var GlobalProductsFiltered = [];
var filters = {
  typeShoes: [
    { type: "zapatillas", selected: false },
    { type: "zapatos", selected: false },
    { type: "botas", selected: false },
    { type: "sandalias", selected: false },
    { type: "pantuflas", selected: false },
  ],
  talle: [
    { type: "talle32", selected: false },
    { type: "talle35", selected: false },
    { type: "talle36", selected: false },
    { type: "talle38", selected: false },
    { type: "talle40", selected: false },
    { type: "talle42", selected: false },
    { type: "talle44", selected: false },
  ],
  color: [
    { type: "amarillo", selected: false },
    { type: "negro", selected: false },
    { type: "verde", selected: false },
    { type: "azul", selected: false },
    { type: "blanco", selected: false },
  ],
};

getProducts().then(function (response) {
  GlobaProducts = response.data;
  filterProducts();
  createProducts();
});

function createCardProduct(name, price, image) {
  return `<div class="card">
        <a class="product">
          <img src="${image}" alt="zapatilla_1" />
          <p>${name}<br><span>${price}</span></br></p>  
        </a>
      </div>`;
}

function createProducts() {
  var producContainer = $("#product-container");
  producContainer.html("");
  for (i = 0; i < GlobalProductsFiltered.length; i++) {
    var product = createCardProduct(GlobalProductsFiltered[i].name, GlobalProductsFiltered[i].price, GlobalProductsFiltered[i].image);
    producContainer.append(product);
  }
}

function filterProducts() {
  GlobalProductsFiltered = GlobaProducts.filter(function (product) {
    var choose = "";
    Object.keys(filters).forEach(function (currentFilter) {
      filters[currentFilter].forEach((element) => {
        if (element.selected === true && element.type === product.category.toLowerCase()) {
          choose = product;
        }
        if (element.selected === true && element.type === `talle${product.talle}`) {
          choose = product;
        }
        if (element.selected === true && element.type === product.color.toLowerCase()) {
          choose = product;
        }
      });
    });
    return choose;
  });

  if (detectUnselection() === true) {
    GlobalProductsFiltered = GlobaProducts;
  }
}

function detectUnselection() {
  var someOneIsSelected = false;
  Object.keys(filters).forEach(function (currentFilter) {
    filters[currentFilter].forEach((element) => {
      if (element.selected === true) {
        someOneIsSelected = true;
      }
    });
  });
  return !someOneIsSelected;
}

function saludar() {
  console.log("Imprime un saludo");
}

// Document Ready Scripts
$(function () {
  $("#tooglemenu").click(function () {
    $("#mainmenu").toggleClass("show");
  });

  $("#accordion").accordion();

  $(".toggles").controlgroup({
    direction: "vertical",
  });

  $(".toggle").on("change", handleToggle);

  function handleToggle(e) {
    var target = $(e.target);
    Object.keys(filters).forEach(function (currentFilter) {
      filters[currentFilter].forEach((element, index) => {
        if (element.type === e.target.name) {
          filters[currentFilter][index].selected = target.is(":checked");
        }
      });
    });

    filterProducts();
    createProducts();
  }
});
