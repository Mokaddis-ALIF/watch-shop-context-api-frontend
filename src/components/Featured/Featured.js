import React from 'react';
import './Featured.css';
import { productData } from '../Data/Data';

import FeaturedProducts from './FeaturedProducts';

const Featured = () => {
	const data = productData.slice(0, 3);

	return (
		<>
			<section className="featured section container" id="featured">
				<h2 className="section__title">Featured</h2>

				<div className="featured__container grid">
					{data.map((p) => (
						<FeaturedProducts key={p.id} p={p} />
					))}
					{/* <article className="featured__card">
						<span className="featured__tag">Sale</span>

						<img src={f1} alt="" className="featured__img" />

						<div className="featured__data">
							<h3 className="featured__title">Jazzmaster</h3>
							<span className="featured__price">$1050</span>
						</div>

						<button className="button featured__button">ADD TO CART</button>
					</article> */}
				</div>
			</section>
		</>
	);
};

export default Featured;
