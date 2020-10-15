import React from 'react';
import './product.css'

function Product(props){
	return(
		<article className="product">
            <a className="product__image" href="#">
				<img src={props.img} />
            </a>
            <h1 className="product__title">
				<a href="#">{props.title}</a>
            </h1>
            <p className="product__price">{props.price}</p>
        </article>
	)
}

export default Product