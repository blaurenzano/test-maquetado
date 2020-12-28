// -------------------PETICION-DE-DATOS-JSON--------------------
function traerDatos() {
  //   console.log('dentro de funcion')

  const xhttp = new XMLHttpRequest()

  xhttp.open('GET', '../json/productos.json', true)
  xhttp.send()

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      //   console.log(this.responseText)
      let datos = JSON.parse(this.responseText)
      console.log(datos)

      let res = document.querySelector('#grid-product')
      res.innerHTML = ''

      datos.forEach((producto) => {
        res.innerHTML += `
        <article class="card tres-seis">
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
// -------------------END-PETICION-DE-DATOS-JSON----------------

// -------------------MENU-MOBILE--------------------
const mainMenu = document.querySelector('.mobile-menu')
const closeMenu = document.querySelector('.mobile-menu__close')
const openMenu = document.querySelector('.header__burgerMenuContainer')

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function show() {
  mainMenu.style.display = 'flex'
  mainMenu.style.top = '0'
}
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

const grid = document.getElementById('grid-product')

oneColumn.addEventListener('click', showOne)
twoColumn.addEventListener('click', showTwo)
threeColumn.addEventListener('click', showThree)
fourColumn.addEventListener('click', showFour)

function showOne() {
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
