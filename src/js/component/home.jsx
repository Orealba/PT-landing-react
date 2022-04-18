import React from "react";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import Carousel from "./Carousel.jsx";
import Players from "./Players.jsx";
import "../../styles/index.css";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<Carousel />
			<h1 className="jugadores">JUGADORES</h1>
			<Players />
			<br></br>
			<Footer />
		</div>
	);
};

export default Home;
