import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';

const NewProductItem = ({ product }) => {
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
			<article className="new__card swiper-slide">
				<span className="new__tag">New</span>

				<img src={img} alt="" className="new__img" />

				<div className="new__data">
					<h3 className="new__title">{name}</h3>
					<span className="new__price">${price}</span>
				</div>

				<button className="button new__button" onClick={addToCartHandler}>
					ADD TO CART
				</button>
			</article>
		</>
	);
};

export default NewProductItem;
