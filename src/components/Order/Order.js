import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';

import './Order.css';
import { useHistory } from 'react-router-dom';

const Order = () => {
	const history = useHistory();

	const {
		register,
		handleSubmit,

		formState: { errors },
	} = useForm();

	const { user } = useAuth();

	const cartCtx = useContext(CartContext);

	const orderData = [];

	for (const data of cartCtx.items) {
		orderData.push({ name: data.name, amount: data.amount });
	}

	const totalAmount = `$${cartCtx.totalAmount}`;

	const onSubmit = (data) => {
		data.order = orderData;
		data.totalAmount = totalAmount;

		fetch(`https://thawing-eyrie-47965.herokuapp.com/orders`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.insertedId) {
					alert('Order placed successfully');
					history.push('/my-orders');
				}
			});
	};

	return (
		<>
			<div className="orders">
				{cartCtx.items.length === 0 ? (
					<h1>Your have nothing to order</h1>
				) : (
					<>
						<div className="order__left">
							{cartCtx.items.map((item) => (
								<div className="orderItems">
									<img src={item.img} alt="" className="order__img" />
									<div className="order__details">
										<h2 className="order__title">
											{item.name} <span className="into">x</span> {item.amount}
										</h2>
										<h3 className="order__price">${item.price}</h3>
									</div>
								</div>
							))}
							<h1 className="order__amount">{totalAmount}</h1>
						</div>

						<div className="order__right">
							<h2>Place your order</h2>
							<form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
								<input
									defaultValue={user.email}
									placeholder="email"
									{...register('email', { required: true })}
								/>

								{errors.email && (
									<span className="error">This field is required</span>
								)}
								<input
									placeholder="Address"
									defaultValue=""
									{...register('address')}
								/>
								<input
									placeholder="City"
									defaultValue=""
									{...register('city')}
								/>
								<input
									placeholder="Phone"
									defaultValue=""
									{...register('phone')}
								/>

								<input className="button" type="submit" />
							</form>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default Order;
