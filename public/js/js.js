window.onload = function () {
    let menu = document.querySelector('.menu-toggle');
    let navbar = document.querySelector('.navbar');
    let category = document.querySelector('.category-title');
    let waist = document.querySelector('.waist-title');
    let colour = document.querySelector('.colour-title');
    let categoryList = document.querySelector('.category');
    let waistList = document.querySelector('.waist');
    let colourList = document.querySelector('.colour');
    


    menu.addEventListener('click', e => {
        navbar.classList.toggle('navbar')
        navbar.classList.toggle('navbar-on')
    })

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


}