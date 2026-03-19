import React from "react";
import "./SectionTwo.css";
import imgOne from '../assets/garden-imgs/garden__img-one.jpeg'
import imgTwo from '../assets/garden-imgs/garden__img-two.jpeg'

export const SectionTwo = () => {
	return (
		<section className="sectionTwo__home flexColumn">
			<div className="flexRow">
				<div className="fadeLine fadeLineLeft"></div>
				<h2 className="headingTwo">Doświadczenie</h2>
				<div className="fadeLine fadeLineRight"></div>
			</div>
			<div className="sectionTwoContainer__home flex">
				<div className="photoCollage">
          <img className="sectionTwoImg__home sectionTwoImg1" src={imgOne} alt="" />
          <img className="sectionTwoImg__home sectionTwoImg2" src={imgTwo} alt="" />
          <img className="sectionTwoImg__home sectionTwoImg3" src={imgTwo} alt="" />
          <img className="sectionTwoImg__home sectionTwoImg4" src={imgTwo} alt="" />
        </div>
				<div className="sectionTwoText">
					<p>
						Mam doświadczenie w pracy przy pielęgnacji zieleni, opiece nad
						grobami oraz wsparciu w codziennych obowiązkach domowych. To nie są
						dla mnie przypadkowe zlecenia — każdą z tych rzeczy robię
						regularnie, z naciskiem na dokładność, porządek i realny efekt
						końcowy. <br/><br/>Pracując przy ogrodach, wiem, jak utrzymać zieleń w dobrej
						formie przez cały sezon. Przy opiece nad grobami dbam nie tylko o
						czystość, ale też o estetykę i szacunek miejsca. W pracy z klientami
						indywidualnymi i seniorami najważniejsze jest dla mnie zaufanie,
						spokój i konkretne podejście do powierzonych zadań. <br/><br/> Nie działam
						schematycznie — dopasowuję zakres pracy do sytuacji i potrzeb.
						Dzięki temu wszystko jest zrobione tak, jak powinno być: rzetelnie,
						terminowo i bez chaosu.
					</p>
				</div>
			</div>
		</section>
	);
};
