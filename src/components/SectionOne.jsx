import React from "react";
import "./SectionOne.css";
import { ServiceCard } from "./serviceCard";
import cardOneImg from "../assets/../assets/heroAlternative.png";
import cardTwoImg from "../assets/../assets/friedhoff.png";
import cardThreeImg from "../assets/../assets/granmaRoom.png";

export const SectionOne = () => {
	return (
		<section className="sectionOne">
			<div className="flexRow">
				<div className="fadeLine fadeLineLeftDark"></div>
				<h2 className="headingTwo">Usługi</h2>
				<div className="fadeLine fadeLineRightDark"></div>
			</div>
			<div className="cardsServices">
				<ServiceCard
					cardClass="cardOne"
					href="#"
					text="pielęgnacja ogrodów"
					img={cardOneImg}
					imgAlt="obraz urządzonego ogrodu"
				/>
				<ServiceCard
					cardClass="cardTwo"
					href="#"
					text="opieka nad miejscami pamięci"
					img={cardTwoImg}
					imgAlt="obraz zadbanego pomnika"
				/>
				<ServiceCard
					cardClass="cardThree"
					href="#"
					text="pomoc seniorom"
					img={cardThreeImg}
					imgAlt="obraz pokoju starszej osoby"
				/>
			</div>
		</section>
	);
};
