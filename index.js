//INIT DOM
document.addEventListener('DOMContentLoaded', initDOM());

//XML HTTP REQUIEST
function getData(url) {
    const res = new XMLHttpRequest();
    res.open("get", url, false);
    res.send(null)
    return res.responseText;
}

function data(shoe){
    //Shoe Container
    const shoeContainer = document.querySelector('.shoe-container');
    const shoeBox = document.createElement('div');
    shoeBox.classList.add('shoe-box');
    //Image box
    const shoeImage = document.createElement('div');
    shoeImage.classList.add('shoe-image');
        
    const image = document.createElement('img');
    image.setAttribute('src', `./assets/productos/${shoe.image}`)
        
    //Append image elements
    shoeImage.appendChild(image);
    shoeBox.appendChild(shoeImage);
        
    //Description box
    const shoeDescription = document.createElement('div');
    shoeDescription.classList.add('shoe-description');
        
    const shoeModel = document.createElement('span');
    shoeModel.innerText = shoe.description;
    const price = document.createElement('span');
    price.innerHTML = `$${shoe.price}`;
    const strong = document.createElement('strong');
        
    //Append description elements
    strong.appendChild(price);
    shoeDescription.appendChild(shoeModel);
    shoeDescription.appendChild(strong);
    shoeBox.appendChild(shoeDescription);
        
    //Append all elements
    shoeContainer.appendChild(shoeBox)
}

function initDOM() {
    const allShoes = JSON.parse(getData('/api/shoes'))
    const container = document.querySelector('.container');
    const sale = document.querySelector('#sale');
    const body = document.querySelector('.body-container');
    body.style.display = 'none';
    body.style.opacity = '0';
    body.style.transform = "translateY(100px)"
    sale.addEventListener('click', () => {
        allShoes.forEach(shoe => {data(shoe)});
        body.style.display = 'grid';
        setTimeout(function(){
            body.style.opacity = '1';
            body.style.transform = "translateY(0px)"
        }, 400)
        container.classList.add('d-none')
        links.classList.toggle('navbar-links-on');
    });

    //Welcome
    const welcome = document.querySelector('.welcome');
    const welcomeCont = document.querySelector('.welcome-container');
    if(window.innerHeight >= 1){
        welcome.classList.toggle('welcome-on');
        welcomeCont.style.width = "100%"
    }
    
    //Burger button
    const burger = document.querySelector('#burger');
    const links = document.querySelector('#links');
    burger.addEventListener('click', () => {
        links.classList.toggle('navbar-links-on');
        if(asideCont.classList.value === 'aside-container aside-container-on'){
            asideCont.classList.remove('aside-container-on');
        }
    })

    //Category Li
    const ctg = document.createElement('li');
    const a = document.createElement('a');
    const asideCont = document.querySelector('.aside-container');
    ctg.classList.add('category')
    a.innerText = 'Categorias'
    a.setAttribute('href', '#');
    ctg.appendChild(a);
    links.appendChild(ctg);
    ctg.addEventListener('click', () => {
        asideCont.classList.toggle('aside-container-on');
    })

    //Cart mobile
    const navSvg = document.querySelector('.navbar-svg');
    const navCart = document.createElement('div');
    const cart = document.createElement('img');
    cart.setAttribute('src', './assets/iconos/shopping-cart-solid.svg');
    navCart.classList.add('navbar-cart');
    navCart.appendChild(cart);
    navSvg.appendChild(navCart);

    //Accordion Ul
    const cat = document.querySelector('#category');
    const sz = document.querySelector('#size');
    const cl = document.querySelector('#color');
    const catList = document.querySelector('#category-list');
    const szList = document.querySelector('#size-list');
    const clList = document.querySelector('#color-list');
    const catPlus = document.querySelector('#cat-plus');
    const szPlus = document.querySelector('#sz-plus');
    const clPlus = document.querySelector('#cl-plus');
    catList.classList.add('cat-list');
    szList.classList.add('sz-list');
    clList.classList.add('cl-list');

    cat.addEventListener('click', () => {
        catList.classList.toggle('cat-list-on');
        if(catList.className === 'cat-list cat-list-on'){
            catPlus.innerHTML = '&#xf068;'
        }else{
            catPlus.innerHTML = '&#xf067;'
        }
    });

    sz.addEventListener('click', () => {
        szList.classList.toggle('sz-list-on');
        if(szList.className === 'sz-list sz-list-on'){
            szPlus.innerHTML = '&#xf068;'
        }else{
            szPlus.innerHTML = '&#xf067;'
        }
    });

    cl.addEventListener('click', () => {
        clList.classList.toggle('cl-list-on');
        if(clList.className === 'cl-list cl-list-on'){
            clPlus.innerHTML = '&#xf068;'
        }else{
            clPlus.innerHTML = '&#xf067;'
        }
    });
}


