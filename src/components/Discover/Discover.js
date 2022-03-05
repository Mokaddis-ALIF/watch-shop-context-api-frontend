import React from 'react';
import './Discover.css';
import { productData } from '../Data/Data';
import DiscoverItem from './DiscoverItem';

const Discover = () => {
	return (
		<>
			<section className="products section container" id="discover">
				<h2 className="section__title">Products</h2>

				<div className="products__container grid">
					{productData.map((product) => (
						<DiscoverItem product={product} key={product.id} id={product.id} />
					))}
				</div>
			</section>
		</>
	);
};

export default Discover;
