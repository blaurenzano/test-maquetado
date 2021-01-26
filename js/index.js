//NavbarContainer selector
const navbarContainer = document.querySelector(".header__nav");
//Hamburger Icon selector
const btnNavbar = document.querySelector(".icon_bars");

//Filters object
var filters = {
    type:[],
    waist:[],
    color:[]
}

//Set display style to Navbar
btnNavbar.onclick = () => {
    document.querySelector(".icon_profile").classList.toggle('header__icon--hidden');
    document.querySelector(".icon_search").classList.toggle('header__icon--hidden') ;
    navbarContainer.classList.toggle('header__nav--show');
}


//Toggle between add  or remove element to array list
function toggleArrayFilters(array, value) {
    let index = array.indexOf(value);

    if (index === -1) {
        array.push(value);
    } else {
        array.splice(index, 1);
    }
}

//Events Listener
document.addEventListener('click', (e) => {
     //Accordion
    if(e.target.classList.contains('filter__title'))
        e.target.parentNode.querySelector("ul").classList.toggle('filter__ul--show');

    //Apply Filters
    if(e.target.classList.contains('filter__li')){
       // document.querySelectorAll('.section__producto').forEach(e=>e.classList.add('section__producto--hidden'));
           
        let filterType = e.target.dataset.filtertype;
        let filter = e.target.dataset.filter;
        switch(filterType){
            case "type":
                toggleArrayFilters(filters.type, filter);
                break;
            case "waist":
                toggleArrayFilters(filters.waist, filter);
                break;
            case "color":
                toggleArrayFilters(filters.color, filter);
                break;
        }
        //Add Modifier to filter
        e.target.classList.toggle('filter__li--selected');
        //document.querySelectorAll(`[data-type*="${e.target.dataset.filter}"]`).forEach(e => {
          //  e.classList.toggle('section__producto--hidden');
        //});
        renderProductsWithFilters();
    }
});

/// ---

let products = [];

function renderProductsWithFilters() {
    let filtered = products
        .filter(p =>
            (filters.color.length === 0 || filters.color.includes(p.color)) &&
            (filters.waist.length === 0 || filters.waist.includes(p.waist)) &&
            (filters.type.length === 0 || filters.type.includes(p.type))
        );

    let html = '';
    filtered.forEach(e => {
        html += `
            <div class="section__producto" data-type="${e.type}" data-waist="${e.waist}" data-color="${e.color}">
                <img class="producto__img" src="${e.img}" alt="${e.name} Image">	
                <h1 class="producto__h1" data-name="${e.name}">${e.name}</h1>
                <h2 class="producto__h2" data-price="${e.price}">$${e.price}</h2>
            </div>
        `;
    });
    document.querySelector(".section__productos").innerHTML = html;
}

// initial load
fetch("/js/products.json").then(r => r.json()).then(data => {
    products = data;
    renderProductsWithFilters();
});

gridRowMobile = {
    rows:1,
    width: 331
};

gridRowDesktop = {
    rows:3,
    width: 730
}

document.querySelector(".grid__mobile").onclick = () => {
    gridRowMobile.rows = gridRowMobile.rows == 1 ? 2 : 1; 
    var elements = document.getElementsByClassName("section__producto");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.width = `${gridRowMobile.width / gridRowMobile.rows}px`;
    }
}

document.querySelector(".grid__desktop").onclick = () => {
    console.log('some');
    switch(gridRowDesktop.rows){
        case 2:
            gridRowDesktop.rows = 3;
            break;
        case 3:
            gridRowDesktop.rows = 4;
            break;
        case 4:
            gridRowDesktop.rows = 2;
            break;
    }
    var elements = document.getElementsByClassName("section__producto");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.width = `${gridRowDesktop.width / gridRowDesktop.rows}px`;
    }
}