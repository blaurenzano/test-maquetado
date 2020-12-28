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
