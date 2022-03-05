// import React from 'react';
// import './Header.css';
// import { BsWatch } from 'react-icons/bs';
// import { ImCross } from 'react-icons/im';
// import { BsHandbag } from 'react-icons/bs';
// import { HiOutlineViewGrid } from 'react-icons/hi';

// const Header = () => {
// 	return (
// 		<>
// 			<header className="header" id="header">
// 				<nav className="nav container">
// 					<a href="#" className="nav__logo">
// 						<BsWatch className="nav__logo-icon" /> Rolex
// 					</a>

// 					<div className="nav__menu" id="nav-menu">
// 						<ul className="nav__list">
// 							<li className="nav__item">
// 								<a href="#home" className="nav__link active-link">
// 									Home
// 								</a>
// 							</li>
// 							<li className="nav__item">
// 								<a href="#featured" className="nav__link">
// 									Featured
// 								</a>
// 							</li>
// 							<li className="nav__item">
// 								<a href="#products" className="nav__link">
// 									Products
// 								</a>
// 							</li>
// 							<li className="nav__item">
// 								<a href="#new" className="nav__link">
// 									New
// 								</a>
// 							</li>
// 						</ul>

// 						<div className="nav__close" id="nav-close">
// 							<ImCross />
// 						</div>
// 					</div>

// 					<div className="nav__btns">
// 						{/* <i className="bx bx-moon change-theme" id="theme-button"></i> */}

// 						<div className="nav__shop" id="cart-shop">
// 							<BsHandbag />
// 						</div>

// 						<div className="nav__toggle" id="nav-toggle">
// 							<HiOutlineViewGrid />
// 						</div>
// 					</div>
// 				</nav>
// 			</header>
// 		</>
// 	);
// };

// export default Header;

import React, { useState } from 'react';
import './Header2.css';
import Mob from './Mob/Mob';
import Web from './Web/Web';
import { BsHandbag } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const Header = ({ openSidebar }) => {
	const [isOpen, setIsOpen] = useState(false);

	const cartQty = useSelector((state) => state.cart.totalQuantity);

	return (
		<div className="header">
			<div className="menu">
				<div className="web-menu">
					<Web />
				</div>
				<div className="mobile-menu">
					<div onClick={() => setIsOpen(!isOpen)}>
						<i className="fi fi-rr-align-center menu-icon"></i>
					</div>
					{isOpen && <Mob isOpen={isOpen} setIsOpen={setIsOpen} />}
				</div>
				<div className="nav__btns">
					<div className="nav__shop" id="cart-shop" onClick={openSidebar}>
						<BsHandbag />

						{cartQty > 0 ? cartQty : ''}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
