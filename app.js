window.onload = function () {

    //Hamburger Menu
    const hamburgerBtn = document.querySelector('.hamburger');
    
    hamburgerBtn.addEventListener('click', () => {

        let navbarItems = document.querySelector('.navbar__list');
        navbarItems.classList.toggle('navbar__list--show');
        hamburgerBtn.classList.toggle('hamburger__icon--active');

    });
    
    //Acordion Categories
    const accordion = document.querySelectorAll('.aside__category');

    for (var i = 0; i < accordion.length; i++) {

        accordion[i].onclick = function () {
            this.classList.toggle('active');

            let aside__accordion  = this.nextElementSibling;

            if (aside__accordion.style.maxHeight) {
                aside__accordion.style.maxHeight = null;
            }
            else {
                aside__accordion.style.maxHeight = aside__accordion.scrollHeight + 'px';
            }
        }
    }


}