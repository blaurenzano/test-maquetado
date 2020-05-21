// todo lo que se pueda/ tenga que cerrar
// clickeando el overlay lo agrego al array
let closeOverlayEvents = [];

const overlay = document.querySelector('.overlay');

// Abrir y cerrar menu mobile
const mmbtn = document.querySelector('#mmbtn');
const toggleMenuMobile = () => {
    let menuMobile = document.querySelector('#menuMobile');
    mmbtn.classList.toggle('opened');
    mmbtn.classList.contains('opened') ?
        (
            menuMobile.style.left = '0%',
            overlay.classList.add('opened')
        ) :
        (
            menuMobile.style.left = '-100%',
            overlay.classList.remove('opened')
        );
};
closeOverlayEvents.push(toggleMenuMobile);
// eventos del menu mobile
mmbtn.addEventListener('click', () => {
    toggleMenuMobile();
});
// recorrer items del menu mobile y cerrarlo si se clickean
const mmItems = document.querySelectorAll('#menuMobile .mm-items ul li');
mmItems.forEach(mmItem => {
    mmItem.addEventListener('click', () => {
        toggleMenuMobile();
    })
});
// cerrar menu mobile
const closeMenuMobile = () => {
    mmbtn.classList.remove('opened');
    menuMobile.style.right = '-100%';
    overlay.classList.remove('opened')
}
closeOverlayEvents.push(closeMenuMobile);


// Productos
const products = document.querySelector('.Products');
productList.map(item => {
    products.innerHTML +=
        `<div class="col product">
            <a href="#">
                <div class="imageContainer">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <h3 class="productName">
                    ${item.name}
                </h3>
                <span class="productPrice">
                    $${item.price}
                </span>
            </a>
        </div>`;
})

// Toggle filter mobile
const filters = document.querySelector('#filters');
filters.addEventListener('click', () => {
    filters.classList.toggle('active');
})



//Overlay cerrar todo
overlay.addEventListener('click', () => {
    for (let i = 0; i < closeOverlayEvents.length; i++) {
        closeOverlayEvents[i]();
    }
});