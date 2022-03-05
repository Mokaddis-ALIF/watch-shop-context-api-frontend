import React from 'react';
import './Mob.css';

const Mob = ({ isOpen, setIsOpen }) => {
	return (
		<div className="mobile">
			<div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
				<i className="fi fi-rr-cross"></i>
			</div>
			<div className="mobile-options">
				<div className="mobile-option">
					<a href="#project">
						<a href="#home">Home</a>
					</a>
				</div>
				<div className="mobile-option">
					<a href="#skills">
						<a href="#featured">Featured</a>
					</a>
				</div>
				<div className="mobile-option">
					<a href="#work">
						<a href="#products">Products</a>
					</a>
				</div>
				<div className="mobile-option">
					<a href="#contact">
						<a href="#new">New</a>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Mob;
