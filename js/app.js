var load_complete = function() 
{
	// Selecciona titulo de filtros y pone funcion click para mostrar el acordeon de atributos
	var filtros = document.getElementsByClassName('filters-title');
	for(var i = 0; i < filtros.length; i++)
	{
		filtros[i].addEventListener('click',maneja_filtro,false);
	}

	// Selecciona las opciones de filtros y pone funcion click para filtrar resultados
	var filtros = document.getElementsByClassName('filters-option');
	for(var i = 0; i < filtros.length; i++)
	{
		filtros[i].addEventListener('click',filtra_resultados,false);
	}

	// Selecciona los elementos que cambian el estado del menu mobile y les asigna la funcion click
	var elem_menu = document.getElementsByClassName('hidden-menu');
	for(var i = 0; i < elem_menu.length; i++)
	{
		elem_menu[i].addEventListener('click',maneja_menu_desplegable,false);
	}

	// Valida si hay informacion para armar el listado de productos
	if(typeof productos_test != 'undefined' && typeof productos_test != undefined)
	{
		muestra_productos(productos_test);
	}
	else
	{
		error_productos('No se encontraron productos');
	}

	// Funcion para poner listener a elementos que despliegan el menu de vista seleccionable para productos
	var menu_view_handler = document.getElementsByClassName('visibility-selected-container');
	for(var i = 0; i < menu_view_handler.length; i++)
	{
		menu_view_handler[i].addEventListener('click',maneja_desplegable_vista_modo,false);
	}

	// Funcion que pone listener a opcions de vista seleccionable para productos
	var view_handler = document.getElementsByClassName('visibility-options-line');
	for(var i = 0; i < view_handler.length; i++)
	{
		view_handler[i].addEventListener('click',actualiza_cantidad_vista,false);
	}
}

// Funcion de apertura/cerrado de atributos en filtro
var maneja_filtro = function(){

	var container = this.parentElement;
	if(typeof container.height_final == 'undefined' || typeof container.height_final == undefined)
	{
		// Calculo el tamaño final antes de ejecutar la animacion
		var elems = container.getElementsByClassName('filters-option');
		var h = 27 // alto baso del contenedor
		
		container.height_final = 23 * elems.length + h;
	}

	if(container.state != 'running')
	{
		if(container.classList.contains('closed'))
		{
			container.state = 'running';
			// Animacion de acordeon
			gsap.fromTo(container, {height: 27}, {duration: .8, height: container.height_final, onComplete: function(){
				container.classList.remove('closed');
				container.state = 'ok';
			}});
			console.log('cerrado')
		}
		else
		{
			container.state = 'running';
			console.log('abierto')
			container.classList.add('closed');
			gsap.fromTo(container, {height: container.height_final}, {duration: .8, height: 27, onComplete: function(){
				container.state = 'ok';
			}});
		}
	}
}
// Muestra errores en listado productos
var error_productos = function(mensaje){
	var productos_container = document.getElementById('products-list');
		productos_container.innerHTML = mensaje;
}

// Muestra listado completo productos
var muestra_productos = function(productos_test) {

	var productos_container =  document.getElementById('products-list');
		productos_container.mostrados = productos_test;
		productos_container.innerHTML = '';
	var cantidad_columnas = productos_container.getAttribute('data-vista');

	var productos = JSON.parse(productos_test);
		for(var i = 0; i < productos.length; i++)
		{
			if(productos[i].isActive === "true")
			{
				
				var clase_columnas = 'x'+cantidad_columnas;
				var card = document.createElement('div');
					if(cantidad_columnas != -1)
					{
						card.classList.add('items-card',clase_columnas);
					}
					else
					{
						card.classList.add('items-card','x3');
					}

					card.innerHTML = '<div class="item-card-img-container">\
											<div class="center-image">\
												<img src="'+productos[i].picture+'">\
											</div>\
										</div>\
										<div class="item-card-product-info">\
											<div class="item-card-product-info-margin font-small-light">'+productos[i].name+'</div>\
											<div class="font-small-light bold">$'+productos[i].price+'</div>\
										</div>';

				// Si no hay seleccionada una cantidad, es decir -1, los acomoda como entren en pantalla
				if(cantidad_columnas != -1)
				{
					if(i % cantidad_columnas == 0)
					{
						var items_row = document.createElement('div');
							items_row.classList.add('items-row');
					}
					items_row.appendChild(card);

					productos_container.appendChild(items_row);
				}
				else
					productos_container.appendChild(card);
				
			}
		}
}

var filtra_resultados = function() {

	var filtra = true;
	var productos_filtrados = [];
	var productos_completo = JSON.parse(productos_test);
	// Verifica si el elemento ya estaba filtrando los datos
	// Si es asi, lo saca y muestra todo
	// Sino saca el filtro anterior y pone los nuevos datos
	if(this.classList.contains('selected'))
	{
		filtra = false;
		this.classList.remove('selected')
	}
	else
	{
		var cont = document.getElementsByClassName('filters-container')[0];
		var elem_filtros = cont.getElementsByClassName('filters-option');
		for(var i = 0; i < elem_filtros.length; i++)
		{
			if(elem_filtros[i].classList.contains('selected'))
				elem_filtros[i].classList.remove('selected')
		}

		this.classList.add('selected')
	}

	var active_filter = document.getElementById('active_filter');
	if(filtra === true)
	{
		var caso = this.parentElement.getAttribute('data-caso');
		var parametro = this.getAttribute('data-filtro');

			active_filter.innerHTML = parametro;

			// Filtro los datos
			for(var i = 0; i < productos_completo.length; i++)
			{
				if(caso == 'size')
					parametro = parseInt(parametro);
				if(productos_completo[i][caso].includes(parametro))
				{
					productos_filtrados.push(productos_completo[i]);
				}
			}
	}
	else
	{
		active_filter.innerHTML = 'Todo';
		productos_filtrados = productos_completo;
	}

	if(productos_filtrados.length > 0)
	{
		productos_filtrados = JSON.stringify(productos_filtrados);
		muestra_productos(productos_filtrados);
	}
	else
	{
		error_productos('No se encontraron productos con el criterio especificado');
	}
}

var maneja_menu_desplegable = function(){
	var menu = document.getElementsByClassName('nav-mobile')[0];
	var status = menu.getAttribute('data-status');
	
	// Valida en que estado esta el menu
	// Si esta en running no hace nada porque esta en medio de la animacion de apertura o cierre
	// Si esta en closed, abre el menu
	// Si esta en opened, cierra el menu
	if(status != 'running')
	{
		if(status == 'closed')
		{
			menu.style.display = 'block';
			menu.setAttribute('data-status','running');
			gsap.fromTo(menu, {left: '-100%'}, {duration: .8, left: 0, onComplete: function(){
				menu.setAttribute('data-status','opened');
			}});
		}
		else
		{
			menu.setAttribute('data-status','running');
			gsap.fromTo(menu, {left: 0}, {duration: .8, left: '-100%', onComplete: function(){
				menu.setAttribute('data-status','closed');
				menu.style.display = 'none';
			}});
		}
	}
}

var maneja_desplegable_vista_modo = function() {
	var container = document.getElementsByClassName('visibility-selected-container')[0].parentElement;
	var options_container = document.getElementsByClassName('visibility-options-container')[0]
	var animated_element = container.getElementsByClassName('visibility-options')[0];
	var status = animated_element.getAttribute('data-status');
	var options = document.getElementsByClassName('visibility-options-line');

	var cantidad_opciones = 4;
	// Si es mobile son solo dos
	if(mobileCheck())
		cantidad_opciones = 3;
	var calcula_height =  cantidad_opciones * 35;

	if(status != 'running')
	{
		if(status == 'closed')
		{
			options_container.style.display = 'block';
			animated_element.setAttribute('data-status','running');
			gsap.fromTo(animated_element, {width: '0%', height: '0px'}, {duration: .6, width: '70%', height: calcula_height+'px', onComplete: function(){
				animated_element.setAttribute('data-status','opened');
				gsap.fromTo( options, {alpha:0}, { duration:.4, alpha:1, ease: "back", stagger:0.1});
			}});
		}
		else
		{
			animated_element.setAttribute('data-status','running');
			gsap.fromTo( options, {alpha:1}, { duration:.2, alpha:0, ease: "back"});
			gsap.fromTo(animated_element, {width: '70%', height: calcula_height+'px'}, {duration: .8, width: '0%', height: '0px', onComplete: function(){
				animated_element.setAttribute('data-status','closed');
				options_container.style.display = 'none';
			}});
		}
	}
}

var actualiza_cantidad_vista = function() {
	// Toma datos de la opcion elegida
	var opcion_elegida = this.getElementsByClassName('visibility-options-item')[0];
	var img = opcion_elegida.getElementsByTagName('img')[0].src;
	var nuevo_title = opcion_elegida.getAttribute('title');
	var cant = this.getAttribute('data-cant');

	// Actualiza datos en icono de opcion elegida
	var cont_selected = document.getElementsByClassName('visibility-selected')[0];
		cont_selected.setAttribute('title',nuevo_title);
		cont_selected.getElementsByTagName('img')[0].src = img;

	// Actualiza cantidad en la vista de productos y la refresca
	var product_list = document.getElementById('products-list');
		product_list.setAttribute('data-vista',cant);
		productos_test = product_list.mostrados;

	maneja_desplegable_vista_modo();
	muestra_productos(productos_test);
}

/* Funcion para verificar mobile */
function mobileCheck(){
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino|android|ipad|playbook|silk/i.test(navigator.userAgent||navigator.vendor||window.opera)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test((navigator.userAgent||navigator.vendor||window.opera).substr(0,4)))
}