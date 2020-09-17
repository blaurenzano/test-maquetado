window.onload = function () {

    let menu = document.querySelector('.menu-toggle');
    let navbar = document.querySelector('.navbar');

    let category = document.querySelector('.category-title');
    let waist = document.querySelector('.waist-title');
    let colour = document.querySelector('.colour-title');
    let categoryList = document.querySelector('.category-list');
    let waistList = document.querySelector('.waist-list');
    let colourList = document.querySelector('.colour-list');

    /*====== Products from external JSON ======*/
    fetch('https://gzevallos-mp-ecommerce-nodejs.herokuapp.com/api/products')
        .then(response => response.json() )
        .then(data => {
            data.forEach(element => {
                document.querySelector('.products-wrapper').innerHTML += `
                    <div class="col-12 col-lg-4 ${element.type}" id=>
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

            let sneakers = document.querySelectorAll('.Zapatillas');
            let boots = document.querySelectorAll('.Botas');
            let shoes = document.querySelectorAll('.Zapatos');
            let sneakersList = document.querySelector('.sneakers-list');
            let bootsList = document.querySelector('.boots-list');
            let shoesList = document.querySelector('.shoes-list');

            /* Products filters */
            sneakersList.addEventListener('click', e => {

                sneakersList.classList.add('bold');
                bootsList.classList.remove('bold');
                shoesList.classList.remove('bold');

                sneakers.forEach(y => {
                    y.classList.remove('reduce')
                })
                shoes.forEach(y => {
                    y.classList.add('reduce')
                })
                boots.forEach(y => {
                    y.classList.add('reduce')
                })
            })

            bootsList.addEventListener('click', e => {

                sneakersList.classList.remove('bold');
                bootsList.classList.add('bold');
                shoesList.classList.remove('bold');

                boots.forEach(y => {
                    y.classList.remove('reduce')
                })
                sneakers.forEach(y => {
                    y.classList.add('reduce')
                })
                shoes.forEach(y => {
                    y.classList.add('reduce')
                })
            })
            
            shoesList.addEventListener('click', e => {

                sneakersList.classList.remove('bold');
                bootsList.classList.remove('bold');
                shoesList.classList.add('bold');

                shoes.forEach(y => {
                    y.classList.remove('reduce')
                })
                sneakers.forEach(y => {
                    y.classList.add('reduce')
                })
                boots.forEach(y => {
                    y.classList.add('reduce')
                })
            })
            /*====== /Products filters ======*/
            
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