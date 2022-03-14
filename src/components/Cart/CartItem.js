import React from 'react';
// import { BiTrash } from 'react-icons/bi';
import './CartItem.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

const CartItem = ({ name, price, quantity, img, onRemove, onAdd, onClear }) => {
	console.log(img);

	return (
		<>
			<div className="cartItems">
				<img src={img} alt="" className="cart__img" />
				<div className="cart__details">
					<h2 className="cart__title">{name}</h2>
					<h3 className="cart__price">${price}</h3>
				</div>
				<div className="cart__details__amount">
					<span className="cart__amount-box" onClick={onRemove}>
						<AiOutlineMinus />
					</span>

					<span className="cart__amount-number">{quantity}</span>

					<span className="cart__amount-box" onClick={onAdd}>
						<AiOutlinePlus />
					</span>
					<button onClick={onClear}>
						<MdDelete />
					</button>
				</div>
			</div>
		</>
	);
};

export default CartItem;
