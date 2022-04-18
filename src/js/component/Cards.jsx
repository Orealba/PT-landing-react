import React from "react";
import "../../styles/Cards.css";

const Cards = (props) => {
	return (
		<div>
			<div
				className="card playerscards"
				style={{ width: "22rem", marginLeft: "70px" }}>
				<h5 className="card-title">{props.titulo}</h5>
				<img src={props.src} className="card-img-top" />
				<div className="card-body">
					<p className="card-text">
						<ul>
							<li> {props.datos.tipoDeJuego}</li>
							<li> {props.datos.pais} </li>
							<li>{props.datos.ranking} </li>
						</ul>
					</p>
					<a href="#" className="btn btn-primary">
						Acceder al cuadro
					</a>
				</div>
			</div>
		</div>
	);
};

export default Cards;
