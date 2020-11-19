
//PARA EL ACORDEON EN FILTROS
const accordion = document.querySelectorAll(".accordion");
for (let i = 0; i < accordion.length; i++) {

  accordion[i].addEventListener("click", () => {
    accordion[i].classList.toggle("active");
    var panel = accordion[i].nextElementSibling;
    // Alterna la visibilidad del panel de filtros
    panel.style.display === "block" ? panel.style.display = "none" : panel.style.display = "block";
  });
}

//PARA LISTAR POR COLUMNAS VARIABLES
const options = document.querySelectorAll("li[data-value]");
const cards = document.querySelectorAll(".card");

    options.forEach(option => {
        option.addEventListener("click",() => {
            switch(option.dataset.value){
                case "1":
                    changeColumnCards(cards,12)
                    break;
                case "2":
                    changeColumnCards(cards, 6);
                    break;
                case "3":
                    changeColumnCards(cards, 4);
                    break;
                case "4":
                    changeColumnCards(cards, 3);
                    break;
            }
        } )
    });


function changeColumnCards(cards, newColumnName)
{
    cards.forEach(card => {
    let actualColumnClassName = getColumnClass(card);
    card.classList.replace(actualColumnClassName, "col-"+newColumnName)
    });
}
function getColumnClass(div)
{
    let columnClassName = div.className.split(' ')[0];
    return columnClassName;
}


