//Menu
var menu = document.querySelector('.hamburger');

function toggleMenu(event){
event.preventDefault();
this.classList.toggle('is-active');
document.querySelector( ".navigation" ).classList.toggle("is-active");
}

menu.addEventListener('click', toggleMenu, false);



//Accordion
const accordion = document.querySelectorAll(".accordion");

accordion.forEach(element => {
    element.addEventListener('click', ()=>{
        const list = element.nextElementSibling;
        list.style.display === "block" ? list.style.display = "none" : list.style.display = "block";
    })

    
});

