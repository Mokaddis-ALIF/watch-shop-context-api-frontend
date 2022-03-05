import React from 'react';
import Backdrop from '../components/Cart/Backdrop';
import Cart from '../components/Cart/Cart';
import Featured from '../components/Featured/Featured';
import HomeBanner from '../components/HomeBanner/HomeBanner';
import NewsLetter from '../components/NewsLetter/NewsLetter';
import Products from '../components/Products/Products';
import Story from '../components/Story/Story';
// import Header from '../components/Header/Header';
import NewProducts from '../components/NewProducts/NewProducts';

const Home = ({ closeToggleSidebar, close, sidebar }) => {
	return (
		<>
			{/* <Header openSidebar={toggleSidebar} /> */}

			{/* {sidebar && (
				<Backdrop sidebar={sidebar} closeToggleSidebar={closeToggleSidebar} />
			)} */}
			{/* {sidebar && <Cart sidebar={sidebar} closeSidebar={close} />} */}
			<HomeBanner />
			<Featured />
			<Story />
			<Products />
			<NewProducts />
			<NewsLetter />
		</>
	);
};

export default Home;
