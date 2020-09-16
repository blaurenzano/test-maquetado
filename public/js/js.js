window.onload = function () {

    let menu = document.querySelector('.menu-toggle');
    let navbar = document.querySelector('.navbar');
    let category = document.querySelector('.category-title');
    let waist = document.querySelector('.waist-title');
    let colour = document.querySelector('.colour-title');
    let categoryList = document.querySelector('.category');
    let waistList = document.querySelector('.waist');
    let colourList = document.querySelector('.colour');


    /*====== Products from external JSON ======*/
    fetch('https://gzevallos-mp-ecommerce-nodejs.herokuapp.com/api/products')
        .then(response => response.json() )
        .then(data => {
            data.forEach(element => {
                document.querySelector('.products-wrapper').innerHTML += `
                    <div class="col-12 col-lg-4 ${element.type}">
                        <section class="product-box">
                            <figure class="product-box_image">
                                <img src="public/img/${element.image}" alt="${element.name}">
                            </figure>
                            <article class="product-box_data">
                                <span>${element.name}</span>
                                <p>$${element.price}</p>
                            </article>
                        </section>
                    </div>

                `
            });
        })
    /*====== /Products from external JSON ======*/

    /*====== Mobile menu ======*/
    menu.addEventListener('click', e => {
        navbar.classList.toggle('navbar')
        navbar.classList.toggle('navbar-on')
    })
    /*====== /Mobile menu ======*/

    /*====== Filters ======*/
    category.addEventListener('click', e => {
    
        categoryList.classList.toggle('reduce');

        let classContains = categoryList.classList.contains('reduce');

        if (classContains) {
            category.innerHTML = "+";
        } else {
            category.innerHTML = "-";
        }
    })

    waist.addEventListener('click', e => {
        waistList.classList.toggle('reduce')

        let classContains = waistList.classList.contains('reduce');

        if (classContains) {
            waist.innerHTML = "+";
        } else {
            waist.innerHTML = "-";
        }
    })

    colour.addEventListener('click', e => {
        colourList.classList.toggle('reduce')

        let classContains = colourList.classList.contains('reduce');

        if (classContains) {
            colour.innerHTML = "+";
        } else {
            colour.innerHTML = "-";
        }
    })
    /*====== /Filters ======*/

}