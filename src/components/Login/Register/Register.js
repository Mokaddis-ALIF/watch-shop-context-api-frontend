import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Register.css';

const Register = () => {
	const { handleRegistration, emailHandle, passwordHandle, err } = useAuth();
	return (
		<div id="register">
			<center>
				<h1 className="text-danger">Register Here</h1>
			</center>
			<form onSubmit={handleRegistration} className="w-50 mx-auto">
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">
						Email address
					</label>
					<input
						onBlur={emailHandle}
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
						onBlur={passwordHandle}
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						required
					/>
				</div>
				<div id="emailHelp" className="form-text text-danger">
					<p>{err}</p>
				</div>

				<button type="submit" className="btn btn-danger">
					Register
				</button>
				<br />
			</form>
			<div className="text-center">OR</div>
			<center>
				<Link className="text-danger" to="/login">
					Already a member
				</Link>
			</center>
		</div>
	);
};

export default Register;
