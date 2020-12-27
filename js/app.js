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
