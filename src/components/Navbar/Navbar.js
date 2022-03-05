import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import { BsWatch } from 'react-icons/bs';
// import { BsHandbag } from 'react-icons/bs';
import { BsBag } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';
import CartContext from '../../store/cart-context';

function NavBar({ openSidebar }) {
	const [click, setClick] = useState(false);

	const cartCtx = useContext(CartContext);

	const cartItemNumbers = cartCtx.items.reduce(
		(curNumber, item) => curNumber + item.amount,
		0
	);

	const handleClick = () => setClick(!click);

	return (
		<>
			<nav className="navbar">
				<div className="nav-container">
					<NavLink exact to="/" className="nav-logo">
						<BsWatch />
						<span id="watch__name">Rolex</span>
					</NavLink>

					<ul className={click ? 'nav-menu active' : 'nav-menu'}>
						<li className="nav-item">
							<NavLink
								exact
								to="/"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/discover"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Discover
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/blog"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Blog
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								exact
								to="/login"
								activeClassName="active"
								className="nav-links"
								onClick={handleClick}
							>
								Login
							</NavLink>
						</li>
					</ul>

					<div className="nav__shop" id="cart-shop" onClick={openSidebar}>
						{/* <BsHandbag id="cartBag__icon" /> */}
						<NavLink exact to="/cart">
							<BsBag id="cartBag__icon" />
						</NavLink>
						<span className="qty">{cartItemNumbers}</span>
					</div>

					<div className="nav-icon" onClick={handleClick}>
						{click ? <ImCross /> : <GiHamburgerMenu />}
					</div>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
