document.addEventListener('click', function (event) {

    if (!event.target.classList.contains('accordion-toggle')) return;
    
    var content = document.querySelector(event.target.hash);
    if (!content) return;
        
    event.preventDefault();
    
    if (content.classList.contains('active')) {
      content.classList.remove('active');
      return;
    }
    
    var accordions = document.querySelectorAll('.accordion-content.active');
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].classList.remove('active');
    }
    
    content.classList.toggle('active');
})

const showMenu = () => {
    let headerNav = document.getElementById('header-nav');
    headerNav.classList.toggle('header-nav-open');
};