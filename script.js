const toggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

const products = [
  {
    img: "./assets/productos/zapatilla_1.jpg",
    title: "Zapatilla 1-XFK",
    category: "zapatillas",
    price: "$5000",
  },
  {
    img: "./assets/productos/zapatilla_2.jpg",
    title: "Zapatilla 2000-X",
    category: "zapatillas",
    price: "$9800",
  },
  {
    img: "./assets/productos/zapatilla_3.jpg",
    title: "Zapatilla 3 Run",
    category: "zapatillas",
    price: "$6500",
  },
  {
    img: "./assets/productos/zapatilla_3.jpg",
    title: "Zapatilla 3 Run",
    category: "zapatillas",
    price: "$6500",
  },
  {
    img: "./assets/productos/zapatilla_1.jpg",
    title: "Zapatilla 1-XFK",
    category: "zapatillas",
    price: "$5000",
  },
  {
    img: "./assets/productos/zapatilla_2.jpg",
    title: "Zapatilla 2000-X",
    category: "zapatillas",
    price: "$9800",
  },
  {
    img: "./assets/productos/zapatilla_1.jpg",
    title: "Zapatilla 1-XFK",
    category: "zapatillas",
    price: "$5000",
  },
  {
    img: "./assets/productos/zapatilla_2.jpg",
    title: "Zapatilla 2000-X",
    category: "zapatillas",
    price: "$9800",
  },
  {
    img: "./assets/productos/zapatilla_3.jpg",
    title: "Zapatilla 3 Run",
    category: "zapatillas",
    price: "$6500",
  },
  {
    img: "./assets/productos/zapatilla_2.jpg",
    title: "Zapatilla 2000-X",
    category: "zapatillas",
    price: "$9800",
  },
  {
    img: "./assets/productos/zapatilla_3.jpg",
    title: "Zapatilla 3 Run",
    category: "zapatillas",
    price: "$6500",
  },
  {
    img: "./assets/productos/zapatilla_1.jpg",
    title: "Zapatilla 1-XFK",
    category: "zapatillas",
    price: "$5000",
  },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(products);
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
        <img src=${item.img} class="photo" alt=${item.title} />
        <div class="item-info">
          
            <h4 class="product-title">${item.title}</h4>
            <h4 class="price">${item.price}</h4>
        </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

const btns = document.querySelectorAll(".filter-btn");

btns.forEach(function(btn) {
  btn.addEventListener("click", (e) => {
    const filter = e.currentTarget.parentElement.parentElement;
    console.log(filter);
    filter.classList.toggle("show-filters");
  });
});