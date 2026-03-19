import './ServicePageSectionOne.css'

export const ServicePageSectionOne = ({ title, img, heading, list }) => {
	return (
		<section className="sectionOne__sub flex">
			<div className="flexRow headingTwoGroup">
				<div className="fadeLine fadeLineLeftDark"></div>
				<h2 className="headingTwo">{title}</h2>
				<div className="fadeLine fadeLineRightDark"></div>
			</div>

			<div className="flex gardenSubsection">
				<img className="sectionOneImg" src={img} alt="" />

				<div className="flex gardenSubsection__text">
					<h3 className="gardenSubHeadingTwo">{heading}</h3>

					<ul className="gardenSubList">
						{list.map((item, i) => (
							<li key={i}>✔ {item}</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
};