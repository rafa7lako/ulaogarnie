import React from "react";
import "./ContactPage.css";
import pricingImgGarden from "../assets/pricing-imgs/pricing-img-garden.png";
import pricingImgSenior from "../assets/pricing-imgs/pricing-img-senior.png";
import pricingImgMemorial from "../assets/pricing-imgs/pricing-img-memorial.png";
import { ServicePageSectionThree } from "../components/SubsiteContent/ServicePageSectionThree";
import contactWomanImg from "../assets/contactWomanImg.png";
import { SectionHeader } from "../components/SectionHeader.jsx";

export const ContactPage = () => {
	return (
		<div>
			<ServicePageSectionThree
				title={"Porozmawiajmy o szczegółach!"}
				text={"Skontaktuj się i umów wycenę."}
				phone={"+48 725 116 511"}
				email={"u.jendral@gmail.com"}
				img={contactWomanImg}
			/>
			<div>
				<SectionHeader title={"Oferta"} theme="dark" />
				<div className="contactColumnRow">
					<div className="contactColumn">
						<img
							src={pricingImgGarden}
							alt="Kobieta przycinająca rośliny w ogrodzie"
							className="contactColumnImg"
						/>
						<h3>Pielęgnacja zieleni</h3>
						<ul>
							<li>Koszenie i nawożenie trawnika</li>
							<li>Przycinanie krzewów i żywopłotów</li>
							<li>Nasadzanie roślin</li>
							<li>Porządki sezonowe</li>
						</ul>
						<div className="contactColumnPrice">
							<span className="contactColumnPriceLabel">Cena</span>
							<span className="contactColumnPriceValue">
								Wycena indywidualna
							</span>
						</div>
					</div>

					<div className="contactColumn">
						<img
							src={pricingImgMemorial}
							alt="Kobieta układająca kwiaty i sprzątająca nagrobek na cmentarzu"
							className="contactColumnImg"
						/>
						<h3>Opieka nad miejscami pamięci</h3>
						<ul>
							<li>Sprzątanie i czyszczenie nagrobków</li>
							<li>Sezonowe kwiaty i znicze</li>
							<li>Przygotowanie grobu na święta</li>
							<li>Roczne pakiety opieki</li>
						</ul>
						<div className="contactColumnPrice">
							<span className="contactColumnPriceLabel">Cena</span>
							<span className="contactColumnPriceValue">od 199 zł</span>
						</div>
					</div>

					<div className="contactColumn">
						<img
							src={pricingImgSenior}
							alt="Kobieta pomagająca starszej pani w przeglądaniu dokumentów w kuchni"
							className="contactColumnImg"
						/>
						<h3>Pomoc w domu i dla seniorów</h3>
						<ul>
							<li>Sprzątanie mieszkań i domów</li>
							<li>Drobne naprawy domowe</li>
							<li>Pomoc przy zakupach</li>
							<li>Zmycie podłóg</li>
							<li>Ścieranie kurzu</li>
							<li>Porządki w łazience / kuchni</li>
							<li>Wymiana żarówek, drobne usługi</li>
							<li>Układanie dokumentów</li>
							<li>Skręcanie mebli</li>
							<li>Dokręcanie klamek, regulowanie drzwiczek w szafkach</li>
						</ul>
						<div className="contactColumnPrice">
							<span className="contactColumnPriceLabel">Cena</span>
							<span className="contactColumnPriceValue">45 zł / godz.</span>
							<span className="contactColumnPriceNote">
								mycie okien od 35 zł / sztuka (okno standard)
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
