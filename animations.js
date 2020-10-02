const navSlide = () =>{
    const burguer = document.querySelector('.burguer')
    const nav = document.querySelector('.nav-links')
    const navLinks = document.querySelectorAll('.nav-links li')

    burguer.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')
    })

    navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +1}s`
    })

}

navSlide()