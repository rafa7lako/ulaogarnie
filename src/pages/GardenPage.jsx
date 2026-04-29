import React from "react";


import sectionOneImg from "../assets/garden-imgs/garden__img-one.jpeg";
import sectionTwoImg1 from "../assets/garden-imgs/garden__img-two.jpeg";
import sectionTwoImg2 from "../assets/garden-imgs/garden__img-three.jpeg";
import contactWomanImg from "../assets/contactWomanImg.png";
import { ServicePage } from "../components/SubsiteContent/ServicePage.jsx";
import heroImage from "../assets/heroAlternative.jpg";

const gardenData = {
	headerSection: {
		bgImage: heroImage,
		title: "Zieleń, którą chce się oglądać",
		subText:
			"Nie masz czasu na koszenie? Trawnik zarasta, a rabaty wymagają opieki? Spokojnie — Ula ogarnie.",
	},
	sections: [
		{
			id: "section-offer",
			type: "one",
			title: "Oferta",
			img: sectionOneImg,
			alt: "Rabatka z różami, wiadro z chwastami i fragment trawnika.",
			heading: "Oferuję kompleksową pielęgnację ogrodu:",
			list: [
				"koszenie trawników",
				"nawożenie roślin",
				"przycinanie krzewów i drzew",
				"nasadzenia",
				"porządkowanie terenu/wywóz bio odpadów po pracy",
			],
		},
		{
			id: "section-offer-cont",
			type: "two",
			title: "Zielono. Równo. Na czas.",
			text: "Nie wszystko trzeba robić samodzielnie. Wystarczy mieć zaufaną osobę, która pomoże. Pracuję terminowo, dokładnie i bez chaosu. Każde zlecenie wyceniam uczciwie i indywidualnie.",
			images: [sectionOneImg, sectionTwoImg1, sectionTwoImg2],
			alts: [
        "Rabatka z różami, wiadro z chwastami i fragment trawnika.",
        "Rabatka z młodymi nasadzeniami przy chodniku i trawniku.",
        "Rabata z kwitnącymi różami w kolorze czerwieni i różu wzdłuż metalowego ogrodzenia, obok równo skoszonego trawnika.",
    ],
		},
		{
			id: "offer-contact",
			type: "three",
			title: "Porozmawiajmy o szczegółach!",
			text: "Skontaktuj się i umów wycenę.",
			phone: "+48 725 116 511",
			email: "u.jendral@gmail.com",
			img: contactWomanImg,
		},
	],
};

export const GardenPage = () => {
	return (
		<>
			

			<ServicePage data={gardenData} />

		
		</>
	);
};
