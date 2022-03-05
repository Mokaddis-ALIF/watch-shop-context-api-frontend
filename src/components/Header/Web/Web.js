import React from 'react';
import './Web.css';

const Web = () => {
	return (
		<div className="web">
			<div className="web-options">
				<a href="#home">Home</a>
			</div>
			<div className="web-options">
				<a href="#featured">Featured</a>
			</div>
			<div className="web-options">
				<a href="#products">Products</a>
			</div>
			<div className="web-options">
				<a href="#new">New</a>
			</div>
		</div>
	);
};

export default Web;
