/* eslint-disable import/no-unresolved */
import { Autoplay, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import SliderImg from "../../assets/slider/criar-ou-migrar-seu-e-commerce.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./styles.css";

const Slider = () => {
	return (
		<div className="slider">
			<Swiper
				modules={[Autoplay, Pagination, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				pagination={{ clickable: true }}
				autoplay={true}
				className="slider__content"
			>
				<SwiperSlide className="slider__content--item">
					<div className="item--slider">
						{/* <div className="item--slider__overlay"></div> */}
						<img src={SliderImg} alt="1" />
						<div className="item--slider__text">
							<h2 className="text--title">
								Criar ou migrar seu e-commerce?
							</h2>
							<span className="text-subtitle">
								Olá, o que você está buscando?
							</span>
						</div>
					</div>
				</SwiperSlide>

				<SwiperSlide className="slider__content--item">
					<div className="item--slider">
						{/* <div className="item--slider__overlay"></div> */}
						<img src={SliderImg} alt="1" />
						<div className="item--slider__text">
							<h2 className="text--title">Vtex</h2>
							<span className="text-subtitle">
								Store Framework
							</span>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};
export default Slider;
