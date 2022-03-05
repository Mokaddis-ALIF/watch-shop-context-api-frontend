import React from 'react';
import './HomeBanner.css';
import Home from '../../assets/img/home.png';

const HomeBanner = () => {
	return (
		<>
			<section className="home" id="home">
				<div className="home__container container grid">
					<div className="home__img-bg" id="bg__home">
						<img src={Home} alt="" className="home__img" />
					</div>

					<div className="home__social">
						<a href="" target="_blank" className="home__social-link">
							Facebook
						</a>
						<a href="" target="_blank" className="home__social-link">
							Twitter
						</a>
						<a href="" target="_blank" className="home__social-link">
							Instagram
						</a>
					</div>

					<div className="home__data">
						<h1 className="home__title">
							NEW WATCH <br /> COLLECTIONS B720
						</h1>
						<p className="home__description">
							Latest arrival of the new imported watches of the B720 series,
							<br />
							with a modern and resistant design.
						</p>
						<span className="home__price">$1245</span>

						<div className="home__btns">
							<a href="#" className="button button--gray button--small">
								Discover
							</a>

							<button className="button home__button">Learn More</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HomeBanner;
