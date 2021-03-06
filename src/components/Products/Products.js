import React from 'react';
import './Products.css';
import ProductItem from './ProductItem';

const Products = ({ products }) => {
	const data = products.slice(3, 7);
	return (
		<>
			<section className="products section container" id="products">
				<h2 className="section__title">Products</h2>

				<div className="products__container grid">
					{data.map((product) => (
						<ProductItem product={product} key={product.id} id={product.id} />
					))}
				</div>
			</section>
		</>
	);
};

export default Products;
