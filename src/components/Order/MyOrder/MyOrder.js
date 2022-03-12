import React, { useContext, useEffect, useState } from 'react';
import './MyOrder.css';
import CartContext from '../../../store/cart-context';
import useAuth from '../../../Hooks/useAuth';
import { Table } from 'react-bootstrap';

const MyOrder = () => {
	const cartCtx = useContext(CartContext);
	const [myOrders, setMyOrders] = useState([]);

	const { user } = useAuth();

	const handleDelete = (id) => {
		const url = `http://localhost:5000/orders/${id}`;
		fetch(url, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount) {
					alert('Your order has been successfully Deleted');
					const remainingOrders = myOrders.filter((order) => order._id !== id);
					setMyOrders(remainingOrders);
				}
			});
	};

	useEffect(() => {
		cartCtx.clearCart();

		fetch(`http://localhost:5000/orders`)
			.then((res) => res.json())
			.then((data) => setMyOrders(data));
	}, []);

	const userOrders = myOrders.filter((order) => order.email === user.email);
	console.log(userOrders);

	return (
		<>
			<div className="myOrders">
				{userOrders.length === 0 ? (
					<h1>You haven't ordered anything</h1>
				) : (
					<>
						<h1>My orders</h1>

						<table id="customers">
							<tr>
								<th>Email</th>
								<th>Number</th>
								<th>Address</th>
								<th>Products</th>
								<th>Total Amount</th>
								<th>Action</th>
							</tr>

							{userOrders.map((order) => (
								<tr>
									<td>{order.email}</td>
									<td>{order.phone}</td>
									<td>
										{order.address},{order.city}
									</td>
									<td>
										{order.order.map((o) => (
											<div className="orderItem">
												{o.name}: {o.amount}
											</div>
										))}
									</td>
									<td>{order.totalAmount}</td>
									<td>
										<button
											className="btn"
											onClick={() => handleDelete(order._id)}
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</table>

						<div className="myOrders_bottom">
							<h1>Payment system coming soon</h1>
						</div>
					</>
				)}
			</div>
		</>
	);
};

export default MyOrder;
