/* Este código realiza la siguiente funcion : 
Cambia de icono fa-chevron-down por fa-chevron-up al tocar la pestaña filtro en pantalla de dispositivos móviles. */ 

const $filtrosToggle = $('#filtrosToggle');

$filtrosToggle.click(function (ev) {
  ev.preventDefault();
  const $i = $filtrosToggle.find('i.fa');
  var isDown = $i.hasClass('fa-chevron-down');
  
  if (isDown) {
    $i.removeClass('fa-chevron-down').addClass('fa-chevron-up')
  } else {
    $i.removeClass('fa-chevron-up').addClass('fa-chevron-down')
  }
});