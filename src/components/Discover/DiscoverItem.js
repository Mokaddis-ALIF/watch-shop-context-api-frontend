import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';

const DiscoverItem = ({ product }) => {
	const { img, name, price, id } = product;

	return (
		<>
			<article className="products__card">
				<img src={img} alt="" className="products__img" />

				<h3 className="products__title">{name}</h3>
				<span className="products__price">${price}</span>

				<button className="products__button">
					<BiShoppingBag />
				</button>
			</article>
		</>
	);
};

export default DiscoverItem;
