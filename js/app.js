const grid = document.querySelector('#grid-product')

// -------------------MENU-MOBILE--------------------
const mainMenu = document.querySelector('.mobile-menu')
const closeMenu = document.querySelector('.mobile-menu__close')
const openMenu = document.querySelector('.header__burgerMenuContainer')
// Agregamos el evento click a los elementos necesarios para abrir y cerrar
openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)
// funcion que muestra el elemento del menu
function show() {
  mainMenu.style.display = 'flex'
  mainMenu.style.top = '0'
}
// funcion que oculta el elemento del menu
function close() {
  mainMenu.style.top = '-100%'
}
// -------------------END-MENU-MOBILE--------------------

// ---------------------CATEGORY-WRAP----------------------
const btnCategoryFilter = document.querySelectorAll(
  '.category .category__name-container'
)

for (let i = 0; i < btnCategoryFilter.length; i++) {
  btnCategoryFilter[i].addEventListener('click', function (e) {
    let btn = e.target
    if (btn.className == 'category__name-container active') {
      btn.classList.remove('active')
    } else {
      btn.classList.add('active')
    }
  })
}
// -------------------END-CATEGORY-WRAP--------------------

// -------------------COLUMNS-FILTERS----------------------
const oneColumn = document.getElementById('one')
const twoColumn = document.getElementById('two')
const threeColumn = document.getElementById('three')
const fourColumn = document.getElementById('four')

oneColumn.addEventListener('click', showOne)
twoColumn.addEventListener('click', showTwo)
threeColumn.addEventListener('click', showThree)
fourColumn.addEventListener('click', showFour)

function showOne() {
  console.log('one')
  if (grid.style.gridTemplateColumns != 'repeat(1, 260px)') {
    grid.style.gridTemplateColumns = 'repeat(1, 260px)'
  } else {
    grid.style.gridTemplateColumns = 'repeat(3, 260px)'
  }
}
function showTwo() {
  if (grid.style.gridTemplateColumns != 'repeat(2, 260px)') {
    grid.style.gridTemplateColumns = 'repeat(2, 260px)'
  } else {
    grid.style.gridTemplateColumns = 'repeat(3, 260px)'
  }
}
function showThree() {
  if (grid.style.gridTemplateColumns != 'repeat(3, 260px)') {
    grid.style.gridTemplateColumns = 'repeat(3, 260px)'
  } else {
    grid.style.gridTemplateColumns = 'repeat(3, 260px)'
  }
}
function showFour() {
  if (grid.style.gridTemplateColumns != 'repeat(4, 200px)') {
    grid.style.gridTemplateColumns = 'repeat(4, 200px)'
  } else {
    grid.style.gridTemplateColumns = 'repeat(3, 260px)'
  }
}

// -------------------END-COLUMNS-FILTERS------------------

// -------------------PETICION-DE-DATOS-JSON--------------------
function traerDatos() {
  const xhttp = new XMLHttpRequest()
  //   Realizamos peticion al archivo json
  xhttp.open('GET', '../json/productos.json', true)
  xhttp.send(false)
  //   Cuando los cambios estan listos utilizamos los datos que contiene el json
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let datos = JSON.parse(this.responseText)

      datos.forEach((producto) => {
        grid.innerHTML += `
            <article class="card">
            <figure class="card__figure">
                <img src="${producto.img}" alt="producto" class="card__image">
            </figure>
            <div class="card__body">
                <div class="card__title">${producto.title}</div>
                <div class="card__price">${producto.price}</div>
            </div>
            </article>
            `
      })
    }
  }
}
traerDatos()
// -------------------END-PETICION-DE-DATOS-JSON----------------
