import React from 'react';
// import { BiTrash } from 'react-icons/bi';

const CartItem = ({ name, price, id, quantity, img, onRemove, onAdd }) => {
	return (
		<>
			<article className="cart__card">
				<div className="cart__box">
					<img src={img} alt="" className="cart__img" />
				</div>

				<div className="cart__details">
					<h3 className="cart__title">{name}</h3>
					<span className="cart__price">${price}</span>

					<div className="cart__amount">
						<div className="cart__amount-content">
							<span className="cart__amount-box" onClick={onRemove}>
								-
							</span>

							<span className="cart__amount-number">{quantity}</span>

							<span className="cart__amount-box" onClick={onAdd}>
								+
							</span>
						</div>

						{/* <BiTrash className="cart__amount-trash" /> */}
					</div>
				</div>
			</article>
		</>
	);
};

export default CartItem;
