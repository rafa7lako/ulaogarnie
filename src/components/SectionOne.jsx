import React from "react";
import "./SectionOne.css";
import { ServiceCard } from "./serviceCard";
import cardOneImg from "../assets/../assets/heroAlternative.png";
import cardTwoImg from "../assets/../assets/friedhoff.png";
import cardThreeImg from "../assets/../assets/granmaRoom.png";
import { SectionHeader } from "./SectionHeader";

export const SectionOne = () => {
	return (
		<section className="sectionOne">
			<SectionHeader title="Usługi" theme="dark"/>
			<div className="cardsServices">
				<ServiceCard
					cardClass="cardOne"
					href="/garden"
					text="pielęgnacja ogrodów"
					img={cardOneImg}
					imgAlt="obraz urządzonego ogrodu"
				/>
				<ServiceCard
					cardClass="cardTwo"
					href="/memorial"
					text="opieka nad miejscami pamięci"
					img={cardTwoImg}
					imgAlt="obraz zadbanego pomnika"
				/>
				<ServiceCard
					cardClass="cardThree"
					href="/senior"
					text="pomoc seniorom"
					img={cardThreeImg}
					imgAlt="obraz pokoju starszej osoby"
				/>
			</div>
		</section>
	);
};
