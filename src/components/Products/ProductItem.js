import React, { useContext } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import CartContext from '../../store/cart-context';

const ProductItem = ({ product }) => {
	const cartCtx = useContext(CartContext);

	const { img, name, price, id } = product;

	const addToCartHandler = () => {
		cartCtx.addItem({
			id: id,
			name: name,
			amount: 1,
			price: price,
			img: img,
		});
	};

	return (
		<>
			<article className="products__card">
				<img src={img} alt="" className="products__img" />

				<h3 className="products__title">{name}</h3>
				<span className="products__price">${price}</span>

				<button className="products__button" onClick={addToCartHandler}>
					<BiShoppingBag />
				</button>
			</article>
		</>
	);
};

export default ProductItem;
