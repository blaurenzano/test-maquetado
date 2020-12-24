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


const sectionCenter = document.querySelector(".section-center");


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
    filter.classList.toggle("show-filters");
  });
});

// filter products by color

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

// filter products by size

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


// sort products by price

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

// Choosing amount of columns 

const section = document.getElementById('section');
const gridBtns = document.querySelectorAll('.grid-option');

console.log(section);

gridBtns.forEach(function(btn) {
  btn.addEventListener("click", (e) => {
    const option = e.currentTarget.dataset.id;
    console.log(option)
    console.log(section.classList)
    if(option === 2) {
      section.classList.add('section-center-col-2');
      console.log(section.classList)
    } else if(option === 3) {
      section.classList.add('section-center-col-3');
      console.log(section.classList)
    } else if(option === 4) {
      section.classList.add('section-center-col-4');
      console.log(section.classList)
    }
  });
});