import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css';
import Home from '../../assets/img/home.png';

const Login = () => {
	const [loginData, setLoginData] = useState({});
	const { user, loginUser, isLoading, authError, googleSignIn } = useAuth();

	const location = useLocation();
	const history = useHistory();

	const handleGoogleSignIn = () => {
		googleSignIn(location, history);
	};

	const handleOnChange = (e) => {
		const field = e.target.name;
		const value = e.target.value;

		const newLoginData = { ...loginData };
		newLoginData[field] = value;
		setLoginData(newLoginData);
	};

	const handleLoginSubmit = (e) => {
		e.preventDefault();
		loginUser(loginData.email, loginData.password, location, history);
	};

	return (
		<>
			<div className="form-container">
				<form onSubmit={handleLoginSubmit}>
					<h3>login now</h3>

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
					<div id="btns">
						<button type="submit" id="login__btn">
							Login
						</button>
						<button type="submit" id="login__btn" onClick={handleGoogleSignIn}>
							Login by Google
						</button>
					</div>
					{user.email && <p>User login done successfully</p>}
					{authError && <p>{authError}</p>}
					<p>
						don't have an account?
						<Link to="/register">Register now</Link>
					</p>
				</form>
				<img src={Home} className="login__img" />
			</div>
		</>
	);
};

export default Login;
