import React from 'react'


import sectionOneImg from "../assets/garden-imgs/garden__img-one.jpeg";
import sectionTwoImg1 from "../assets/garden-imgs/garden__img-two.jpeg";
import sectionTwoImg2 from "../assets/garden-imgs/garden__img-three.jpeg";
import contactWomanImg from "../assets/contactWomanImg.png";
import { ServicePage } from "../components/SubsiteContent/ServicePage.jsx";
import heroImage from "../assets/granmaRoom.png";

const seniorData = {
	headerSection: {
		bgImage: heroImage,
		title: "Pomoc w codziennych sprawach",
		subText:
			"Nie wszystko trzeba robić samodzielnie. Wystarczy mieć zaufaną osobę, która pomoże.",
	},
	sections: [
		{
			id: "section-offer",
			type: "one",
			title: "Oferta",
			img: sectionOneImg,
			heading: "Oferuję wsparcie w domu oraz pomoc dla osób starszych:",
			list: [
				"mycie okien",
				"sprzątanie i porządkowanie mieszkań",
				"drobne naprawy domowe",
				"pomoc przy zakupach",
				"porządkowanie dokumentów",
			],
		},
		{
			id: "section-offer-cont",
			type: "two",
			title: "Spokojna głowa dla Ciebie i Twoich bliskich.",
			text: "Bez pośpiechu, bez stresu. To nie opieka medyczna — to zwykła, życzliwa pomoc na co dzień. Każde zlecenie wyceniam uczciwie i indywidualnie.",
			images: [sectionOneImg, sectionTwoImg1, sectionTwoImg2],
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

export const SeniorPage = () => {
  return (
    	<>
			

			<ServicePage data={seniorData} />

		
		</>
  )
}
