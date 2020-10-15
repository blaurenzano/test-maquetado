import React from 'react';
import Data from '../../services/api.json';
import Product from '../product/product.js';
import './catalog.css'

function Catalog(){

	const catalog = Data.catalog;

	return(
		<section className="catalog">
			<h2 className="filters__title filters__title--mobile">Zapatillas</h2>
			{
				catalog.map((product, index)=>

					<Product key={index} id={index} img={product.img} title={product.title} price={product.price}  />

				)
			}
        </section>
	)
}

export default Catalog