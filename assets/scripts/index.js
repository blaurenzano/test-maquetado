//PARA EL ACORDEON EN FILTROS
const accordion = document.querySelectorAll(".accordion");
for (let i = 0; i < accordion.length; i++) {

  accordion[i].addEventListener("click", () => {
    accordion[i].classList.toggle("active");
    var panel = accordion[i].nextElementSibling;
    // Alterna la visibilidad del panel de filtros
    panel.style.display === "block" ? panel.style.display = "none" : panel.style.display = "block";
  });
}

//PARA FILTRAR (EJEMPLO: COLOR)

const colores = document.querySelectorAll("a[data-color-filter]");
    colores.forEach(color => 
    {
        color.addEventListener("click", () => {
            onlyShowCards("all","block");
            switch(color.dataset.colorFilter)
            {
                case "amarillo":
                    onlyShowCards("amarillo");
                    break;
                case "negro":
                    onlyShowCards("negro");
                    break;
                case "verde":
                    onlyShowCards("verde");
                    break;
                 case "azul":
                    onlyShowCards("azul");
                    break;
                case "blanco":
                    onlyShowCards("blanco");
                    break;
                case "todos":
                    onlyShowCards("all");
            }
        })
    });

    function onlyShowCards(color,style = "none")
    {
        const cardColor = document.querySelectorAll(".card:not([data-color*='"+color+"'])");
        cardColor.forEach(element => {
            element.style.display = style;            
        });
    }

//PARA LISTAR POR COLUMNAS VARIABLES
const options = document.querySelectorAll("li[data-value]");

    options.forEach(option => {
        option.addEventListener("click",() => 
        {
            switch(option.dataset.value)
            {
                case "1":
                    changeColumnCards(12)
                    break;
                case "2":
                    changeColumnCards( 6);
                    break;
                case "3":
                    changeColumnCards( 4);
                    break;
                case "4":
                    changeColumnCards( 3);
                    break;
            }
        } )
    });


function changeColumnCards(newColumnName)
{
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
    let actualColumnClassName = getColumnClass(card);
    card.classList.replace(actualColumnClassName, "col-"+newColumnName)
    });
}
function getColumnClass(div)
{
    let columnClassName = div.className.split(' ')[0];
    return columnClassName;
}

//CARGAR PRODUCTOS DESDE JSON EXTERNO

 window.fetch('data/productos.json')
 .then(response => response.json())
 .then(data => {
    contenedor = document.querySelector("#contenedor-productos");
    data.forEach(producto => {
        contenedor.innerHTML += `<div data-color="${producto.color}" class="col-6 card">
                                    <img class="product-img" src="${producto.imagen}" alt="${producto.nombre}">
                                    <span class="product-name">${producto.nombre}</span>
                                    <span data-price="${producto.precio}" class="product-price">$${producto.precio}</span>
                                </div>`
    });    
 });

//OPCIONAL ELEGIDO PERSONALMENTE: FILTRADO POR PRECIO

const searchButton = document.querySelector("#search");
searchButton.addEventListener("click", () => {
    let from = Number(document.querySelector("#from").value);
    let to = Number(document.querySelector("#to").value);
    let productPrices = document.querySelectorAll(".product-price");
    productPrices.forEach(product => {
       let productPrice = Number(product.dataset.price);
        if(productPrice>to || productPrice < from)
        {
            product.parentElement.style.display = "none";
        }        
    });
})
