// Adding sidebar functionality 

const toggle = document.querySelector(".sidebar-toggle");
const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});

// fetching data from json 

let products;

async function getProducts(){
  try{
    products = await fetch('./products.json')
    products = await products.json()
    displayMenuItems(products)
  }
  catch(err){
    console.log(err);
  }

}

getProducts()

// populating screen with products 

const sectionCenter = document.querySelector(".section-center");


function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
      <div class="box-limit">
        <img src=${item.img} class="photo" alt=${item.title} />
      </div>
        <div class="item-info">
          
            <h4 class="product-title">${item.title}</h4>
            <h4 class="price">${item.price}</h4>
        </div>
    </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}

// Adding acordeon functionality to filters, i select the btns and then loop 
  // through them to add an event listener

const btns = document.querySelectorAll(".filter-btn");

btns.forEach(function(btn) {
  btn.addEventListener("click", (e) => {
    const filter = e.currentTarget.parentElement.parentElement;
    filter.classList.toggle("show-filters");
  });
});

// filter products by color functionality

const filterColorBtns = document.querySelectorAll(".filter-product-color-btn");

filterColorBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const color = e.currentTarget.dataset.id;
    const menuColor = products.filter(function (menuItem) {
      if (menuItem.color === color) {
        return menuItem;
      }
    });
    if (color === `todos`) {
      displayMenuItems(products);
    } else {
      displayMenuItems(menuColor);
    }
  });
});

// filter products by size functionality

const filterSizeBtns = document.querySelectorAll(".filter-product-size-btn");

filterSizeBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const size = e.currentTarget.dataset.id;
    const menuColor = products.filter(function (menuItem) {
      if (menuItem.size === size) {
        return menuItem;
      }
    });
    if (size === `todos`) {
      displayMenuItems(products)
    } else {
      displayMenuItems(menuColor);
    }
  });
});


// sort products by price functionality

const filterSortBtns = document.querySelectorAll(".filter-product-sort-btn");

filterSortBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const sort = e.currentTarget.dataset.id;
    const menuSorted = products.sort(function (a , b) {
      if (sort === 'lower'){
        if (a.price > b.price) {
          return 1;
        } else {
          return -1;
        }
      } else if (sort === 'higher'){
          if (a.price < b.price) {
            return 1;
          } else {
            return -1;
          }
      }
    });
    displayMenuItems(menuSorted);
  });
});

// made with love by Gustavo Madrid 