import React, { useEffect, useState } from 'react';

import Featured from '../components/Featured/Featured';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Products from '../components/Products/Products';
import Story from '../components/Story/Story';
import Footer from '../components/Footer/Footer';
import NewProducts from '../components/NewProducts/NewProducts';

const Home = ({ closeToggleSidebar, close, sidebar }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch(`https://thawing-eyrie-47965.herokuapp.com/products`)
			.then((res) => res.json())
			.then((data) => setProducts(data));
	}, []);

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
