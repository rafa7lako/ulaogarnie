import React from "react";
import Navigation from "../components/Navigation.jsx";
import { Footer } from "../components/Footer.jsx";
import "./GardenPage.css";
import sectionOneImg from "../assets/garden-imgs/garden__img-one.jpeg";
import sectionTwoImg1 from "../assets/garden-imgs/garden__img-two.jpeg";
import sectionTwoImg2 from "../assets/garden-imgs/garden__img-three.jpeg";
import contactWomanImg from "../assets/contactWomanImg.png";
import {ServicePage} from '../components/SubsiteContent/ServicePage.jsx'

const gardenData = {
	headerSection: {title:"Zieleń, którą chce się oglądać", subText: 'Nie masz czasu na regularne koszenie? Trawnik stracił formę? Rabaty wymagają uporządkowania? Ula Ogarnie.'},
	sectionOne: {
		title: "Oferta",
		img: sectionOneImg,
		heading: "Oferuję kompleksową pielęgnację terenów zielonych...",
		list: [
			"koszenie trawników",
			"nawożenie i rekultywację",
			"przycinanie krzewów i żywopłotów",
			"nasadzenia roślin",
			"porządki sezonowe"
		]
	},

	sectionTwo: {
		title: "Zielono. Równo. Na czas.",
		text: "Pracuję terminowo, dokładnie...",
		images: [sectionOneImg, sectionTwoImg1, sectionTwoImg2]
	},

	sectionThree: {
		title: "Porozmawiajmy o szczegółach!",
		text: "Skontaktuj się i umów wycenę.",
		phone: "+48 725 116 511",
		email: "u.jendral@gmail.com",
		img: contactWomanImg
	}
};

export const GardenPage = () => {
	return (
		<>
			<div className="container">
				<div className="topStripe"></div>
				<Navigation />
			</div>
			
				<ServicePage data={gardenData} />
			
			<Footer />
		</>
	);
};
