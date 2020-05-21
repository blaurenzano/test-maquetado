// todo lo que se pueda/ tenga que cerrar
// clickeando el overlay lo agrego al array
let closeOverlayEvents = [];
// mostrar el tamaño de la pantalla
const screenRes = () => {
    let w = window.innerWidth;
    let h = window.innerHeight;
    let screen = document.querySelector('#screenRes');
    screen.innerHTML = `${w} x ${h}`;
}
window.addEventListener('load', screenRes);
window.addEventListener('resize', screenRes);

const overlay = document.querySelector('.overlay');

// Respuestas del servidor
const responseFromServer = (mensaje) => {
    let RFS = document.querySelector('#responseFromServer');

    overlay.classList.add('opened');
    RFS.classList.add('opened');
    RFS.innerHTML = `
        <p>
            ${mensaje}
        </p>
        <div id="cerrarPopup" onclick="closeResponseFromServer();">
            <svg id="cerrarPopupSVG" viewBox="0 0 47.971 47.971">
                <g>
                    <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                    c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                    C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                    s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z" />
                </g>
            </svg>
        </div>
    `;
}
const closeResponseFromServer = () => {
    let RFS = document.querySelector('#responseFromServer');
    RFS.classList.remove('opened');
    RFS.innerHTML = '';
    overlay.classList.remove('opened');
}
closeOverlayEvents.push(closeResponseFromServer);

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



//Overlay cerrar todo
overlay.addEventListener('click', () => {
    for (let i = 0; i < closeOverlayEvents.length; i++) {
        closeOverlayEvents[i]();
    }
});