
//      Menu Hamburguesa Responsive

const menu = document.querySelector('.header__nav');
const burgerButton = document.querySelector('.header__burgerbutton');
burgerButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

menu.addEventListener('click', function() {
    menu.classList.remove('active');
});
