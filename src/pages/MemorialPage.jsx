import React from "react";

import sectionOneImg from "../assets/memorial-imgs/memorial__img-one.jpg";
import sectionTwoImg1 from "../assets/memorial-imgs/memorial__img-two.jpg";
import sectionTwoImg2 from "../assets/memorial-imgs/memorial__img-three.jpg";
import sectionTwoImg3 from "../assets/memorial-imgs/memorial__img-four.jpg";
import contactWomanImg from "../assets/contactWomanImg.png";
import { ServicePage } from "../components/SubsiteContent/ServicePage.jsx";
import heroImage from "../assets/friedhoff.png";

const memorialData = {
	headerSection: {
		bgImage: heroImage,
		title: "Nie możesz być na miejscu? Ja będę.",
		subText: "Opieka nad grobem to nie tylko porządek — to pamięć i szacunek.",
	},
	sections: [
		{
			id: "section-offer",
			type: "one",
			title: "Oferta",
			img: sectionOneImg,
			heading: "Oferuję:",
			list: [
				"sprzątanie i czyszczenie nagrobków",
				"usuwanie chwastów",
				"sezonowe kwiaty i kompozycje",
				"przygotowanie grobu przed świętami",
				"raport zdjęciowy po każdej wizycie",
			],
		},
		{
			id: "section-offer-cont",
			type: "two",
			title: "Spokojnie. Rzetelnie. Z troską.",
			text: "Pracuję terminowo, dokładnie i bez chaosu. Każde zlecenie wyceniam uczciwie i indywidualnie.",
			images: [sectionTwoImg3, sectionTwoImg1, sectionTwoImg2],
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

export const MemorialPage = () => {
	return (
		<>
			<ServicePage data={memorialData} />
		</>
	);
};
