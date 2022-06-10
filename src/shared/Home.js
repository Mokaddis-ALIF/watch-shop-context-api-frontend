import { useEffect, useState } from 'react';
import './Home.css';
import Featured from '../components/Featured/Featured';
import Footer from '../components/Footer/Footer';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import NewProducts from '../components/NewProducts/NewProducts';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Products from '../components/Products/Products';
import Story from '../components/Story/Story';

const Home = ({ closeToggleSidebar, close, sidebar }) => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [httpError, setHttpError] = useState();

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch(
				`https://thawing-eyrie-47965.herokuapp.com/products`
			);

			if (!response.ok) {
				throw new Error('Something went wrong!');
			}

			const data = await response.json();
			setProducts(data);
			setIsLoading(false);
		};

		fetchProducts().catch((error) => {
			setIsLoading(false);
			setHttpError(error.message);
		});
	}, []);

	if (isLoading) {
		return (
			<section className="MealsLoading">
				<p>Loading...</p>
			</section>
		);
	}

	if (httpError) {
		return (
			<section className="MealsError">
				<p>{httpError}</p>
			</section>
		);
	}

	return (
		<>
			{/* <Header openSidebar={toggleSidebar} /> */}

			{/* {sidebar && (
				<Backdrop sidebar={sidebar} closeToggleSidebar={closeToggleSidebar} />
			)} */}
			{/* {sidebar && <Cart sidebar={sidebar} closeSidebar={close} />} */}
			<HomeBanner />
			<Featured products={products} />
			<Story />
			<Products products={products} />
			<NewProducts products={products} />
			<NewsLetter />
			<Footer />
		</>
	);
};

export default Home;
