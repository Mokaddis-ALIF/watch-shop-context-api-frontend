import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import './Login.css';

const Login = () => {
	const { users, handleSignIn, setIsLoading } = useAuth();
	const location = useLocation();
	const history = useHistory();
	const ui = location.state?.from || '/shared';

	const handleGoogleSignIn = () => {
		handleSignIn()
			.then((res) => history.push(ui))
			.finally(() => setIsLoading(false));
	};
	return (
		<div id="login">
			<div className="text-center text-warning">
				<h1>Login here</h1>
			</div>

			<form className="w-50 mx-auto">
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						required
					/>
					<div id="emailHelp" className="form-text">
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">
						Password
					</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						required
					/>
				</div>

				<button type="submit" className="btn btn-warning">
					Login
				</button>
				<br />
			</form>
			<div className="text-center">OR</div>
			<div className="text-center">
				<button onClick={handleGoogleSignIn} className="btn btn-success my-5">
					Login by Google
				</button>
			</div>

			<div className="text-center">OR</div>
			<center>
				<Link className="text-primary" to="/register">
					Register here
				</Link>
			</center>
		</div>
	);
};

export default Login;
