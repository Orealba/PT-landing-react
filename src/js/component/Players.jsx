import React from "react";
import "../../styles/Cards.css";
import Cards from "./Cards.jsx";

const Players = () => {
	return (
		<div>
			<div className="tarjetas">
				<Cards
					className="bodyCard"
					titulo="STEFANOS TSITSIPAS"
					src="https://www.barcelonaopenbancsabadell.com/wp-content/uploads/2021/03/tsitsipas_full_ao20.png"
					datos={{
						tipoDeJuego: "SINGLES",
						pais: "GRECIA",
						ranking: "RANKING ATP: 5",
					}}
				/>
				<Cards
					className="bodyCard"
					titulo="CASPER RUUD"
					src="https://www.barcelonaopenbancsabadell.com/wp-content/uploads/2021/03/ruud_full_ao20.png"
					datos={{
						tipoDeJuego: "SINGLES",
						pais: "NORUEGA",
						ranking: "RANKING ATP: 8",
					}}
				/>
				<Cards
					className="bodyCard"
					titulo="HUBERT
                HURKACZ"
					src="https://www.barcelonaopenbancsabadell.com/wp-content/uploads/2022/03/hurkacz_full_ao20.png"
					datos={{
						tipoDeJuego: "SINGLES",
						pais: "POLONIA",
						ranking: "RANKING ATP: 10",
					}}
				/>
				<Cards
					className="bodyCard"
					titulo="JANNIK
                SINNER"
					src="https://www.barcelonaopenbancsabadell.com/wp-content/uploads/2021/03/sinner_full_ao20.png"
					datos={{
						tipoDeJuego: "SINGLES",
						pais: "ITALIA",
						ranking: "RANKING ATP: 11",
					}}
				/>
			</div>
		</div>
	);
};

export default Players;
