import React, { useContext } from 'react';
import './Cart.css';
import { GrClose } from 'react-icons/gr';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

const Cart = () => {
	const cartCtx = useContext(CartContext);

	const cartItemNumbers = cartCtx.items.reduce(
		(curNumber, item) => curNumber + item.amount,
		0
	);

	const totalAmount = `${cartCtx.totalAmount}`;

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	return (
		<div className="cart" id="cart">
			<i className="bx bx-x cart__close" id="cart-close"></i>

			<h2 className="cart__title-center">My Cart</h2>

			<div className="cart__container">
				{cartCtx.items.map((cart) => (
					<CartItem
						key={cart.id}
						name={cart.name}
						amount={cart.amount}
						price={cart.price}
						id={cart.id}
						img={cart.img}
						quantity={cart.amount}
						onRemove={cartItemRemoveHandler.bind(null, cart.id)}
						onAdd={cartItemAddHandler.bind(null, cart)}
					/>
				))}
			</div>

			<div className="cart__prices">
				<span className="cart__prices-item">
					{cartItemNumbers ? cartItemNumbers : 'No'} items
				</span>
				<span className="cart__prices-total">${totalAmount}</span>
			</div>
		</div>
	);
};

export default Cart;
