import React, { useContext } from 'react';
import './Cart.css';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import { Link } from 'react-router-dom';

const Cart = () => {
	const cartCtx = useContext(CartContext);

	const cartItemNumbers = cartCtx.items.reduce(
		(curNumber, item) => curNumber + item.amount,
		0
	);

	const totalAmount = `$${cartCtx.totalAmount}`;

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const clearItemHandler = (id) => {
		cartCtx.clearItem(id);
	};

	const removeAllItemFromCart = () => {
		cartCtx.clearCart();
	};

	return (
		<>
			<div className="cart">
				{cartCtx.items.length > 0 && (
					<h1 className="section__title">My Cart</h1>
				)}
				<div className="cart__screen">
					{cartCtx.items.length === 0 ? (
						<div id="cart__empty">
							<h1 className="section__title">Your cart is empty</h1>
						</div>
					) : (
						<>
							<div className="cart_items">
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
										onClear={clearItemHandler.bind(null, cart.id)}
									/>
								))}
							</div>

							<div className="cartScreen__right">
								<div className="cartScreen__info">
									<p>Subtotal ({cartItemNumbers}) items</p>
									<p>Subtotal Amount: {totalAmount}</p>
								</div>
								<div className="cart_btn">
									<Link to="/orders">
										<button>Proceed To Order</button>
									</Link>
									<button onClick={removeAllItemFromCart}>
										Remove all item
									</button>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default Cart;
