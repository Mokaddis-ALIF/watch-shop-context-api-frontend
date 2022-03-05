import Home from './shared/Home';
import Footer from './components/Footer/Footer';
import NavBar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Discover from './components/Discover/Discover';
import NotFound from './components/NotFound/NotFound';
import CartProvider from './store/CartProvider';
import Cart from './components/Cart/Cart';

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
					<Route exact path="/cart">
						<Cart />
					</Route>
					<Route exact path="*">
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</CartProvider>
	);
}

export default App;
