import React from "react";
import "../../styles/Navbar.css";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg ">
				<div className="container-fluid">
					<a className="nav-link nav-color" href="#">
						Home
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a
									className="nav-link nav-color "
									aria-current="page"
									href="#">
									Torneo
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link nav-color" href="#">
									Cuadros y Resultados
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link nav-color" href="#">
									Noticias
								</a>
							</li>
						</ul>
					</div>
					<img
						className="logobcnOpen"
						src="https://www.barcelonaopenbancsabadell.com/wp-content/uploads/thegem-logos/logo_78c6821eb3bfa8f4a13ce7c1b608b42a_1x.png"
					/>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
