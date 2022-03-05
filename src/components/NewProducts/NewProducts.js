import React from 'react';
import NewProductItem from './NewProductItem';
import './NewProducts.css';
import { productData } from '../Data/Data';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper';

const NewProducts = () => {
	const data = productData.slice(5);

	return (
		<>
			<section className="new section container" id="new">
				<h2 className="section__title">New Arrivals</h2>

				<div className="new__container">
					<div className="swiper new-swiper">
						<Swiper
							breakpoints={{
								// when window width is >= 640px
								640: {
									width: 640,
									slidesPerView: 1,
								},
								// when window width is >= 768px
								998: {
									width: 998,
									slidesPerView: 3,
								},
							}}
							spaceBetween={30}
							pagination={{
								clickable: true,
							}}
							modules={[Pagination]}
							className="mySwiper"
						>
							{data.map((product) => (
								<SwiperSlide key={product.id}>
									<NewProductItem product={product} />
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>
		</>
	);
};

export default NewProducts;
