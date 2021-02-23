window.addEventListener("DOMContentLoaded", () => {
	
	// Deshabilitar las funciones por defectos de las anclas, para desarrollo
	const anclas = document.querySelectorAll("a");
	anclas.preventDefault;

	// Funcionalidad al botón del menú
	const botonMenu = document.querySelector("#boton_menu");
	const listadoMenu = document.querySelector("#header_nav");
	listadoMenu.classList.add("cerrado");
	botonMenu.addEventListener("click", (ev) => {
		{
			ev.preventDefault();

			if( listadoMenu.classList.contains("abierto") )
			{
				listadoMenu.classList.remove("abierto");
				listadoMenu.classList.add("cerrado");
			}
			
			else if( listadoMenu.classList.contains("cerrado") )
			{
				listadoMenu.classList.add("abierto");
				listadoMenu.classList.remove("cerrado");
			}

			else
			{
				listadoMenu.classList.add("abierto");
				listadoMenu.classList.remove("cerrado");
			}
		}
	});
});