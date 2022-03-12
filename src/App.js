import Home from './shared/Home';
import NavBar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Discover from './components/Discover/Discover';
import NotFound from './components/NotFound/NotFound';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Register from './components/Login/Register/Register';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Order from './components/Order/Order';
import MyOrder from './components/Order/MyOrder/MyOrder';
import Blog from './components/Blog/Blog';

function App() {
	const [sidebar, setSidebar] = useState(false);

	const toggleSidebar = () => {
		setSidebar((prevState) => !prevState);
	};

	return (
		<CartProvider>
			<Router>
				<NavBar openSidebar={toggleSidebar} />
				<Switch>
					<Route exact path="/">
						<Home
							close={() => setSidebar(false)}
							sidebar={sidebar}
							closeToggleSidebar={toggleSidebar}
						/>
					</Route>
					<Route exact path="/discover">
						<Discover />
					</Route>
					<PrivateRoute exact path="/cart">
						<Cart />
					</PrivateRoute>
					<Route exact path="/login">
						<Login />
					</Route>
					<Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/orders">
						<Order />
					</Route>
					<Route exact path="/my-orders">
						<MyOrder />
					</Route>
					<Route exact path="/blog">
						<Blog />
					</Route>
					<Route exact path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</CartProvider>
	);
}

export default App;
