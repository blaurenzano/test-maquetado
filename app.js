window.onload = function () {

    //Hamburger Menu
    const hamburgerBtn = document.querySelector('.hamburger');
    
    hamburgerBtn.addEventListener('click', () => {

        let navbarItems = document.querySelector('.navbar__list');
        navbarItems.classList.toggle('navbar__list--show');
        hamburgerBtn.classList.toggle('hamburger__icon--active');

    });
    

}