import React from 'react'

function Header(){
	return(
		<header className="header">
	        <div className="header__main">
		        <a className="header__dropdown-menu">
		        	<img src={require('../../assets/iconos/bars-solid.svg')} />
		        </a>
		        <a className="header__logo" href="#" alt="La preuve logo" title="Ir a la Home">
		        	<img src={require('../../assets/logo.svg')}  />
		        </a>
				<div className="header__actions">
					<a href="#" title="Buscar">
						<img src={require('../../assets/iconos/search-solid.svg')} />
					</a>
					<a href="#" title="Mi cuenta">
						<img src={require('../../assets/iconos/user-solid.svg')} />
					</a>
					<a href="#" title="Mi carrito">
						<img src={require('../../assets/iconos/shopping-cart-solid.svg')} />
					</a>
				</div>
	        </div>
	        <nav>
				<a className="active" href="#" title="SALE">SALE</a>
				<a href="#" title="Ir a la categoría">E-SHOP</a>
				<a href="#" title="Ir a la categoría">LOOKBOOK</a>
				<a href="#" title="Ir a la categoría">CAMPAÑA</a>
				<a href="#" title="Ir a la categoría">LOCALES</a>
	        </nav>
      	</header>
	)
}

export default Header