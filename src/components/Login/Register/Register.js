import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Home from '../../../assets/img/home.png';

import './Register.css';

const Register = () => {
	const [registerData, setRegisterData] = useState({});

	const { user, registerUser, authError } = useAuth();

	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;

		const newRegisterData = { ...registerData };
		newRegisterData[field] = value;

		setRegisterData(newRegisterData);
	};

	const handleRegisterSubmit = (e) => {
		if (registerData.password !== registerData.password2) {
			alert('Password did not match');
			return;
		}

		registerUser(registerData.email, registerData.password);

		e.preventDefault();
	};

	return (
		<>
			<div className="form-container">
				<img src={Home} className="login__img" />
				<form onSubmit={handleRegisterSubmit}>
					<h3>Register now</h3>

					<input
						type="email"
						name="email"
						id="email"
						required
						onChange={handleOnChange}
						placeholder="enter email"
						className="box"
					/>
					<input
						type="password"
						name="password"
						id="password"
						required
						onChange={handleOnChange}
						placeholder="enter password"
						className="box"
					/>
					<input
						type="password"
						name="password2"
						id="password2"
						required
						onChange={handleOnChange}
						placeholder="Re-type password"
						className="box"
					/>
					<button type="submit" id="login__btn">
						Register
					</button>
					{user.email && <p>User created successfully</p>}
					{authError && <p>{authError}</p>}
					<p>
						Already have an account? <NavLink to="/login">Login now</NavLink>
					</p>
				</form>
			</div>
		</>
	);
};

export default Register;
