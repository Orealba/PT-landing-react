import React from "react";
import "../../styles/Carousel.css";
import "../../js/component/BotonTickets.jsx";
import BotonTickets from "../../js/component/BotonTickets.jsx";

const Carousel = () => {
	return (
		<div
			id="carouselExampleControls"
			className="carousel slide-torneo"
			data-bs-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src="https://www.barcelonaopenbancsabadell.com/wp-content/uploads/2022/02/home_banner_2202_01.jpg"
						className="d-block w-100"
						alt="Trofeo"
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://www.barcelonaopenbancsabadell.com/wp-content/uploads/2022/04/alcaraz-1_es.jpg"
						className="d-block w-100"
						alt="Carlitos"
					/>
				</div>
				<div className="carousel-item">
					<img
						src="https://www.barcelonaopenbancsabadell.com/wp-content/uploads/2022/02/home_banner_2202_03.jpg"
						className="d-block w-100"
						alt="Tsitsipás"
					/>
				</div>
				<BotonTickets />
			</div>

			<button
				className="carousel-control-prev"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="prev">
				<span
					className="carousel-control-prev-icon"
					aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button
				className="carousel-control-next"
				type="button"
				data-bs-target="#carouselExampleControls"
				data-bs-slide="next">
				<span
					className="carousel-control-next-icon"
					aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	);
};

export default Carousel;
