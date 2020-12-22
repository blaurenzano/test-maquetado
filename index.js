import ProductsService from './data.js';

ProductsService().getData().elem;

// Functional filter products
let listItems = document.querySelectorAll('.accordion-body li');

listItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        var i = $('.accordion-body li.active');
        
        if (item.lastElementChild != null) {
            $('#products').isotope({ filter: '*' });
            $('.accordion-body li.active span').remove();
            i.removeClass('active');
        } else {
            var filter = event.currentTarget.innerHTML.toLowerCase();
            $('#products').isotope({ filter: '.' + filter });
            $('.accordion-body li.active span').remove();
            i.removeClass('active');
            item.classList.toggle('active');
            item.insertAdjacentHTML('beforeend', '<span class="remove-filter">X</span>');
        }
    });
});

// Grid selector
let selectorItems = document.querySelectorAll('.selectors li');

selectorItems.forEach((selector) => {
    selector.addEventListener('click', (event) => {
        var selectedGrid = event.currentTarget.innerHTML;
        for (let i = 0; i < selectorItems.length; i++) {
            const selectorI = selectorItems[i];
            selectorI.classList.remove('active');
        }
        selector.classList.toggle('active');

        reOrderColumns(selectedGrid);
    })
})

function reOrderColumns(columns) {
    let productItems = document.querySelectorAll('.product-item');
    productItems.forEach((productItem) => {
        productItem.classList.remove('grid-item--width1', 'grid-item--width2', 'grid-item--width3', 'grid-item--width4');
        productItem.classList.toggle('grid-item--width' + columns);
    });
    $('#products').isotope();
}

// Mobile Menu
let btnMenu = document.getElementById('bars-menu');

btnMenu.addEventListener('click', function() {
    $(this).toggleClass('open');
    document.getElementsByTagName('body')[0].classList.toggle('opened');
});

// Responsive functions
function resizeComplete() {
    var width = $('body').width();
    if (width < 752) {
        document.getElementsByTagName("header")[0].classList.remove("flex-column","justify-content-center");
        document.getElementsByTagName("header")[0].classList.add("flex-row","justify-content-between");
        document.getElementsByClassName("logo")[0].classList.add("col-6");
        $('.two-columns')[0].classList.add("active");
        reOrderColumns(2);
        
        $('body').addClass('mobile');
    } else {
        document.getElementsByTagName("header")[0].classList.remove("flex-row","justify-content-between");
        document.getElementsByTagName("header")[0].classList.add("flex-column","justify-content-center");
        document.getElementsByClassName("logo")[0].classList.remove("col-6");
        $('.three-columns')[0].classList.add("active");
        reOrderColumns(3);
        
        $('body').removeClass('mobile');
    }
}
  
$(document).ready(function(){

    // Window resize
    $( window ).resize(function() {
        var id;
        clearTimeout(id);
        id = setTimeout(resizeComplete, 300);
    });

    resizeComplete();
});