import React from "react";

import sectionOneImg from "../assets/senior-imgs/senior-thumbsup.jpg";
import sectionTwoImg1 from "../assets/senior-imgs/floor-cleaning.jpg";
import sectionTwoImg2 from "../assets/senior-imgs/furniture-assembly.jpg";
import sectionTwoImg3 from "../assets/senior-imgs/shopping.jpg";
import contactWomanImg from "../assets/contactWomanImg.png";
import { ServicePage } from "../components/SubsiteContent/ServicePage.jsx";
import heroImage from "../assets/granmaRoom.jpg";

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
			alt: "Ilustracja uśmiechniętego starszego mężczyzny pokazującego kciuk w górę w przytulnym, tradycyjnie urządzonym salonie z kredensem, fotelami i skrzynką narzędzi na stole.",
			heading: "Oferuję wsparcie w domu oraz pomoc dla osób starszych:",
			list: [
				"sprzątanie mieszkań i domów",
				"drobne naprawy domowe",
				"pomoc przy zakupach",
				"zmycie podłóg",
				"ścieranie kurzu",
				"porządki w łazience / kuchni",
				"wymiana żarówek, drobne usługi",
				"układanie dokumentów",
				"skręcanie mebli",
				"dokręcanie klamek, regulowanie drzwiczek w szafkach",
			],
		},
		{
			id: "section-offer-cont",
			type: "two",
			title: "Spokojna głowa dla Ciebie i Twoich bliskich.",
			text: "Bez pośpiechu, bez stresu. To nie opieka medyczna — to zwykła, życzliwa pomoc na co dzień. Każde zlecenie wyceniam uczciwie i indywidualnie.",
			images: [sectionTwoImg1, sectionTwoImg2, sectionTwoImg3],
			alts: [
				"Mop z zieloną rączką, pomarańczowe wiadro z różową ścierką oraz butelki ze środkami czyszczącymi na podłodze z jasnych kafelków przy przeszklonej ścianie.",
				"Dłonie montujące drewnianą ramę mebla za pomocą klucza imbusowego.",
				"Torby bawełniane i siatka wypełnione świeżymi warzywami - porem, papryką, pomidorami, ogórkiem - oraz bagietką, ustawione na kuchennym blacie.",
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

export const SeniorPage = () => {
	return (
		<>
			<ServicePage data={seniorData} />
		</>
	);
};
