const productsContainer = document.querySelector('.products-container')

let products = [];

// ---------------------------------------
// --- Obtiene data productos
// ---------------------------------------
$.ajax({
    url: 'db.json',
    success: (data) => {
        data.forEach((producto) => {
            products.push(producto)
        });
        loadProducts()
    },
    error: () => {
        console.log("Error");
    }
});

// ---------------------------------------
// --- Muestra todos los productos
// ---------------------------------------
const loadProducts = () => {
    products.forEach((product) => {
        createCard(product);
    });
};

// ---------------------------------------
// --- Crea cada card 
// ---------------------------------------
const createCard = (product) => {
    const article = document.createElement('article');
        article.setAttribute('class', 'product');
        article.innerHTML = `
        <a href="#">
            <img src=${product.img} alt="product-img">
            <div class="product__info">
                <p class="product__name">${product.producto}</p>
                <p class="product__price">${product.valor}</p>
            </div>
        </a>
        `;
    
        productsContainer.appendChild(article);
};

// ---------------------------------------
// --- Filtra desde el menu izquierdo (desktop)
// ---------------------------------------
let filterType = document.querySelectorAll(".filterType").forEach(btn => {
    btn.addEventListener('click', () => {
        type = btn.innerText
        filter();
    })
  });

const filter = () => {
    productsContainer.innerHTML = '';
    products.filter(elem => elem.tipo == type).forEach((product) => {
        createCard(product);
    });
};
