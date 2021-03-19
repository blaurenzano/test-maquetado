const enlacesHeader = document.querySelector('.nav-mobile__link');
const icon = document.querySelector('#iconNav');
const hamburguer = document.querySelector('.header__logo');

icon.addEventListener('click', function(){
    
    enlacesHeader.classList.toggle('navTwo');
})

window.addEventListener('scroll', function(){
    enlacesHeader.classList.remove('navTwo');
})

enlacesHeader.addEventListener('click', function(){
    enlacesHeader.classList.remove('navTwo');
})