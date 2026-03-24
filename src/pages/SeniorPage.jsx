import React from 'react'
import Navigation from "../components/Navigation.jsx";
import { Footer } from "../components/Footer.jsx";

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
			"Nie wszystko trzeba robić samemu. Czasem wystarczy ktoś zaufany, kto pomoże.",
	},
	sections: [
		{
			id: "section-offer",
			type: "one",
			title: "Oferta",
			img: sectionOneImg,
			heading: "Oferuję wsparcie domowe i pomoc osobom starszym:",
			list: [
				"sprzątanie i mycie okien",
				"porządkowanie mieszkania",
				"drobne naprawy domowe",
				"pomoc przy zakupach",
				"organizację dokumentów",
			],
		},
		{
			id: "section-offer-cont",
			type: "two",
			title: "Spokojna głowa dla Ciebie i Twoich bliskich.",
			text: "Bez pośpiechu. Bez oceniania. To nie jest opieka medyczna To zwykła, ludzka pomoc.",
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
			<div className="container">
				<div className="topStripe"></div>
				<Navigation />
			</div>

			<ServicePage data={seniorData} />

			<Footer />
		</>
  )
}
