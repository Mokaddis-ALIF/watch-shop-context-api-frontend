import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

const FeaturedProducts = (props) => {
	const cartCtx = useContext(CartContext);

	const { name, price, id, img } = props.p;

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
		<article className="featured__card">
			<span className="featured__tag">Sale</span>

			<img src={img} alt="" className="featured__img" />

			<div className="featured__data">
				<h3 className="featured__title">{name}</h3>
				<span className="featured__price">${price}</span>
			</div>

			<button className="button featured__button" onClick={addToCartHandler}>
				ADD TO CART
			</button>
		</article>
	);
};

export default FeaturedProducts;
