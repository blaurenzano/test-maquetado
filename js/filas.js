let btnUnaFila = document.getElementById('unafila');
let btnDosFilas = document.getElementById('dosfilas');
let btnTresFilas = document.getElementById('tresfilas');
let btnCuatroFilas = document.getElementById('cuatrofilas'); 
let productos = document.getElementsByTagName('article');
btnUnaFila.addEventListener('click', function(event){
    event.preventDefault();
    for (let i = 0; i <= productos.length; i++) {
        if (typeof productos[i] !== "undefined") {
        productos[i].setAttribute('class', '-nuevoproducto');
        }    
    }
});
btnDosFilas.addEventListener('click', function(event){
    event.preventDefault();
        for (let i = 0; i <= productos.length; i++) {
            if (typeof productos[i] !== "undefined") {
            productos[i].setAttribute('class', '-nuevoproducto-dosfilas');
            } 
        }

});
btnTresFilas.addEventListener('click', function(event){
    event.preventDefault();
    for (let i = 0; i <= productos.length; i++) {
        if (typeof productos[i] !== "undefined") {
        productos[i].setAttribute('class', '-nuevoproducto');
        }
    } 
});
btnCuatroFilas.addEventListener('click', function(event){
    event.preventDefault();
    for (let i = 0; i <= productos.length; i++) {
        if (typeof productos[i] !== "undefined") {
        productos[i].setAttribute('class', '-nuevoproducto-cuatrofilas');
        }
    } 
});